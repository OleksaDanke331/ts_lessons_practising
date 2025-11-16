import React, { useRef } from "react";

const Focusinput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click the button to focus me"
      />

      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
};

export default Focusinput;
