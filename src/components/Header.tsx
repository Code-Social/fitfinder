import { useState, useMemo } from "react";

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
    // future API call goes here
  };

  // ✅ Debounced version
  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 400),
    []
  );

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-bold">FitFinder</div>

        {/* ✅ Search input */}
        <input
          type="text"
          placeholder="Search opportunities..."
          className="hidden md:block px-3 py-1 border rounded"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />

        <button
          className="md:hidden p-2 bg-gray-300 rounded"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-2">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full px-3 py-2 border rounded"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              debouncedSearch(e.target.value);
            }}
          />
        </div>
      )}
    </header>
  );
}
