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

  const whatsAppPhone = company?.phones?.find((p) => p.type === "WHATSAPP")?.phone;

  const whatsAppMessage = encodeURIComponent(`Hola 👋, me gustaría saber más sobre su proximo viaje a *${travel?.name}*\n\nEnlace:\n${window.location.protocol}//${window.location.hostname}/viajes/${travel.id}`);

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
              <p className="bg-primary text-white px-2 py-1 rounded-lg w-[120px]">
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
        <article className="flex flex-col items-start gap-10">
          <p className="opacity-70 whitespace-pre-line truncate">
            {travel.description}
          </p>
          {whatsAppPhone ? (
            <Button
              variant="default"
              asChild
            >
              <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=${whatsAppPhone.startsWith("+52") ? whatsAppPhone : `+52${whatsAppPhone}`}&text=${whatsAppMessage}`}
                className="flex items-center gap-2"
              >
                <WhatsAppIcon />
              Solicitar informacion
              </a>
            </Button>
          ) : null}
        </article>
      </Section>
    </Layout>
  );
}
