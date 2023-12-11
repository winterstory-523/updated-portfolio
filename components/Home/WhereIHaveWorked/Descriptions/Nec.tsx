import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Nec() {
  const tasks = [
    {
      text: "Worked with senior front-end developers and learned front-end principles as a part-time role by 20 hrs per week",
      keywords: ["Worked", "learned"],
    },
    {
      text: "Practically used React, Next.js, Vue.js and Nuxt.js in 2 large projects and 7 small projects and contributed the advance of the company",
      keywords: ["2 large projects", "7 small projects"],
    },
    {
      text: "Used team working tools such as version control system (Git, Bitbucket), agile systems (JIRA, Trello, Slack) etc",
      keywords: ["version control system", "agile systems"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          
          Junior Front-End Developer <span className="text-AAsecondary">@ React, Vue.js, Angular</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">August 2018 - February 2020</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("http://www.ntsp.com.ph/", "_blank")}
          >
            www.ntsp.com.ph
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
