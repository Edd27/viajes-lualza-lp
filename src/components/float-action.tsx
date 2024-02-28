import { ICompany } from "@/type";
import WhatsAppIcon from "./icons/Whatsapp";
import { useWindowScroll } from "@uidotdev/usehooks";
import useAppStore from "@/store/app-store";

export default function FloatAction() {
  const { company } = useAppStore() as {
    company: ICompany;
  };

  const [{ y }] = useWindowScroll();

  if (!company) return null;

  const whatsAppNumber = company?.phones?.find((p) => p.type === "WHATSAPP");

  if (!whatsAppNumber) return null;

  const whatsAppMessage = encodeURIComponent("Hola, me gustaría saber más sobre tus servicios");

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${company?.phones?.find((p) => p.type === "WHATSAPP")}&text=${whatsAppMessage}`}
      target="_blank"
      className={`fixed bottom-3 right-3 text-white bg-green-500 p-2 rounded-full flex items-center justify-center transition duration-300 ${
        y && y >= 1000 ? "scale-0" : "scale-100"
      }`}
    >
      <WhatsAppIcon className="w-10 h-10" />
    </a>
  );
}
