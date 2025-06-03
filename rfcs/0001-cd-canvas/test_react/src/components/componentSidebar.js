import React, { useState } from "react";
import SidebarNode from "./sidebarNode";
import NodeGroup from "./NodeGroup";
import { categoriesList2 } from "./categoriesList2";

const ComponentSidebar = ({ onAddNode, onDragStart }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className={`relative h-full ${isOpen ? 'w-[300px]' : 'w-0'} bg-transparent transition-[width] duration-300 ease-linear`}>
      <div className="absolute z-50 top-[1px] bottom-[0px]">
        <button
          className={`open-sidebar top-[0px] left-[4px] absolute z-40 !m-2 flex btn-secondary items-center gap-2 rounded-md border border-secondary-hover bg-white fill-foreground stroke-foreground py-2 px-4 text-primary shadow transition-all duration-300 ${isOpen ? 'pointer-events-none opacity-0 -translate-x-full' : 'pointer-events-all opacity-100 translate-x-0'}`}
          onClick={handleToggle}
        >
          <span className="f4 lh-0 b mr-1">Components</span>
          <i className="material-symbols-outlined f2 gray -scale-x-100">menu_open</i>
        </button>

        <div className={`flex h-full items-start z-50 w-[300px] transition-all duration-300 ${isOpen ? 'opacity-1 -translate-x-0' : 'opacity-0 -translate-x-full'}`}>
          <div className="flex h-full w-full flex-col sidebar-body bg-white relative self-stretch overflow-hidden">
            <div className="flex h-full w-full flex-col items-start py-0 relative flex-[0_0_auto] border-r [border-right-style:solid] border-[#0000001a]">
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
              <div className="flex min-h-0 flex-1 flex-col overflow-auto w-full">
                <div className="relative flex w-full min-w-0 flex-col px-2">
                 
                {categoriesList2.map((category) => (
                  <NodeGroup
                    key={category.name}
                    title={category.name}
                    icon={category.icon}
                    collapsed={true}
                  >
                    {category.nodes.map((node) => 
                      !node.apps ? (
                        <SidebarNode
                          key={node.name}
                          icon={node.icon}
                          title={node.name}
                          onAddNode={onAddNode}
                          onDragStart={onDragStart}
                        />
                      ) : (

                        node.apps.map((app) => (
                            <NodeGroup
                              key={app.name}
                              title={app.name}
                              logo={app.logo}
                              collapsed={true}
                            >
                              {app.events.map((event) => (
                                <SidebarNode
                                  key={event}
                                  logo={app.logo}
                                  title={event}
                                  onAddNode={onAddNode}
                                  onDragStart={onDragStart}
                                />
                              ))}
                            </NodeGroup>
                          
                        ))
                      )
                    )}
                  </NodeGroup>
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