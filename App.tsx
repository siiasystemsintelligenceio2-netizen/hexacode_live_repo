import React, { useState } from "react";
import ScanScreen from "./src/screens/ScanScreen";
import SimulationScreen from "./src/screens/SimulationScreen";

export default function App() {
  const [code, setCode] = useState(null);

  return code ? (
    <SimulationScreen code={code} />
  ) : (
    <ScanScreen onScan={setCode} />
  );
}