import React from "react";

interface Sidebar {
  open: boolean | null;
  onClose: () => void;
}
const Sidebar = ({ open, onClose }: Sidebar) => {
  return (
    <div
      className={`h-screen fixed bg-bgSecondary w-[300px] top-0 z-[200] p-4  pr-0 transition-all duration-500 left-[-320px] md:left-0 ${
        open ? "left-[0px]" : ""
      }`}
    >
      <div onClick={onClose}>Close</div>
      Sidebar
    </div>
  );
};

export default Sidebar;
