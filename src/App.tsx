import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 bg-sky-100">
      <h1 className="text-center font-bold text-2xl my-10">Welcome to React.js</h1>
      <nav className="w-full flex justify-center">
        <ul className="flex gap-4">
          <li className="cursor-pointer"><Link to="/">Home</Link></li>
          <li className="cursor-pointer"><Link to="/about">About</Link></li>
          <li className="cursor-pointer"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
};

export default App;