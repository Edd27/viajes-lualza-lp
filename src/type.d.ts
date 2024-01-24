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

export interface IDatabase {
  [key: string]: unknown | ITravel[] | IGallery;
}

export interface IGallery {
  id: string;
  url: string;
}

export interface ITravelImage {
  id: string;
  url: string;
}

export interface ITravel {
  id: string;
  title: string;
  description: string;
  images: ITravelImage[];
  date: string;
  price: number;
}

export interface ISite {
  title: string;
  description: string;
  favicon: string;
  logo: string;
  sections: ISection[];
  database: IDatabase;
}

export interface IImage {
  id: string;
  url: string;
  alt?: string;
}

export interface IRouterError {
  statusText?: string;
  message?: string;
}

export interface IEmail {
  id: string;
  value: string;
  type: string;
}

export interface IPhone {
  id: string;
  number: string;
  type: string;
}

export interface ISocial {
  id: string;
  name: string;
  url: string;
}

export interface ICompany {
  name: string;
  slogan?: string;
  description?: string;
  addresses: IAddress[];
  emails: IEmail[];
  phones: IPhone[];
  socials: ISocial[];
}
