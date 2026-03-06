export const COMPANY = {
  name: "Volta Environmental Services",
  shortName: "Volta",
  motto: "Powering Clean Environments",
  domain: "voltaenvironmental.ca",
  serviceArea: "New Brunswick, Canada",
  phone: "(506) 721-6376",
  email: "voltaenvironmental@gmail.com",
  hours: "Monday - Saturday, 8:00 AM - 6:00 PM",
  address: "New Brunswick, Canada",
  social: {
    facebook: "https://www.facebook.com/share/18EH6QFMtZ/",
    instagram: "https://www.instagram.com/voltaenvironmental",
    youtube: "https://youtube.com/@voltaenvironmental",
  },
} as const;

export const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw6cLvWwmf2njjmMsFO8j11HiKD5R6oRwcTqz-eoHcfCnem-Zb_LID9yWyemuPg1FzE/exec";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const RESIDENTIAL_PRICING = [
  {
    plan: "Weekly",
    price12Dogs: "$25",
    price34Dogs: "$30",
    popular: true,
  },
  {
    plan: "Bi-Weekly",
    price12Dogs: "$40",
    price34Dogs: "$45",
    popular: false,
  },
  {
    plan: "Monthly",
    price12Dogs: "$65",
    price34Dogs: "$70",
    popular: false,
  },
] as const;

export const COMMERCIAL_PRICING = [
  {
    size: "Small Property",
    units: "1–10 units",
    price: "$80/mo",
  },
  {
    size: "Medium Property",
    units: "10–20 units",
    price: "$130/mo",
  },
  {
    size: "Large Property",
    units: "20–35 units",
    price: "$200/mo est.",
  },
  {
    size: "Custom",
    units: "35+ units",
    price: "Call for Quote",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "CalendarCheck",
    title: "Reliable Scheduling",
    description:
      "Consistent weekly, bi-weekly, or monthly visits you can count on. We show up, every time.",
  },
  {
    icon: "Leaf",
    title: "Eco-Conscious",
    description:
      "Biodegradable bags and responsible waste disposal. We protect your yard and the environment.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe for Kids & Pets",
    description:
      "Yards cleaned to the highest sanitary standards so your family can play worry-free.",
  },
  {
    icon: "DollarSign",
    title: "Transparent Pricing",
    description:
      "No hidden fees. No contracts. Clear pricing from day one with no surprises.",
  },
  {
    icon: "MapPin",
    title: "Locally Owned",
    description:
      "Proudly serving our local community. We're your neighbours and we care about where we live.",
  },
  {
    icon: "Award",
    title: "Professional Service",
    description:
      "Insured, equipped, and committed to delivering quality service every single visit.",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Request a Free Quote",
    description:
      "Fill out our quick form or give us a call. We'll get back to you within 24 hours.",
    icon: "ClipboardList",
  },
  {
    step: 2,
    title: "Choose Your Plan",
    description:
      "Select the service frequency and plan that works best for your household or property.",
    icon: "CalendarDays",
  },
  {
    step: 3,
    title: "Enjoy a Clean Yard",
    description:
      "Sit back and relax. We'll handle the dirty work so your family and pets can enjoy a clean, safe yard.",
    icon: "Home",
  },
] as const;

export const MISSION_STATEMENT =
  "At Volta Environmental Services, we believe clean spaces create healthy lives. We help busy families maintain safe, sanitary yards so children can play freely and pets can roam comfortably. Through professional service, eco-conscious practices, and unwavering reliability, we're committed to protecting what matters most — your home and your community.";

export const VALUES = [
  {
    title: "Reliability",
    description: "We show up on time, every time. Your schedule is our priority.",
    icon: "Clock",
  },
  {
    title: "Eco-Responsibility",
    description:
      "Protecting your yard and our planet through sustainable practices.",
    icon: "TreePine",
  },
  {
    title: "Community",
    description:
      "A local business built to support and serve our community.",
    icon: "Heart",
  },
  {
    title: "Professionalism",
    description:
      "Insured, equipped, and committed to exceeding your expectations.",
    icon: "Briefcase",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Laeticia M.",
    location: "NB, Canada",
    rating: 5,
    text: "Volta has been amazing! My yard has never been cleaner and the kids can finally play outside without me worrying. Highly recommend their weekly service!",
  },
  {
    name: "James T.",
    location: "NB, Canada",
    rating: 5,
    text: "Professional, reliable, and great communication. They show up exactly when they say they will. Best money I spend each month.",
  },
  {
    name: "Linda K.",
    location: "NB, Canada",
    rating: 5,
    text: "We manage a small condo complex and Volta keeps our grounds spotless. The commercial service has been a game-changer for our property.",
  },
] as const;
