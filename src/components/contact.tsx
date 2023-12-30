import useSiteData from "@/store/site";
import Section from "./section";
import { ISection } from "@/type";

export default function Contact() {
  const { site } = useSiteData();

  const contactSection =
    site?.sections?.find((section: ISection) => section?.name === "contact") ??
    null;

  const iframeMap = contactSection.content.map.replaceAll("\\'", '""') ?? "";

  console.log(iframeMap);

  console.log(contactSection.content.map);

  return (
    <Section verticalAlignment="center">
      <h2 className="mb-10 text-2xl lg:text-3xl">
        {contactSection?.title ?? "Acerca de nosotros"}
      </h2>
      <div className="w-full border rounded-md overflow-hidden h-[600px] flex flex-col">
        <div
          dangerouslySetInnerHTML={{
            __html: `${iframeMap}`,
          }}
          className="h-full w-full"
        />
      </div>
    </Section>
  );
}
