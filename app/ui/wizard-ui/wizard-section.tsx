import { useState } from "react";

export default function WizardContainer({ quote, updateQuoteTheme }: any) {
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const [selectedValue, setSelectedValue] = useState("");
  const [newTheme, setNewTheme] = useState("");

  const handleSelctedValue = (event: any) => {
    setSelectedValue(event.target.value);
  };

  const handleNewThemeOption = (event: any) => {
    setNewTheme(event.target.value);
  };

  const handleAddTheme = () => {
    if (newTheme.trim() !== "") {
      setOptions([...options, newTheme]);
      setSelectedValue(newTheme);
      setNewTheme("");
    }
  };

  return (
    <>
      <div>
        <h1>{quote.value}</h1>
        <h1>{quote.theme}</h1>
        <label
          htmlFor={`theme-${quote.id}`}
          className="mb-2 text-lg font-medium"
        >
          Theme
        </label>
        <input
          id={`theme-${quote.id}`}
          name="theme"
          type="text"
          value={quote.theme}
          placeholder="assigne theme"
          onChange={(e) => updateQuoteTheme(quote.id, e.target.value)}
          className="w-1/2 text-black pl-2 border border-black m-2"
        />
        <select
          value={selectedValue}
          onChange={handleSelctedValue}
          className="text-black m-4"
        >
          <option value="" disabled>
            Select a Theme
          </option>
          {options.map((theme, index) => (
            <option key={index} value={theme}>
              {theme}
            </option>
          ))}
        </select>
        <input
          name="newTheme"
          type="text"
          value={newTheme}
          onChange={handleNewThemeOption}
          placeholder="new theme option"
          className="text-black m-4"
        />
        <button onClick={handleAddTheme}>Add Option</button>
      </div>
    </>
  );
}
