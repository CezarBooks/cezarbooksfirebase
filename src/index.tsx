import React from "react";
import { createRoot } from "react-dom/client";
import { FirebaseApp } from "firebase/app";
import { App } from "./App";
import { initApp } from "./firebase/initApp";

const container = document.getElementById("root")!;
const root = createRoot(container);

// initiate firebase
initApp();

root.render(<App />);
