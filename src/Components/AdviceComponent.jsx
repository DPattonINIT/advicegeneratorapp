import ButtonComponent from "../Components/ButtonComponent";
import LoadingComponent from "../Components/LoadingComponent";
import React, { useState, useEffect } from "react";

function AdviceComponent() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [adviceID, setAdviceID] = useState(null);

  const fetchAdvice = async () => {
    setLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceID(data.slip.id);
    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className=" adviceContainer flex justify-center items-center">
      <div className="adviceBox text-center relative transition-all duration-500 ease-in-out shadow-[0px_0px_33px_1px_rgba(0,0,0,0.3)]">
        <p id="adviceID" className="adviceNumber tracking-widest">
          ADVICE #{adviceID}
        </p>
        <p className="adviceQuote text-[clamp(20px,4vw,28px)] leading-relaxed text-[hsl(193,38%,86%)] my-4">
          {" "}
          {loading ? <LoadingComponent /> : `"${advice}"`}
        </p>
        <div className="absolute bottom-16 left-0 w-full flex justify-center">
          {" "}
          <img className="md:hidden" src="./images/pattern-divider-desktop.svg" alt="line divider" />
          <img className="hidden md:block w-[90%]" src="./images/pattern-divider-mobile.svg" alt="line divider" />
          
        </div>
        <ButtonComponent fetchAdvice={fetchAdvice} />
      </div>
    </div>
  );
}

export default AdviceComponent;
