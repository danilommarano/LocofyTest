import type { NextPage } from "next";
import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Title from "./title";

const SearchContainer: NextPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="self-stretch relative h-[478.43px] bg-[url(/search-section@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-26xl-6 text-primary-contrast font-baloo-bhai">
        <div className="absolute top-[0px] left-[0px] w-full h-[478.43px] flex flex-col py-0 px-[104.6555404663086px] box-border items-center justify-center gap-[32.14px] md:pl-[30px] md:pr-[30px] md:box-border">
          <Title />
          <div className="self-stretch rounded-[7.48px] bg-primary-contrast flex flex-row p-[14.950791358947754px] items-start justify-start text-left text-[8.97px] text-gray-200 font-roboto md:flex-col">
            <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                <Autocomplete
                  className="self-stretch"
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)Sanya (SYX)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                  size="medium"
                />
              </div>
              <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch h-[41.86px] flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-[2.99px] box-border h-[41.86px] flex flex-col py-0 px-[8.970474243164062px] items-start justify-start border-[0.7px] border-solid border-gray-400">
                    <div className="bg-primary-contrast h-[1.5px] flex flex-row py-0 px-[2.9901583194732666px] box-border items-center justify-start">
                      <div className="relative tracking-[0.11px] leading-[8.97px] flex items-center w-[26.16px] h-[8.97px] shrink-0">
                        Arrival
                      </div>
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row py-[11.213094711303711px] px-0 items-center justify-start gap-[5.98px] text-center text-dimgray">
                      <div className="hidden flex-row items-start justify-start gap-[5.98px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[2.9901583194732666px] items-center justify-start">
                            <div className="rounded-[47.84px] bg-silver w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col py-[2.2426187992095947px] px-[4.4852375984191895px] items-start justify-start text-left text-[9.72px] text-gray-300">
                              <div className="relative tracking-[0.12px] leading-[13.46px]">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[2.9901583194732666px] items-center justify-start">
                            <div className="rounded-[47.84px] bg-silver w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col py-[2.2426187992095947px] px-[4.4852375984191895px] items-start justify-start text-left text-[9.72px] text-gray-300">
                              <div className="relative tracking-[0.12px] leading-[13.46px]">
                                Chip
                              </div>
                            </div>
                            <img
                              className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                              alt=""
                              src="/cancel1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative text-[11.96px] tracking-[0.11px] leading-[17.94px] text-gray-300 text-left">
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch">
                  <DatePicker
                    label="Date"
                    value={dateFieldDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setDateFieldDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "medium",
                        fullWidth: true,
                        color: "primary",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col p-[3.7376978397369385px] items-center justify-center">
              <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[122.6px] h-[41.86px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-steelblue md:mr-[auto] sm:w-[100%!important]">
                <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-roboto text-primary-contrast text-center inline-block w-[109.87px]">
                  Search flights
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchContainer;
