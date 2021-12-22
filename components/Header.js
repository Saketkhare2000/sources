import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Sidebar from "./Sidebar";
const Header = () => {
  //toggle sidebar
  const [sidebar, setSidebar] = React.useState(false);
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="p-5 lg:max-w-5xl mx-auto ">
      <MenuIcon
        onClick={toggleSidebar}
        className="w-10 h-10 text-white cursor-pointer"
      />
      <Sidebar toggle={sidebar} />
    </div>
  );
};

export default Header;
