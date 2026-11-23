import { useState, useMemo } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Debounce utility (local, simple, safe)
  function debounce<T extends (...args: any[]) => void>(fn: T, delay = 400) {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  // ✅ Mock search handler (API-ready)
  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    console.log("Searching for:", value);
  };

  // ✅ Debounced version
  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 400),
    []
  );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md px-4 py-3">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900 dark:text-white">FitFinder</div>

        {/* Desktop search input */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-6">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
          />
        </div>

        {/* Right side controls: ThemeToggle, GitHub link & Mobile menu button */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <a
            href="https://github.com/Code-Social/fitfinder"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="GitHub Repository"
          >
            GitHub
          </a>
          <button
            className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-3">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
          />

          <ul className="flex flex-col space-y-2 bg-gray-50 dark:bg-gray-700 shadow-md p-2 rounded">
            <li className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer">
              Opportunities
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer">
              Scholarships
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer">
              Hackathons
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
