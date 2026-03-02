import { motion } from 'motion/react';
import { ChefHat, ArrowLeft } from 'lucide-react';

const cuisines = [
  { country: 'Ecuador', flag: '🇪🇨', desc: 'Sabores tradicionales, ceviches, bolones y lo mejor de nuestra tierra con un toque gourmet.' },
  { country: 'Perú', flag: '🇵🇪', desc: 'Causas, lomo saltado, ají de gallina y la inigualable gastronomía peruana.' },
  { country: 'México', flag: '🇲🇽', desc: 'Tacos auténticos, guacamole, cochinita pibil y el verdadero sabor de México.' },
  { country: 'India', flag: '🇮🇳', desc: 'Currys aromáticos, tikka masala, samosas y especias que despiertan los sentidos.' },
  { country: 'España', flag: '🇪🇸', desc: 'Paellas mixtas, tapas variadas, tortilla española y jamón serrano.' },
  { country: 'Italia', flag: '🇮🇹', desc: 'Pastas artesanales, risottos cremosos, antipastos y la clásica cocina mediterránea.' },
  { country: 'Japón', flag: '🇯🇵', desc: 'Sushi fresco, tatakis, teriyaki y la delicadeza de la comida oriental.' },
  { country: 'Francia', flag: '🇫🇷', desc: 'Quiches, crepes, quesos finos y la elegancia de la alta cocina francesa.' },
  { country: 'Medio Oriente', flag: '🇱🇧', desc: 'Hummus, falafel, shawarma y los sabores exóticos del mundo árabe.' },
  { country: 'Estados Unidos', flag: '🇺🇸', desc: 'Mini hamburguesas gourmet, BBQ ribs, mac & cheese y clásicos americanos.' },
];

export default function CuisinesPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#FFF5F5] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#E58B88] transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Volver al inicio
        </button>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ChefHat className="w-12 h-12 text-[#E58B88]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Nuestras Especialidades Internacionales
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Viaja por el mundo a través de los sabores. Nuestra chef experta domina las técnicas y recetas de las mejores gastronomías del planeta para llevarlas a tu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuisines.map((cuisine, idx) => (
            <motion.div
              key={cuisine.country}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-6xl mb-4">{cuisine.flag}</div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{cuisine.country}</h3>
              <p className="text-gray-600 leading-relaxed">{cuisine.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">¿Buscas algo diferente?</h3>
          <p className="text-gray-600 mb-6">
            Si tienes en mente una temática específica o un país que no está en la lista, ¡cuéntanos! Diseñamos menús 100% personalizados.
          </p>
          <a 
            href="https://wa.me/593996016960" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#E58B88] hover:bg-[#D47A77] text-white px-8 py-3 rounded-full font-medium tracking-wide transition-colors shadow-sm"
          >
            Consultar Menú Personalizado
          </a>
        </div>
      </div>
    </div>
  );
}
