import useSiteData from "@/store/site";
import Section from "./section";
import { ISection, ISite } from "@/type";

export default function Hero() {
  const { site } = useSiteData() as {
    site: ISite;
  };

  const heroSection =
    site?.sections?.find((section: ISection) => section?.name === "hero") ??
    null;

  const renderContent = () => {
    if (heroSection?.content?.toString()) {
      return heroSection?.content?.toString();
    } else {
      return "Subtitulo";
    }
  };

  return (
    <Section
      carouselImages={heroSection?.images ?? []}
      carouselDelay={5000}
      background={heroSection?.background ?? ""}
      verticalAlignment="center"
      className="text-white text-center"
    >
      <h1 className="text-3xl lg:text-5xl font-bold mb-10">
        {heroSection?.title ?? "Hero"}
      </h1>
      <h2 className="text-xl lg:text-3xl">{renderContent()}</h2>
    </Section>
  );
}
