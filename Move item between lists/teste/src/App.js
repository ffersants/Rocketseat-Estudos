import { useEffect } from "react";
import { useState } from "react";
import "./teste.css";

function App() {
  const [listCompleta, setListaCompleta] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
  ]);
  const [paraEnviar, setParaEnviar] = useState();

  function migrarParaEnviar(indexDoItem){
    const toBeMoved = listCompleta.splice(indexDoItem, 1)
    setListaCompleta([...listCompleta])
    setParaEnviar([...paraEnviar, toBeMoved])
  }

  function voltar(indexDoItem){
    const toBeMoved = paraEnviar.splice(indexDoItem, 1)
    setParaEnviar([...paraEnviar])
    setListaCompleta([...listCompleta, toBeMoved])
  }

  useEffect(() => {
    console.log("nova lista paraEnviar", paraEnviar)
  }, [paraEnviar])

  useEffect(() => {
    console.log("nova lista listCompleta", listCompleta)
  }, [listCompleta])

  return (
    <div className="App">
      <div>
        <h1>Lista completa</h1>
        <ul>
          {listCompleta.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => migrarParaEnviar(index)}>Mover para enviar</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h1>Lista para enviar</h1>
        <ul>
          {paraEnviar?.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => voltar(index)}>Voltar</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
