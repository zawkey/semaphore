import React, { useState } from "react";
import SidebarNode from "./sidebarNode";
import { toolsList } from "./tools";
import { nodesList } from "./nodes";

const ComponentSidebar = ({ onAddNode, onDragStart }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isNodesCollapsed, setIsNodesCollapsed] = useState(false);
  const [isIntegrationsCollapsed, setIsIntegrationsCollapsed] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleNodesToggle = () => setIsNodesCollapsed(!isNodesCollapsed);
  const handleIntegrationsToggle = () => setIsIntegrationsCollapsed(!isIntegrationsCollapsed);

  return (
    <div className="absolute top-[48px] z-50 bottom-[0px]">
      <button
        className={`open-sidebar top-[4px] left-[8px] absolute z-40 !m-2 flex btn-secondary items-center gap-2 rounded-md border border-secondary-hover bg-white fill-foreground stroke-foreground py-3 px-4 text-primary shadow transition-all duration-300 ${isOpen ? 'pointer-events-none opacity-0 -translate-x-full' : 'pointer-events-all opacity-100 translate-x-0'}`}
        onClick={handleToggle}
      >
        <span className="f4 lh-0 b mr-1">Components</span>
        <i className="material-symbols-outlined f2 gray -scale-x-100">menu_open</i>
      </button>

      <div className={`flex h-full items-start p-2 z-50 w-[332px] transition-all duration-300 ${isOpen ? 'opacity-1 -translate-x-0' : 'opacity-0 -translate-x-full'}`}>
        <div className="flex h-full w-full flex-col sidebar-body bg-white relative self-stretch rounded-lg overflow-hidden shadow-[0px_0px_0px_1px_#00000014,0px_1px_3px_#00000029]">
          <div className="flex flex-col w-full h-full items-start py-0 relative flex-[0_0_auto] border-r [border-right-style:solid] border-[#0000001a]">
            <div className="flex flex-col w-100 items-start pt-0 pb-0 px-0 relative flex-[0_0_auto] border-0 border-none">
              <div className="flex items-center justify-between pt-4 pb-4 px-4 w-100 relative">
                <h2 className="f4 lh-0 b mr-1 mb-0">Components</h2>
                <button href="#" id="sidebar-toggle" className="!relative !w-6 !h-6" onClick={handleToggle}>
                  <i className="material-symbols-outlined f2 gray">menu_open</i>
                </button>
              </div>
              <div className="my-2 px-4 w-100">
                <input type="text" className="form-control w-100 mb-4" placeholder="Search…" />
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col overflow-auto">
              <div className="relative flex w-full min-w-0 flex-col px-4">
                {/* Nodes Section */}
                <div className="cursor-pointer mb-2 category-trigger flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]" onClick={handleNodesToggle}>
                  <div className="inline-flex flex-col items-start pl-0 pr-4 relative flex-[0_0_auto]">
                    <div className="relative w-fit whitespace-nowrap text-xs">
                      NODES
                    </div>
                  </div>
                  <i className="material-symbols-outlined f3">
                    {isNodesCollapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                  </i>
                </div>
                <div className="categories mb-4" style={{ display: isNodesCollapsed ? 'none' : 'block' }}>
                {nodesList.map((node, index) => (
                    <SidebarNode
                      key={node.name}
                      type="githubIntegration"
                      icon={node.logo}
                      title={node.name}
                      description="Short description of the workflow recipe goes in here."
                      onDragStart={onDragStart}
                      onAddNode={onAddNode}
                    />
                  ))}
                </div>

                {/* Integrations Section */}
                <div className="cursor-pointer mb-2 category-trigger flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]" onClick={handleIntegrationsToggle}>
                  <div className="inline-flex flex-col items-start pl-0 pr-4 relative flex-[0_0_auto]">
                    <div className="relative w-fit whitespace-nowrap text-xs">
                      INTEGRATIONS
                    </div>
                  </div>
                  <i className="material-symbols-outlined f3">
                    {isIntegrationsCollapsed ? 'keyboard_arrow_right' : 'keyboard_arrow_down'}
                  </i>
                </div>
                <div className="categories" style={{ display: isIntegrationsCollapsed ? 'none' : 'block' }}>
                  {toolsList.map((tool, index) => (
                    <SidebarNode
                      key={tool.name}
                      type="toolIntegration"
                      icon={tool.logo}
                      title={tool.name}
                      description="Short description of the workflow recipe goes in here."
                      onDragStart={onDragStart}
                      onAddNode={onAddNode}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentSidebar;