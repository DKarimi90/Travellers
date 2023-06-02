import Agency from "./components/Agency";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Destinations />
      <Agency />
      <Testimonials />
    </div>
  );
}

export default App;
