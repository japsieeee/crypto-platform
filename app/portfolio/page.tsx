import { Header } from "@/components/header";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col bg-main-1 text-white w-full">
      <Header name="Portfolio" />

      <div className="px-7 mt-10">
        <h3 className="text-sub-2 text-[12px] italic mb-4">Current balance</h3>
      </div>
    </div>
  );
}
