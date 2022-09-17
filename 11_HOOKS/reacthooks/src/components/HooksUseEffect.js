import { useEffect, useState } from "react";

const HooksUseEffect = () => {
  // 1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de dependências vazio
  useEffect(() => {
    console.log("Serei excutado apenas uma vez!");
  }, []);

  // 3 - item no array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  // 4 - cleanup do useEffect
  useEffect(() => {
    //const timer = setTimeout(() => {
    //  console.log("Hello World");
    //  if (anotherNumber === 60) {
    //    setAnotherNumber(0);
    //  } else {
    //    setAnotherNumber(anotherNumber + 1);
    //  }
   // }, 200);

   // return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>UseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar Another Number!
      </button>
      <hr />
    </div>
  );
};

export default HooksUseEffect;
