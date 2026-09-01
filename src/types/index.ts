export type MealCategory = "all" | "breakfast" | "lunch" | "dinner" | "cocktails" | "desserts" | "sparkling";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "breakfast" | "lunch" | "dinner" | "cocktails" | "desserts";
  tags?: string[]; // e.g. "GF", "V", "Signature", "Texas Sourced", "Organic"
  image: string;
  calories?: string;
  pairing?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: "Google Reviews" | "OpenTable Diner" | "TripAdvisor" | "Yelp Elite";
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  verified: boolean;
  highlightDish?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "interior" | "dishes" | "cocktails" | "lounge";
  image: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: "main_dining" | "bar_lounge" | "chefs_counter" | "private_alcove";
  specialOccasion: "none" | "birthday" | "anniversary" | "business" | "date_night" | "celebration";
  dietaryNotes?: string;
}
