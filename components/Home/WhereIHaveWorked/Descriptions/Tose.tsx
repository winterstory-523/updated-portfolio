import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Tose() {
  const tasks = [
    {
      text: "Built new Admin website of game application by MERN stack (MongoDB, Express.js, React.js, Node.js), and maintained for over 6 months.",
      keywords: ["Admin website", "MERN"],
    },
    {
      text: "Collaborated with teammates to improve the website by refactoring, optimizing and implementing unit-test and end-to-end tests (Jest, Mocha, Cypress), resulting in a 15% decrease in average page load time",
      keywords: ["Collaborated", "refactoring, optimizing", "unit-test and end-to-end tests"],
    },
    {
      text: "Worked full-time for over 40 hours a week for approximately 18 months, communicated directly with clients and successfully delivered results",
      keywords: ["full-time"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full-Stack Developer <span className="text-AAsecondary">@ MERN</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2020 - December 2021</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.tose.com.ph/", "_blank")}
          >
            www.tose.com.ph
        </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
