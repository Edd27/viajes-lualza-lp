import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      id="error-page"
      className="h-screen flex flex-col items-center justify-center gap-3"
    >
      <h1 className="text-xl lg:text-4xl font-bold">404</h1>
      <p>No pudimos encontrar lo que buscas</p>
      <Link
        to="/"
        className="text-blue-500 hover:underline"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
