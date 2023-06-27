import type { NextPage } from "next";

const FlightContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[14.95px] text-left text-[13.46px] text-darkslategray-300 font-roboto md:block">
      <b className="relative tracking-[0.04em] uppercase inline-block w-[947.92px]">
        Upcoming Flight
      </b>
      <div className="self-stretch flex flex-row items-start justify-start gap-[26.91px] text-[17.94px] text-cornflowerblue-200 md:flex-col">
        <div className="rounded-[5.98px] flex flex-col p-[14.950791358947754px] items-start justify-start gap-[15.7px] border-[0.7px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative w-[53.82px] h-[34.39px]">
              <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[33.44px] h-[20.93px]">
                SIN
              </b>
              <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[53.82px] h-[11.96px]">
                Singapore
              </div>
            </div>
            <div className="relative w-[87.72px] h-[32.96px] text-[10.47px] text-gray-100">
              <b className="absolute top-[20.99px] left-[17.71px] tracking-[0.02em] capitalize inline-block w-[49.08px] h-[11.96px]">
                15H 55M
              </b>
              <img
                className="absolute top-[0px] left-[0px] w-[87.72px] h-[17.94px]"
                alt=""
                src="/group-17.svg"
              />
            </div>
            <div className="relative w-[65.24px] h-[34.39px] text-right">
              <b className="absolute top-[0px] left-[26.91px] tracking-[0.04em] capitalize inline-block w-[38.33px] h-[20.93px]">
                LAX
              </b>
              <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[65.24px] h-[11.96px]">
                Los Angeles
              </div>
            </div>
          </div>
          <div className="self-stretch relative box-border h-[0.75px] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
          <div className="self-stretch flex flex-row items-center justify-between text-[10.47px] text-gray-100">
            <div className="relative tracking-[0.02em] capitalize inline-block w-[152.42px] shrink-0">
              Departs on: 1 May, 08:00 AM
            </div>
            <div className="relative tracking-[0.02em] text-right inline-block w-[65.21px] shrink-0">
              <b>4 days</b>
              <span> to go</span>
            </div>
          </div>
        </div>
        <div className="relative box-border w-[0.75px] h-[109.13px] border-r-[0.7px] border-solid border-whitesmoke md:hidden" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[14.95px] text-[13.46px] text-lightgray md:w-full md:flex-[unset] md:self-stretch">
          <div className="self-stretch relative tracking-[0.04em] uppercase">
            Prepare for your trip
          </div>
          <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative w-[48.88px] h-[48.88px]"
                alt=""
                src="/group-21.svg"
              />
              <div className="relative text-[11.21px] tracking-[0.04em] font-roboto text-gray-100 text-left inline-block w-[29.15px] h-[13.46px] shrink-0">
                Hotel
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative rounded-[11.96px] w-[48.88px] h-[48.88px]"
                alt=""
                src="/frame-21.svg"
              />
              <div className="relative text-[11.21px] tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[59.8px] h-[13.46px] shrink-0">
                Attractions
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative w-[48.88px] h-[48.88px]"
                alt=""
                src="/group-211.svg"
              />
              <div className="relative text-[11.21px] tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[23.92px] h-[13.46px] shrink-0">
                Eats
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative rounded-[11.96px] w-[48.88px] h-[48.88px]"
                alt=""
                src="/frame-211.svg"
              />
              <div className="relative text-[11.21px] tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[52.33px] h-[13.46px] shrink-0">
                Commute
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative rounded-[11.96px] w-[52.33px] h-[48.88px]"
                alt=""
                src="/frame-212.svg"
              />
              <div className="relative text-[11.21px] tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[24.01px]">
                Taxi
              </div>
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
              <img
                className="relative rounded-[11.96px] w-[48.88px] h-[48.88px]"
                alt=""
                src="/frame-213.svg"
              />
              <div className="relative text-[11.21px] tracking-[0.04em] font-roboto text-gray-100 text-center inline-block w-[38.87px] h-[13.46px] shrink-0">
                Movies
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightContainer;
