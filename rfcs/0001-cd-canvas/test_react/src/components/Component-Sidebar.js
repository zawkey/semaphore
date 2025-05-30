import React, { useState } from "react";
import gitHub from "../images/github.svg";
import gitLab from "../images/gitlab.svg";

const ComponentSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isNodesCollapsed, setIsNodesCollapsed] = useState(false);

  const handleNodesToggle = () => {
    setIsNodesCollapsed(!isNodesCollapsed);
  };

  return (
    <div className={`flex h-full items-start gap-2.5 p-2.5 absolute z-40 ${isOpen ? 'sidebar-open' : 'sidebar-hidden'}`}>
      
      <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch bg-white rounded-lg overflow-hidden shadow-[0px_0px_0px_1px_#00000014,0px_1px_3px_#00000029]">
        <div className="inline-flex flex-col items-start gap-2 px-4 py-0 relative flex-[0_0_auto] border-r [border-right-style:solid] border-[#0000001a]">
          <div className="flex flex-col w-100 items-start pt-0 pb-2 px-0 relative flex-[0_0_auto] border-0 border-none">
          <div className="flex items-center justify-between pt-4 pb-2 px-0 w-100 relative">
              <h2 className="font-bold black-90 f4 mb0 mt0 mr3">Components</h2>
              <div id="sidebar-toggle" className="!relative !w-6 !h-6" onClick={handleToggle}>
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
          <div className="sidebar-body w-[300px]">
          <input type="text" className="form-control w-100 mb-4" placeholder="Search…"></input>
         

          <div className="category-trigger flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]" onClick={handleNodesToggle}>
            <div className="inline-flex flex-col items-start pl-0 pr-4 py-1 relative flex-[0_0_auto] mb-2">
              <div className="relative w-fit whitespace-nowrap text-xs">
                NODES
              </div>
            </div>

            <i className="material-symbols-outlined f3">
              {isNodesCollapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
            </i>
          </div>
          <div className="categories" style={{ display: isNodesCollapsed ? 'none' : 'block' }}>
            <a href="#" className="flex items-center p-2 relative bg-washed-gray mb-2 group/node">
            
              <div className="flex flex-col items-start relative visible">
                <div className="flex flex-col items-center justify-center relative visible">
                  <span className="material-symbols-outlined dark-red text-4xl visible">rocket_launch </span>
                </div>
              </div>
              
              <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
                <div className="flex relative self-stretch w-full">
                  <h3 className="relative self-stretch font-bold black-90 f4 mb-0 tracking-[0] leading-[22px]">
                    Stage
                  </h3>
                </div>

                <div className="flex relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    Short decription of the workflow recipe goes in here.
                  </p>
                </div>
              </div>
              <div className="group/edit invisible group-hover/node:visible flex items-center">
                <button href="#" className="add-to-canvas material-symbols-outlined f3 gray mr-2">add</button>
                <button href="#" className="drag-node material-symbols-outlined f3 gray">drag_indicator</button>
              </div>
            </a>
            <a href="#" className="flex items-center p-2 relative bg-washed-gray mb-2 group/node">
            
              <div className="flex flex-col items-start relative">
                <div className="flex flex-col items-center justify-center relative">
                  <span className="material-symbols-outlined dark-green text-4xl opacity-100">local_police </span>
                </div>
              </div>
              
              <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
                <div className="flex relative self-stretch w-full">
                  <h3 className="relative self-stretch font-bold black-90 f4 mb-0 tracking-[0] leading-[22px]">
                    Gate
                  </h3>
                </div>

                <div className="flex relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    Short decription of the workflow recipe goes in here.
                  </p>
                </div>
              </div>
              <div className="group/edit invisible group-hover/node:visible flex items-center">
                <button href="#" className="add-to-canvas material-symbols-outlined f3 gray mr-2">add</button>
                <button href="#" className="drag-node material-symbols-outlined f3 gray">drag_indicator</button>
              </div>
            </a>
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSidebar;