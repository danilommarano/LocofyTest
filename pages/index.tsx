import type { NextPage } from "next";
import Header from "../components/header";
import SearchContainer from "../components/search-container";
import FlightContainer from "../components/flight-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysForm from "../components/popular-stays-form";
import WeeklyUpdatesSection from "../components/weekly-updates-section";
import Footer from "../components/footer";

const Homepage: NextPage = () => {
  return (
    <div className="relative rounded-2xl bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[51.58px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
      <div className="self-stretch flex flex-col items-center justify-start">
        <Header />
        <SearchContainer />
      </div>
      <div className="w-full flex flex-col py-0 px-[59.803165435791016px] box-border items-center justify-start gap-[59.8px] max-w-[1280px] md:pl-[30px] md:pr-[30px] md:box-border">
        <FlightContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysForm />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <WeeklyUpdatesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
