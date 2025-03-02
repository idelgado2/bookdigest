import { useEffect, useState } from "react";

export default function WizardContainer({ quote, updateQuoteTheme }: any) {
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
      </div>
    </>
  );
}
