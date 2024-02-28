export default function Loading() {
  return (
    <div className="z-50 absolute w-full h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
      </div>
      <p className="mt-10 font-bold text-md lg:text-xl">
        Espera un momento por favor.
      </p>
    </div>
  );
}
