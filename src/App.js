import Main from "./Main";
import Eye from "./Eye";
import WhiteEye from "./WhiteEye";
import { useEffect, useState } from "react";

function App() {
  const [mouseLoc, setMouseLoc] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", ({ x, y }) => {
      setMouseLoc({
        x,
        y,
      });
    });
  }, []);

  return (
    <div className="App">
      <Eye
        className="eye first"
        left={(mouseLoc.x - 563) / 80 + "px"}
        top={mouseLoc.y / 50 - 5 + "px"}
      />
      <Eye
        className="eye second"
        left={(mouseLoc.x - 563) / 80 - 63 + "px"}
        top={mouseLoc.y / 50 - 5 + "px"}
      />
      <WhiteEye className="white-eye" />
      <Main className="portrait" />
    </div>
  );
}

export default App;
