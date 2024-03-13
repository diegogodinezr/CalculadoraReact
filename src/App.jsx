import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(num1 + num2);
  };

  const restar = () => {
    setResultado(num1 - num2);
  };

  const multiplicar = () => {
    setResultado(num1 * num2);
  };

  const dividir = () => {
    if (num2 !== 0) {
      setResultado(num1 / num2);
    } else {
      alert("No se puede dividir por cero");
    }
  };

  return (
    <main>
      <div className="calculator-container">
        <div className="calculator">
          <h1>Calculadora</h1>
          <div className="input-container">
            <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
          </div>
          <div className="input-container">
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={multiplicar}>Multiplicar</button>
            <button onClick={dividir}>Dividir</button>
          </div>
          <p className="result">Resultado: {resultado}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
