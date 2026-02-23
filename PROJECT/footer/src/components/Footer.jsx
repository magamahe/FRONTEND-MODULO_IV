import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import cencosud from "../assets/cencosud.png";
import link from "../assets/link.png";
import nativa from "../assets/nativa.png";
import rapipago from "../assets/rapipago.png";
import Button from "./Button";

const redes = [
  { id: 1, url: "https://instagram.com", icon: <FaInstagram size={28} /> },
  { id: 2, url: "https://facebook.com", icon: <FaFacebook size={28} /> },
  { id: 3, url: "https://tiktok.com", icon: <FaTiktok size={28} /> },
];

const mediosPago = [
  { id: 1, img: visa, alt: "Visa" },
  { id: 2, img: mastercard, alt: "Mastercard" },
  { id: 3, img: cencosud, alt: "Cencosud" },
  { id: 4, img: link, alt: "Link" },
  { id: 5, img: nativa, alt: "Nativa" },
  { id: 6, img: rapipago, alt: "Rapipago" },
];

const categorias = ["Inicio", "Productos", "Marcas"];
{
  /*se reutiliza del navbar*/
}

function Footer() {
  return (
    <footer className="w-full p-6">
      {/* Parte superior */}
      <div className="flex flex-row justify-between gap-10 max-w-6xl mx-auto w-full">
        {/* Columna 1 */}
        <div className="flex flex-col gap-2 flex-1">
          <h4 className="text-base font-semibold">Seguinos</h4>
          <div className="flex flex-row gap-4">
            {redes.map((red) => (
              <Button
                key={red.id}
                href={red.url}
                icon={red.icon}
                className="transition-all duration-300 hover:scale-110 hover:text-indigo-400 opacity-80 hover:opacity-100"
              />
            ))}
          </div>
        </div>

        {/* Columna 2 */}
        <div className="flex flex-col gap-2 flex-1">
          <h4 className="text-base font-semibold">Categorías</h4>
          <ul className="flex flex-col gap-1">
            {categorias.map((cat, index) => (
              <li key={index}>{cat}</li>
            ))}
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="flex flex-col gap-3 flex-1">
          <h4 className="text-base font-semibold">Contactanos</h4>

          {/* Teléfono - Abre el marcador de llamadas */}
          <a
            href="tel:542617170005"
            className="flex items-center gap-2 transition-all duration-300 hover:text-indigo-400 group"
          >
            <FaPhoneAlt
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <p>542617170005</p>
          </a>

          {/* WhatsApp - Abre chat directo */}
          <a
            href="https://wa.me/542617170005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all duration-300 hover:text-green-500 group"
          >
            <FaWhatsapp
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <p>2617170005</p>
          </a>

          {/* Email - Abre el gestor de correo */}
          <a
            href="mailto:hipermascotasweb@gmail.com"
            className="flex items-center gap-2 transition-all duration-300 hover:text-indigo-400 group"
          >
            <FaEnvelope
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <p className="truncate">hipermascotasweb@gmail.com</p>
          </a>

          {/* Dirección - Abre Google Maps */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Urquiza+1851,+Guaymallén,+Mendoza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-all duration-300 hover:text-indigo-400 group"
          >
            <FaMapMarkerAlt
              size={16}
              className="group-hover:scale-110 transition-transform"
            />
            <p>Urquiza 1851, Guaymallén</p>
          </a>
        </div>

        {/* Columna 4 */}
        <div className="flex flex-col gap-4 flex-1">
          <h4 className="text-base font-semibold">Suscribite al newsletter</h4>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-600 bg-transparent rounded px-3 py-2 text-black focus:outline-none focus:ring-1 focus:ring-white"
            />

            <button
              type="submit"
              className=" bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded transition-all"
            >
              Enviarme
            </button>
          </form>
        </div>

        {/* Columna 5 */}
        <div className="flex flex-col gap-3 flex-1">
          <h4 className="text-base font-semibold">Medios de pago</h4>

          <div className="flex flex-row flex-wrap gap-3 items-center">
            {mediosPago.map((medio) => (
              <img
                key={medio.id}
                src={medio.img}
                alt={medio.alt}
                className="h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        {/* Línea */}
        <div className="w-1/2 h-px bg-gray-400"></div>

        {/* Copyright */}
        <p className="text-xs text-center">
          © 2026 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
