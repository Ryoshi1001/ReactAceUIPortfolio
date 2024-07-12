"use client";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdReviews } from "react-icons/md";



export function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 " />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Skill",
      link: "#software",
      icon: <GiSkills className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "#websites",
      icon: (
        <FaProjectDiagram className="h-4 w-4" />
      ),
    },
    {
      name: "Reviews",
      link: "#reviews",
      icon: (
        <MdReviews className="h-4 w-4" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

