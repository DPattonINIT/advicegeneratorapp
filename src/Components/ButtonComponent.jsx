import React from "react";

function ButtonComponent({ fetchAdvice }) {
  return (
    <div className="buttonContainer flex justify-center items-center">
      <div className="buttonCircle flex justify-center items-center hover:shadow-[0px_0px_47px_21px_rgba(82,255,168,0.2)] bg-[#52ffa8] rounded-full">
        <button onClick={fetchAdvice}>
          <img src="/images/icon-dice.svg" alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default ButtonComponent;
