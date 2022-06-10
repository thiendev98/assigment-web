import Controller from "./controller/Controller";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <div className="App">
      <Controller />
      <ToastContainer style={{ zIndex: "1000000" }} />
    </div>
  );
}
