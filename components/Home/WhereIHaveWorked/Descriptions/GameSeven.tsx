import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function GameSeven() {
  const tasks = [
    {
      text: "Rebuilt the official website (game7.io) using React and Tailwind CSS from Figma design",
      keywords: ["React", "Tailwind CSS"],
    },
    {
      text: "Integrated Contentful API for Blog, Newsletter and Legal Pages, and Airtable API for form management",
      keywords: ["Integrated Contentful API", "Airtable API"],
    },
    {
      text: "Rebuild 5 other sub websites using React, Next.js, Styled component and Tailwind CSS",
      keywords: ["5", "React", "Next.js", "Styled component", "Tailwind CSS"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Front-End Developer <span className="text-AAsecondary">@ React</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">September 2023 - November 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://zendure.com/", "_blank")}
          >
            game7.io
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
