import { useRouteError } from "react-router-dom";
import { IRouterError } from "./type";

export default function ErrorPage() {
  const error = useRouteError() as IRouterError;

  return (
    <div
      id="error-page"
      className="h-screen flex flex-col items-center justify-center gap-3"
    >
      <h1 className="text-xl lg:text-4xl font-bold">Oops!</h1>
      <p>
        Lo sentimos, ha ocurrido un error inesperado. Por favor intentalo más
        tarde.
      </p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
