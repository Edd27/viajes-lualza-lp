import useAppStore from "@/store/app-store";
import Section from "./section";
import { ICompany } from "@/type";
import { heroImagesByDefault } from "@/lib/utils";

export default function Hero() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  return (
    <Section
      carouselImages={
        company.images?.length > 0 ? company.images : heroImagesByDefault
      }
      carouselDelay={5000}
      verticalAlignment="center"
      className="text-white text-center"
    >
      <h1 className="text-3xl lg:text-5xl font-bold mb-10">
        {company?.name ?? "Nombre de la empresa"}
      </h1>
      <h2 className="text-xl lg:text-3xl">
        {company.slogan || "Slogan de la empresa"}
      </h2>
    </Section>
  );
}
