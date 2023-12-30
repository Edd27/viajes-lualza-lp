import useSiteData from "@/store/site";
import Section from "./section";

export default function Hero() {
  const { site } = useSiteData();

  const heroSection =
    site?.sections?.find((section) => section?.name === "hero") ?? null;

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
      <h2 className="text-xl lg:text-3xl">
        {heroSection?.content ?? "Subtitulo"}
      </h2>
    </Section>
  );
}
