import React, { useState } from "react";
import Sidebar from "./Sidebar";

interface Wrapper {
  children: React.ReactNode;
  enableRightbar: boolean;
}
const Wrapper = ({ children, enableRightbar }: Wrapper) => {
  const [openSidebar, setOpenSidebar] = useState<boolean | null>(null);
  return (
    <div>
      <Sidebar
        open={openSidebar}
        onClose={() => setOpenSidebar(!openSidebar)}
      />
      <button
        className="bg-primary p-4"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        Toggle sidebar
      </button>
      {children}
    </div>
  );
};

export default Wrapper;
