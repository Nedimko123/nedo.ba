"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-3 mb-8 text-2xl text-purple-600">
      <p className="font-extrabold text-4xl text-slate-100">
        Nedim Malicbegovic
      </p>
      <div className="flex flex-row gap-8 justify-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              className={
                isActive
                  ? "text-purple-700 underline font-extrabold hover:text-purple-600 transition duration-300 ease-in"
                  : "text-slate-100 transition duration-300 ease-in hover:text-purple-200"
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
