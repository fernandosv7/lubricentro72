import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { whatsappNumber } from '../lib/config'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lubricentro 72</title>
        <meta name="description" content="Landing Lubricentro 72" />
      </Head>

      {/* =========  HERO  ========= */}
      <header className="relative h-screen bg-slate-700">
        {/* Capa oscura para simular la foto ↙️  */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* NAV */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 py-6">
          {/* logo placeholder */}
          <div className="h-10 w-32 bg-yellow-400 rounded" />
          {/* links */}
          <ul className="hidden md:flex gap-10 text-white font-dm text-lg">
            <li className="relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-yellow-400">
              Home
            </li>
            <li className="hover:text-yellow-400 transition">Servicios</li>
            <li className="hover:text-yellow-400 transition">Nosotros</li>
            <li className="hover:text-yellow-400 transition">Contacto</li>
          </ul>
        </nav>

        {/* CONTENIDO HERO */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 max-w-xl text-white">
          <h1 className="font-cal text-6xl md:text-7xl leading-tight mb-6">
            ¿Necesitás<br />un service?
          </h1>
          <p className="text-xl mb-10 font-dm">
            Con las mejores marcas.
          </p>

          {/* Botones */}
          <div className="flex gap-6">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="bg-yellow-400 text-black font-semibold rounded-full px-8 py-3 shadow-lg hover:brightness-110 transition"
            >
              Hablar por WhatsApp
            </a>
            <button className="bg-white/50 text-white backdrop-blur-md rounded-full px-8 py-3">
              Sólo consultar
            </button>
          </div>
        </div>

        {/* ONDA separadora */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1F5F9" d="M0,100 C360,0 1080,200 1440,100 L1440,0 L0,0 Z" />
          </svg>
        </div>
      </header>

      {/* =========  SERVICIOS  ========= */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-cal mb-12">Nuestros servicios</h2>
          {/* Tarjetas dummy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl shadow-card-light h-56 flex items-center justify-center text-xl font-cal"
              >
                Card {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========  NOSOTROS  ========= */}
      <section className="bg-slate-200 py-20 text-center">
        <h2 className="text-3xl font-cal mb-6">Nuestra historia</h2>
        <p className="max-w-2xl mx-auto font-dm">
          Texto placeholder — contaremos que estamos desde 1984, etc.
        </p>
      </section>

      {/* =========  TESTIMONIOS  ========= */}
      <section className="bg-slate-300 py-20 text-center">
        <h2 className="text-3xl font-cal mb-6">Testimonios</h2>
        <p className="italic">Aquí irán las 10 últimas reseñas de Google.</p>
      </section>

      {/* =========  MAPA  ========= */}
      <section className="bg-slate-400 py-20 text-center">
        <h2 className="text-3xl font-cal mb-6">Dónde encontrarnos</h2>
        <div className="h-64 max-w-3xl mx-auto bg-slate-500 rounded-xl" />
      </section>

      {/* =========  FOOTER  ========= */}
      <footer className="bg-black text-white py-10 text-center">
        <p>© 2025 Lubricentro 72 — La Plata</p>
      </footer>
    </>
  )
}
