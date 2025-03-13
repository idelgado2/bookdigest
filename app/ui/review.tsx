import Link from "next/link";
import React from "react";

const link = [{ name: "Home", href: "/" }];

export default function Review({ quotes }: any) {
  const handleExport = () => {
    const groupedQuotes = quotes.reduce((acc: any, quote: any) => {
      if (!acc[quote.theme]) {
        acc[quote.theme] = [];
      }
      acc[quote.theme].push(quote.value);
      return acc;
    }, {});

    const quoteText = Object.keys(groupedQuotes)
      .map(
        (theme) =>
          `${theme}\n\n${groupedQuotes[theme]
            .map((quote: string) => `- ${quote}`)
            .join("\n")}`
      )
      .join("\n\n");

    const blob = new Blob([quoteText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <p>TIME TO FINIALIZE QUOTES! FROM REVIEW COMPONENT!</p>
      {quotes.map((quote: any) => (
        <div key={quote.id} className="m-4">
          <p>quote: {quote.value}</p>
          <p>quote theme: {quote.theme}</p>
        </div>
      ))}
      <button
        type="button"
        className="border border-black p-2 m-2"
        onClick={handleExport}
      >
        Export
      </button>

      <Link key={link[0].name} href={link[0].href}>
        <button type="button" className="border border-black p-2 m-2">
          Home
        </button>
      </Link>
    </>
  );
}
