import useSiteData from "@/store/site";
import Section from "./section";
import { ISection, ISite } from "@/type";

export default function About() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  const aboutSection =
    site?.sections?.find((section: ISection) => section?.name === "about") ??
    null;

  return (
    <Section screenHeight={false} className="bg-primary text-white text-center">
      <h2 className="mb-10 text-2xl lg:text-3xl">
        {aboutSection?.title ?? "Acerca de nosotros"}
      </h2>
      <p className="text-balance max-w-lg">
        {aboutSection?.content?.toString() ??
          "Parrafo descriptivo de la empresa"}
      </p>
    </Section>
  );
}
