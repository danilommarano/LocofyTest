import type { NextPage } from "next";

const Title: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[3.74px] text-center text-26xl-6 text-primary-contrast font-baloo-bhai">
      <div className="self-stretch relative leading-[50.09px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
      <div className="self-stretch relative text-[17.94px] leading-[23.92px] font-roboto">
        Find the best destinations and the most popular stays!
      </div>
    </div>
  );
};

export default Title;
