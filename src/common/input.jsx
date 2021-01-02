import React from "react";

const Input = ({ name, label, error, focus, ...rest }) => {
  return (
    <div className="">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        autoFocus={focus}
        className="form-input mt-1 block w-72  mb-5 pl-10 h-8 border focus:shadow-outline p-5 rounded-md font-semibold tracking-widest"
        id={name}
        aria-describedby="emailHelp"
      />
      {error && (
        <div className="bg-red-200 relative text-red-500 py-3 px-3 rounded-lg mb-5">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
