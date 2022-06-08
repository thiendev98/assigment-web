import Controller from "./controller/Controller";
import Admin from "./view/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function App() {
  const [admin, setAdmin] = useState(false);
  return (
    <div className="App">
      {admin === true ? (
        <Admin setAdmin={setAdmin} />
      ) : (
        <Controller setAdmin={setAdmin} />
      )}
      <ToastContainer style={{ zIndex: "100000" }} />
    </div>
  );
}

export default App;
