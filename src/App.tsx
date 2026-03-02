/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChefHat, 
  Globe, 
  Utensils, 
  Menu, 
  X, 
  Instagram,
  Facebook,
  ChevronRight
} from 'lucide-react';
import CuisinesPage from './CuisinesPage';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'cuisines'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = {
    primary: '#E58B88', // The dusty rose from the PDF
    primaryHover: '#D47A77',
    text: '#2D3748',
    lightBg: '#FFF5F5'
  };

  if (currentPage === 'cuisines') {
    return <CuisinesPage onBack={() => {
      setCurrentPage('home');
      window.scrollTo(0, 0);
    }} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-[#E58B88] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-[#E58B88]" />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-widest uppercase leading-none text-[#E58B88]">
                  INVITA
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Inicio', 'Sobre Mí', 'Catering', 'Menú', 'Galería', 'Contacto'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium tracking-wide uppercase hover:text-[#E58B88] transition-colors text-gray-700"
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/delicias_de_la_chef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E58B88] transition-colors text-gray-700"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/18ETQUqdYj/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E58B88] transition-colors text-gray-700"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-center">
              {['Inicio', 'Sobre Mí', 'Catering', 'Menú', 'Galería', 'Contacto'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-serif text-gray-800 hover:text-[#E58B88]"
                >
                  {item}
                </a>
              ))}
              <div className="flex justify-center gap-6 pt-4">
                <a 
                  href="https://www.instagram.com/delicias_de_la_chef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-[#E58B88]"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/18ETQUqdYj/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:text-[#E58B88]"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FFF5F5]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.15]" style={{ 
            backgroundImage: `radial-gradient(#E58B88 2px, transparent 2px)`, 
            backgroundSize: '30px 30px' 
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF5F5]/50 to-[#FFF5F5]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <img 
              src="https://i.postimg.cc/4yQMzxWk/Whats-App-Image-2026-01-06-at-17-57-36.jpg" 
              alt="Invita Logo" 
              className="w-64 md:w-80 h-auto object-contain mb-8 rounded-2xl shadow-xl border-4 border-white"
            />
            <h2 className="text-[#E58B88] font-serif italic text-xl md:text-2xl mb-4">
              Por la Chef Maria Jose Chaves
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Sabores del Mundo <br/> en tu Mesa
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
              Catering internacional de alta gastronomía para eventos inolvidables. 
              Creamos experiencias culinarias únicas con ingredientes de primera calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <a 
                href="https://wa.me/593996016960" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <Phone className="w-5 h-5" /> Escríbenos por WhatsApp
              </a>
              <a 
                href="#catering" 
                className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium tracking-wide transition-colors shadow-sm"
              >
                Descubrir Servicios
              </a>
              <div className="flex gap-4 sm:ml-2">
                <a 
                  href="https://www.instagram.com/delicias_de_la_chef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#E58B88] hover:bg-[#D47A77] text-white w-14 h-14 rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.facebook.com/share/18ETQUqdYj/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] hover:bg-[#166FE5] text-white w-14 h-14 rounded-full flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-24 bg-[#FFF5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://i.postimg.cc/4xkr9p8J/Whats-App-Image-2026-02-26-at-12-07-29-(5).jpg" 
                  alt="Chef Maria Jose Chaves" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#E58B88] rounded-full opacity-20 blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#E58B88] rounded-full opacity-20 blur-3xl -z-10"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[#E58B88] font-semibold tracking-wider uppercase text-sm mb-3">Nuestra experiencia</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Maria Jose Chaves
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  En Invita Catering y Eventos creemos que la excelencia culinaria nace de la pasión, la técnica y la experiencia.
                </p>
                <p>
                  Nuestra chef fundadora cuenta con más de 20 años de trayectoria en el mundo gastronómico, respaldados por una sólida formación internacional. Es Máster en Artes Culinarias por Le Cordon Bleu Perú y posee un Diplomado en Cocina Mexicana por Le Cordon Bleu, además de múltiples cursos especializados que enriquecen continuamente su propuesta gastronómica.
                </p>
                <p>
                  Esta combinación de alta cocina, sabores auténticos y creatividad se refleja en cada uno de nuestros eventos: desde experiencias corporativas y desayunos ejecutivos hasta celebraciones sociales únicas y memorables.
                </p>
                <p>
                  En Invita Catering y Eventos no solo servimos comida, creamos experiencias que se recuerdan, cuidando cada detalle, cada sabor y cada presentación con el más alto estándar de calidad.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-[#E58B88] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Formación Internacional</h4>
                    <p className="text-sm text-gray-500">Le Cordon Bleu Perú y México</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="w-6 h-6 text-[#E58B88] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Alta Gastronomía</h4>
                    <p className="text-sm text-gray-500">Más de 20 años de trayectoria</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="catering" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h3 className="text-[#E58B88] font-semibold tracking-wider uppercase text-sm mb-3">Nuestros Servicios</h3>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Catering a tu Medida</h2>
            <p className="text-gray-600 text-lg">
              Adaptamos nuestra propuesta culinaria al estilo y necesidades de tu evento, garantizando una experiencia excepcional para ti y tus invitados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Eventos Sociales',
                desc: 'Bodas, bautizos, cumpleaños y celebraciones especiales con menús personalizados.',
                img: 'https://i.postimg.cc/DwktX1C8/Whats-App-Image-2026-02-26-at-12-13-48.jpg'
              },
              {
                title: 'Catering Corporativo',
                desc: 'Coffee breaks, almuerzos ejecutivos y cenas de gala para impresionar a tus clientes.',
                img: 'https://i.postimg.cc/g2FfZ3gf/Whats-App-Image-2026-02-26-at-12-07-29-(3).jpg'
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-serif font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menú" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h3 className="text-[#E58B88] font-semibold tracking-wider uppercase text-sm mb-3">Inspiración Global</h3>
              <h2 className="text-4xl font-serif font-bold mb-4">Un Viaje por el Mundo</h2>
              <p className="text-gray-400 text-lg">
                Una pequeña muestra de los sabores internacionales que podemos llevar a tu evento.
              </p>
            </div>
            <button 
              onClick={() => {
                setCurrentPage('cuisines');
                window.scrollTo(0, 0);
              }}
              className="text-[#E58B88] hover:text-[#D47A77] transition-colors font-medium flex items-center gap-2"
            >
              Ver todos los países y especialidades <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: 'España', dish: 'Paella Mixta', desc: 'Auténtica paella con mariscos frescos y carnes.', img: 'https://i.postimg.cc/x1DWzLsz/Whats-App-Image-2026-02-26-at-12-07-29-(8).jpg' },
              { region: 'Internacional', dish: 'Mesa de Bocaditos', desc: 'Croissants, quiches, crostinis y más delicias.', img: 'https://i.postimg.cc/8zQq6Ly8/Whats-App-Image-2026-02-26-at-12-07-29-(7).jpg' },
              { region: 'Postres', dish: 'Pavlova & Dulces', desc: 'Pavlovas con frutos rojos, mini postres en copa y cupcakes.', img: 'https://i.postimg.cc/wTsCMwQS/Whats-App-Image-2026-02-26-at-12-07-28-(1).jpg' },
              { region: 'América', dish: 'Ceviches y Bolones', desc: 'Sabores tradicionales con un toque gourmet.', img: 'https://i.postimg.cc/8zQq6LyV/Whats-App-Image-2026-02-26-at-12-13-46.jpg' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-xl overflow-hidden aspect-[3/4]"
              >
                <img src={item.img} alt={item.dish} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-[#E58B88] text-xs font-bold tracking-wider uppercase mb-2 block">{item.region}</span>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{item.dish}</h4>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gray-800/50 rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-4">¡Y esto es solo el comienzo!</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contamos con una amplia variedad de platillos, postres y opciones personalizadas para hacer de tu evento algo verdaderamente único.
            </p>
            <a 
              href="https://wa.me/593996016960" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-colors"
            >
              <Phone className="w-5 h-5" /> Escríbenos por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galería" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#E58B88] font-semibold tracking-wider uppercase text-sm mb-3">Nuestro Trabajo</h3>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Galería de Eventos</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un vistazo a las experiencias gastronómicas que hemos creado para nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://iili.io/qfXncBf.jpg',
              'https://iili.io/qfXn7Xs.jpg',
              'https://iili.io/qfXnYLG.jpg',
              'https://iili.io/qfXn5In.jpg',
              'https://iili.io/qfXn0rl.jpg',
              'https://iili.io/qfXnE22.jpg',
              'https://iili.io/qfXnG7S.jpg',
              'https://iili.io/qfXnMk7.jpg',
              'https://iili.io/qfXnVp9.jpg',
              'https://iili.io/qfXnXIe.jpg',
              'https://iili.io/qfXnhhu.jpg',
              'https://iili.io/qfXnjLb.jpg',
              'https://iili.io/qfXnv2V.jpg',
              'https://iili.io/qfXn8YB.jpg',
              'https://iili.io/qfXnSkP.jpg',
              'https://iili.io/qfXnUp1.jpg',
              'https://iili.io/qfXnrTF.jpg',
              'https://iili.io/qfXniCJ.jpg',
              'https://iili.io/qfXnsEv.jpg',
              'https://iili.io/qfXnL4R.jpg',
              'https://iili.io/qfXnZ2p.jpg',
              'https://iili.io/qfXntYN.jpg',
              'https://iili.io/qfXnDvI.jpg',
              'https://iili.io/qfXnbpt.jpg',
              'https://iili.io/qfXnpTX.jpg',
              'https://iili.io/qfXo9Qs.jpg',
              'https://iili.io/qfXoJCG.jpg',
              'https://iili.io/qfXodGf.jpg',
              'https://iili.io/qfXo244.jpg',
              'https://iili.io/qfXoF3l.jpg',
              'https://iili.io/qfXoKa2.jpg',
              'https://iili.io/qfXofvS.jpg',
              'https://iili.io/qfXoCu9.jpg',
              'https://iili.io/qfXonje.jpg',
              'https://iili.io/qfXooZu.jpg',
              'https://iili.io/qfXozCb.jpg',
              'https://iili.io/qfXoIGj.jpg',
              'https://iili.io/qfXoT6x.jpg',
              'https://iili.io/qfXoA3Q.jpg',
              'https://iili.io/qfXoRaV.jpg',
              'https://iili.io/qfXo58B.jpg',
              'https://iili.io/qfXo7yP.jpg',
              'https://iili.io/qfXoau1.jpg',
              'https://iili.io/qfXocwF.jpg',
              'https://iili.io/qfXolZg.jpg',
              'https://iili.io/qfXo1na.jpg',
              'https://iili.io/qfXYMzl.jpg',
              'https://iili.io/qfXYVX2.jpg',
              'https://iili.io/qfXYWsS.jpg',
              'https://iili.io/qfXYhq7.jpg',
              'https://iili.io/qfXYj19.jpg',
              'https://iili.io/qfXYwge.jpg',
              'https://iili.io/qfXYOdu.jpg',
              'https://iili.io/qfXYe5b.jpg',
              'https://iili.io/qfXYkej.jpg',
              'https://iili.io/qfXYvmx.jpg',
              'https://iili.io/qfXYSzQ.jpg',
              'https://iili.io/qfXYUXV.jpg',
              'https://iili.io/qfXYgLB.jpg',
              'https://iili.io/qfXY4qP.jpg',
              'https://iili.io/qfXY611.jpg',
              'https://iili.io/qfXYPrF.jpg',
              'https://iili.io/qfXYsdg.jpg',
              'https://iili.io/qfXYL7a.jpg',
              'https://iili.io/qfXYQkJ.jpg',
              'https://iili.io/qfXYZmv.jpg',
              'https://iili.io/qfXYDIR.jpg',
              'https://iili.io/qfXYbXp.jpg',
              'https://iili.io/qfXYmLN.jpg',
              'https://iili.io/qfXYyBI.jpg',
              'https://iili.io/qfXaHrX.jpg',
              'https://iili.io/qfXad2n.jpg',
              'https://iili.io/qfXa27s.jpg',
              'https://iili.io/qfXa3kG.jpg',
              'https://iili.io/qfXaFpf.jpg',
              'https://iili.io/qfXafI4.jpg',
              'https://iili.io/qfXaqhl.jpg',
              'https://iili.io/qfXaBQ2.jpg',
              'https://iili.io/qfXanBS.jpg',
              'https://iili.io/qfXaoE7.jpg',
              'https://iili.io/qfXax49.jpg',
              'https://iili.io/qfXaI2e.jpg',
              'https://iili.io/qfXaApj.jpg',
              'https://iili.io/qfXaTYu.jpg',
              'https://iili.io/qfXa5Tx.jpg',
              'https://iili.io/qfXa7hQ.jpg',
              'https://iili.io/qfXaYQV.jpg',
              'https://iili.io/qfXacCB.jpg',
              'https://iili.io/qfXalEP.jpg',
              'https://iili.io/qfXaE3F.jpg',
              'https://iili.io/qfXaGYg.jpg',
              'https://iili.io/qfXaMva.jpg',
              'https://iili.io/qfXaVyJ.jpg',
              'https://iili.io/qfXaXTv.jpg',
              'https://iili.io/qfXahjR.jpg',
              'https://iili.io/qfXajQp.jpg',
              'https://iili.io/qfXaNCN.jpg',
              'https://iili.io/qfXaOGI.jpg',
              'https://iili.io/qfXae4t.jpg',
              'https://iili.io/qfXav3X.jpg',
              'https://iili.io/qfXa8an.jpg',
              'https://iili.io/qfXaSvs.jpg',
              'https://iili.io/qfXaUyG.jpg',
              'https://iili.io/qfXaruf.jpg',
              'https://iili.io/qfXa4j4.jpg',
              'https://iili.io/qfXa6Zl.jpg',
              'https://iili.io/qfXain2.jpg',
              'https://iili.io/qfXasGS.jpg',
              'https://iili.io/qfXaL67.jpg',
              'https://iili.io/qfXaZF9.jpg',
              'https://iili.io/qfXatae.jpg',
              'https://iili.io/qfXaD8u.jpg',
              'https://iili.io/qfXabyb.jpg',
              'https://iili.io/qfXapuj.jpg',
              'https://iili.io/qfXaywx.jpg',
              'https://iili.io/qfXcJnV.jpg',
              'https://iili.io/qfXc9ZQ.jpg',
              'https://iili.io/qfXcdMB.jpg',
              'https://iili.io/qfXc26P.jpg',
              'https://iili.io/qfXcFF1.jpg'
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img src={img} alt={`Galería ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <a 
                    href="https://www.instagram.com/delicias_de_la_chef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 hover:bg-white/50"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-[#FFF5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-[#E58B88] p-12 lg:p-16 text-white relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-serif font-bold mb-6">Hablemos de tu evento</h2>
                <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
                  Estamos listos para diseñar el menú perfecto para tu próxima celebración. Contáctanos para más información.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                  <div className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 uppercase tracking-wider mb-1">Teléfono / WhatsApp</p>
                      <p className="text-2xl font-medium">0996016960</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-2xl font-medium">invita@deliciasdelachef.com</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 uppercase tracking-wider mb-1">Ubicación</p>
                      <p className="text-2xl font-medium">La Viña, Tumbaco</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-16 flex justify-center gap-4">
                <a href="https://www.instagram.com/delicias_de_la_chef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/share/18ETQUqdYj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Clients Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-[#E58B88] font-semibold tracking-wider uppercase text-sm mb-3">Confían en Nosotros</h3>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Nuestros Clientes Corporativos</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empresas que han disfrutado de nuestras experiencias gastronómicas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {[
              { name: 'CTL Laser', domain: 'ctllaser.com.ec', directUrl: 'https://iili.io/qfW6bMQ.png' },
              { name: 'Boehringer Ingelheim', domain: 'boehringer-ingelheim.com', directUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Boehringer_Ingelheim_Logo.svg/512px-Boehringer_Ingelheim_Logo.svg.png' },
              { name: 'MSD', domain: 'msd.com', directUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/MSD_logo.svg/512px-MSD_logo.svg.png' },
              { name: 'Metropolitan Touring', domain: 'metropolitan-touring.com', directUrl: null },
              { name: 'Logiztik Alliance', domain: 'logiztikalliance.com', directUrl: null },
              { name: 'Clínica de la Mujer', domain: 'clinicadelamujer.com.ec', directUrl: 'https://iili.io/qfW6Dox.png' },
              { name: 'Oftalmo Salus', domain: 'oftalmosalus.com', directUrl: 'https://iili.io/qfW6Ztj.png' },
              { name: 'Kubiec', domain: 'kubiec.com', directUrl: null }
            ].map((client, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="w-full max-w-[160px] aspect-[3/2] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={client.directUrl || `https://logo.uplead.com/${client.domain}`} 
                  alt={`Logo de ${client.name}`} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to Google Favicon if UpLead fails
                    if (!target.src.includes('gstatic')) {
                      target.src = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${client.domain}&size=256`;
                    } else {
                      // If Google Favicon also fails, show text
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        target.nextElementSibling.classList.remove('hidden');
                      }
                    }
                  }}
                />
                <span className="hidden text-lg font-serif font-bold text-gray-500 text-center leading-tight">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-[#E58B88]" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-widest uppercase leading-none text-white">
                INVITA
              </span>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Delicias de la Chef INVITA. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="https://www.instagram.com/delicias_de_la_chef?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#E58B88] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/share/18ETQUqdYj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#E58B88] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

