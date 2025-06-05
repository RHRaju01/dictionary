import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VerbTable from "./components/VerbTable";
import verbsData from "./data/verbsData.json";

function App() {
  const [allVerbs, setAllVerbs] = useState([]);
  const [foundVerbs, setFoundVerbs] = useState([]);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [initialLoad, setInitialLoad] = useState(true); // To manage initial message

  useEffect(() => {
    const verbsWithIds = verbsData.map((verb, index) => ({
      ...verb,
      id: verb.id || `verb-${index}`, // Ensure each verb has a unique id for keys
    }));
    setAllVerbs(verbsWithIds);
    setFoundVerbs([]); // Do NOT show all verbs on initial load
  }, []);

  const handleSearch = (searchTerm) => {
    setCurrentSearchTerm(searchTerm);
    setInitialLoad(false); // A search has been attempted

    if (!searchTerm) {
      setFoundVerbs([]); // Do NOT show all verbs if search is empty
      setInitialLoad(true);
      return;
    }

    // Ensure case-insensitive exact match
    const results = allVerbs.filter((verb) => {
      const baseText =
        verb.baseForm && verb.baseForm.text
          ? verb.baseForm.text.toLowerCase()
          : "";
      return baseText === searchTerm.toLowerCase();
    });
    setFoundVerbs(results);
  };

  const handleClearSearch = () => {
    setFoundVerbs([]); // Hide all verbs on clear
    setCurrentSearchTerm("");
    setInitialLoad(true); // Reset to initial prompt state
  };

  return (
    <div className="container">
      <h1>Most Common Irregular Verbs Conjugation with IPA</h1>
      <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />
      {/* Only render VerbTable if allVerbs is loaded */}
      {Array.isArray(foundVerbs) && allVerbs.length > 0 ? (
        <VerbTable
          foundVerbs={foundVerbs}
          searchTerm={currentSearchTerm}
          initialLoad={initialLoad}
        />
      ) : null}
    </div>
  );
}

export default App;
