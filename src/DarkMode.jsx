import React from "react";

const DarkMode = () => {
  return (
    <div>
      <h1>Dark Mode with Operating System Theme</h1>

      <div>
        <h1 className="text-7xl dark:bg-slate-800 dark:text-white">
          dark mode test{" "}
        </h1>
        <p>code with amarth </p>
      </div>

      <div className="flex m-20 border-black border-2 p-3 dark:bg-slate-300">
        <div className="bg-blue-200 size-10 dark:bg:black"> </div>
        <p className="text-2xl ml-10 p-2">box with dark mode </p>
      </div>
    </div>
  );
};

export default DarkMode;
