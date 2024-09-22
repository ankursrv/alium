
import React from 'react';

const InputField = ({ className, label, id, type = 'text', placeholder, required = false }) => {
  return (
    <>
      <label className="block mb-[6px] font-semibold text-black">
        {label}
      </label>
      <div>
        <input
          type={type}
          id={id}
          className={`bg-white border border-borderPrimary text-black text-base font-semibold rounded-lg block w-full py-3 px-4 dark:placeholder-gray-light placeholder:font-normal ${className}`}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </>
  );
};

export default InputField;
