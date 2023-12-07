import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Symph() {
  const tasks = [
    {
      text: "Created user-friendly interfaces using React/Next.js, Redux, HTML, CSS, Tailwind CSS, ES6+ JavaScript and Typescript",
      keywords: ["React/Next.js", "Redux", "HTML", "CSS", "Tailwind CSS", "ES6+", "JavaScript and Typescript",],
    },
    {
      text: "Collaborated closely with the design team to drive the seamless implementation of responsive web designs and ensured cross-browser compatibility",
      keywords: ["Collaborated", "team", "responsive", "cross-browser compatibility"],
    },
    {
      text: "Integrated RESTful APIs to fetch and update data in real-time, implemented state management using Redux, enabling efficient data flow and organization",
      keywords: ["Integrated","state management"],
    },
    {
      text: "Optimized application performance by identifying and resolving bottlenecks; achieved a 30% increase in LightHouse performance score and SEO score",
      keywords: ["Optimized","30% increase", "SEO score"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Frontend developer <span className="text-AAsecondary">@ React</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">February 2022 - June 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.symph.co/", "_blank")}
          >
            www.symph.co
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
