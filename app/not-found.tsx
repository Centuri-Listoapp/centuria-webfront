import Image from "next/image";

export default function NotFound() {
  return (
    <div className="not-found">
      <Image alt="not-found" src="/not-found.svg" width={150} height={150} />
      <h2 className="mt-4">No encontrada</h2>
      <p>No se pudo encontrar el recurso solicitado</p>
    </div>
  );
}
