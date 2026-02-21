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
            <h1 className="info-title">
              Descarga la app para poder disfrutar de "Centuria"
            </h1>
          </div>
          <div className="app">
            <Image src="/app.png" alt="app" width={350} height={550} />
          </div>
        </div>
      </main>
    </>
  );
}
