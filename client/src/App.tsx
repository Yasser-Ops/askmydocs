import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("server unreachable"));
  }, []);

  return <h1>AskMyDocs API status: {status}</h1>;
}

export default App;