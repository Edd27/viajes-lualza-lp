import { ISite } from "@/type";
import { create } from "zustand";

const useSiteData = create((set) => ({
  site: {} as ISite,
  setSite: (site: ISite) => set({ site }),
}));

export default useSiteData;
