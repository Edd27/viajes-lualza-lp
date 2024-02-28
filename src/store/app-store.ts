import { ICompany } from "@/type";
import { create } from "zustand";

const useAppStore = create((set) => ({
  company: {} as ICompany,
  setCompany: (company: ICompany) => set({ company }),
}));

export default useAppStore;
