import React from 'react';

const SidebarNode = ({
  title,
  icon,
  onAddNode,
  onDragStart
}) => (
  <div className="cursor-grab rounded-md flex items-center node px-3 py-2 relative bg-gray-100 hover:bg-gray-200 mb-2" onDragStart={(e) => onDragStart(e, 'githubIntegration')} draggable="true">
    <div className="flex flex-col items-center justify-center relative visible pr-3">
      {icon && (
        <img src={icon} className="sidebar-node-icon" width={20}/>
      )}
    </div>
    <div className="flex relative w-full">
      <h3 className="relative capitalize black-90 f5 mb-0 tracking-[0] leading-[22px] overflow-hidden text-ellipsis">
        {title}
      </h3>
    </div>
    <div className="invisible flex items-center icons">
      <button className="add-node material-symbols-outlined f3 gray mr-2 hover:bg-gray-100 br2" onClick={() => onAddNode('githubIntegration', { x: 0, y: 0 })}>add</button>
      <button className="drag-node cursor-grab material-symbols-outlined f3 gray">drag_indicator</button>
    </div>
</div>
  
);

export default SidebarNode;
