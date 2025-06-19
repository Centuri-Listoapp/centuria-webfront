import Image from "next/image";
import Stores from "./components/Stores";

export default function Home() {
  return (
    <>
      <div className="header">
        <Image src="/logo.png" alt="logo" width={120} height={37.03} />
      </div>
      <main>
        <div className="info-section">
          <div className="texts">
            <h1 className="info-title">¡Bienvenido a Centuria!</h1>
            <p className="info-subtitle">Únete a la red de tu candidato</p>
            <p className="info-subtitle">Suma personas a la red</p>
            <Stores />
            <div className="scores">
              <div className="flex flex-col mr-8">
                <h1 className="text-count">10K</h1>
                <span className="font-light">
                  Usuarios han descargado la app
                </span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-count">300</h1>
                <span className="font-light">Candidatos activos</span>
              </div>
            </div>
          </div>
          <div className="app">
            <Image src="/app.png" alt="app" width={350} height={550} />
          </div>
        </div>
        <Stores extraClass="show-mobile" />
        <div className="scores show-mobile">
          <div className="flex flex-col mr-8">
            <h1 className="text-count">10K</h1>
            <span className="font-light">Usuarios han descargado la app</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-count">300</h1>
            <span className="font-light">Candidatos activos</span>
          </div>
        </div>
        <div className="about-section">
          <div className="about-images">
            <div className="images-about">
              <Image
                className="about-img"
                src="/app2.png"
                alt="app"
                width={220}
                height={390}
              />
              <Image
                className="about-img image-2"
                src="/app3.png"
                alt="app"
                width={220}
                height={390}
              />
            </div>
          </div>
          <div className="about-texts">
            <h1 className="title">¿Quiénes somos?</h1>
            <p className="about-text">
              En Centuria creemos que el poder de una red está en su conexión
              real. Por eso, creamos una plataforma que ayuda a personas, grupos
              y organizaciones a construir y visualizar redes de contacto vivas,
              activas y ubicadas en el mundo real. Nuestro enfoque es simple:
              hacer que conectar sea tan natural como interactuar en tu día a
              día.
            </p>
            <p className="about-text">
              Somos un equipo apasionado por la tecnología y el impacto social,
              convencidos de que las redes humanas son clave para el crecimiento
              personal y profesional. Con Centuria, facilitamos la visibilidad,
              la colaboración y el alcance entre personas que comparten
              intereses, metas y territorios. Tu red no solo crece: se activa.
            </p>
          </div>
        </div>
        <div className="section">
          <h1 className="title text-center">Beneficios</h1>
          <p>
            Con Centuria puedes construir y visualizar tu red de contactos de
            forma clara, conectar con personas cercanas, descubrir oportunidades
            de colaboración y potenciar tu alcance local y global en un solo
            lugar.
          </p>
        </div>
        <div className="section">
          <h1 className="title">Datos de contacto</h1>
          <ul className="contact-options">
            <li>
              <Image src="/phone.svg" alt="app" width={18} height={18} />
              <span>+34 623 154 258</span>
            </li>
            <li>
              <Image src="/instagram.svg" alt="app" width={18} height={18} />
              <span>@Centuria100</span>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
