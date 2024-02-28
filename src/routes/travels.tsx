import Section from "@/components/section";
import TravelCard from "@/components/travel-card";
import { Input } from "@/components/ui/input";
import Layout from "@/layouts/layout";
import useAppStore from "@/store/app-store";
import { ICompany } from "@/type";
import { useState } from "react";

export default function Travels() {
  const [searchTerm, setSearchTerm] = useState("");

  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const travels = company.travels;

  return (
    <Layout>
      <Section
        className="pt-28"
        verticalAlignment="start"
      >
        <h1 className="font-bold text-3xl mb-12">Todos nuestros viajes</h1>
        <div className="w-full flex flex-col gap-4 lg:gap-10 items-center">
          <Input
            type="text"
            placeholder="Playa del carmen"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full lg:w-1/2"
          />
          <div className="w-full grid gap-3 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
            {travels
              ?.filter((travel) =>
                travel.name.toLowerCase().includes(searchTerm.toLowerCase()))
              ?.map((travel) => (
                <TravelCard
                  key={travel.id}
                  travel={travel}
                  href={`/viajes/${travel.id}`}
                />
              ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
