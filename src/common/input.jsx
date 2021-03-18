import React from "react";

const Input = ({ name, label, error, focus, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...rest}
        name={name}
        autoFocus={focus}
        className="form-input mt-1 block md:w-96 w-full mb-5 md:pl-10 h-12  p-5  rounded-md font-semibold tracking-widest border border-yellow-500 text-2xl"
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
