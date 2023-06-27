import type { NextPage } from "next";
import TripCardContainer from "./trip-card-container";

const RecommendedHolidaysContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[17.94px] text-left text-[22.43px] text-darkslategray-300 font-roboto">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[149.43px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-200 md:hidden"
          href="#"
        >
          <div className="relative tracking-[0.04em] font-medium inline-block w-[124.01px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright2.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] text-[14.95px] text-darkslategray-200 md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        <div className="flex-1 flex flex-col py-0 px-[11.960633277893066px] box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
          <img
            className="self-stretch relative rounded-t-[7.48px] rounded-b-none max-w-full overflow-hidden h-[180.9px] shrink-0 object-cover"
            alt=""
            src="/unsplash5mv818tzxeo@2x.png"
          />
          <div className="self-stretch rounded-t-none rounded-b-[7.48px] bg-primary-contrast flex flex-col py-[14.950791358947754px] px-[11.960633277893066px] items-center justify-center border-[0.7px] border-solid border-whitesmoke">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[2.24px]">
                <div className="self-stretch relative tracking-[0.02em] font-medium">
                  Bali
                </div>
                <div className="self-stretch relative text-[11.96px] tracking-[0.02em] text-darkgray">
                  4D3N
                </div>
              </div>
              <div className="relative text-[23.92px] leading-[25.42px] font-baloo-bhai text-cornflowerblue-100 text-right inline-block w-[53.82px] h-[25.42px] shrink-0">
                $899
              </div>
            </div>
          </div>
        </div>
        <TripCardContainer
          packageId="/unsplashj82dskoxvy8@2x.png"
          packageDestination="Switzerland"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <TripCardContainer
          packageId="/unsplash4ezkckxolre@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
          propWidth="53.82px"
        />
        <TripCardContainer
          packageId="/unsplashuyqmxhjr3ne@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
          propWidth="52.33px"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast w-[149.43px] hidden flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-200 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[124.01px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
