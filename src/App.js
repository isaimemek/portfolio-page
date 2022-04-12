import { Header, Home, About, Work, Contact } from "./components";
import "./App.css";

function App() {
  return (
    <div className="scroller">
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
