import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/story.css";
import "./styles/collections.css";
import "./styles/experience.css";
import "./styles/instagram.css";
import "./styles/reviews.css";
import "./styles/visit.css";
import "./styles/footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
