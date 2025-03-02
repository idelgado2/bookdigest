import React from "react";

export default function Wizard({ children, handleFinializeQuotes }: any) {
  const [activePageIndex, setActivePageIndex] = React.useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <button type="button" onClick={goPrevPage}>
        back
      </button>
    ) : null;
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <button type="button" onClick={goNextPage}>
        Next
      </button>
    ) : null;

  const ButtonFinish = () =>
    activePageIndex === pages.length - 1 ? (
      <button type="button" onClick={handleFinializeQuotes}>
        Finish
      </button>
    ) : null;

  return (
    <div className="wizard">
      <div className="wizard__content">{currentPage}</div>
      <div className="wizard__buttons">
        <ButtonPrev />
        <ButtonNext />
        <ButtonFinish />
      </div>
    </div>
  );
}
