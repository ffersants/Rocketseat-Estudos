import { Tree, Container, Content, Sidebar, Sidenav } from "rsuite";
import data from "./data";
import "rsuite/dist/styles/rsuite-default.css";
import style from "./style.module.css";
import Arrows from "./Arrows/Arrows.js";
import { useState } from "react";
function App() {
  const [pdfLinkToRender, setPdfLinkdToRender] = useState(
    "http://www.africau.edu/images/default/sample.pdf"
  );

  function handleSelect(e) {
    setPdfLinkdToRender(e.link);
  }

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
        <Arrows setContentToBeShow={setPdfLinkdToRender} list={data}>
          <div className={style.holdsIframe}>
            <iframe src={pdfLinkToRender} width="600px"></iframe>
          </div>
        </Arrows>
      </div>
    </div>
  );
}

export default App;
