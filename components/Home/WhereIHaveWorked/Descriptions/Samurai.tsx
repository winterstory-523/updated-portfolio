import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Samurai() {
  const tasks = [
    {
      text: "Developed and implemented new features pixel-perfectly from Figma design using Vue.js (Vue3 composition API)",
      keywords: ["pixel-perfectly", "Vue.js"],
    },
    {
      text: "Migrated Vue.js project to Ionic Vue using Capacitor, enabling seamless cross-platform functionality; integrated native functions and third-party services, such as Push notification, resulting in a 20% increase in user engagement and retention",
      keywords: ["Migrated", "Ionic Vue", "Capacitor", "native functions", "Push notification"],
    },
    {
      text: "Published app to App Store and Google Play Store",
      keywords: ["Published", "App Store", "Google Play Store"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Mobile App Developer for Financial App <span className="text-AAsecondary">@ Ionic Vue</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">March 2023 - August 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://apps.apple.com/us/app/samurai-financial-protection/id6449479926", "_blank")}
          >
            https://apps.apple.com/us/app/samurai-financial-protection/id6449479926
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
