'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Phone, Mail, Award, CheckCircle, ArrowRight, Shield, Globe, Send, X, Compass, Loader2 } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Configurar el token de Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function DirectorioClient() {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados de filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Todos');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [availableCities, setAvailableCities] = useState([]);

  // Geolocalización
  const [userCoords, setUserCoords] = useState(null);
  const [geoLoading, setGeoLoading] = useState(false);

  // Modal de Presupuesto
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteError, setQuoteError] = useState(null);

  // 1. Cargar empresas desde el API público
  useEffect(() => {
    async function fetchCompanies() {
      try {
        const res = await fetch('https://glassy.es/api/marketing/public-directory');
        if (!res.ok) throw new Error('Error al conectar con el directorio de Glassy.');
        const data = await res.json();
        setCompanies(data);
        setFilteredCompanies(data);

        // Extraer ciudades únicas basadas en publicAddress
        const cities = data.map(c => {
          if (!c.publicAddress) return null;
          const parts = c.publicAddress.split(',');
          // Tomamos la última o penúltima parte antes del país como la ciudad
          const cityPart = parts[parts.length - 1]?.trim() || '';
          return cityPart;
        }).filter(Boolean);

        setAvailableCities(['Todas', ...new Set(cities)]);
      } catch (err) {
        console.error('Error fetching directory:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCompanies();
  }, []);

  // 2. Inicializar Mapa de Mapbox
  useEffect(() => {
    if (!mapContainer.current) return;

    // Inicializar mapa centrado en España por defecto
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-3.703790, 40.416775],
      zoom: 5,
      cooperativeGestures: true // Permite scroll en móvil sin bloquear la página
    });

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'bottom-right');
    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, []);

  // 3. Filtrar empresas en tiempo real
  useEffect(() => {
    let result = companies;

    // Filtro por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(c => 
        c.name.toLowerCase().includes(term) || 
        c.publicDescription?.toLowerCase().includes(term) ||
        c.publicAddress?.toLowerCase().includes(term)
      );
    }

    // Filtro por país
    if (selectedCountry !== 'Todos') {
      result = result.filter(c => (c.country || 'España').toLowerCase() === selectedCountry.toLowerCase());
    }

    // Filtro por ciudad
    if (selectedCity !== 'Todas') {
      result = result.filter(c => c.publicAddress?.toLowerCase().includes(selectedCity.toLowerCase()));
    }

    setFilteredCompanies(result);
  }, [searchTerm, selectedCountry, selectedCity, companies]);

  // 4. Actualizar marcadores en el mapa cuando cambie la lista filtrada
  useEffect(() => {
    if (!mapRef.current) return;

    // Limpiar marcadores anteriores
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    const map = mapRef.current;

    // Si hay empresas filtradas, ajustar la vista para encuadrarlas todas
    if (filteredCompanies.length > 0) {
      const bounds = new mapboxgl.LngLatBounds();
      let hasValidCoords = false;

      filteredCompanies.forEach(company => {
        if (company.location?.coordinates && company.location.coordinates.length === 2) {
          const coords = company.location.coordinates;
          bounds.extend(coords);
          hasValidCoords = true;

          // Crear elemento HTML personalizado para el marcador con su logo
          const el = document.createElement('div');
          el.className = 'cursor-pointer group relative';
          el.style.width = '48px';
          el.style.height = '48px';

          // Estructura interna del marcador con el logo de la empresa o inicial
          const logoContent = company.logo 
            ? `<img src="${company.logo}" alt="${company.name}" class="w-full h-full object-cover rounded-full" />`
            : `<span class="text-white font-extrabold text-sm uppercase">${company.name.charAt(0)}</span>`;

          el.innerHTML = `
            <div class="w-12 h-12 rounded-full border-4 border-white bg-[#635bff] shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-300 transform group-hover:scale-110 group-hover:bg-[#0a2540]">
              ${logoContent}
            </div>
            <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100 shadow-md"></div>
          `;

          // Evento de click para enfocar la card
          el.addEventListener('click', () => {
            map.flyTo({ center: coords, zoom: 12, speed: 0.8 });
          });

          // Popup detallado con botón de solicitud de presupuesto
          const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
            .setHTML(`
              <div class="p-3 font-['Figtree'] max-w-[240px]">
                <div class="flex items-center gap-2 mb-2">
                  ${company.logo ? `<img src="${company.logo}" class="w-8 h-8 rounded-full object-cover border" />` : `<div class="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-xs text-[#635bff]">${company.name.charAt(0)}</div>`}
                  <div>
                    <h4 class="font-bold text-sm text-[#0a2540] m-0 leading-tight">${company.name}</h4>
                    <span class="text-[10px] text-gray-400 font-medium">${company.publicAddress || ''}</span>
                  </div>
                </div>
                <p class="text-xs text-[#697386] line-clamp-2 mb-3">${company.publicDescription || 'Servicios profesionales'}</p>
                <button 
                  onclick="window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: { id: '${company._id}', name: '${company.name}' } }))"
                  class="w-full bg-[#635bff] text-white py-1.5 px-3 rounded-lg text-xs font-bold hover:bg-[#0a2540] transition-colors cursor-pointer"
                >
                  Solicitar Presupuesto
                </button>
              </div>
            `);

          const marker = new mapboxgl.Marker(el)
            .setLngLat(coords)
            .setPopup(popup)
            .addTo(map);

          markersRef.current.push(marker);
        }
      });

      if (hasValidCoords && filteredCompanies.length > 1) {
        map.fitBounds(bounds, { padding: 80, maxZoom: 14 });
      } else if (hasValidCoords && filteredCompanies.length === 1) {
        map.flyTo({ center: filteredCompanies[0].location.coordinates, zoom: 12 });
      }
    }
  }, [filteredCompanies]);

  // Capturar evento del popup para abrir el modal
  useEffect(() => {
    const handleOpenModal = (e) => {
      const company = companies.find(c => c._id === e.detail.id);
      if (company) {
        setSelectedCompany(company);
        setQuoteSuccess(false);
        setQuoteError(null);
      }
    };
    window.addEventListener('open-quote-modal', handleOpenModal);
    return () => window.removeEventListener('open-quote-modal', handleOpenModal);
  }, [companies]);

  // 5. Geolocalización del usuario
  const handleGeolocate = () => {
    if (!navigator.geolocation) {
      alert('La geolocalización no está soportada por tu navegador.');
      return;
    }

    setGeoLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setUserCoords([longitude, latitude]);
        setGeoLoading(false);

        if (mapRef.current) {
          // Centrar mapa en la ubicación del usuario
          mapRef.current.flyTo({
            center: [longitude, latitude],
            zoom: 11,
            speed: 1.2
          });

          // Poner marcador temporal del usuario
          const el = document.createElement('div');
          el.innerHTML = `
            <div class="relative flex items-center justify-center">
              <div class="absolute w-8 h-8 bg-emerald-500/30 rounded-full animate-ping"></div>
              <div class="w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-lg relative z-10"></div>
            </div>
          `;
          new mapboxgl.Marker(el)
            .setLngLat([longitude, latitude])
            .addTo(mapRef.current);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setGeoLoading(false);
        alert('No se pudo obtener tu ubicación. Por favor activa los permisos de ubicación en tu navegador.');
      },
      { enableHighAccuracy: true }
    );
  };

  // 6. Envío de formulario de presupuesto al Backend
  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteSubmitting(true);
    setQuoteError(null);

    try {
      const res = await fetch('https://glassy.es/api/marketing/request-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tenantId: selectedCompany._id,
          name: quoteFormData.name,
          email: quoteFormData.email,
          phone: quoteFormData.phone,
          description: quoteFormData.description
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error al enviar la solicitud.');

      setQuoteSuccess(true);
      setQuoteFormData({ name: '', email: '', phone: '', description: '' });
    } catch (err) {
      setQuoteError(err.message);
    } finally {
      setQuoteSubmitting(false);
    }
  };

  const focusOnCompany = (company) => {
    if (company.location?.coordinates && mapRef.current) {
      mapRef.current.flyTo({
        center: company.location.coordinates,
        zoom: 14,
        speed: 1.2
      });
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Hero Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#635bff] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-4">
          <Award size={13} /> Directorio de Proveedores Oficiales
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a2540] tracking-tight mb-4">
          Encuentra profesionales de limpieza cerca de ti
        </h1>
        <p className="text-[#697386] text-lg max-w-2xl mx-auto font-medium">
          Conecta con empresas de limpieza de cristales y servicios generales que utilizan la tecnología inteligente de Glassy para garantizar la máxima calidad.
        </p>
      </div>

      {/* Control Panel: Buscador & Filtros */}
      <div className="bg-white rounded-3xl border border-[#e3e8ee] shadow-sm p-6 mb-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Campo de búsqueda */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar por nombre, palabra clave o dirección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-[#f6f9fc] border border-[#e3e8ee] rounded-2xl outline-none focus:border-[#635bff] focus:bg-white font-medium text-[#0a2540] text-sm transition-all"
            />
          </div>

          {/* Filtro País */}
          <div className="md:col-span-3">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full px-4 py-3.5 bg-[#f6f9fc] border border-[#e3e8ee] rounded-2xl outline-none focus:border-[#635bff] focus:bg-white font-bold text-[#0a2540] text-sm transition-all appearance-none cursor-pointer"
            >
              <option value="Todos">País: Todos</option>
              <option value="España">España</option>
              <option value="Portugal">Portugal</option>
            </select>
          </div>

          {/* Filtro Ciudad */}
          <div className="md:col-span-3">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3.5 bg-[#f6f9fc] border border-[#e3e8ee] rounded-2xl outline-none focus:border-[#635bff] focus:bg-white font-bold text-[#0a2540] text-sm transition-all appearance-none cursor-pointer"
            >
              <option value="Todas">Ciudad: Todas</option>
              {availableCities.filter(c => c !== 'Todas').map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Botón Geolocalización */}
          <div className="md:col-span-1">
            <button
              onClick={handleGeolocate}
              disabled={geoLoading}
              title="Centrar en mi ubicación"
              className="w-full h-full flex items-center justify-center bg-indigo-50 border border-indigo-100 hover:bg-[#635bff] hover:text-white text-[#635bff] py-3.5 rounded-2xl transition-all cursor-pointer disabled:opacity-50"
            >
              {geoLoading ? <Loader2 className="animate-spin" size={18} /> : <Compass size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area: Directorio + Mapa */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Listado de empresas */}
        <div className="lg:col-span-5 order-2 lg:order-1 space-y-4 max-h-[700px] overflow-y-auto pr-2">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
              {filteredCompanies.length} empresas encontradas
            </span>
          </div>

          {loading ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#e3e8ee] flex flex-col items-center justify-center gap-3">
              <Loader2 className="animate-spin text-[#635bff]" size={36} />
              <p className="text-sm font-bold text-[#697386]">Cargando directorio de profesionales...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center bg-rose-50 border border-rose-100 rounded-3xl text-rose-800 text-sm font-bold">
              {error}
            </div>
          ) : filteredCompanies.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-[#e3e8ee] p-8">
              <p className="text-lg font-bold text-[#0a2540] mb-2">No se encontraron empresas</p>
              <p className="text-sm text-[#697386]">Prueba modificando tus filtros o buscando en otra ubicación.</p>
            </div>
          ) : (
            filteredCompanies.map(company => (
              <div
                key={company._id}
                onClick={() => focusOnCompany(company)}
                className="bg-white rounded-3xl border border-[#e3e8ee] hover:border-[#635bff] shadow-sm hover:shadow-md p-5 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      {company.logo ? (
                        <img src={company.logo} alt={company.name} className="w-12 h-12 object-cover rounded-full border border-gray-100" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-[#635bff]">
                          {company.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-extrabold text-[#0a2540] tracking-tight group-hover:text-[#635bff] transition-colors">{company.name}</h3>
                          {company.verifiedStamp && (
                            <CheckCircle size={16} className="text-emerald-500 fill-emerald-50" title="Empresa Verificada" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-400 font-bold mt-0.5">
                          <MapPin size={12} /> {company.publicAddress || 'Dirección sin especificar'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#697386] text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                    {company.publicDescription || 'Empresa proveedora de servicios profesionales de limpieza e higiene. Especializados en mantenimiento y soluciones corporativas y particulares.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-50 flex items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {company.publicPhone && (
                      <a
                        href={`tel:${company.publicPhone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-gray-50 hover:bg-[#635bff] text-gray-500 hover:text-white rounded-xl transition-all"
                        title="Llamar por teléfono"
                      >
                        <Phone size={14} />
                      </a>
                    )}
                    {company.publicEmail && (
                      <a
                        href={`mailto:${company.publicEmail}`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-gray-50 hover:bg-[#635bff] text-gray-500 hover:text-white rounded-xl transition-all"
                        title="Enviar correo electrónico"
                      >
                        <Mail size={14} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCompany(company);
                      setQuoteSuccess(false);
                      setQuoteError(null);
                    }}
                    className="bg-[#635bff] hover:bg-[#0a2540] text-white py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    Solicitar Presupuesto <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Mapa interactivo */}
        <div className="lg:col-span-7 order-1 lg:order-2 h-[450px] lg:h-[700px] sticky top-24 rounded-[35px] overflow-hidden border border-[#e3e8ee] shadow-sm bg-gray-100">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      </div>

      {/* Modal de Solicitud de Presupuesto */}
      {selectedCompany && (
        <div className="fixed inset-0 bg-[#0a2540]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] border border-[#e3e8ee] shadow-2xl max-w-lg w-full overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            {/* Cabecera del Modal */}
            <div className="px-8 pt-8 pb-4 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 text-[#635bff] mb-1">
                  <Shield size={14} />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest">Solicitud Segura</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#0a2540] tracking-tight">
                  Presupuesto con {selectedCompany.name}
                </h2>
                <p className="text-xs text-[#697386] font-medium mt-1">
                  Tu solicitud se enviará de forma inmediata al equipo técnico de la empresa.
                </p>
              </div>
              <button
                onClick={() => setSelectedCompany(null)}
                className="p-2 hover:bg-gray-100 text-gray-400 hover:text-gray-600 rounded-full transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-8 pt-4">
              {quoteSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500 border border-emerald-100">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a2540] mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-sm text-[#697386] font-medium mb-6 max-w-sm mx-auto">
                    Tu mensaje ha sido enviado correctamente por correo a {selectedCompany.name}. Se pondrán en contacto contigo en breve.
                  </p>
                  <button
                    onClick={() => setSelectedCompany(null)}
                    className="bg-[#0a2540] text-white py-3 px-8 rounded-xl text-sm font-bold hover:bg-[#635bff] transition-colors cursor-pointer"
                  >
                    Entendido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  {quoteError && (
                    <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-xs text-rose-800 font-bold">
                      {quoteError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-[#697386] uppercase tracking-widest ml-1">Tu Nombre</label>
                      <input
                        type="text"
                        required
                        value={quoteFormData.name}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, name: e.target.value })}
                        placeholder="Ej: Juan Pérez"
                        className="w-full px-4 py-3 bg-[#f6f9fc] border border-[#e3e8ee] rounded-xl outline-none focus:border-[#635bff] focus:bg-white text-[#0a2540] text-sm font-semibold transition-all"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-[#697386] uppercase tracking-widest ml-1">Teléfono</label>
                      <input
                        type="tel"
                        value={quoteFormData.phone}
                        onChange={(e) => setQuoteFormData({ ...quoteFormData, phone: e.target.value })}
                        placeholder="Opcional"
                        className="w-full px-4 py-3 bg-[#f6f9fc] border border-[#e3e8ee] rounded-xl outline-none focus:border-[#635bff] focus:bg-white text-[#0a2540] text-sm font-semibold transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#697386] uppercase tracking-widest ml-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      value={quoteFormData.email}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, email: e.target.value })}
                      placeholder="juan@correo.com"
                      className="w-full px-4 py-3 bg-[#f6f9fc] border border-[#e3e8ee] rounded-xl outline-none focus:border-[#635bff] focus:bg-white text-[#0a2540] text-sm font-semibold transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#697386] uppercase tracking-widest ml-1">Descripción del Servicio</label>
                    <textarea
                      required
                      rows={4}
                      value={quoteFormData.description}
                      onChange={(e) => setQuoteFormData({ ...quoteFormData, description: e.target.value })}
                      placeholder="Describe qué necesitas (ej: limpieza de cristales de oficina de 3 plantas en Madrid)..."
                      className="w-full px-4 py-3 bg-[#f6f9fc] border border-[#e3e8ee] rounded-xl outline-none focus:border-[#635bff] focus:bg-white text-[#0a2540] text-sm font-semibold transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={quoteSubmitting}
                    className="w-full bg-[#635bff] hover:bg-[#0a2540] text-white py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-md mt-6"
                  >
                    {quoteSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={16} /> Enviando solicitud...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
