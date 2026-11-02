import { LucideIcon } from "lucide-react/dist/lucide-react.suffixed.js";

export interface IStudio {
    _id: string;
    category: string;
    price_per_hour: number;
    rating: number;
    location: string;
    title: string;
    description: string;
    capacity: string;
    deposit: number;
    image_link: string;
}

export interface TBooking extends IStudio {
  _id: string;
  userName?: string;
  email?: string;
  bookingDate: string;
  status?: string;
  image: string;
};


export type TStep = {
  label: string
  title: string
  description: string
  icon: LucideIcon
  iconBg: string
}