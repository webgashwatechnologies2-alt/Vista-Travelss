"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Users,
  Search,
  Heart,
  Play,
  X,
  Check,
  ArrowUp,
  ChevronRight,
  Menu,
  Phone,
  Mail,
  Sparkles,
  Mountain,
  Compass,
  Clock,
  ShieldCheck,
  Award,
  ChevronDown,
  ArrowRight,
  CarFront,
  BusFront,
} from "lucide-react";
import Image from "next/image";
import AboutSection from "./components/about-section";
function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-900"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.008 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.021 1.792-4.694 4.533-4.694 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.93-1.956 1.885v2.265h3.328l-.532 3.469h-2.796v8.385C19.612 23.081 24 18.092 24 12.073Z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/vistatravelss/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 bg-white text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-900"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2]">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="0.75" className="fill-current stroke-none" />
        </svg>
      </a>
    </div>
  );
}

type ItineraryDay = {
  day: string;
  title: string;
  desc: string;
};

type TourCategory = "high-altitude" | "heritage" | "lakes" | "coastal" | "wellness" | "international";

type Tour = {
  id: string;
  title: string;
  destination: string;
  category: TourCategory;
  badge: string;
  badgeColor: string;
  duration: string;
  image?: string;
  highlights: string[];
  itinerary: ItineraryDay[];
};

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [itineraryModalOpen, setItineraryModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [customPlannerOpen, setCustomPlannerOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

  const [searchDestination, setSearchDestination] = useState("all");
  const [searchStyle, setSearchStyle] = useState("all");
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  const [likedTours, setLikedTours] = useState<Record<string, boolean>>({});

  const [activeFilterCategory, setActiveFilterCategory] = useState("all");
  const [showSavedTours, setShowSavedTours] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const heroDestinations = [
    {
      id: "himachal",
      name: "Himachal Peaks",
      region: "Himachal Pradesh",
      tagline: "Manali Pine Forests, Rohtang Snows & Riverside Chalets",
      img: "/images/kashmirtrails.webp",
      altitude: "6,700 ft",
      temp: "8°C to 22°C",
      bestTime: "Mar – Nov",
      vibe: "Cedar Sanctuaries & Treks",
    },
    {
      id: "spiti",
      name: "Spiti Valley",
      region: "Himachal Pradesh",
      tagline: "The Rugged Middle Land & 14,000 ft Stargazing Glamping",
      img: "/images/spitiherobaner.webp",
      altitude: "12,500 ft",
      temp: "-2°C to 16°C",
      bestTime: "May – Oct",
      vibe: "Adventure & High Pass Monasteries",
    },
    {
      id: "ladakh",
      name: "Leh & Ladakh",
      region: "Jammu & Kashmir / Ladakh",
      tagline: "Turquoise Pangong Tso, Nubra Dunes & High Himalayan Passes",
      img: "/images/shamvallery.webp",
      altitude: "11,500 ft",
      temp: "4°C to 18°C",
      bestTime: "Jun – Sep",
      vibe: "Azure Lakes & Silk Route Passes",
    },
    {
      id: "kashmir",
      name: "Kashmir Valley",
      region: "Jammu & Kashmir",
      tagline: "Dal Lake Shikara Drifts, Gulmarg Gondola & Alpine Pines",
      img: "/images/familyksmjr.webp",
      altitude: "5,300 ft",
      temp: "6°C to 20°C",
      bestTime: "Year Round",
      vibe: "Paradise Heritage Houseboats",
    },
    {
      id: "rajasthan",
      name: "Royal Rajasthan",
      region: "Rajasthan",
      tagline: "Majestic Forts, Udaipur Lake Palaces & Thar Desert Sunset Glamp",
      img: "/images/exclusive-rajasthan.webp",
      altitude: "1,900 ft",
      temp: "18°C to 32°C",
      bestTime: "Oct – Mar",
      vibe: "Heritage Havelis & Royalty",
    },
    {
      id: "kerala",
      name: "Kerala Backwaters",
      region: "Kerala",
      tagline: "Serene Alleppey Houseboat Lagoons, Coconut Groves & Tea Estates",
      img: "/images/keralahero.webp",
      altitude: "Sea Level",
      temp: "24°C to 31°C",
      bestTime: "Sep – Mar",
      vibe: "Backwater Cruises & Ayurveda",
    },
    {
      id: "goa",
      name: "Coastal Goa",
      region: "Goa",
      tagline: "Beaches, coastal cruises & tropical stays",
      img: "/images/waterspupportt.webp",
      altitude: "Coastline",
      temp: "25°C to 33°C",
      bestTime: "Nov – Apr",
      vibe: "Private Pool Villas & Sunsets",
    },
    {
      id: "uttarakhand",
      name: "Uttarakhand Sanctuary",
      region: "Uttarakhand",
      tagline: "Holy Ganga River Rafting, Himalayan Yoga & Mountain Eco-Lodges",
      img: "/images/nanital.webp",
      altitude: "4,500 ft",
      temp: "10°C to 26°C",
      bestTime: "Sep – Jun",
      vibe: "Spiritual Wellness & Rafting",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroDestinations.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [heroDestinations.length]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["home", "destinations", "packages", "experiences", "cabs", "about", "planning", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const sId of sections) {
        const el = document.getElementById(sId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const selectDestination = (destinationId: string) => {
    setSearchDestination(destinationId);
    setSearchStyle("all");
    setActiveFilterCategory("all");
    setShowSavedTours(false);
    scrollToSection("packages");
  };

  const toggleWishlist = (id: string) => {
    setLikedTours((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toursList: Tour[] = [
    {
      id: "spiti-circuit",
      title: "Spiti Valley High Altitude Expedition & Stargazing",
      destination: "Spiti Valley, Himachal",
      category: "high-altitude",
      badge: "Mountain route",
      badgeColor: "bg-emerald-600 text-white",
      duration: "7 Days / 6 Nights",
      image: "/images/sptfamily.webp",
      highlights: [
        "Key Monastery sunrise chanting",
        "Chandratal Lake luxury dome camp",
        "Visit Hikkim's high-altitude post office",
        "4x4 Private Himalayan transit",
      ],
      itinerary: [
        { day: "Day 1", title: "Shimla to Narkanda & Sangla Valley", desc: "Drive through apple orchards and Sutlej river valleys to Sangla." },
        { day: "Day 2", title: "Sangla to Kalpa & Kinnaur Kailash View", desc: "Witness towering golden snow peaks of Kinnaur Kailash at dusk." },
        { day: "Day 3", title: "Kalpa to Kaza via Nako & Tabo Monastery", desc: "Enter Spiti's stark moonscapes and explore 1,000-year-old Tabo murals." },
        { day: "Day 4", title: "Key Monastery, Kibber & Chicham Bridge", desc: "Visit Chicham Bridge and nearby villages, with time for local monastery visits." },
        { day: "Day 5", title: "Hikkim, Komic & Langza", desc: "Explore high-altitude villages and visit Hikkim's post office." },
        { day: "Day 6", title: "Kaza to Chandratal Lake Glamping", desc: "Trek along the crescent blue moon lake and stargaze milky way." },
        { day: "Day 7", title: "Chandratal to Manali via Atal Tunnel", desc: "Cross Kunzum Pass (14,931 ft) and descend into lush Manali valleys." },
      ],
    },
    {
      id: "ladakh-pangong",
      title: "Ladakh Pangong Tso & Nubra Silk Route Retreat",
      destination: "Leh, Ladakh",
      category: "high-altitude",
      badge: "High-altitude route",
      badgeColor: "bg-teal-700 text-white",
      duration: "6 Days / 5 Nights",
      image: "/images/nbraa.webp",
      highlights: [
        "Pangong Tso private heated dome yurt",
        "Double-humped camel safari in Nubra",
        "Khardung La Pass drive (17,982 ft)",
        "Shanti Stupa sunset meditation",
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Leh & Gentle Acclimatization", desc: "Leh airport pickup with rest, herbal oxygen tea and evening stroll." },
        { day: "Day 2", title: "Indus Valley Monasteries & Hall of Fame", desc: "Thiksey, Shey Palace and confluence of Indus and Zanskar rivers." },
        { day: "Day 3", title: "Leh to Nubra Valley via Khardung La", desc: "Ascend the iconic pass, then enter the white sand dunes of Hunder." },
        { day: "Day 4", title: "Nubra Valley to Pangong Lake via Shyok", desc: "Scenic river route leading to the mesmerizing color-changing lake." },
        { day: "Day 5", title: "Pangong Lake Sunrise to Leh via Chang La", desc: "Golden morning reflection over azure waters, return to Leh." },
        { day: "Day 6", title: "Departure from Leh", desc: "Transfer to airport with lifetime high-altitude memories." },
      ],
    },
    {
      id: "kashmir-paradise",
      title: "Royal Dal Lake Houseboat & Gulmarg Snow Glade",
      destination: "Srinagar & Gulmarg, Kashmir",
      category: "lakes",
      badge: "Kashmir route",
      badgeColor: "bg-[#0E4D3C] text-white",
      duration: "5 Days / 4 Nights",
      image: "/images/Festivals-of-Jammu-and-Kashmir.webp",
      highlights: [
        "Handcrafted luxury cedar wood houseboat",
        "Private sunset Shikara ride on Dal Lake",
        "Gulmarg Phase 2 Gondola ride to Apharwat",
        "Traditional Wazwan culinary dinner",
      ],
      itinerary: [
        { day: "Day 1", title: "Srinagar Arrival & Heritage Houseboat Check-in", desc: "Welcome Kahwa drink, Shikara floating flower market cruise." },
        { day: "Day 2", title: "Mughal Gardens & Old Srinagar Heritage Walk", desc: "Nishat, Shalimar Bagh, and Jamia Masjid historical alleys." },
        { day: "Day 3", title: "Srinagar to Gulmarg Powder Snow Excursion", desc: "Gondola cable car rising up to 13,780 ft with sweeping snow peaks." },
        { day: "Day 4", title: "Pahalgam Valley of Shepherds & Betaab Valley", desc: "Lidder river strolls, pine forest trails and saffron fields in Pampore." },
        { day: "Day 5", title: "Departure from Srinagar", desc: "Souvenir shopping for pashmina shawls and flight departure." },
      ],
    },
    {
      id: "himachal-chalet",
      title: "Manali Alpine Forest Chalet & Rohtang Heights",
      destination: "Manali & Kasol, Himachal",
      category: "high-altitude",
      badge: "Himachal route",
      badgeColor: "bg-emerald-600 text-white",
      duration: "5 Days / 4 Nights",
      image: "/images/shimlaimageneww.webp",
      highlights: [
        "Private cedar log chalet overlooking snow peaks",
        "Solang Valley paragliding & ATV trails",
        "Old Manali cafe & art gallery tour",
        "Bonfire dinner with local Himachali Siddu",
      ],
      itinerary: [
        { day: "Day 1", title: "Manali Arrival & Forest Lodge Check-in", desc: "Check into pine chalet, visit Hadimba Devi temple and hot springs." },
        { day: "Day 2", title: "Solang Valley Adventure & Atal Tunnel", desc: "Thrill activities, snow valley vistas and Lahaul gateway drive." },
        { day: "Day 3", title: "Naggar Castle Heritage & Art Gallery", desc: "Explore 15th-century wood and stone architecture of Kullu Rajas." },
        { day: "Day 4", title: "Kasol & Manikaran Hot Springs Excursion", desc: "Parvati river banks, scenic cafe culture and sacred natural springs." },
        { day: "Day 5", title: "Farewell Manali & Onward Journey", desc: "Morning mountain tea, local handicrafts and departure." },
      ],
    },
    {
      id: "rajasthan-heritage",
      title: "Royal Rajasthan Haveli & Lake Palace Grandeur",
      destination: "Udaipur & Jodhpur, Rajasthan",
      category: "heritage",
      badge: "Heritage route",
      badgeColor: "bg-amber-600 text-white",
      duration: "6 Days / 5 Nights",
      image: "/images/exclusive-rajasthanjb.webp",
      highlights: [
        "Private boat cruise on Lake Pichola",
        "Exclusive dinner at Mehrangarh Fort ramparts",
        "Stay in authentic restored heritage palace",
        "Vintage car escort & private royal guide",
      ],
      itinerary: [
        { day: "Day 1", title: "Udaipur Royal Welcome & Lake Pichola Cruise", desc: "Arrive in city of lakes with royal marigold garland greeting." },
        { day: "Day 2", title: "City Palace Complex & Jagdish Temple", desc: "Explore mirrored chambers, royal armory and Saheliyon Ki Bari." },
        { day: "Day 3", title: "Udaipur to Jodhpur via Ranakpur Jain Temples", desc: "Marvel at 1,444 uniquely carved marble pillars in Ranakpur." },
        { day: "Day 4", title: "Mehrangarh Fort & Blue City Heritage Walk", desc: "Climb the imposing citadel with panoramic views of the indigo city." },
        { day: "Day 5", title: "Osian Desert Excursion & Folk Performance", desc: "Explore the desert landscape near Jodhpur; activities depend on availability." },
        { day: "Day 6", title: "Departure from Jodhpur Airport", desc: "Depart after traditional royal breakfast." },
      ],
    },
    {
      id: "kerala-backwaters",
      title: "Alleppey Luxury Houseboat & Munnar Tea Mist",
      destination: "Alleppey & Munnar, Kerala",
      category: "lakes",
      badge: "Backwater route",
      badgeColor: "bg-teal-700 text-white",
      duration: "5 Days / 4 Nights",
      image: "/images/munnar.webp",
      highlights: [
        "Exclusive private AC backwater houseboat",
        "Authentic Keralite Karimeen Pollichathu feast",
        "Munnar rolling tea plantation walk",
        "Traditional Ayurvedic rejuvenation massage",
      ],
      itinerary: [
        { day: "Day 1", title: "Kochi Arrival & Transfer to Munnar Hills", desc: "Scenic drive passing Cheeyappara waterfalls to lush tea hills." },
        { day: "Day 2", title: "Munnar Tea Museum & Eravikulam Sanctuary", desc: "Spot the endangered Nilgiri Tahr and taste single-estate teas." },
        { day: "Day 3", title: "Munnar to Alleppey Houseboat Embarkation", desc: "Board private houseboat with dedicated captain and personal chef." },
        { day: "Day 4", title: "Backwater Village Canals & Ayurvedic Spa", desc: "Cruise through palm-canopied canals, evening classical Kathakali." },
        { day: "Day 5", title: "Departure via Kochi Fort & Chinese Nets", desc: "Visit historic Fort Kochi art cafes and airport drop." },
      ],
    },
    {
      id: "goa-villa",
      title: "Coastal Goa Private Pool Villa & Sunset Catamaran",
      destination: "North & South Goa",
      category: "coastal",
      badge: "Coastal route",
      badgeColor: "bg-emerald-700 text-white",
      duration: "4 Days / 3 Nights",
      image: "/images/waterspupportt.webp",
      highlights: [
        "Private Portuguese luxury pool villa",
        "Private sunset catamaran cruise with champagne",
        "Fontainhas Latin Quarter heritage food walk",
        "Chef-curated coastal seafood banquet",
      ],
      itinerary: [
        { day: "Day 1", title: "Goa Villa Check-in & Sunset Beach Drinks", desc: "Private airport chauffeured transfer to your luxury seaside villa." },
        { day: "Day 2", title: "Private Catamaran Cruise & Dolphin Spotting", desc: "Sail along Mandovi river out to open Arabian sea waters." },
        { day: "Day 3", title: "Fontainhas Heritage Walk & Spice Plantation", desc: "Colonial colorful streets followed by fragrant organic spice farm lunch." },
        { day: "Day 4", title: "Farewell Breakfast & Airport Drop", desc: "Relax by the villa pool before departure." },
      ],
    },
    {
      id: "uttarakhand-sanctuary",
      title: "Rishikesh Holy Ganga Retreat & Himalayan Trail",
      destination: "Rishikesh, Uttarakhand",
      category: "wellness",
      badge: "Nature & wellness",
      badgeColor: "bg-teal-600 text-white",
      duration: "4 Days / 3 Nights",
      image: "/images/nanitalnew.webp",
      highlights: [
        "Riverside eco-resort with private beach on Ganga",
        "Ganga Aarti ceremony at Parmarth Niketan",
        "Grade III white water rafting adventure",
        "Morning sound healing & yoga meditation",
      ],
      itinerary: [
        { day: "Day 1", title: "Dehradun Airport to Rishikesh Forest Lodge", desc: "Check-in by the emerald Ganga, evening sound bath session." },
        { day: "Day 2", title: "White Water Rafting & Cliff Jump Thrills", desc: "Raft from Marine Drive to Laxman Jhula with expert river guides." },
        { day: "Day 3", title: "Neelkanth Mahadev & Ganga Aarti at Twilight", desc: "Scenic mountain drive followed by lamps floating on sacred river." },
        { day: "Day 4", title: "Sunrise Yoga & Departure", desc: "Himalayan herb tea, organic breakfast and airport transfer." },
      ],
    },
    {
      id: "dubai-city-escape",
      title: "Dubai City, Desert Safari & Marina Escape",
      destination: "Dubai, UAE",
      category: "international",
      badge: "International",
      badgeColor: "bg-sky-700 text-white",
      duration: "5 Days / 4 Nights",
      image: "/images/dubaiimage.webp",
      highlights: [
        "Explore Downtown Dubai and the Burj Khalifa area",
        "Desert safari and Dubai Marina sightseeing ideas",
        "Flexible time for shopping and city experiences",
        "Flights, hotels and activities confirmed on enquiry",
      ],
      itinerary: [
        { day: "Day 1", title: "Arrive in Dubai", desc: "Airport arrival and hotel check-in. Spend the evening at leisure." },
        { day: "Day 2", title: "Downtown Dubai", desc: "Explore Downtown, Dubai Mall and the Burj Khalifa surroundings." },
        { day: "Day 3", title: "Desert Safari", desc: "Enjoy a desert safari experience; activities and transfers are subject to confirmation." },
        { day: "Day 4", title: "Marina & Leisure", desc: "Discover Dubai Marina or use the day for shopping and optional experiences." },
        { day: "Day 5", title: "Departure", desc: "Check out and transfer for your onward flight." },
      ],
    },
    {
      id: "thailand-island-escape",
      title: "Thailand Bangkok & Phuket Island Escape",
      destination: "Bangkok & Phuket, Thailand",
      category: "international",
      badge: "International",
      badgeColor: "bg-sky-700 text-white",
      duration: "6 Days / 5 Nights",
      image: "/images/bankokimage.webp",
      highlights: [
        "Combine Bangkok city time with a Phuket stay",
        "Explore temples, local markets and island scenery",
        "Free time for beaches and optional excursions",
        "Flights, hotels and activities confirmed on enquiry",
      ],
      itinerary: [
        { day: "Day 1", title: "Arrive in Bangkok", desc: "Arrive, transfer to your hotel and enjoy the evening at leisure." },
        { day: "Day 2", title: "Bangkok City", desc: "Explore Bangkok at your own pace, with optional temple and market visits." },
        { day: "Day 3", title: "Travel to Phuket", desc: "Transfer to Phuket and check in; transport arrangements are confirmed with your package." },
        { day: "Day 4", title: "Phuket Beach Day", desc: "Relax by the beach or choose an optional island excursion." },
        { day: "Day 5", title: "Phuket at Leisure", desc: "Enjoy a flexible day for local sightseeing, shopping or beach time." },
        { day: "Day 6", title: "Departure", desc: "Check out and travel onward for your departure." },
      ],
    },
    {
      id: "maldives-island-retreat",
      title: "Maldives Tropical Island Retreat",
      destination: "Maldives",
      category: "international",
      badge: "International",
      badgeColor: "bg-sky-700 text-white",
      duration: "4 Days / 3 Nights",
      image: "/images/kudadoo-maldives-private.webp",
      highlights: [
        "A relaxed island stay surrounded by turquoise waters",
        "Choose from resort and room options on enquiry",
        "Optional snorkelling and water activities, subject to availability",
        "Transfers, meals and inclusions confirmed before booking",
      ],
      itinerary: [
        { day: "Day 1", title: "Arrive in Malé & Island Transfer", desc: "Arrive in Malé and continue to your selected island stay; transfer type is confirmed with your resort." },
        { day: "Day 2", title: "Island Leisure", desc: "Enjoy the island, beach and lagoon, with optional activities available locally." },
        { day: "Day 3", title: "Water & Wellness", desc: "Relax or enquire about snorkelling and other resort activities." },
        { day: "Day 4", title: "Departure", desc: "Transfer back to Malé for your onward flight." },
      ],
    },
  ];

  const filteredTours = toursList.filter((tour) => {
    const matchesCategory =
      activeFilterCategory === "all" || tour.category === activeFilterCategory;
    const matchesDestination =
      searchDestination === "all" ||
      tour.id.startsWith(searchDestination) ||
      tour.destination.toLowerCase().includes(searchDestination.toLowerCase());
    const matchesStyle = searchStyle === "all" || tour.category === searchStyle;
    const matchesSaved = !showSavedTours || Boolean(likedTours[tour.id]);

    return matchesCategory && matchesDestination && matchesStyle && matchesSaved;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-emerald-200 selection:text-emerald-950">
      <header className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-7xl 2xl:max-w-[1490px] -translate-x-1/2 overflow-visible rounded-2xl border border-amber-900/15 bg-[#fffdf8]/95 text-slate-800 backdrop-blur-2xl shadow-[0_16px_50px_rgba(2,6,23,0.22)]">
        <span className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent" />
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-3 sm:px-5 lg:px-6 h-[68px] flex items-center justify-between gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            aria-label="Vista Travelss home"
            className="flex shrink-0 items-center cursor-pointer"
          >
            <div className="flex h-17 w-[112px] sm:w-[128px] items-center justify-center overflow-hidden rounded-xl px-1.5 ">
              <Image
                src="/images/vistalogo.jpeg"
                alt="Vista Travelss - India's Tour Packages"
                width={100}
                height={50}
                priority
                unoptimized
                className="h-full w-full object-contain"
              />
            </div>
          </a>
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 rounded-full border border-emerald-950/[0.06] bg-slate-900/[0.035] p-1 text-[12px] xl:text-[13px] font-semibold text-slate-600">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "destinations", label: "Destinations" },
              { id: "packages", label: "Curated Trips" },
              { id: "experiences", label: "Experiences" },
              { id: "cabs", label: "Cab Services" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-all duration-200 hover:text-emerald-900 relative px-2.5 xl:px-3 py-2 rounded-full cursor-pointer ${activeSection === link.id ? "text-emerald-900 bg-emerald-800/[0.08] font-bold" : ""
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500" />
                )}
              </button>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <SocialLinks />
            <button
              onClick={() => {
                setShowSavedTours(true);
                setActiveFilterCategory("all");
                setSearchDestination("all");
                setSearchStyle("all");
                scrollToSection("packages");
              }}
              className="relative p-2.5 rounded-full bg-white hover:bg-emerald-50 border border-slate-900/10 text-slate-700 transition-all cursor-pointer"
              title="Show saved trips"
              aria-label={`Show ${Object.values(likedTours).filter(Boolean).length} saved trips`}
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                {Object.values(likedTours).filter(Boolean).length}
              </span>
            </button>
            <button
              onClick={() => setCustomPlannerOpen(true)}
              className="px-4 xl:px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-900 to-teal-800 hover:from-emerald-800 hover:to-teal-700 text-white text-[11px] font-extrabold tracking-wide uppercase transition-all shadow-md shadow-emerald-950/15 hover:shadow-lg hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              Plan Custom Trip
            </button>
          </div>
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setCustomPlannerOpen(true)}
              className="px-3.5 py-2 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
            >
              Plan Trip
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-emerald-900/[0.06] rounded-xl border border-slate-900/10 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="absolute top-[calc(100%+0.5rem)] left-0 right-0 lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-amber-900/15 bg-[#fffdf8]/95 backdrop-blur-2xl px-4 sm:px-6 py-5 space-y-3 shadow-2xl animate-fade-in text-slate-800">

            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About Us" },
              { id: "destinations", label: "Top 8 Destinations" },
              { id: "packages", label: "Handcrafted Trips" },
              { id: "experiences", label: "Signature Experiences" },
              { id: "cabs", label: "Cab Services" },
              { id: "contact", label: "Contact Concierge" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left py-3 px-3.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${activeSection === link.id ? "bg-emerald-900/[0.08] text-emerald-950" : "text-slate-600 hover:bg-slate-900/[0.04] hover:text-slate-950"}`}
              >
                {link.label}
              </button>
            ))}
            <SocialLinks className="justify-center border-t border-slate-900/10 pt-4" />
          </div>
        )}
      </header>
      <section id="home" className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            key={heroDestinations[heroIndex].img}
            src={heroDestinations[heroIndex].img}
            alt={heroDestinations[heroIndex].name}
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-center scale-105 brightness-125 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/25 to-slate-950/15" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-7xl 2xl:max-w-[1540px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs sm:text-sm font-semibold shadow-xl">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="tracking-wide">JOURNEYS ACROSS INDIA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h1 className="text-4xl sm:text-4xl lg:text-[50px] 2xl:text-[50px]  tracking-tight text-white leading-[1.08] drop-shadow-2xl">
                Where Every Horizon Tells an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                  Untamed Story.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed font-normal drop-shadow">
                Discover mountain landscapes, Kashmir houseboats, Rajasthan heritage and Kerala backwaters. Explore our sample itineraries or tell us what kind of journey you have in mind.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-white font-bold">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{heroDestinations[heroIndex].name}</span>
                  <span className="text-gray-400 font-normal text-xs">({heroDestinations[heroIndex].region})</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs text-teal-300">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>{heroDestinations[heroIndex].altitude}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs text-amber-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Season: {heroDestinations[heroIndex].bestTime}</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-xs text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{heroDestinations[heroIndex].vibe}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setCustomPlannerOpen(true)}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-xl shadow-emerald-700/30 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Compass className="w-4 h-4" />
                  <span>Plan Custom Expedition</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 text-emerald-300 fill-emerald-300 ml-0.5" />
                  </span>
                  <span>Watch Film Reel</span>
                </button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-400">
                      Spotlight Route
                    </span>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    Explore {heroDestinations.length} destinations
                  </div>
                </div>
                <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-white/15 shadow-inner group">
                  <Image
                    src={heroDestinations[heroIndex].img}
                    alt={heroDestinations[heroIndex].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                        {heroDestinations[heroIndex].region}
                      </span>
                      <h4 className="text-xl text-white leading-tight">
                        {heroDestinations[heroIndex].name}
                      </h4>
                    </div>
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/90 text-white shadow-md">
                      {heroDestinations[heroIndex].altitude}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  {heroDestinations[heroIndex].tagline}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-200">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="truncate">Flexible trip planning</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="truncate">Stays & experiences</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-gray-400 uppercase tracking-wider">Explore {heroDestinations.length} Destinations</span>
                    <span className="text-emerald-400 font-semibold">{heroIndex + 1} / {heroDestinations.length}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {heroDestinations.map((dest, i) => (
                      <button
                        key={dest.id}
                        type="button"
                        onClick={() => setHeroIndex(i)}
                        className={`p-1 rounded-xl text-left transition-all border cursor-pointer ${heroIndex === i
                          ? "bg-emerald-500/20 border-emerald-400 ring-2 ring-emerald-400/50 shadow-md scale-[1.02]"
                          : "bg-white/5 border-white/10 hover:bg-white/10 opacity-70 hover:opacity-100"
                          }`}
                      >
                        <div className="relative h-7 rounded-lg overflow-hidden mb-1">
                          <Image src={dest.img} alt="" fill sizes="100px" className="object-cover" />
                        </div>
                        <span className="block text-[10px] font-bold text-white truncate px-0.5">
                          {dest.name.replace(" Valley", "").replace(" Peaks", "").replace(" Backwaters", "").replace(" Sanctuary", "")}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 max-w-7xl 2xl:max-w-[1540px] mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-3 mb-5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-400 flex items-center gap-1.5 whitespace-nowrap mr-2">
              <Compass className="w-4 h-4" /> Top Circuits:
            </span>
            {heroDestinations.map((dest, i) => (
              <button
                key={dest.id}
                type="button"
                onClick={() => setHeroIndex(i)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${heroIndex === i
                  ? "bg-white text-slate-950 border-white shadow-lg scale-105 font-bold"
                  : "bg-black/50 hover:bg-black/75 text-gray-200 border-white/20 backdrop-blur-md"
                  }`}
              >
                {dest.name}
              </button>
            ))}
          </div>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-4 sm:p-5 shadow-2xl border border-white/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-3 space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                  1. Destination
                </label>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <select
                    value={searchDestination}
                    onChange={(e) => setSearchDestination(e.target.value)}
                    className="w-full bg-transparent font-bold text-gray-900 text-sm outline-none cursor-pointer"
                  >
                    <option value="all">All Destinations</option>
                    <option value="spiti">Spiti Valley (Himachal)</option>
                    <option value="ladakh">Leh & Ladakh</option>
                    <option value="kashmir">Kashmir (Dal Lake & Gulmarg)</option>
                    <option value="himachal">Himachal (Manali & Kasol)</option>
                    <option value="rajasthan">Rajasthan (Udaipur & Jodhpur)</option>
                    <option value="kerala">Kerala (Alleppey Backwaters)</option>
                    <option value="goa">Goa (Private Pool Villas)</option>
                    <option value="uttarakhand">Uttarakhand (Rishikesh Ganga)</option>
                    <option value="dubai">Dubai, UAE</option>
                    <option value="thailand">Thailand</option>
                    <option value="maldives">Maldives</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-3 space-y-1 border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-5">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                  2. Travel Experience
                </label>

                <div className="flex items-center gap-2.5">
                  <Compass className="w-5 h-5 text-teal-600 flex-shrink-0" />

                  <select
                    value={searchStyle}
                    onChange={(e) => setSearchStyle(e.target.value)}
                    className="w-full bg-transparent font-bold text-gray-900 text-sm outline-none cursor-pointer"
                  >
                    <option value="holiday">Holiday</option>
                    <option value="friends">Friends</option>
                    <option value="group">Group</option>
                    <option value="family">Family</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="solo">Solo</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-3 space-y-1 border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-5 relative">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 block">
                  3. Group size
                </label>
                <button
                  type="button"
                  onClick={() => setGuestPickerOpen(!guestPickerOpen)}
                  aria-expanded={guestPickerOpen}
                  className="flex w-full items-center gap-2.5 text-left cursor-pointer"
                >
                  <Users className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div className="text-sm font-bold text-gray-900">
                    {adults} Adults • {rooms} Room{rooms === 1 ? "" : "s"}
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                </button>
                {guestPickerOpen && (
                  <div className="absolute bottom-full left-0 mb-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 z-40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-700">Adults</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults((a) => Math.max(1, a - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults((a) => a + 1)}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-700">Rooms</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setRooms((r) => Math.max(1, r - 1))}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{rooms}</span>
                        <button
                          type="button"
                          onClick={() => setRooms((r) => r + 1)}
                          className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-sm cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuestPickerOpen(false)}
                      className="w-full py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
              <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-gray-200 pt-3 md:pt-0 md:pl-5">
                <button
                  type="button"
                  onClick={() => scrollToSection("packages")}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm tracking-wide transition-all shadow-lg shadow-emerald-700/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>View matching trips</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-900 text-white py-8 border-b border-white/10">
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-1.5xl text-white">{heroDestinations.length} Destinations</p>
                <p className="text-xs text-gray-400 font-medium">Explore across India</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <p className="text-1.5xl text-white">{toursList.length} Itineraries</p>
                <p className="text-xs text-gray-400 font-medium">Browse sample trips</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-1.5xl text-white">Made for you</p>
                <p className="text-xs text-gray-400 font-medium">Request a custom itinerary</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-2 pt-4 sm:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-1.5xl text-white">Trip support</p>
                <p className="text-xs text-gray-400 font-medium">Contact us for assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="destinations" className="py-20 lg:py-28 max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ICONIC REGIONS OF INDIA
            </span>
            <h2 className="text-4xl sm:text-3xl font-medium tracking-tight text-gray-900 mt-4">
              Explore By Destination
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              From snow-capped Himalayan ridges to sun-kissed Arabian coasts, pick your dream landscape.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("packages")}
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:gap-3 transition-all cursor-pointer self-start md:self-auto"
          >
            <span>View All Tour Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {heroDestinations.map((dest, i) => (
            <button
              type="button"
              key={dest.id}
              onClick={() => {
                setHeroIndex(i);
                selectDestination(dest.id);
              }}
              aria-label={`Explore ${dest.name} trips`}
              className="group relative w-full rounded-3xl overflow-hidden text-left shadow-md hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/60 transition-all duration-300 hover:-translate-y-2 cursor-pointer aspect-[3/4] flex flex-col justify-end p-6"
            >
              <Image
                src={dest.img}
                alt={dest.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:from-emerald-950/95 transition-all" />
              <div className="relative z-10 space-y-2 text-white">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase">
                  {dest.region}
                </div>
                <h3 className="text-2xl  tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                  {dest.tagline}
                </p>
                <div className="pt-2 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-emerald-300">
                  <span>Best: {dest.bestTime}</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section id="packages" className="py-20 bg-slate-100/70 border-y border-gray-200">
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                INDIA & INTERNATIONAL PACKAGES
              </span>
              <h2 className="text-4xl sm:text-3xl font-medium tracking-tight text-gray-900 mt-4">
                Tour Ideas & Stays
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Explore sample trips across India and abroad, including Dubai, Thailand and the Maldives. Contact us to confirm availability, pricing and inclusions for your dates.
              </p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: "all", label: "All Escapes" },
                { id: "high-altitude", label: "High Altitude & Spiti" },
                { id: "heritage", label: "Royal Heritage" },
                { id: "lakes", label: "Lakes & Houseboats" },
                { id: "coastal", label: "Coastal Escapes" },
                { id: "wellness", label: "Wellness & Nature" },
                { id: "international", label: "International Packages" },
                { id: "saved", label: `Saved (${Object.values(likedTours).filter(Boolean).length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.id === "saved") {
                      setShowSavedTours(true);
                      setActiveFilterCategory("all");
                      setSearchDestination("all");
                      setSearchStyle("all");
                    } else {
                      setShowSavedTours(false);
                      setActiveFilterCategory(tab.id);
                      if (tab.id === "all" || tab.id === "international") {
                        setSearchDestination("all");
                        setSearchStyle("all");
                      }
                    }
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${(tab.id === "saved" ? showSavedTours : activeFilterCategory === tab.id)
                    ? "bg-[#0E4D3C] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredTours.length === 0 && (
              <div className="md:col-span-2 lg:col-span-4 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center">
                <p className="text-sm text-gray-600">
                  {showSavedTours
                    ? "You have no saved trips yet. Select the heart on a trip to save it here."
                    : "No sample itineraries match those filters. Try another destination or experience."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowSavedTours(false);
                    setActiveFilterCategory("all");
                    setSearchDestination("all");
                    setSearchStyle("all");
                  }}
                  className="text-sm font-bold text-emerald-800 underline underline-offset-4 hover:text-emerald-700"
                >
                  Show all trips
                </button>
              </div>
            )}
            {filteredTours.map((tour) => {
              const isLiked = likedTours[tour.id] || false;
              return (
                <div
                  key={tour.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className={`relative aspect-[4/3] w-full overflow-hidden ${tour.image ? "bg-gray-900" : "bg-gradient-to-br from-sky-950 via-teal-900 to-emerald-700"}`}>
                      {tour.image ? (
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-300/30 via-transparent to-transparent text-white">
                          <Compass className="h-12 w-12 text-white/90" strokeWidth={1.25} />
                          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                            International escape
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide shadow-md ${tour.badgeColor}`}>
                          {tour.badge}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleWishlist(tour.id)}
                        className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md hover:scale-110 active:scale-90 transition-all cursor-pointer"
                        aria-label={isLiked ? `Remove ${tour.title} from saved trips` : `Save ${tour.title}`}
                      >
                        <Heart
                          className={`w-4 h-4 ${isLiked ? "fill-rose-500 text-rose-500" : "text-gray-600"
                            }`}
                        />
                      </button>
                      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500 font-semibold flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          {tour.destination}
                        </span>
                        <span className="text-[10px] font-medium text-gray-500">
                          {tour.category === "international" ? "International package" : "Sample trip"}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-emerald-700 transition-colors">
                        {tour.title}
                      </h3>
                      <ul className="space-y-1.5 pt-1">
                        {tour.highlights.slice(0, 2).map((hl: string, idx: number) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-black text-emerald-800">
                        Price on demand
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedTour(tour);
                          setItineraryModalOpen(true);
                        }}
                        className="px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-all cursor-pointer"
                      >
                        Plan
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTour(tour);
                          setBookingModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-[#0E4D3C] hover:bg-[#0b3c2e] text-white text-xs font-bold transition-all shadow-md hover:scale-105 cursor-pointer"
                      >
                        Enquire
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="experiences" className="py-20 lg:py-28 max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                TRAVEL IDEAS
              </span>
              <h2 className="text-4xl sm:text-3xl font-medium tracking-tight text-gray-900 mt-4">
                Find a trip that feels like yours
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Explore the experiences featured in our sample itineraries, from mountain scenery and heritage towns to houseboats and backwaters.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Mountain escapes",
                  desc: "Explore high-altitude landscapes and mountain towns in Spiti, Ladakh and Himachal.",
                  icon: Sparkles,
                },
                {
                  title: "Heritage & culture",
                  desc: "Discover historic forts, palaces and local heritage across Rajasthan.",
                  icon: Award,
                },
                {
                  title: "Houseboats & backwaters",
                  desc: "See houseboat and backwater experiences featured in our Kashmir and Kerala trips.",
                  icon: Compass,
                },
                {
                  title: "Wellness & nature",
                  desc: "Explore yoga, riverside scenery and nature-focused ideas for Uttarakhand and Kerala.",
                  icon: ShieldCheck,
                },
              ].map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">{exp.title}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => setCustomPlannerOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#0E4D3C] hover:bg-[#0b3c2e] text-white font-extrabold text-sm transition-all shadow-lg hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <span>Request Custom Experience</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] overflow-hidden bg-slate-900 aspect-[16/11] shadow-2xl group">
              <Image
                src="/images/himachalslider.webp"
                alt="Mountain scenery in Himachal Pradesh"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-all duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
                  aria-label="Play the featured travel video"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0E4D3C] flex items-center justify-center shadow-md">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between text-white">
                <div>
                  <p className="font-extrabold text-lg sm:text-xl drop-shadow">
                    Immerse in Cinematic Travel
                  </p>
                  <p className="text-xs text-emerald-300 drop-shadow">
                    Play the featured travel video
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold border border-white/20">
                  Featured video
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cabs" className="bg-white py-20 lg:py-10 border-y border-slate-100">
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-emerald-700">
              <CarFront className="h-4 w-4" />
              Travel across India
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
              Cab services for every kind of journey
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Book a cab for your trip anywhere in India. Choose from comfortable sedans, family-friendly cars and group travel options.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Swift Dzire",
                detail: "A comfortable choice for couples and small families.",
                icon: CarFront,
                image: "/images/cab-swift-dzire.jpg",
              },
              {
                name: "Ertiga",
                detail: "Extra room for family outings and small groups.",
                icon: CarFront,
                image: "/images/cab-ertiga.jpg",
              },
              {
                name: "Innova",
                detail: "Enjoy a spacious ride for family and outstation trips.",
                icon: CarFront,
                image: "/images/cab-innova.jpg",
              },
              {
                name: "Tempo Traveller",
                detail: "Travel together with a convenient option for groups.",
                icon: BusFront,
                image: "/images/cab-tempo-traveller.jpg",
              },
            ].map((vehicle) => {
              const VehicleIcon = vehicle.icon;
              return (
                <div
                  key={vehicle.name}
                  className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="group relative h-44 overflow-hidden bg-slate-200">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} cab`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/10" />
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-emerald-800 shadow-sm">
                      <VehicleIcon className="h-5 w-5" />
                    </div>  
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900">{vehicle.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{vehicle.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-between gap-5 rounded-3xl bg-emerald-950 px-6 py-7 text-center text-white sm:flex-row sm:px-8 sm:text-left">
            <div>
              <h3 className="text-lg font-bold">Need a cab anywhere in India?</h3>
              <p className="mt-1 text-sm text-emerald-100/80">Tell us your route and travel plans to enquire about cab options.</p>
            </div>
            <a
              href="https://wa.me/918076074751?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20cab%20services%20across%20India."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-100"
            >
              Enquire about cabs <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <section id="offers" className="w-full bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>PLAN YOUR NEXT ESCAPE</span>
            </div>
            <h3 className="text-4xl sm:text-3xl font-medium tracking-tight text-white mt-4">
              Have a destination in mind?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Share your dates and travel preferences with us. We&apos;ll help you explore suitable itinerary, stay and transport options.
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <button
              type="button"
              onClick={() => setCustomPlannerOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-emerald-950 transition-colors hover:bg-emerald-100"
            >
              Plan a custom trip <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      <AboutSection onPlanTrip={() => setCustomPlannerOpen(true)} />
      <section id="planning" className="py-20 lg:py-24 max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 mt-4 sm:text-4xl">
            A clearer way to plan your trip
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Start with a destination or an idea. We&apos;ll help you explore the options and confirm the details before you book.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Choose a destination",
              detail: "Browse the regions and sample itineraries featured on this page.",
            },
            {
              step: "02",
              title: "Share your preferences",
              detail: "Tell us your dates, group size, interests and any stay or transport needs.",
            },
            {
              step: "03",
              title: "Confirm the details",
              detail: "We'll discuss availability, pricing and inclusions with you before a booking is confirmed.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-sm font-bold tracking-widest text-emerald-700">{item.step}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#064E3B] to-slate-950 p-8 sm:p-12 border border-emerald-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <h3 className="text-2xl sm:text-4xl tracking-tight">
                Need help planning your trip?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80">
                Contact us with your destination and travel preferences to discuss available options.
              </p>
            </div>
            <a href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition-colors hover:bg-emerald-400">
              Contact us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <footer id="contact" className="bg-slate-950 text-gray-400 pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl 2xl:max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-17 w-[112px] sm:w-[128px] items-center justify-center overflow-hidden rounded-xl px-1.5 ">
                  <Image
                    src="/images/vistalogo.jpeg"
                    alt="Vista Travelss - India's Tour Packages"
                    width={100}
                    height={50}
                    priority
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                Vista Travelss helps travellers explore Himachal Pradesh and destinations across India with sample itineraries, stays, local experiences and trip-planning assistance.
              </p>
              <SocialLinks className="pt-1" />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-extrabold text-white tracking-wider uppercase">
                Destinations
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => selectDestination("spiti")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Spiti Valley Circuit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("ladakh")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Leh Ladakh & Pangong Tso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("kashmir")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Kashmir Dal Lake & Gulmarg
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("himachal")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Himachal & Manali Chalets
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("rajasthan")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Rajasthan Royal Havelis
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("kerala")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Kerala Backwater Houseboats
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("goa")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Goa Private Pool Villas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => selectDestination("uttarakhand")}
                    className="hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    Uttarakhand Ganga Retreats
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-extrabold text-white tracking-wider uppercase">
                Experiences
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href="#experiences" className="hover:text-emerald-400 transition-colors">Mountain escapes</a></li>
                <li><a href="#experiences" className="hover:text-emerald-400 transition-colors">Heritage &amp; culture</a></li>
                <li><a href="#experiences" className="hover:text-emerald-400 transition-colors">Houseboats &amp; backwaters</a></li>
                <li><a href="#experiences" className="hover:text-emerald-400 transition-colors">Wellness &amp; nature</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-extrabold text-white tracking-wider uppercase">
                Contact us
              </p>
              <ul className="space-y-2.5 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a href="tel:+918076074751" className="hover:text-emerald-300 transition-colors">+91 80760 74751</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <a href="mailto:info@vistatravelss.com" className="hover:text-emerald-300 transition-colors">info@vistatravelss.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <a
                    href="https://wa.me/918076074751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    WhatsApp Vista Travelss
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-emerald-300 transition-colors">
                    Hotel, cab &amp; tour enquiry form
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p className="text-center text-white">© {new Date().getFullYear()} Vista Travelss. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a style={{ color: 'white' }} href="/cancellation-refund-policy/" className="transition-colors">Cancellation &amp; Refund</a>
              <a style={{ color: 'white' }} href="/terms-and-conditions/" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
              <a style={{ color: 'white' }} href="/privacy-policy/" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
      {videoModalOpen && (
        <div role="dialog" aria-modal="true" aria-label="Featured travel video" className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-video w-full bg-black">
              <video
                className="h-full w-full"
                src="/videos/himachalclip.mp4"
                controls
                autoPlay
                playsInline
                aria-label="Vista Travelss Himachal travel video"
              >
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        </div>
      )}
      {itineraryModalOpen && selectedTour && (
        <div role="dialog" aria-modal="true" aria-labelledby="itinerary-dialog-title" className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 my-8 space-y-6">
            <button
              onClick={() => setItineraryModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                {selectedTour.duration} • {selectedTour.destination}
              </div>
              <h3 id="itinerary-dialog-title" className="text-2xl text-gray-500 leading-tight">
                {selectedTour.title}
              </h3>
              <p className="text-xs text-gray-500">
                Sample day-by-day plan. Availability, transport, stays and inclusions are confirmed separately.
              </p>
            </div>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {selectedTour.itinerary.map((dayItem) => (
                <div key={dayItem.day} className="flex gap-4 p-3.5 rounded-2xl bg-slate-50 border border-gray-100">
                  <div className="w-16 h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0">
                    {dayItem.day}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{dayItem.title}</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{dayItem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-2xl font-black text-emerald-800">
                  Price on demand
                </p>
              </div>

              <button
                onClick={() => {
                  setItineraryModalOpen(false);
                  setBookingModalOpen(true);
                }}
                className="px-6 py-3 rounded-full bg-[#0E4D3C] hover:bg-[#0b3c2e] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                Continue enquiry
              </button>
            </div>
          </div>
        </div>
      )}
      {bookingModalOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="booking-dialog-title" className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Trip enquiry
              </span>
              <h3 id="booking-dialog-title" className="text-2xl text-gray-900">
                Enquire about {selectedTour?.title || "this trip"}
              </h3>
              <p className="text-xs text-gray-500">
                This form opens a WhatsApp enquiry; it does not confirm a booking. Booking terms are shared before confirmation.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const details = [
                  `Trip enquiry: ${selectedTour?.title || "Sample itinerary"}`,
                  `Name: ${formData.get("firstName")} ${formData.get("lastName")}`,
                  `Email: ${formData.get("email")}`,
                  `Phone: ${formData.get("phone")}`,
                  `Preferred month / notes: ${formData.get("notes") || "Not provided"}`,
                ].join("\n");
                const whatsappUrl = `https://wa.me/918076074751?text=${encodeURIComponent(details)}`;
                const whatsappWindow = window.open(whatsappUrl, "_blank");
                if (whatsappWindow) {
                  whatsappWindow.opener = null;
                } else {
                  window.location.assign(whatsappUrl);
                }
                setBookingModalOpen(false);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter Your Last Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone Number (for WhatsApp)
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder=" Enter Your phone number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Preferred Month / Special Notes
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Traveling with family, high-altitude acclimatization needed, anniversary dinner..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-sm transition-all shadow-md hover:scale-[1.01] cursor-pointer"
              >
                Continue on WhatsApp to send enquiry
              </button>
            </form>
          </div>
        </div>
      )}
      {customPlannerOpen && (
        <div role="dialog" aria-modal="true" aria-labelledby="custom-planner-dialog-title" className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6">
            <button
              onClick={() => setCustomPlannerOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                Custom trip enquiry
              </span>
              <h3 id="custom-planner-dialog-title" className="text-2xl text-gray-900">
                Plan Your Custom Journey
              </h3>
              <p className="text-xs text-gray-500">
                Tell us where you would like to travel. This form opens a WhatsApp message so you can send your enquiry to our team.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const details = [
                  "Customized tour package enquiry",
                  `Destination: ${formData.get("destination")}`,
                  `Trip duration: ${formData.get("duration")}`,
                  `Travelers: ${formData.get("travelers")}`,
                  `Name and contact: ${formData.get("contact")}`,
                  `Email: ${formData.get("email")}`,
                ].join("\n");
                const whatsappUrl = `https://wa.me/918076074751?text=${encodeURIComponent(details)}`;
                const whatsappWindow = window.open(whatsappUrl, "_blank");
                if (whatsappWindow) {
                  whatsappWindow.opener = null;
                } else {
                  window.location.assign(whatsappUrl);
                }
                setCustomPlannerOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Select Destination(s)
                </label>
                <select name="destination" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none">
                  <option>Spiti Valley (Himachal)</option>
                  <option>Leh Ladakh & Pangong</option>
                  <option>Kashmir (Dal Lake & Gulmarg)</option>
                  <option>Himachal (Manali & Kasol)</option>
                  <option>Rajasthan (Udaipur & Jodhpur)</option>
                  <option>Kerala Backwaters & Munnar</option>
                  <option>Goa Beachfront Villas</option>
                  <option>Uttarakhand Ganga Sanctuary</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Trip Duration
                  </label>
                  <select name="duration" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none">
                    <option>4 - 6 Days</option>
                    <option>7 - 9 Days</option>
                    <option>10 - 14 Days</option>
                    <option>15+ Days Grand Tour</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Travelers
                  </label>
                  <input
                    type="text"
                    name="travelers"
                    defaultValue={`${adults} Adults, ${rooms} Room${rooms === 1 ? "" : "s"}`}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Name & Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Your name - phone number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-emerald-600 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#0E4D3C] hover:bg-[#0b3c2e] text-white  text-sm transition-all shadow-md cursor-pointer"
              >
                Continue on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
