import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import reducer, { initialState } from "./component/reducer.ts";
import { StateProvider } from "./component/StateProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </>
);
