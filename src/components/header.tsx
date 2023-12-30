import useSiteData from "@/store/site";
import { ModeToggle } from "./mode-toggle";
import { ISite } from "@/type";

export default function Header() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  return (
    <header>
      <nav className="w-full shadow mx-auto flex items-center justify-between fixed z-50 py-3 px-3 lg:px-24 bg-primary">
        <a href="/">
          <img
            src={site?.logo}
            alt={`Logo ${site?.title}`}
            className="w-10 h-10"
          />
        </a>
        <div className="flex items-center gap-x-4">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
