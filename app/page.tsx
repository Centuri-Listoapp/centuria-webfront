import Image from "next/image";
import Stores from "./components/Stores";
import LinkTermsConditions from "./components/LinkTermsConditions";
import HeaderLogin from "./components/button/HeaderLogin";

export default function Home() {
  return (
    <>
      <header className="header">
        <Image src="/logo.png" alt="logo" width={120} height={37.03} />
        <HeaderLogin />
      </header>
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
          <h1 className="title text-center">¿Qué es Centuria?</h1>
          <p>
            <strong>Centuria</strong> es una plataforma de movilización
            electoral inteligente diseñada para reclutar, gestionar y
            multiplicar activistas al servicio de una causa social o política.
          </p>
          <p>
            Integra{" "}
            <strong>Smart Data, Inteligencia Artificial, gamificación</strong> y{" "}
            <strong>análisis territorial</strong> para transformar cada zona
            territorial estratégica en un frente de acción organizado, y a cada
            activista en un agente de impacto real y expansivo.
          </p>
          <p>
            <strong>Centuria</strong> dirige la movilización electoral como una
            operación estratégica, permitiendo medir en tiempo real el
            cumplimiento de metas, el avance territorial y la expansión del
            liderazgo político.
          </p>
        </div>
        <div className="section">
          <h1 className="title text-center">Nuestra misión</h1>
          <p>
            <strong>
              "Que nadie que quiera cambiar su país se quede sin las
              herramientas para hacerlo."
            </strong>
          </p>
          <p>
            Centuria nace con una misión clara y urgente: Empoderar a toda
            persona con el coraje de transformar su país, dándole acceso a las
            herramientas del siglo XXI:{" "}
            <strong>tecnología, datos, estrategia</strong> y
            <strong>comunidad.</strong>
          </p>
          <p>
            Transformamos la <strong>energía social</strong> en{" "}
            <strong>capacidad política real.</strong>
          </p>
        </div>
        <div className="section">
          <h1 className="title text-center">Nuestra visión</h1>
          <p>
            Imaginamos una América Latina donde cualquier ciudadano comprometido
            con una causa pueda construir mayorías, ganar elecciones y gobernar
            con legitimidad.
          </p>
          <p>
            Queremos ser la plataforma líder en{" "}
            <strong>innovación política de base</strong>, empoderando a millones
            de activistas, líderes sociales y ciudadanos a través de tecnología
            de organización, IA, Smart Data y movilización electoral.
          </p>
        </div>
        <div className="section">
          <h1 className="title text-center">¿Qué permite hacer Centuria?</h1>
          <p>
            Centuria es una herramienta integral que le da superpoderes a
            cualquier equipo de campaña o movimiento político desde la base. Sus
            principales funciones incluyen:
          </p>
          <p>
            ● 🔗 <strong>Construcción de redes:</strong> Visualiza el
            crecimiento y la expansión de cada activista y su red.{" "}
          </p>
          <p>
            ● ✅ <strong>Verificación antifraude:</strong> Garantiza que los
            datos de crecimiento y movilización sean reales.
          </p>
          <p>
            ● 🏆 <strong>Gamificación del desempeño:</strong> Mide, motiva y
            reconoce el esfuerzo de cada activista.
          </p>
          <p>
            ● 📲 <strong>Difusión y tracking de mensajes:</strong> Distribuye
            contenidos clave y mide su impacto en redes sociales.
          </p>
          <p>
            ● 📍 <strong>Geolocalización de actividades:</strong> Controla en
            tiempo real el cumplimiento de metas en zonas objetivo.
          </p>
          <p>
            ● 🗳{" "}
            <strong>
              Seguimiento por centro de votación o zona estratégica:
            </strong>{" "}
            Comprueba la organización y expansión en cada punto del territorio.
          </p>
          <p>
            ● 💬 <strong>Whatsapp hiperlocalizado:</strong> Conecta a votantes y
            activistas según su centro de votación específico.
          </p>
          <p>
            ● 🤖 <strong>IA + Smart Data para decisiones:</strong> Toma mejores
            decisiones de acción política con inteligencia artificial basada en
            datos.
          </p>
        </div>
        <hr />
        <div className="section">
          <p>
            <strong>Centuria</strong> es más que una plataforma:{" "}
          </p>
          <p>Es el cerebro digital de una campaña territorial moderna.</p>
          <p>Una herramienta para construir poder desde las raíces.</p>
          <p>Construye tu capital político palpable y cuantificable.</p>
          <p>Tecnología, datos y estrategia al servicio de tu causa.</p>
          <p>
            Tú ejército de activistas organizado, geolocalizado y operativo: en
            la calle y desde su smartphone.
          </p>
        </div>{" "}
        <hr />
        <div className="section">
          <p>
            <strong>Centuria es tu ventaja estratégica.</strong>
          </p>
        </div>
        <hr />
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
            <li>
              <LinkTermsConditions />
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
