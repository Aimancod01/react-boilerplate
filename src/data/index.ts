import { CircleUserRound, Home, Settings } from "lucide-react";

export const navItems = [
  { id: 1, name: "Dashboard", icon: Home, link: "/dashboard", end: true },
  { id: 1, name: "User", icon: CircleUserRound, link: "/dashboard/user" },
  { id: 2, name: "Settings", icon: Settings, link: "/dashboard/settings" },
];

export const userData = [
  {
    id: 1,
    first_name: "Diarmid",
    last_name: "Corben",
    email: "dcorben0@rakuten.co.jp",
    gender: "Male",
    dob: "11/30/2024",
  },
  {
    id: 2,
    first_name: "Deny",
    last_name: "Craddy",
    email: "dcraddy1@addthis.com",
    gender: "Female",
    dob: "1/18/2025",
  },
  {
    id: 3,
    first_name: "Nickolaus",
    last_name: "Crowcombe",
    email: "ncrowcombe2@cocolog-nifty.com",
    gender: "Male",
    dob: "4/24/2025",
  },
  {
    id: 4,
    first_name: "Corbet",
    last_name: "Druce",
    email: "cdruce3@mapy.cz",
    gender: "Male",
    dob: "4/15/2025",
  },
];
