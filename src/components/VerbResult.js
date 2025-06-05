import React from "react";

function VerbResult({ verb, searchTerm }) {
  if (!verb) {
    return null;
  }

  const renderCell = (formKey, columnClass) => {
    const formData = verb[formKey];
    if (!formData || !formData.text) {
      // Check if formData and formData.text exist
      return <td className={columnClass}>-</td>;
    }

    // No highlighting, just display the text
    const displayText = formData.text;

    return (
      <td className={columnClass}>
        {displayText}
        <br />
        {formData.ame && (
          <span className="ipa-line">
            <span className="ipa-label">AmE:</span>
            <span className="ipa-sound">{formData.ame}</span>
          </span>
        )}
        {formData.bre && (
          <span className="ipa-line">
            <span className="ipa-label">BrE:</span>
            <span className="ipa-sound">{formData.bre}</span>
          </span>
        )}
      </td>
    );
  };

  return (
    <tr>
      {renderCell("baseForm", "base-form")}
      {renderCell("presentForm", "present-form")}
      {renderCell("sForm", "s-form")}
      {renderCell("presentParticiple", "present-participle")}
      {renderCell("pastSimple", "past-simple")}
      {renderCell("pastParticiple", "past-participle")}
    </tr>
  );
}

export default VerbResult;
