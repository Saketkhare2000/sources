import React from "react";
import { UserIcon } from "@heroicons/react/outline";
const Sidebar = ({ toggle }) => {
  return (
    toggle && (
      <div>
        {/* Sidebar */}
        <div className="h-full flex flex-col absolute -left-full">
          <div className="flex items-center">
            <UserIcon className="h-7 w-7 text-white" />
            <p className="font-bold text-lg text-white px-3">Account</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
