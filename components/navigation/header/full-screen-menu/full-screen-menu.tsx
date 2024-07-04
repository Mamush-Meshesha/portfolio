import Button from "@/components/ui/button";
import Link from "next/link";

export default function FullscreenMenu() {
  return (
    <div className="h-[5rem] !flex justify-center items-center bg-black  fixed  top-0 right-0 left-0 text-primary-foreground z-40 font-oswald  ">
      {navItems.map((nav, i) => (
        <div
          key={i}
          className="!flex !flex-row  items-center justify-center h-full"
        >
          <Button className="flex text-xl">
            <Link href={nav.href}>{nav.title}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Featured",
    href: "#featured",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];
