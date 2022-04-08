import { Header, Home, About, Work, Contact } from "./components";
import "./App.css";

function App() {
  return (
    <div className="scroller bg-gradient-to-r from-gray-50 to-indigo-50">
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
