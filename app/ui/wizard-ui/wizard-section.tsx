import ButtonNormal from "../button-normal";

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
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md p-6 gap-8 mb-6">
        {/* Left side: Quote content */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {quote.value}
          </h1>
          <h2 className="text-lg text-gray-500">{quote.theme}</h2>
        </div>

        {/* Right side: quoteData panel */}
        <div className="w-full md:w-[400px] bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
          <label
            htmlFor={`theme-${quote.id}`}
            className="block mb-2 text-md font-medium text-gray-700"
          >
            Set Theme for Quote:
          </label>

          <select
            value={quote.theme}
            onChange={(e) => handleSelctedTheme(quote.id, e.target.value)}
            className="w-full text-gray-900 border border-gray-300 rounded-lg px-4 py-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            placeholder="New theme option"
            className="w-full text-gray-900 border border-gray-300 rounded-lg px-4 py-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={() => handleAddTheme(quote.id)}
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200 mb-4"
          >
            Add Option
          </button>

          <div className="space-y-2">
            {themes.map((theme: any) => (
              <div
                key={theme}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-2"
              >
                <span className="text-gray-700">{theme}</span>
                <ButtonNormal onClick={() => handleThemeDelete(theme)}>
                  Delete
                </ButtonNormal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
