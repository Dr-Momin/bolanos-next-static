import React from "react";

const InputGroup = () => {
  return (
    <div>
      <form>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Have a Dot ? Enter It Here
        </label>
        <div className="relative">
          <input
            type="search"
            id="search"
            className="block w-full p-4 pl-4 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-white"
            placeholder="Have a dot? Enter it Here."
            required
          />
          <button
            type="submit"
            className="text-primary absolute right-2.5 bottom-2.5 bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 "
          >
            Lets Go
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputGroup;
