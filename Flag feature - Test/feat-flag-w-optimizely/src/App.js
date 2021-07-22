import logo from "./logo.svg";
import "./App.css";

import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
} from "@optimizely/react-sdk";

const optimizely = createInstance({
  sdkKey: "E4DCQzudYfySnva1ZYuEz",
});

function App() {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: "user123",
      }}
    >
      <div className="App">
        <header className="App-header">
          <OptimizelyFeature feature="mudar_imagem_do_index">
            {(enabled) =>
              enabled ? (
                <img src={logo} className="App-logo" alt="logo" />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WaP8XZ0Z8Yw8jTuX7PD736bzDovzhXe7ZEFOCX4YecPAcADXOxVnWM9llXp3xHQ9vzU&usqp=CAU"
                  className="App-logo"
                  alt="logo"
                />
              )
            }
          </OptimizelyFeature>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </OptimizelyProvider>
  );
}

export default App;
