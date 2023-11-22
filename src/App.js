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


import All from "./components/All";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import New from "./components/New";



function App() {
  return (
   
      <div>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<All />}/>
            <Route path="new" element={<New />}/>
          </Routes>
        </Router>
    
      </div>
 
  );
}

export default App;

