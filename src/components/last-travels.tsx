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
      <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
        {lastTravels.map((travel) => (
          <TravelCard
            travel={travel}
            key={travel.id}
            href={`/viajes/${travel.id}`}
          />
        ))}
      </div>
    </Section>
  );
}
