import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import "remixicon/fonts/remixicon.css";

Aos.init();

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
