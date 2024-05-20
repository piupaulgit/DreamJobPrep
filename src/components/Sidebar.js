import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    label: "Sorting",
    subLinks: [
      {
        label: "Selection Sort",
        link: "selectionSort",
      },
      {
        label: "Bubble Sort",
        link: "bubbleSort",
      },
    ],
  },
  {
    label: "Search",
    link: "search",
  },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-blue-400 text-white fixed">
      <nav className="flex flex-col p-4">
        {navLinks &&
          navLinks.map((item, index) => {
            return (
              <>
                <h4>{item.label}</h4>
                {item.subLinks &&
                  item.subLinks.map((subLink, ind) => {
                    return (
                      <NavLink
                        to={subLink.link}
                        className={({ isActive }) =>
                          isActive
                            ? "py-2 px-4 bg-blue-600 rounded"
                            : "py-2 px-4 hover:bg-blue-600 rounded"
                        }
                        activeClassName="bg-blue-600"
                      >
                        {subLink.label}
                      </NavLink>
                    );
                  })}
              </>
            );
          })}
      </nav>
    </div>
  );
};

export default Sidebar;
