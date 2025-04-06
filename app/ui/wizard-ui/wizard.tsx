import React from "react";
import ButtonNormal from "./../button-normal";

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
      <ButtonNormal onClick={goPrevPage}>back</ButtonNormal>
    ) : null;
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <ButtonNormal onClick={goNextPage}>Next</ButtonNormal>
    ) : null;

  const ButtonFinish = () =>
    activePageIndex === pages.length - 1 ? (
      <ButtonNormal onClick={handleFinializeQuotes}>Finish</ButtonNormal>
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
