import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { name,label,type, errorMessage, onChange, id, ...inputProps } = props;
  // console.log(inputProps)

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}
        className="mt-4 text-gray-500 text-sm">{label}</label>
      {
        type === 'textarea' ?
          <textarea id={name} name={name}
            className="px-4 py-2 rounded-md border border-gray-300"
          cols="30" rows="3"
          {...inputProps}
          onChange={onChange}
          // onBlur={handleFocus}
          // focused={focused.toString()}
          />
          :
        <input type={type} id={name} name={name}
          className="px-4 py-2 rounded-md border border-gray-300"
        {...inputProps}
        onChange={onChange}
        // onBlur={handleFocus} //when focused and then out of focus
        // onFocus={() =>
        //   inputProps.name === "message" && setFocused(true)
        // }
        // focused={focused.toString()} //"true" or "false"
        />
      }
      <span className="text-sm hidden invalid">{errorMessage}</span>
    </div>
  );
};

export default FormInput;