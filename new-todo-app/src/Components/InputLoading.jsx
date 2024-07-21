import React from "react";

const InputLoading = () => {
  return (
    <div className="animate-pulse  px-1 py-1">
      <div className="flex flex-col sm:flex-row my-2 gap-4 justify-between">
        <div className="flex flex-col flex-1">
          <p className="text-gray-400 text-[14px] italic">
            <span className="text-red-600"></span>
          </p>
          <div className="flex flex-row flex-1 items-center ">
            <input
              className={`w-full px-4 py-2 rounded border bg-gray-300  focus:outline-none focus:ring-2 focus:ring-orange-500`}
              type="text"
            />
            <button className="w-10 h-10 flex items-center justify-center border-2 bg-gray-300 text-white rounded hover:bg-orange-700 cursor-progress -ml-10">
              <i className="fa-solid fa-plus mx-1"></i>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex-1 flex-col">
            <p className="text-gray-400 text-[14px] italic">
              <span className="text-red-600"></span>
            </p>
            <select
              className={`w-full px-1 py-2 rounded border bg-gray-300`}
            ></select>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row my-5 gap-4 justify-between">
        <div className="flex flex-1 flex-col">
          <p className="text-gray-400 text-[14px] italic bg-gray-300">
            <span className="text-red-600"></span>
          </p>
          <input className={`w-full px-4 py-2 rounded border bg-gray-300 `} />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-gray-400 text-[14px] italic">
            <span className="text-red-600"></span>
          </p>
          <input className={`w-full px-4 py-2 rounded border bg-gray-300`} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-2 mb-4">
        <div className="flex flex-1 flex-col">
          <p className="text-gray-400 text-[14px] italic">
            <span className="text-red-600"></span>
          </p>
          <select
            className={`flex-1 px-4 py-2 rounded border bg-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500`}
          ></select>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-gray-400 text-[14px] italic">
            <span className="text-red-600"></span>
          </p>
          <select
            className={`flex-1 px-4 py-2 rounded border  focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-300`}
          ></select>
        </div>
      </div>
    </div>
  );
};

export default InputLoading;
