import useAppStore from "@/store/app-store";
import { ICompany } from "@/type";
import MapFrame from "./map-frame";
import Section from "./section";

export default function Contact() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  return (
    <Section verticalAlignment="center">
      <h2 className="mb-10 text-2xl lg:text-3xl lg:px-36 text-center">
        Encuentranos
      </h2>
      {company.addresses.map((address) => (
        <article
          className="overflow-hidden rounded-md w-full h-[800px]"
          key={address.id}
        >
          <MapFrame
            address={address}
            zoom={19}
          />
        </article>
      ))}
    </Section>
  );
}
