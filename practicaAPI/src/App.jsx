import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App

import { useState, useEffect } from 'react';
import './App.css';
function App() {
// Estados indispensables
const [personajes, setPersonajes] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
// Función asíncrona para consumir la API
const obtenerDatos = async () => {
try {
const respuesta = await fetch('https://api.disneyapi.dev/character');
if (!respuesta.ok) {
throw new Error('No se pudo conectar con el servidor de la API');
}

const datos = await respuesta.json();
setPersonajes(datos.data.slice(0, 15)); // Guardamos solo los primeros 8 personajes
setCargando(false); // Apagamos el estado de carga
} catch (err) {
setError(err.message);
setCargando(false);
}
};
obtenerDatos();
}, []); // [] asegura que solo se ejecute al cargar la página

if (cargando) return <div className="pantalla-estado">Descargando datos del multiverso...</div>;
if (error) return <div className="pantalla-estado error"> Error: {error}</div>;
return (
<div className="container">
<header>
<h1>Rick & Morty Explorer</h1>
<p>Consumiendo datos reales desde una API REST</p>
</header>

{/* Renderizado de Tarjetas Dinámicas */}
<div className="grid-personajes">
{personajes.map((personaje) => (
<div key={personaje._id} className="card">
<img src={personaje.image} alt={personaje.name} />
<div className="card-info">
<h3>{personaje.name}</h3>
<p>
<span className={`status-dot ${personaje.status.toLowerCase()}`}></span>
{personaje.status}- {personaje.species}
</p>
<small>Última ubicación conocida:</small>
<p className="location">{personaje.location.name}</p>
</div>
</div>
))}
</div>
</div>
);
}
export default App;
