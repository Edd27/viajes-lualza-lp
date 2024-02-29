import useAppStore from "@/store/app-store";
import { ICompany } from "@/type";
import { useWindowScroll } from "@uidotdev/usehooks";
import WhatsAppIcon from "./icons/Whatsapp";

export default function FloatAction() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  const [{ y }] = useWindowScroll();

  if (!company) return null;

  const whatsAppMessage = encodeURIComponent("Hola 👋, me gustaría obtener mas información acerca de sus servicios y viajes.");

  const whatsAppPhone = company?.phones?.find((p) => p.type === "WHATSAPP")?.phone;

  if (!whatsAppPhone) return null;

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${whatsAppPhone.startsWith("+52") ? whatsAppPhone : `+52${whatsAppPhone}`}&text=${whatsAppMessage}`}
      target="_blank"
      className={`fixed bottom-3 right-3 text-white bg-green-500 p-2 rounded-full flex items-center justify-center transition duration-300 ${
        y && y >= 1000 ? "scale-0" : "scale-100"
      }`}
    >
      <WhatsAppIcon className="w-10 h-10" />
    </a>
  );
}
