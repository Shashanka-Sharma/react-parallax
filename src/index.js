import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const port = process.env.PORT || 8080;
// App.listen(port, () => {
//   console.log('Hello world listening on port', port);
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
