import React, { useEffect , useRef } from 'react'


const Input = ({ type="text", label="", ref, value="", setHandler, handlerInput }) => {
  const inputRef = useRef(null);


  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, []);


  return (
    <div>
      <span>{label}</span>
      <input
        type={type}
        ref={inputRef}
        value={value}
        onChange={(e) => handlerInput(e.target.value, setHandler)}
    />
    </div>
  )
}

export default Input;
