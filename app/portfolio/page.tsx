import { Header } from "@/components/header";
import { PortfolioHeader } from "@/components/header/portfolio-header";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col bg-main-1 text-white w-full">
      <Header name="Portfolio" />

      <div className="px-7 mt-10">
        <PortfolioHeader />
      </div>
    </div>
  );
}
