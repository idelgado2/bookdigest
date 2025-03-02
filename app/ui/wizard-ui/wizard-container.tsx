import Wizard from "./wizard";
import WizardSection from "./wizard-section";

export default function WizardContainer({
  quotes,
  themes,
  newTheme,
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
            handleSelctedTheme={handleSelctedTheme}
            handleNewThemeOption={handleNewThemeOption}
            handleAddTheme={handleAddTheme}
            handleUpdateQuoteTheme={handleUpdateQuoteTheme}
          />
        ))}
      </Wizard>
    </>
  );
}
