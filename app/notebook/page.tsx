"use client";
import { useState } from "react";
import Form from "../ui/noteform";
import WizardContainer from "../ui/wizard-ui/wizard-container";

export default function Page() {
  const [data, setData] = useState([]);
  const [themes, setThemes] = useState(["Option 1", "Option 2"]);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [newTheme, setNewTheme] = useState("");

  const saveQuotes = (formData: any) => {
    setData(formData);
  };

  const handleUpdateQuoteTheme = (id: number, newTheme: string) => {
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

  const handleSelctedTheme = (event: any) => {
    setSelectedTheme(event.target.value);
  };

  const handleNewThemeOption = (event: any) => {
    setNewTheme(event.target.value);
  };

  const handleAddTheme = () => {
    if (newTheme.trim() !== "") {
      setThemes([...themes, newTheme]);
      setSelectedTheme(newTheme);
      setNewTheme("");
    }
  };

  return (
    <main>
      <h3>Main Page</h3>
      {data.length === 0 && <Form saveQuotesToParent={saveQuotes} />}
      {data.length !== 0 && (
        <WizardContainer
          quotes={data}
          themes={themes}
          newTheme={newTheme}
          selectedTheme={selectedTheme}
          handleSelctedTheme={handleSelctedTheme}
          handleNewThemeOption={handleNewThemeOption}
          handleAddTheme={handleAddTheme}
          handleUpdateQuoteTheme={handleUpdateQuoteTheme}
        />
      )}
      {selectedTheme && <p>You selected: {selectedTheme}</p>}
    </main>
  );
}
