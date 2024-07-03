export default function FullscreenMenu() {
  return (
    <div className="h-screen bg-black fixed  top-0 right-0 text-primary-foreground z-40 font-oswald "></div>
  );
}

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Featured",
    href: "/#featured",
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Projects",
    href: "/#projects",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];
