export interface ICompany {
  id: string;
  name: string;
  logo: string;
  description?: string | null;
  slogan?: string | null;
  websiteUrl: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  createdAt: string;
  updatedAt: string;
  customerId: string;
  addresses: IAddress[];
  emails: IEmail[];
  images: ICompanyImage[];
  phones: IPhone[];
  socials: ISocial[];
  travels: ITravel[];
}

export interface ICompanyImage {
  id: string;
  url: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  companyId?: string | null;
}

export interface IAddress {
  id: string;
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
  suburb: string;
  location: string;
  description?: string | null;
  mapFrame?: string | null;
  createdAt: string;
  updatedAt: string;
  companyId: string;
}

export interface IPhone {
  id: string;
  phone: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  companyId: string;
}

export interface IEmail {
  id: string;
  email: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  companyId: string;
}

export interface ISocial {
  id: string;
  name: string;
  url: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  companyId: string;
}

export interface ITravel {
  id: string;
  name: string;
  description?: string | null;
  location?: string | null;
  initialDate?: string | null;
  endDate?: string | null;
  isActivated: boolean;
  createdAt: string;
  updatedAt: string;
  companyId: string;
  images: ITravelImage[];
  prices: ITravelPrice[];
}

export interface ITravelImage {
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  travelId: string;
}

export interface ITravelPrice {
  id: string;
  price: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
  travelId: string;
  typeId: string;
  type: ITravelPriceType;
  companyId: string;
}

export interface ITravelPriceType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  companyId: string;
}

export interface IRouterError {
  statsu?: number;
  statusText?: string;
  message?: string;
}
