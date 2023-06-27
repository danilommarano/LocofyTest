import type { NextPage } from "next";
import PopularStaysCard from "./popular-stays-card";
import HotelCardContainer from "./hotel-card-container";

const PopularStaysForm: NextPage = () => {
  return (
    <form className="self-stretch flex flex-col items-start justify-start gap-[14.95px]">
      <div className="self-stretch flex flex-row items-center justify-center">
        <b className="relative text-[22.43px] tracking-[0.04em] capitalize inline-block font-roboto text-darkslategray-300 text-left w-[826.29px] h-[26.16px] shrink-0 sm:text-3xl">
          Popular Stays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[7.48px] md:hidden"
          href="#"
        >
          <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-roboto text-cornflowerblue-200 text-right inline-block w-[105.15px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright4.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <PopularStaysCard
          roomDimensions="/unsplashrlwe8f8anoc@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomReviews="/video.svg"
          roomReviewCount="(60 reviews)"
          roomRating="4.9"
          roomId="/vector.svg"
        />
        <HotelCardContainer
          roomDimensions="/unsplashtsn8bpopveo@2x.png"
          roomType="2-Story beachfront suite"
          roomPrice="Discovery Shores"
          roomReviews="$360/night"
          roomRating="(116 reviews)"
          roomRatingComparison="4.8"
          roomDimensionsComparison="/vector1.svg"
        />
        <HotelCardContainer
          roomDimensions="/unsplashrlwe8f8anoc1@2x.png"
          roomType="Single deluxe hut"
          roomPrice="Arctic Hut "
          roomReviews="$420/night"
          roomRating="(78 reviews)"
          roomRatingComparison="4.7"
          roomDimensionsComparison="/vector2.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <PopularStaysCard
          roomDimensions="/unsplashyqrybvxug5q@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomReviews="/video1.svg"
          roomReviewCount="(63 reviews)"
          roomRating="4.6"
          roomId="/vector3.svg"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[7.48px] md:flex md:mt-4">
        <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-roboto text-cornflowerblue-200 text-right inline-block w-[105.15px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
          alt=""
          src="/arrowright5.svg"
        />
      </div>
    </form>
  );
};

export default PopularStaysForm;
