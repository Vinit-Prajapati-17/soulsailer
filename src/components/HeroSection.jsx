import { HeroParallax } from "./ui/hero-parallax";
import "./HeroSection.css";

export default function HeroSection() {
  return <HeroParallax products={destinations} />;
}

export const destinations = [
  {
    title: "Taj Mahal, Agra",
    link: "/india/uttar-pradesh",
    thumbnail: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  },
  {
    title: "Kerala Backwaters",
    link: "/india/kerala",
    thumbnail: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
  },
  {
    title: "Jaipur, Rajasthan",
    link: "/india/rajasthan",
    thumbnail: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
  },
  {
    title: "Goa Beaches",
    link: "/india/goa",
    thumbnail: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80",
  },
  {
    title: "Varanasi Ghats",
    link: "/india/uttar-pradesh",
    thumbnail: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
  },
  {
    title: "Dubai, UAE",
    link: "/international/uae",
    thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    title: "Paris, France",
    link: "/international/france",
    thumbnail: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  },
  {
    title: "Bali, Indonesia",
    link: "/international/indonesia",
    thumbnail: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
  {
    title: "Switzerland Alps",
    link: "/international/switzerland",
    thumbnail: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
  },
  {
    title: "Maldives",
    link: "/international/maldives",
    thumbnail: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
  },
  {
    title: "Ladakh, India",
    link: "/india/ladakh",
    thumbnail: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
  },
  {
    title: "Thailand",
    link: "/international/thailand",
    thumbnail: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80",
  },
  {
    title: "Singapore",
    link: "/international/singapore",
    thumbnail: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
  },
  {
    title: "Santorini, Greece",
    link: "/international/greece",
    thumbnail: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
  },
  {
    title: "Manali, Himachal",
    link: "/india/himachal-pradesh",
    thumbnail: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
  },
];
