import { useState } from "react";
import { Button } from "./button";

export default function Form({ saveQuotesToParent }: any) {
  const [inputs, setInputs] = useState([
    { id: crypto.randomUUID(), value: "", theme: "" },
  ]);

  const handleInputChange = (e: any, id: string) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value: e.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    const newInput = { id: crypto.randomUUID(), value: "", theme: "" };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = (id: string) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const triggerCallBack = (event: any) => {
    event.preventDefault();
    saveQuotesToParent(inputs);
  };

  return (
    <form onSubmit={triggerCallBack}>
      {inputs.map((input, index) => (
        <div key={input.id}>
          <div className="m-4">
            <label htmlFor="quote" className="mb-2 block text-lg font-medium">
              Paste Book Quotes
            </label>
            <input
              id="quote"
              name="quote"
              type="text"
              value={input.value}
              placeholder="To be, or not to be, that is the question"
              onChange={(e) => handleInputChange(e, input.id)}
              className="w-1/2 text-black pl-2 border border-black m-2"
            />
            <button
              type="button"
              className="border border-black p-2"
              onClick={() => handleRemoveInput(input.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="border border-black p-2 m-2"
        onClick={handleAddInput}
      >
        Add Another Quote
      </button>
      <button type="submit" className=" border border-black p-2 m-2">
        Start Organization
      </button>
    </form>
  );
}
