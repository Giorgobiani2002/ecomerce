"use client";

import { navLinks } from "@/commons/services/navLinks";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const PathName = usePathname();

  return (
    <nav className="sm:flex hidden">
      <ul className="flex gap-10">
        {navLinks.map((item) => {
          const isActive = PathName.startsWith(item.link);

          return (
            <li key={item.link}>
              <span
                className={`font-publicSans font-bold leading-[24px] hover:text-black group-hover:text-black duration-1000  ${
                  isActive
                    ? "text-[#201F24] group-hover:text-black"
                    : "text-[#6C7275]"
                }  text-[14px]`}
              >
                <Link href={item.link}>{item.title}</Link>
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
