export interface ILink {
  name: string;
  path: string;
  icon: string;
  isActive?: boolean;
}

export const links: ILink[] = [
  {
    name: "dashboard",
    path: "/",
    icon: "/icons/dashboard-icon.svg",
  },
  {
    name: "portfolio",
    path: "/portfolio",
    icon: "/icons/portfolio-icon.svg",
  },
  {
    name: "trading",
    path: "/trading",
    icon: "/icons/trading-icon.svg",
  },
  {
    name: "watchlist",
    path: "/watchlist",
    icon: "/icons/watchlist-icon.svg",
  },
  {
    name: "academy",
    path: "/academy",
    icon: "/icons/academy-icon.svg",
  },
  {
    name: "profile",
    path: "/profile",
    icon: "/icons/profile-icon.svg",
  },
  {
    name: "wallet",
    path: "/wallet",
    icon: "/icons/wallet-icon.svg",
  },
];
