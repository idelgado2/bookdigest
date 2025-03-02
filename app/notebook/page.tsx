"use client";
import { useState } from "react";
import Form from "../ui/noteform";
import WizardContainer from "../ui/wizard-ui/wizard-container";

export default function Page() {
  const [data, setData] = useState([]);

  const saveQuotes = (formData: any) => {
    setData(formData);
  };

  const updateQuoteTheme = (id: number, newTheme: string) => {
    setData((prevData: any) => {
      return prevData.map((quote: any) => {
        if (quote.id === id) {
          return { ...quote, theme: newTheme };
        } else {
          return quote;
        }
      });
    });
  };

  return (
    <main>
      <h3>Main Page</h3>
      {data.length === 0 && <Form saveQuotesToParent={saveQuotes} />}
      {data.length !== 0 && (
        <WizardContainer quotes={data} updateQuoteTheme={updateQuoteTheme} />
      )}
    </main>
  );
}
