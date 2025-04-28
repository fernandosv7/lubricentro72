import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { whatsappNumber } from '../lib/config'

/*********************************
 * 1. GALERÍAS DE CABECERA
 *********************************/
const mobileGallery = [
  '/images/mobile-1.jpg',
  '/images/mobile-2.jpg',
  '/images/mobile-3.jpg',
]

const desktopGallery = [
  '/images/desktop-1.jpg',
  '/images/desktop-2.jpg',
  '/images/desktop-3.jpg',
]

/*********************************
 * 2. HEADER (responsive + galería)
 *********************************/
function Header() {
  const [index, setIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar ancho de pantalla
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Rotar imagen cada 20 s
  useEffect(() => {
    const id = setInterval(() => {
      const arr = isMobile ? mobileGallery : desktopGallery
      setIndex((prev) => (prev + 1) % arr.length)
    }, 20000)
    return () => clearInterval(id)
  }, [isMobile])

  const bgImage = (isMobile ? mobileGallery : desktopGallery)[index]
  const heroHeight = isMobile ? 'h-[1000px]' : 'h-[800px]'

  return (
    <header
  className={`relative flex flex-col
              items-center md:items-start       /* <-- centro en móvil, izquierda en desktop */
              justify-center text-white
              overflow-hidden w-full ${heroHeight}`}
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Barra superior */}
      <div className="absolute top-4 left-0 right-0 z-30 flex items-center justify-between px-6">

        <Image src="/logo.svg" alt="Lubricentro 72" width={180} height={51} priority />

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10 font-dm text-lg">
          {['Home', 'Servicios', 'Nosotros', 'Contacto'].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="relative hover:text-primary transition">
              {i}
              {i === 'Home' && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />}
            </a>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-20"
          aria-label="Menú"
        >
          <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <nav className="absolute top-20 left-0 right-0 z-10 bg-black/80 backdrop-blur-lg py-8 flex flex-col items-center gap-6 font-dm text-xl md:hidden">
          {['Home', 'Servicios', 'Nosotros', 'Contacto'].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="hover:text-primary transition">
              {i}
            </a>
          ))}
        </nav>
      )}

      {/* Texto principal */}
      <div
  className="relative z-20 mt-28 md:mt-0
             px-6 max-w-xl
             text-center md:text-left        
             md:pl-20"                        
>
        <h1 className="font-cal text-5xl md:text-6xl leading-tight mb-6">
          ¿Necesitás<br />un service?
        </h1>
        <p className="font-dm text-lg md:text-xl mb-10">Con las mejores marcas.</p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="bg-primary text-black font-semibold rounded-full px-8 py-3 shadow-lg hover:brightness-110 transition"
          target="_blank"
        >
          Hablar por WhatsApp
        </a>
      </div>

      
    </header>
  )
}

/*********************************
 * 3. TARJETA DE SERVICIO (flip)
 *********************************/
function ServiceCard({ img, title, description }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="h-56 cursor-pointer" style={{ perspective: '1000px' }} onClick={() => setFlipped(!flipped)}>
      <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <Image src={img} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="absolute inset-0 bg-white rounded-2xl shadow-card-light p-6 flex items-center justify-center text-center font-dm text-sm rotate-y-180 [backface-visibility:hidden]">
          {description}
        </div>
      </div>
    </div>
  )
}

/*********************************
 * 4. COMPONENTE PRINCIPAL
 *********************************/
export default function Landing() {
  const services = [
    {
      title: 'Cambio de aceite',
      img: '/images/aceite.jpg',
      description: 'Reemplazamos el aceite del motor con la viscosidad y marca adecuadas.'
    },
    {
      title: 'Filtros completos',
      img: '/images/filtros.jpg',
      description: 'Sustituimos filtros de aceite, aire, habitáculo y combustible.'
    },
    {
      title: 'Limpieza de radiador',
      img: '/images/radiador.jpg',
      description: 'Eliminamos sedimentos y mejoramos la circulación del refrigerante.'
    },
  ]

  return (
    <>
      <Head>
        <title>Lubricentro 72</title>
        <meta name="description" content="Cambio de aceite y service general en La Plata" />
      </Head>

      <Header />

      {/* SERVICIOS */}
      <section id="servicios" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl font-cal mb-12">Nuestros servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="bg-slate-200 py-20 text-center">
        <h2 className="text-3xl font-cal mb-6">Nuestra historia</h2>
        <p className="max-w-2xl mx-auto font-dm">Desde 1984 en La Plata, ofreciendo servicio responsable y personalizado con las mejores marcas.</p>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="bg-slate-300 py-20 text-center">
        <h2 className="text-3xl font-cal mb-6">Testimonios</h2>
        <p className="italic">Aquí mostraremos las últimas reseñas de Google.</p>
      </section>

      {/* CONTACTO / MAPA */}
      <section id="contacto" className="bg-slate-400 py-20 text-center">
        <h2 className="text-3xl font-cal mb-6">Dónde encontrarnos</h2>
        <div className="h-64 max-w-3xl mx-auto bg-slate-500 rounded-xl" />
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <p className="font-dm">© {new Date().getFullYear()} Lubricentro 72 — La Plata</p>
      </footer>
    </>
  )
}

