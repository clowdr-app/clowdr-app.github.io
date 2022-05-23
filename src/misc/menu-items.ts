export const menuItems: {
  link: string;
  text: string;
  image?: {
    src: string;
    w?: number | string;
    h?: number | string;
    showText?: { desktop?: boolean; mobile?: boolean };
  };
}[] = [
  { link: "/host", text: "Host a conference" },
  { link: "/sponsor", text: "Sponsorship" },
  { link: "/resources", text: "Resources" },
  { link: "/contact", text: "Contact Us" },
  {
    link: "https://github.com/clowdr-app/clowdr",
    text: "GitHub",
    image: {
      src: "/images/logos/GitHub-Mark-64px.png",
      w: "32px",
      showText: { mobile: true },
    },
  },
];
