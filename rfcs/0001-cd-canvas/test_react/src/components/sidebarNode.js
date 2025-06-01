import React from 'react';

const SidebarNode = ({
  title,
  description,
  icon,
  onAddNode,
  onDragStart
}) => (
  <div className="cursor-grab rounded-md flex items-center node p-2 relative bg-gray-100 hover:bg-gray-200 mb-2" onDragStart={(e) => onDragStart(e, 'githubIntegration')} draggable="true">
  <div className="flex flex-col items-start relative visible">
    <div className="flex flex-col items-center justify-center relative visible">
      {icon && (
        <img src={icon} className="sidebar-node-icon" width={28}/>
      )}
    </div>
  </div>
  <div className="flex flex-col items-start pl-4 pr-0 py-0 relative flex-1">
    <div className="flex relative self-stretch w-full">
      <h3 className="relative capitalize self-stretch font-bold black-90 f4 mb-0 tracking-[0] leading-[22px]">
        {title}
      </h3>
    </div>
    <div className="flex relative self-stretch w-full flex-[0_0_auto]">
      {description && 
        <p className="relative self-stretch mb-0 f6 gray overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
          {description}
        </p>
      }
    </div>
  </div>
  <div className="invisible flex items-center icons">
    <button className="add-node material-symbols-outlined f3 gray mr-2 hover:bg-gray-100 br2" onClick={() => onAddNode('githubIntegration', { x: 0, y: 0 })}>add</button>
    <button className="drag-node cursor-grab material-symbols-outlined f3 gray">drag_indicator</button>
  </div>
</div>
  
);

export default SidebarNode;
