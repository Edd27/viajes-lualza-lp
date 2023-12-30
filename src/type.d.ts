export interface ISection {
  name: string;
  title: string;
  content: IContactContent | string;
  images?: IImage[];
  background?: string;
}

export interface IContactContent {
  phone: string;
  email: string;
  address: Address;
  map: string;
}

export interface IAddress {
  id: string;
  street: string;
  number: number;
  zip: number;
  suburb: string;
  city: string;
  state: string;
  country: string;
}

export interface ISite {
  title: string;
  description: string;
  favicon: string;
  logo: string;
  sections: ISection[];
}

export interface IImage {
  id: string;
  url: string;
  alt?: string;
}
