import useAppStore from "@/store/app-store";
import Section from "./section";
import { ICompany } from "@/type";

export default function About() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  return (
    <Section
      screenHeight={false}
      className="bg-primary text-white text-center"
    >
      <h2 className="mb-10 text-2xl lg:text-3xl">Acerca de nosotros</h2>
      <p className="text-balance max-w-lg">{company.description}</p>
    </Section>
  );
}
