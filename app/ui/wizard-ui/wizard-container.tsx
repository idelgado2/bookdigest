import { useState } from "react";
import Wizard from "./wizard";
import WizardSection from "./wizard-section";

export default function WizardContainer({ quotes, updateQuoteTheme }: any) {
  const [quoteTheme, setQuoteTheme] = useState("");

  return (
    <>
      <p className="text-center p-2">this is the wizard</p>
      <Wizard>
        {quotes.map((item: any) => (
          <WizardSection
            key={item.id}
            quote={item}
            setTheme={setQuoteTheme}
            updateQuoteTheme={updateQuoteTheme}
          />
        ))}
      </Wizard>
    </>
  );
}
