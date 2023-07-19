import { Coins, ICoins } from "@/components/cards/coins";
import { History } from "@/components/cards/history";
import { IList, ListCard } from "@/components/cards/list";
import { QuickTrade } from "@/components/cards/trade";
import { Header } from "@/components/header";

import { FiChevronRight } from "react-icons/fi";

const listTrend: IList[] = [
  {
    name: "Tether",
    currency: "USDT",
    rate: "+0.40%",
    icon: "/icons/tether-icon.svg",
  },
  {
    name: "Uniswap",
    currency: "UNI",
    rate: "+2.30%",
    icon: "/icons/uniswap-icon.svg",
  },
  {
    name: "Wazirx",
    currency: "WRX",
    rate: "-0.06%",
    icon: "/icons/wazirx-icon.svg",
  },
];

const listRecentlyAdded: IList[] = [
  {
    name: "Pinoxa",
    currency: "PINO",
    rate: "$0.000314",
    icon: "/icons/pinoxa-icon.svg",
  },
  {
    name: "Stacks",
    currency: "STK",
    rate: "$0.0008765",
    icon: "/icons/stacks-icon.svg",
  },
  {
    name: "Symbol",
    currency: "SYB",
    rate: "$0.00000001239",
    icon: "/icons/symbol-icon.svg",
  },
];

const listCoins: ICoins[] = [
  {
    name: "Compound",
    value: "$27,308.00",
    rate: "+8250%",
    icon: "/icons/compound-coin-icon.svg",
  },
  {
    name: "Shibalnu",
    value: "$0.0008827",
    rate: "+660910%",
    icon: "/icons/shibalnu-coin-icon.svg",
  },
  {
    name: "ThetaFuel",
    value: "$0.04276",
    rate: "-151%",
    icon: "/icons/thetafuel-coin-icon.svg",
  },
  {
    name: "ThetaFuel",
    value: "$0.04276",
    rate: "-151%",
    icon: "/icons/thetafuel-coin-icon.svg",
  },
];

export default function Dashboard() {
  return (
    <div id="dashboard" className="flex flex-col bg-main-1 text-white w-full">
      <Header name="Dashboard" />

      <label className="sr-only">TRENDING</label>
      <div className="px-7 mt-10">
        <h3 className="text-sub-2 text-[16px] italic mb-4">
          Today's prices by marketcap
        </h3>

        <div className="grid lg:grid-cols-2 gap-x-5 gap-y-5 lg:gap-y-0">
          <ListCard
            title="Trending"
            icon="/icons/trending-icon.svg"
            list={listTrend}
          />
          <ListCard
            title="Recently added"
            type="currency"
            icon="/icons/recently-added-icon.svg"
            list={listRecentlyAdded}
          />
        </div>
      </div>

      <label className="sr-only">TOP COINS</label>
      <div className="px-7 my-5 relative">
        <h2 className="text-[26px] text-white mb-4">Top coins</h2>

        <div className="snap-x snap-mandatory scrollbar-rounded-lg scrollbar-thin p-2 relative flex min-h-[318px] overflow-y-hidden">
          <div className="flex absolute top-0 left-0 gap-5">
            {listCoins.map((li, index: number) => (
              <Coins {...li} index={index} />
            ))}
          </div>
        </div>
        <div className="absolute top-[45%] right-2 hover:scale-[110%] duration-150 cursor-pointer rounded-full h-[34px] w-[34px] flex justify-center items-center bg-white">
          <FiChevronRight color="black" />
        </div>
      </div>

      <label className="sr-only">QUICK TRADE & HISTORY</label>
      <div className="px-7 my-5 grid gap-x-5 gap-y-5 xl:gap-y-0 xl:grid-cols-2">
        <QuickTrade />
        <History />
      </div>
    </div>
  );
}
