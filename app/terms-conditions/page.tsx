import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <Image src="/logo.png" alt="logo" width={120} height={37.03} />
      </header>
      <main>
        <div className="info-section">
          <div className="texts">
            <h1 className="info-title">Política de Privacidad</h1>{" "}
            <p>Fecha de última actualización: 09 de Mayo de 2025</p>
          </div>
        </div>{" "}
        <div className="section">
          <h1 className="title-md">1. ¿Quiénes somos?</h1>
          <p>
            El responsable del sitio web Centuria.app (en adelante, el “Sitio
            Web”) es Centuria Services Ltd, con domicilio en Madrid, España y
            con dirección de correo electrónico de contacto
            contacto@centuria.app.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">2. ¿Qué datos personales recopilamos?</h1>
          <p>
            Podemos recopilar y procesar los siguientes tipos de datos
            personales:
          </p>
          <p>
            ● <strong>Datos de identificación:</strong> nombre, apellidos,
            nombre de usuario o identificador similar.
          </p>
          <p>
            ● <strong>Datos de contacto:</strong> dirección de correo
            electrónico, número de teléfono.
          </p>
          <p>
            ● <strong>Datos técnicos:</strong> dirección IP, tipo de navegador,
            sistema operativo, información de inicio de sesión, datos de uso del
            sitio web a través de cookies y tecnologías similares.
          </p>
          <p>
            ● <strong>Datos de perfil:</strong> nombre de usuario y contraseña,
            preferencias e intereses.
          </p>
          <p>
            ● <strong>Datos de uso:</strong> información sobre cómo utilizas
            nuestro Sitio Web, productos y servicios.
          </p>
          <p>
            ● <strong>Datos de marketing y comunicaciones:</strong> tus
            preferencias para recibir comunicaciones de marketing de nuestra
            parte y tus preferencias de comunicación.
          </p>
          <p>
            ● <strong>Otros datos:</strong> datos de comentarios, e interacción
            entre usuarios.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            3. ¿Cómo recopilamos tus datos personales?
          </h1>
          <p>Recopilamos tus datos personales de las siguientes maneras:</p>
          <p>
            ● <strong>Directamente de ti:</strong> cuando te registras en
            nuestro Sitio Web, realizas un pedido, te suscribes a nuestro
            boletín informativo, nos contactas a través de formularios o por
            correo electrónico, o cuando publicas comentarios.
          </p>
          <p>
            ● <strong>Automáticamente:</strong> da través de cookies y otras
            tecnologías de seguimiento cuando navegas por nuestro Sitio Web.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            4. ¿Para qué utilizamos tus datos personales?
          </h1>
          <p>Utilizamos tus datos personales para los siguientes fines:</p>
          <p>
            ● Para gestionar tu cuenta y proporcionarte acceso a nuestro Sitio
            Web y sus funcionalidades.
          </p>
          <p>● Para gestionar la relación contractual.</p>
          <p>
            ● Para enviarte comunicaciones de marketing si has dado tu
            consentimiento.
          </p>
          <p>● Para responder a tus consultas y solicitudes.</p>
          <p>
            ● Para mejorar nuestro Sitio Web y personalizar tu experiencia de
            usuario.
          </p>
          <p>
            ● Para realizar análisis y estudios estadísticos sobre el uso del
            Sitio Web..
          </p>
          <p>
            ● Para garantizar la seguridad de nuestro Sitio Web y prevenir el
            fraude.
          </p>
          <p>● Para cumplir con nuestras obligaciones legales.</p>
        </div>
        <div className="section">
          <h1 className="title-md">
            5. ¿Cuál es la base legal para el tratamiento de tus datos
            personales?
          </h1>
          <p>
            El tratamiento de tus datos personales se basa en las siguientes
            bases legales:{" "}
          </p>
          <p>
            ● <strong>Tu consentimiento:</strong> cuando nos has dado tu
            consentimiento explícito para un fin específico (por ejemplo, para
            enviarte comunicaciones de marketing). Tienes derecho a retirar tu
            consentimiento en cualquier momento.
          </p>
          <p>
            ● <strong>La ejecución de un contrato:</strong> cuando el
            tratamiento es necesario para cumplir un contrato contigo o para
            tomar medidas a petición tuya antes de celebrar un contrato (por
            ejemplo, para procesar un pedido).
          </p>
          <p>
            ● <strong>El cumplimiento de una obligación legal:</strong> cuando
            el tratamiento es necesario para cumplir con una obligación legal a
            la que estamos sujetos.
          </p>
          <p>
            ● <strong>Nuestros intereses legítimos:</strong> cuando el
            tratamiento es necesario para nuestros intereses legítimos o los de
            un tercero, siempre que tus intereses o derechos fundamentales no
            prevalezcan sobre dichos intereses (por ejemplo, para mejorar
            nuestro Sitio Web y servicios).
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            6. ¿Con quién compartimos tus datos personales?
          </h1>
          <p>
            Podemos compartir tus datos personales con las siguientes categorías
            de destinatarios:
          </p>
          <p>
            ● <strong>Proveedores de servicios:</strong> que nos prestan
            servicios de alojamiento web, análisis de datos, procesamiento de
            pagos, marketing, etc. Estos proveedores están obligados
            contractualmente a proteger tus datos.
          </p>
          <p>
            ● <strong>Autoridades competentes:</strong> cuando estemos
            legalmente obligados a hacerlo.
          </p>
          <p>
            ● <strong>Terceros con tu consentimiento:</strong> cuando nos hayas
            dado tu consentimiento para compartir tus datos con ellos.
          </p>
        </div>{" "}
        <div className="section">
          <h1 className="title-md">
            7. ¿Cuánto tiempo conservamos tus datos personales?
          </h1>
          <p>
            Conservaremos tus datos personales durante el tiempo necesario para
            cumplir con los fines para los que fueron recopilados, incluyendo
            cualquier requisito legal, contable o de informes. Para determinar
            el período de retención adecuado, consideramos la cantidad,
            naturaleza y sensibilidad de los datos personales, el riesgo
            potencial de daño por el uso o divulgación no autorizados, los fines
            para los que procesamos tus datos personales y si podemos lograr
            esos fines por otros medios, así como los requisitos legales
            aplicables.
          </p>
          <p>En general:</p>
          <p>
            ● Los datos de los clientes se conservarán mientras dure la relación
            contractual y posteriormente durante el plazo necesario para cumplir
            con las obligaciones legales.
          </p>
          <p>
            ● Los datos de marketing se conservarán hasta que retires tu
            consentimiento.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            9. ¿Cuáles son tus derechos de protección de datos?
          </h1>
          <p>
            De acuerdo con el Reglamento General de Protección de Datos (RGPD),
            tienes los siguientes derechos:
          </p>
          <p>
            ● <strong>Derecho de acceso:</strong> tienes derecho a solicitar
            acceso a tus datos personales y a obtener información sobre cómo los
            estamos tratando.
          </p>
          <p>
            ● <strong>Derecho de rectificación:</strong> tienes derecho a
            solicitar la corrección de los datos personales inexactos o
            incompletos.
          </p>
          <p>
            ● <strong>Derecho de supresión (“al olvido”):</strong> tienes
            derecho a solicitar la eliminación de tus datos personales en
            determinadas circunstancias.
          </p>
          <p>
            ● <strong>Derecho a la limitación del tratamiento:</strong> tienes
            derecho a solicitar la limitación del tratamiento de tus datos
            personales en determinadas circunstancias.
          </p>
          <p>
            ● <strong>Derecho a la portabilidad de los datos:</strong> tienes
            derecho a recibir tus datos personales en un formato estructurado,
            de uso común y lectura mecánica, y a transmitirlos a otro
            responsable del tratamiento.
          </p>
          <p>
            ● <strong>Derecho de oposición:</strong> tienes derecho a oponerte
            al tratamiento de tus datos personales en determinadas
            circunstancias, incluyendo el tratamiento con fines de marketing
            directo.
          </p>
          <p>
            ●{" "}
            <strong>
              Derecho a no ser objeto de decisiones individuales automatizadas,
              incluida la elaboración de perfiles:
            </strong>{" "}
            tienes derecho a no ser objeto de una decisión basada únicamente en
            el tratamiento automatizado, incluida la elaboración de perfiles,
            que produzca efectos jurídicos en ti o te afecte significativamente
            de manera similar, salvo que sea necesario para la celebración o
            ejecución de un contrato, esté autorizado por ley o se base en tu
            consentimiento explícito.
          </p>
          <p>
            ● <strong>Derecho a retirar el consentimiento:</strong> si el
            tratamiento se basa en tu consentimiento, tienes derecho a retirarlo
            en cualquier momento, sin que ello afecte a la licitud del
            tratamiento basado en el consentimiento previo a su retirada.
          </p>
        </div>{" "}
        <div className="section">
          <h1 className="title-md">10. ¿Cómo puedes ejercer tus derechos?</h1>
          <p>
            Para ejercer cualquiera de tus derechos de protección de datos, por
            favor, ponte en contacto con nosotros a través de los datos de
            contacto proporcionados en la sección 1.
          </p>
          <p>
            Responderemos a tu solicitud en el plazo de un mes. En casos
            complejos, este plazo podría extenderse a dos meses, en cuyo caso te
            informaremos de la prórroga y los motivos del retraso.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            11. Derecho a presentar una reclamación ante una autoridad de
            control
          </h1>
          <p>
            Si consideras que el tratamiento de tus datos personales infringe la
            normativa de protección de datos, tienes derecho a presentar una
            reclamación ante una autoridad de control. En España, la autoridad
            de control es la Agencia Española de Protección de Datos (AEPD),
            cuyos datos de contacto puedes encontrar en su sitio web:
            https://www.aepd.es.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            12. Cookies y otras tecnologías de seguimiento
          </h1>
          <p>
            Nuestro Sitio Web utiliza cookies y otras tecnologías de seguimiento
            para mejorar tu experiencia de usuario y analizar el tráfico del
            sitio. Puedes obtener más información sobre cómo utilizamos las
            cookies en nuestra Política de Cookies.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">
            13. Cambios en nuestra Política de Privacidad
          </h1>
          <p>
            Nos reservamos el derecho a modificar esta Política de Privacidad en
            cualquier momento. Cualquier cambio se publicará en esta página, y
            te recomendamos que la revises periódicamente.
          </p>
        </div>
        <div className="section">
          <h1 className="title-md">14. Contacto</h1>
          <p>
            Si tienes alguna pregunta o inquietud sobre esta Política de
            Privacidad o sobre el tratamiento de tus datos personales, no dudes
            en ponerte en contacto con nosotros a través de
            contacto@centuria.app.
          </p>
        </div>
      </main>
    </>
  );
}
