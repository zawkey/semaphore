import React, { useState } from 'react';
const NodeGroup = ({ title, logo, children }) => {
  const [isNodesCollapsed, setIsNodesCollapsed] = useState(true);
  const handleToggle = () => setIsNodesCollapsed(!isNodesCollapsed);
  return (
    <div className="">
      <div 
        className={`node-group cursor-pointer py-1 px-2 rounded-md hover:bg-gray-100 category-trigger flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]`}
        onClick={handleToggle}  
      >
        <div className="flex items-center pl-0 pr-4 relative flex-[0_0_auto]">
          <img src={logo} className="sidebar-node-icon mr-2" width={16}/>
          <h2 className={`${!isNodesCollapsed ? 'b': ''} w-fit whitespace-nowrap text-md`}>
            {title}
          </h2>
        </div>
        <div className="ml-auto flex items-center">
          <i 
            className={`material-symbols-outlined f2 gray transition-transform duration-200`}
          >
            {!isNodesCollapsed ? 'keyboard_arrow_down': 'keyboard_arrow_right'}
          </i>
        </div>
      </div>
      {!isNodesCollapsed && (
        <div className="categories mt-2 pl-1 pr-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default NodeGroup;
