import Agency from "./components/Agency";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Planned from "./components/Planned";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Destinations />
      <Agency />
      <Testimonials />
      <Planned />
    </div>
  );
}

export default App;
