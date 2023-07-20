export interface ILink {
  name: string;
  path: string;
  icon: string;
  disabled?: boolean;
  isActive?: boolean;
}

export const links: ILink[] = [
  {
    name: "dashboard",
    path: "/",
    icon: "/icons/dashboard-icon.svg",
    disabled: false,
  },
  {
    name: "portfolio",
    path: "/portfolio",
    icon: "/icons/portfolio-icon.svg",
    disabled: false,
  },
  {
    name: "trading",
    path: "/trading",
    icon: "/icons/trading-icon.svg",
    disabled: true,
  },
  {
    name: "watchlist",
    path: "/watchlist",
    icon: "/icons/watchlist-icon.svg",
    disabled: false,
  },
  {
    name: "academy",
    path: "/academy",
    icon: "/icons/academy-icon.svg",
    disabled: false,
  },
  {
    name: "profile",
    path: "/profile",
    icon: "/icons/profile-icon.svg",
    disabled: true,
  },
  {
    name: "wallet",
    path: "/wallet",
    icon: "/icons/wallet-icon.svg",
    disabled: true,
  },
];
