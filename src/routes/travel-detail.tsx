import WhatsAppIcon from "@/components/icons/Whatsapp";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import Layout from "@/layouts/layout";
import {
  formatDateTime, heroImagesByDefault,
} from "@/lib/utils";
import useAppStore from "@/store/app-store";
import { ICompany } from "@/type";
import { MoveVertical } from "lucide-react";
import { useParams } from "react-router-dom";

export default function TravelDetail() {
  const { id } = useParams();

  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const travel = company.travels?.find((t) => t.id === id);

  if (!travel) {
    return (
      <Layout>
        <Section
          className="pt-28"
          verticalAlignment="center"
        >
          <h1 className="font-bold text-3xl">Viaje no encontrado</h1>
        </Section>
      </Layout>
    );
  }

  const whatsAppMessage = encodeURIComponent(`Hola, me gustaría saber más sobre ${travel.name}`);

  return (
    <Layout>
      <Section
        carouselImages={
          travel.images?.length > 0 ? travel.images : heroImagesByDefault
        }
        carouselDelay={5000}
        verticalAlignment="center"
        className="text-white text-center"
      >
        <h1 className="text-3xl lg:text-5xl font-bold mb-10">
          {travel?.name ?? "Nombre de la empresa"}
        </h1>
        {travel.initialDate || travel.endDate ? (
          <div className="flex flex-col items-center justify-center gap-4">
            {travel.initialDate ? (
              <p className="border border-primary text-primary bg-secondary px-2 py-1 rounded-lg w-[120px]">
                {formatDateTime(new Date(travel.initialDate), "es-MX", { dateStyle: "medium" })}
              </p>
            ) : null}
            {travel.endDate ? (
              <>
                <MoveVertical />
                <p className="bg-primary text-white px-2 py-1 rounded-lg w-[120px]">
                  {formatDateTime(new Date(travel.endDate), "es-MX", { dateStyle: "medium" })}
                </p>
              </>
            ) : null}
          </div>
        ) : null}
      </Section>
      <Section screenHeight={false}>
        <article className="flex flex-col items-center gap-10">
          <p className="text-pretty">{travel.description}</p>
          <Button
            variant="outline"
            asChild
          >
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=${company?.phones?.find((p) => p.type === "WHATSAPP")}&text=${whatsAppMessage}`}
              className="flex items-center gap-2"
            >
              <WhatsAppIcon />
              Solicitar informacion
            </a>
          </Button>
        </article>
      </Section>
    </Layout>
  );
}
