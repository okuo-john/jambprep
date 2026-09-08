import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BookOpen,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //  Give every navigation link the correct CSS depending on whether that link is currently active.
  const navLinkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-base font-medium transition-colors ${
      isActive
        ? "bg-[#EEF2FF] text-[#4F39F6]"
        : "text-[#475569] hover:text-[#0F172A]"
    }`;

  return (
    <nav className=" fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
      
      {/* ================= MAIN INNER NAVBAR ================= */}
      <div className="mx-auto flex h-[68px] w-full max-w-[1308px] items-center justify-between px-6">
        
        {/* ================= LOGO ================= */}
        <NavLink to="/" className="flex items-center gap-3">
          
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4F39F6]">
            <BookOpen className="h-5 w-5 text-white" />
          </div>

          <h1 className="text-2xl font-bold">
            <span className="text-[#1F2937]">
              JAMB
            </span>

            <span className="text-[#4F39F6]">
              Prep
            </span>
          </h1>

        </NavLink>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-1 md:flex">

          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/subjects"
            className={navLinkClass}
          >
            Subjects
          </NavLink>

          <NavLink
            to="/results"
            className={navLinkClass}
          >
            Results
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About Me
          </NavLink>

        </div>


        {/* ================= START PRACTICING ================= */}
        <NavLink
          to="/subjects"
          className="hidden items-center gap-2 rounded-lg bg-[#FFB800] px-5 py-2.5 text-base font-semibold text-[#1F2937] shadow-sm transition-colors hover:bg-[#F5A900] md:flex"
        >
          Start Practicing

          <ChevronRight className="h-4 w-4" />
        </NavLink>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

      </div>


      {/* ================= MOBILE NAVIGATION ================= */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">

          <div className="mx-auto flex w-full max-w-[1308px] flex-col gap-2 px-6 py-4">

            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F39F6]"
            >
              Home
            </NavLink>

            <NavLink
              to="/subjects"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F39F6]"
            >
              Subjects
            </NavLink>

            <NavLink
              to="/results"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F39F6]"
            >
              Results
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[#475569] hover:bg-[#EEF2FF] hover:text-[#4F39F6]"
            >
              About Me
            </NavLink>

            <NavLink
              to="/subjects"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#FFB800] px-5 py-3 text-base font-semibold text-[#1F2937]"
            >
              Start Practicing

              <ChevronRight className="h-4 w-4" />
            </NavLink>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;