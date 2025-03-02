import Wizard from "./wizard";
import WizardSection from "./wizard-section";

export default function WizardContainer({
  quotes,
  themes,
  newTheme,
  selectedTheme,
  handleSelctedTheme,
  handleNewThemeOption,
  handleAddTheme,
  handleUpdateQuoteTheme,
}: any) {
  return (
    <>
      <p className="text-center p-2">this is the wizard</p>
      <Wizard>
        {quotes.map((item: any) => (
          <WizardSection
            key={item.id}
            quote={item}
            themes={themes}
            newTheme={newTheme}
            selectedTheme={selectedTheme}
            handleUpdateQuoteTheme={handleUpdateQuoteTheme}
            handleNewThemeOption={handleNewThemeOption}
            handleSelctedTheme={handleSelctedTheme}
            handleAddTheme={handleAddTheme}
          />
        ))}
      </Wizard>
    </>
  );
}
