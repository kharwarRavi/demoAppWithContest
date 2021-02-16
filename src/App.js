import Dashboard from "./components/dashboard";
import CounterContextContainer from "./context";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Context Coding</h1>
      <CounterContextContainer>
        <Dashboard />
      </CounterContextContainer>
    </div>
  );
}
