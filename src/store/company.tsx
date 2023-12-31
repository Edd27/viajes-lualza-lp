import { ICompany } from '@/type';
import { create } from 'zustand';

const useCompanyData = create((set) => ({
  company: {} as ICompany,
  setCompany: (company: ICompany) => set({ company }),
}));

export default useCompanyData;
