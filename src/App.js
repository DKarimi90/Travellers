// import Agency from "./components/Agency";
// import Destinations from "./components/Destinations";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Planned from "./components/Planned";
// import Testimonials from "./components/Testimonials";


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Destinations />
//       <Agency />
//       <Testimonials />
//       <Planned />
//     </div>
//   );
// }

// export default App;

import Agency from "./components/Agency";
import Destinations from "./components/Destinations";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Planned from "./components/Planned";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="tours/:id" element={<TourDetails />}/>
          </Routes>
            <Home />
            <Destinations />
            <Agency />
            <Testimonials />
            <Planned />
      </div>
    </Router>
  );
}

export default App;

