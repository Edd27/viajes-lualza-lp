import Section from "@/components/section";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Layout from "@/layouts/layout";
import useAppStore from "@/store/app-store";
import {
  ICompany, ITravelImage,
} from "@/type";
import { Cloudinary } from "@cloudinary/url-gen";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {
  const [image, setImage] = useState<ITravelImage | null>(null);
  const { company } = useAppStore() as {
    company: ICompany;
  };

  if (!company) return null;

  const travels = company.travels;

  const images = travels?.reduce((acc, travel) => [...acc, ...travel.images] , [] as ITravelImage[]);

  if (images?.length === 0) {
    return (
      <Layout>
        <Section
          className="pt-28"
          verticalAlignment="center"
        >
          <h1 className="font-bold text-3xl mb-20">
            Aun no tenemos imagenes en nuestra galeria.
          </h1>
        </Section>
      </Layout>
    );
  }

  const cld = new Cloudinary({ cloud: { cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME } });

  return (
    <Layout>
      <Section className="pt-28" verticalAlignment="center">
        <h1 className="font-bold text-3xl mb-20">Nuestra galería</h1>
        <Sheet >
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1, 750: 2, 900: 3,
            }}
            className="w-full"
          >
            <Masonry gutter="1.5rem">
              {images?.map(img => (
                <SheetTrigger key={img.id} className="h-full w-full" onClick={() => setImage(img)}>
                  <img
                    className="w-full h-full object-cover object-center rounded-xl"
                    src={cld.image(img.url).createCloudinaryURL()}
                    alt={`Imagen ${img.id} del viaje ${img.travelId}`}
                  />
                </SheetTrigger>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <SheetContent className="h-full" side="top">
            <img
              className="w-full h-full object-scale-down object-center rounded-xl"
              src={cld.image(image?.url).createCloudinaryURL()}
              alt={`Imagen ${image?.id} del viaje ${image?.travelId}`}
            />
          </SheetContent>
        </Sheet>
      </Section>
    </Layout>
  );
}
