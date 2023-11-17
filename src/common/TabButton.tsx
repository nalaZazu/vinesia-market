import React, { useState } from "react";

export default function TabButton() {
  const [selected, setSelected] = useState(0);
  const list = ["All", "Ask", "Bid"];
  return (
    <div>
      <ul className="flex flex-wrap text-sm font-medium text-center bg-gray-300 rounded-md p-1">
        {/* bg-tabsgray  */}
        {list?.map((l, i) => {
          return (
            <li
              key={i}
              className="text-center text-zinc-700 text-xs font-normal tracking-wide"
              role="presentation"
            >
              <button
                onClick={() => setSelected(i)}
                className={`px-10 py-2 rounded-md ${
                  selected == i ? "bg-white shadow-md" : ""
                } `}
              >
                {l}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
