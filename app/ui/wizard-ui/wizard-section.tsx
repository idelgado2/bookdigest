export default function WizardSection({
  quote,
  themes,
  newTheme,
  handleSelctedTheme,
  handleNewThemeOption,
  handleAddTheme,
  handleUpdateQuoteTheme,
  handleThemeDelete,
}: any) {
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
          onChange={(e) => handleUpdateQuoteTheme(quote.id, e.target.value)}
          className="w-1/2 text-black pl-2 border border-black m-2"
        />
        <select
          value={quote.theme}
          onChange={(e) => handleSelctedTheme(quote.id, e.target.value)}
          className="text-black m-4"
        >
          <option value="" disabled>
            Select a Theme
          </option>
          {themes.map((theme: any, index: any) => (
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
        <button onClick={() => handleAddTheme(quote.id)}>Add Option</button>
        <div>
          {themes.map((theme: any) => (
            <div key={theme}>
              {theme}
              <button onClick={() => handleThemeDelete(theme)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
