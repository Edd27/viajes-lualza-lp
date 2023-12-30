import { create } from "zustand";

const response = await fetch(`${import.meta.env.VITE_API_URL}/site`);
const { data } = await response.json();

const useSiteData = create(() => ({
  site: data,
}));

export default useSiteData;
