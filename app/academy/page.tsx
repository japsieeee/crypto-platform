import { IRelease, Release } from "@/components/cards/release";
import { Header } from "@/components/header";
import Image from "next/legacy/image";

import { CiStop1, CiPause1 } from "react-icons/ci";

const data: IRelease[] = [
  {
    title: "How you can transfer your fund balance?",
    difficulty: "Beginner",
    createdAt: "10m",
    date: "Sep 2, 2022",
    bg: "/images/release-1.png",
  },
  {
    title: "What are other functions of crypto currencies?",
    difficulty: "Beginner",
    createdAt: "15m",
    date: "Sep 2, 2022",
    bg: "/images/release-2.png",
  },
  {
    title: "What are NFT games and how do they work?",
    difficulty: "Advance",
    createdAt: "5m",
    date: "Sep 2, 2022",
    bg: "/images/release-3.png",
  },
  {
    title: "What is QuickSwap and how does it work?",
    difficulty: "Advance",
    createdAt: "5m",
    date: "Sep 2, 2022",
    bg: "/images/release-4.png",
  },
  {
    title: "How you can transfer your fund balance?",
    difficulty: "Beginner",
    createdAt: "10m",
    date: "Sep 2, 2022",
    bg: "/images/release-1.png",
  },
];

const Academy = () => {
  return (
    <div id="academy" className="flex flex-col bg-main-1 text-white w-full">
      <Header name="Academy" />

      <div className="px-7 mt-10">
        <h1 className="text-[26px] mb-4">Latest release</h1>

        <div className="relative snap-x snap-mandatory scrollbar-rounded-lg scrollbar-thin p-2 flex min-h-[318px] overflow-y-hidden">
          <div className="flex absolute top-0 left-0 gap-5">
            {data.map((datum, index: number) => (
              <Release {...datum} key={index} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 mb-10 gap-5">
          <div className="col-span-1 md:col-span-2 w-full h-full relative">
            <h1 className="text-[26px] mb-4">Live now</h1>
            <div className="w-full min-h-[426px] relative rounded-[24px] overflow-hidden">
              <label htmlFor="Profile" className="sr-only">
                K YOU
              </label>
              <div className="absolute flex items-center justify-between bg-sidebar rounded-full p-1 min-w-[68px] top-5 left-5 z-10">
                <div className="text-[14px] text-black font-medium flex items-center justify-center rounded-full h-[30px] w-[30px] bg-green-2">
                  K
                </div>
                <span className="text-[12px] px-2">You</span>
              </div>

              <label htmlFor="Recordings" className="sr-only">
                RECORDINGS
              </label>
              <div className="absolute flex items-center justify-between bg-sidebar rounded-full p-1 min-w-[68px] top-5 right-5 z-10">
                <div className="text-[14px] text-black font-medium flex items-center justify-center rounded-full h-[30px] w-[30px] bg-white">
                  <span className="bg-red-1 p-[5px] rounded-full" />
                </div>
                <span className="text-[12px] px-2">Recording...</span>
                <button className="w-[30px] h-[30px] bg-main-2 rounded-full flex justify-center items-center mr-1">
                  <CiPause1 />
                </button>
                <button className="w-[30px] h-[30px] bg-main-2 rounded-full flex justify-center items-center">
                  <CiStop1 />
                </button>
              </div>

              <Image
                src="/images/live2.png"
                layout="fill"
                className="object-cover"
                alt="live"
              />
            </div>
          </div>
          <div className="col-span-1 max-w-[358px] w-full h-full min-h-[480px] bg-green-2 rounded-[24px]">
            <div className="flex justify-center items-center w-full h-full relative overflow-hidden">
              <div className="w-full h-[334px] absolute z-20 top-[-80px] left-0">
                <Image src="/icons/vector.svg" layout="fill" alt="vector" />
              </div>
              <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full p-4">
                <h1 className="text-black text-center text-[16px]">{`Individuals can make informed decisions, mitigate risks, and unlock opportunities in the rapidly evolving landscape of cryptocurrencies and decentralized finance.`}</h1>
              </div>
              <div className="flex justify-center items-end absolute bottom-10 left-0 w-full h-full">
                <button className="bg-white text-black py-2 px-4 min-w-[80%] mx-auto rounded-full font-medium">
                  Get premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
