import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header className="self-stretch bg-primary-contrast h-[57.56px] flex flex-row py-[16.445871353149414px] px-[59.803165435791016px] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[10.47px] text-darkslategray-200 font-roboto lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <img
          className="relative w-[130.07px] h-[24.67px] overflow-hidden shrink-0"
          alt=""
          src="/fickleflight-logo.svg"
        />
        <div className="flex flex-row items-center justify-end gap-[26.91px] sm:flex">
          <div className="flex flex-row items-center justify-end gap-[22.43px] md:hidden">
            <div className="relative text-cornflowerblue-100 inline-block w-[35.13px] h-[11.96px] shrink-0">
              Explore
            </div>
            <div className="relative inline-block w-[32.14px] h-[11.96px] shrink-0">
              Search
            </div>
            <div className="relative inline-block w-[30.65px] h-[11.96px] shrink-0">
              Hotels
            </div>
            <div className="relative inline-block w-[29.15px] h-[11.96px] shrink-0">
              Offers
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[8.97px]">
            <img
              className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden md:flex"
              alt=""
              src="/notification.svg"
            />
            <img
              className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
              alt=""
              src="/notification1.svg"
            />
            <img
              className="rounded-[28.41px] w-[26.91px] h-[26.91px] object-cover"
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
