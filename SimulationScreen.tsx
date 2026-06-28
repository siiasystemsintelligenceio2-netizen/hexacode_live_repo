import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

export default function SimulationScreen({ code }) {
  const [logs, setLogs] = useState([]);
  const [state, setState] = useState("SCANNED");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");

    ws.onopen = () => {
      ws.send(JSON.stringify({ code }));
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setState(data.state);
      setLogs((l) => [...l, data.msg]);
    };

    return () => ws.close();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>STATE: {state}</Text>
      <ScrollView>
        {logs.map((l, i) => (
          <Text key={i}>{l}</Text>
        ))}
      </ScrollView>
    </View>
  );
}