import useAppStore from "@/store/app-store";
import { ICompany } from "@/type";
import Section from "./section";
import TravelCard from "./travel-card";

export default function LastTravels() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const lastTravels = company?.travels?.slice(-3);

  return (
    <Section screenHeight={false}>
      <h2 className="font-bold text-3xl mb-20">Nuestros ultimos viajes</h2>
      <article className="border">
        <div className="flex flex-wrap justify-center">
          {lastTravels.map((travel) => (
            <section key={travel.id} className="w-full md:w-1/2 lg:w-1/3 p-3">
              <TravelCard
                travel={travel}
                href={`/viajes/${travel.id}`}
              />
            </section>
          ))}
        </div>
      </article>
    </Section>
  );
}
