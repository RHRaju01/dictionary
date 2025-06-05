import React from "react";
import VerbResult from "./VerbResult";

function VerbTable({ foundVerbs, searchTerm, initialLoad }) {
  if (initialLoad && (!foundVerbs || foundVerbs.length === 0)) {
    return (
      <p className="no-results">
        Type a verb in the search bar and click "Search".
      </p>
    );
  }

  if (!initialLoad && (!foundVerbs || foundVerbs.length === 0)) {
    return (
      <p className="no-results">No verbs found matching "{searchTerm}".</p>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Base Form</th>
          <th>Present Simple (I/we/you/they)</th>
          <th>s/es Form (he/she/it)</th>
          <th>Present Participle</th>
          <th>Past Simple</th>
          <th>Past Participle</th>
        </tr>
      </thead>
      <tbody>
        {foundVerbs.map((verb, index) => (
          <VerbResult
            key={verb.id ? `${verb.id}-${index}` : `verb-${index}`}
            verb={verb}
            searchTerm={searchTerm}
          />
        ))}
      </tbody>
    </table>
  );
}

export default VerbTable;
