import React, { useState, useRef, useEffect } from "react";
import gitHub from "../images/github.svg";
import gitLab from "../images/gitlab.svg";
import semaphoreLogo from "../images/semaphore-logo-mark.svg";

const ComponentSidebar = ({ onAddNode, onDragStart }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isNodesCollapsed, setIsNodesCollapsed] = useState(false);

  const handleNodesToggle = () => {
    setIsNodesCollapsed(!isNodesCollapsed);
  };

  const [isIntegrationsCollapsed, setIsIntegrationsCollapsed] = useState(false);

  const handleIntegrationsToggle = () => {
    setIsIntegrationsCollapsed(!isIntegrationsCollapsed);
  };

  return (
    <div className="absolute top-[48px] w-[349px] z-50 bottom-[0px]">
      <button className={`open-sidebar top-[4px] left-[4px] absolute z-40 !m-2 flex btn-secondary items-center gap-2 rounded-md border border-secondary-hover bg-white fill-foreground stroke-foreground py-3 px-4 text-primary shadow transition-all duration-300 ${isOpen ? 'pointer-events-none opacity-0 -translate-x-full' : 'pointer-events-all opacity-100 translate-x-0'}`} onClick={handleToggle}>
        <span className="f4 lh-0 b mr-1">Components</span> 
        <i className="material-symbols-outlined f2 gray -scale-x-100">
          menu_open
        </i>
      </button>
    <div className={`flex h-full items-start gap-2 p-2 z-50 transition-all duration-300 ${isOpen ? 'opacity-1 -translate-x-0' : 'opacity-0 -translate-x-full'}`}>
      
      <div className="sidebar-body bg-white flex flex-col items-start gap-2 relative flex-1 self-stretch rounded-lg overflow-hidden shadow-[0px_0px_0px_1px_#00000014,0px_1px_3px_#00000029]">
        <div className="inline-flex flex-col items-start px-4 py-0 relative flex-[0_0_auto] border-r [border-right-style:solid] border-[#0000001a]">
          <div className="flex flex-col w-100 items-start pt-0 pb-0 px-0 relative flex-[0_0_auto] border-0 border-none">
          <div className="flex items-center justify-between pt-4 pb-4 px-0 w-100 relative">
              <h2 className="f4 lh-0 b mr-1 mb-0">Components</h2>
              <button href="#" id="sidebar-toggle" className="!relative !w-6 !h-6" onClick={handleToggle}>
                <i className="material-symbols-outlined f2 gray">
                  menu_open
                </i>
              </button>
            </div>
          </div>
          <div className="w-[300px]">
           

            <div className="categories mb-4" style={{ display: isNodesCollapsed ? 'none' : 'block' }}>
              <a href="#" className="cursor-grab rounded-md flex items-center node p-2 relative bg-gray-100 hover:bg-gray-200 mb-2" onDragStart={(e) => onDragStart(e, 'deploymentCard')} draggable="true">
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
                <div className="invisible flex items-center icons">
                  <button className="add-node material-symbols-outlined f3 gray mr-2 hover:bg-gray-100 br2" onClick={() => onAddNode('deploymentCard', { x: 0, y: 0 })}>add</button>
                  <button className="drag-node cursor-grab material-symbols-outlined f3 gray">drag_indicator</button>
                </div>
              </a>
              
            </div>
          </div>

          <div className="sidebar-body w-[300px]">
            <div className="cursor-pointer mb-2 category-trigger flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]" onClick={handleIntegrationsToggle}>
              <div className="inline-flex flex-col items-start pl-0 pr-4 py-1 relative flex-[0_0_auto]">
                <div className="relative w-fit whitespace-nowrap text-xs">
                  INTEGRATIONS
                </div>
              </div>
              <i className="material-symbols-outlined f3">
                {isIntegrationsCollapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
              </i>
            </div>
            <div className="categories" style={{ display: isIntegrationsCollapsed ? 'none' : 'block' }}>
              <a href="#" className="cursor-grab rounded-md flex items-center node p-2 relative bg-gray-100 hover:bg-gray-200 mb-2" onDragStart={(e) => onDragStart(e, 'githubIntegration')} draggable="true">
                <div className="flex flex-col items-start relative visible">
                  <div className="flex flex-col items-center justify-center relative visible">
                    <img src={gitHub} alt="GitHub" />
                  </div>
                </div>
                <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
                  <div className="flex relative self-stretch w-full">
                    <h3 className="relative self-stretch font-bold black-90 f4 mb-0 tracking-[0] leading-[22px]">
                      GitHub
                    </h3>
                  </div>
                  <div className="flex relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                      Short decription of the workflow recipe goes in here.
                    </p>
                  </div>
                </div>
                <div className="invisible flex items-center icons">
                  <button className="add-node material-symbols-outlined f3 gray mr-2 hover:bg-gray-100 br2" onClick={() => onAddNode('githubIntegration', { x: 0, y: 0 })}>add</button>
                  <button className="drag-node cursor-grab material-symbols-outlined f3 gray">drag_indicator</button>
                </div>
              </a>
              <a href="#" className="cursor-grab rounded-md flex items-center node p-2 relative bg-gray-100 hover:bg-gray-200 mb-2" onDragStart={(e) => onDragStart(e, 'githubIntegration')} draggable="true">
                <div className="flex flex-col items-start relative">
                  <div className="flex flex-col items-center justify-center relative">
                    <img src={semaphoreLogo} alt="Semaphore project" />
                  </div>
                </div>
                <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
                  <div className="flex relative self-stretch w-full">
                    <h3 className="relative self-stretch font-bold black-90 f4 mb-0 tracking-[0] leading-[22px]">
                      Semaphore project
                    </h3>
                  </div>
                  <div className="flex relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                      Short decription of the workflow recipe goes in here.
                    </p>
                  </div>
                </div>
                <div className="invisible flex items-center icons">
                  <button className="add-node material-symbols-outlined f3 gray mr-2 hover:bg-gray-100 br2" onClick={() => onAddNode('githubIntegration', { x: 0, y: 0 })}>add</button>
                  <button className="drag-node cursor-grab material-symbols-outlined f3 gray">drag_indicator</button>
                </div>
              </a>
              <a href="#" className="cursor-grab rounded-md flex items-center node p-2 relative bg-gray-100 hover:bg-gray-200 mb-2" onDragStart={(e) => onDragStart(e, 'githubIntegration')} draggable="true">
                <div className="flex flex-col items-start relative">
                  <div className="flex flex-col items-center justify-center relative">
                    <img src={gitLab} alt="GitLab" />
                  </div>
                </div>
                <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
                  <div className="flex relative self-stretch w-full">
                    <h3 className="relative self-stretch font-bold black-90 f4 mb-0 tracking-[0] leading-[22px]">
                      GitLab
                    </h3>
                  </div>
                  <div className="flex relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                      Short decription of the workflow recipe goes in here.
                    </p>
                  </div>
                </div>
                <div className="invisible flex items-center icons">
                  <button className="add-node material-symbols-outlined f3 gray mr-2 hover:bg-gray-100 br2" onClick={() => onAddNode('githubIntegration', { x: 0, y: 0 })}>add</button>
                  <button className="drag-node cursor-grab material-symbols-outlined f3 gray">drag_indicator</button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ComponentSidebar;