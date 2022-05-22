import Controller from "./controller/Controller";
import Admin from "./view/admin/Admin";
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
    </div>
  );
}

export default App;
