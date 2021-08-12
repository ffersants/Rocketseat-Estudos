import { Tree, Container, Content, Sidebar, Sidenav } from "rsuite";
import data from "./data";
import "rsuite/dist/styles/rsuite-default.css";
import style from "./style.module.css";
import Arrows from "./Arrows/Arrows.js";
import { useState, useEffect } from "react";
function App() {
  const [selectedElement, setSelectedElement] = useState(
    "http://www.africau.edu/images/default/sample.pdf"
  );

  function handleSelect(e) {
    setSelectedElement(e);
  }

  useEffect(() => {
    console.log("aquiiiiiiiiii", selectedElement);
  }, [selectedElement]);

  return (
    <div className={style.app}>
      <div className={style.sidenav}>
        <Sidenav expanded={true} defaultOpenKeys={["3"]} appearance="subtle">
          <Tree
            height={900}
            defaultExpandAll
            data={data}
            onSelect={(e) => handleSelect(e)}
          />
        </Sidenav>
      </div>

      <div className={style.container}>
        <Arrows
          setActiveElement={setSelectedElement}
          propActiveElement={selectedElement}
          list={data}
        >
          <div className={style.holdsIframe}>
            <iframe src={selectedElement?.link} width="600px"></iframe>
          </div>
        </Arrows>
      </div>
    </div>
  );
}

export default App;
