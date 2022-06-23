import React, { useState, useEffect, useRef } from 'react'
// import Input from './Input';


const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currRef, setCurrRef] = useState(null);
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    console.log(currRef?.current);
    currRef?.current?.focus();
  }, [currRef, name, email]);

  const handleInput = (value, setHandler, cRef) => {
    setCurrRef(cRef);
    setHandler(value);
  }

  const Input = ({ type="text", label="", value="", setHandler }, ref) => {
    return (
      <div>
        <span>{label}</span>
        <input
          type={type}
          ref={ref}
          value={value}
          onChange={(e) => handleInput(e.target.value, setHandler, ref)}
      />
      </div>
    )
  }
  const UserInput = React.forwardRef(Input);
  
  return (
    <div>
      <UserInput
        type='text'
        label="Name"
        ref={nameRef}
        value={name}
        setHandler={setName}
      />

      <UserInput
        type='email'
        label="Email"
        ref={emailRef}
        value={email}
        setHandler={setEmail}
      />
    </div>
  )
}

export default UserForm;
