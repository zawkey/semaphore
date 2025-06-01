import React from 'react';

const SidebarNode = ({
  title,
  description,
  icon,
  onClick
}) => (
  <div className="sidebar-node" onClick={onClick}>
    {icon && (
      <div className="sidebar-node-icon">
        {icon}
      </div>
    )}
    <div className="sidebar-node-content">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  </div>
);

export default SidebarNode;
