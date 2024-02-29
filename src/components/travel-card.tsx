"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useAppStore from "@/store/app-store";
import {
  ICompany, ITravel,
  ITravelImage,
} from "@/type";
import { Cloudinary } from "@cloudinary/url-gen";
import Autoplay from "embla-carousel-autoplay";
import {
  useRef, useState,
} from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "./icons/Whatsapp";
import { Button } from "./ui/button";
import {
  Carousel, CarouselContent, CarouselItem,
} from "./ui/carousel";
import {
  Sheet, SheetContent, SheetTrigger,
} from "./ui/sheet";

interface ITravelCardProps {
  travel: ITravel;
  href: string;
}

export default function TravelCard({
  travel, href,
}: ITravelCardProps) {
  const [image, setImage] = useState<ITravelImage | null>(null);
  const plugin = useRef(Autoplay({
    delay: 2000, stopOnInteraction: false,
  }));

  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const whatsAppMessage = encodeURIComponent(`Hola, me gustaría saber más sobre ${travel?.name}`);

  const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME } });

  return (
    <Card className="overflow-hidden p-0">
      <CardHeader className="p-0 h-[225px] overflow-hidden">
        {travel.images.length > 0 ? (
          <Sheet>
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="h-[225px]">
                {travel.images.map((img) => (
                  <SheetTrigger  key={img.id} className="p-0 w-full h-full border-none" onClick={() => setImage(img)}>
                    <CarouselItem className="p-0 w-full h-full border-none">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={cld.image(img.url).createCloudinaryURL()}
                        alt={`Imagen ${img.id} de viaje ${travel.name}`}
                      />
                    </CarouselItem>
                  </SheetTrigger>
                ))}
              </CarouselContent>
            </Carousel>
            <SheetContent className="h-full" side="top">
              <img
                className="w-full h-full object-scale-down object-center rounded-xl"
                src={cld.image(image?.url).createCloudinaryURL()}
                alt={`Imagen ${image?.id} del viaje ${image?.travelId}`}
              />
            </SheetContent>
          </Sheet>
        ) : (
          <img
            src="https://programacion.net/files/article/20161110041116_image-not-found.png"
            alt="Imagen no encontrada"
            className="w-full h-full object-cover"
          />
        )}
      </CardHeader>
      <CardContent className="p-6 overflow-hidden">
        <h2 className="font-bold">{travel.name}</h2>
        {travel.description ? (
          <p className="opacity-70 h-[150px] whitespace-pre-line truncate">
            {travel.description}
          </p>
        ) : null}
      </CardContent>
      <CardFooter className="flex gap-3">
        <Button
          asChild
          className="w-full"
        >
          <Link to={href}>Ver más</Link>
        </Button>
        <Button
          asChild
          variant="secondary"
        >
          <a
            href={`https://api.whatsapp.com/send?phone=${company?.phones?.find((p) => p.type === "WHATSAPP")}&text=${whatsAppMessage}`}
            target="_blank"
          >
            <WhatsAppIcon />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
