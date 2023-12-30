export interface ISection {
  name: string;
  title: string;
  content: IContactContent | string;
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
