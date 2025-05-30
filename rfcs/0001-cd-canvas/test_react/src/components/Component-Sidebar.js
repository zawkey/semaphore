import React from "react";
import gitHub from "../images/github.svg";
import gitLab from "../images/gitlab.svg";


const Background = () => {
  return (
    <div className="flex w-[340px] h-full items-start gap-2.5 p-2.5 absolute z-40">
      <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch bg-white rounded-lg overflow-hidden shadow-[0px_0px_0px_1px_#00000014,0px_1px_3px_#00000029]">
        <div className="inline-flex flex-col items-start gap-2 px-4 py-0 relative flex-[0_0_auto] border-r [border-right-style:solid] border-[#0000001a]">
          <div className="flex flex-col w-72 items-start pt-0 pb-2 px-0 relative flex-[0_0_auto] border-0 border-none">
            <div className="flex w-[286.8px] items-center justify-between pt-5 pb-2 px-0 relative flex-[0_0_auto] opacity-80">
              <div className="relative w-[99px] h-[23px]">
                <div className="absolute h-[23px] top-0 left-0 [font-family:'Fakt_Pro-Bold',Helvetica] font-bold text-[#000000cc] text-[15.4px] tracking-[0] leading-[22.4px] whitespace-nowrap">
                  Components
                </div>
              </div>

              <div className="!relative !w-6 !h-6">
              <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 25 24"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.7998 18V16H16.7998V18H3.7998ZM20.3998 17L15.3998 12L20.3998 7L21.7998 8.4L18.1998 12L21.7998 15.6L20.3998 17ZM3.7998 13V11H13.7998V13H3.7998ZM3.7998 8V6H16.7998V8H3.7998Z"
                    fill="#6D6D6D"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start gap-2.5 pt-0 pb-2 px-0 relative flex-[0_0_auto]">
            <div className="flex w-72 h-8 items-center gap-[2.84e-14px] px-0 py-1 relative">
              <div className="relative flex-1 h-8 mt-[-4.00px] mb-[-4.00px] bg-white rounded-md overflow-hidden shadow-[inset_0px_1px_1px_#e5e8ea,0px_0px_0px_1px_#00000033]">
              <input type="text" className="form-control w-100 w5-l" placeholder="Search…"></input>
               
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start pl-0 pr-4 py-1 relative flex-[0_0_auto]">
              <div className="relative w-fit whitespace-nowrap f6">
                FLOW NODES
              </div>
            </div>

            <i className="material-symbols-outlined f3">keyboard_arrow_down</i>
          </div>
       
          <div className="flex items-center p-2 relative bg-[#f5f8f9]">
           
            <div className="flex flex-col items-start relative">
              <div className="flex flex-col w-7 h-7 items-center justify-center relative">
                <span className="material-symbols-outlined dark-red">rocket_launch </span>
              </div>
            </div>
            
            <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
              <div className="flex relative self-stretch w-full">
                <h3 className="relative self-stretch font-bold text-black-90 f4 mb-0 tracking-[0] leading-[22px]">
                  Stage
                </h3>
              </div>

              <div className="flex relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                  Short decription of the workflow recipe goes in here.
                </p>
              </div>
            </div>

            <span className="material-symbols-outlined f3">drag_indicator</span>
          </div>

          


          
        </div>
      </div>
    </div>
  );
};

export default Background;