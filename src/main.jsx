import {createRoot} from "react-dom/client";
import App from "./app.jsx";

const root = createRoot(document.getElementById("root"))

setInterval(()=>{root.render(<App firstName="Matt" lastName="Leering"/>)}, 1000)


