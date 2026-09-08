import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar appears on every page */}
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Subjects Page */}
        <Route path="/subjects" element={<Subjects />} />

        {/* Quiz Page */}
        <Route
          path="/quiz/:subject/:tutorId"
          element={<Quiz />}
        />

        {/* Results Page */}
        <Route
          path="/results"
          element={<Results />}
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;