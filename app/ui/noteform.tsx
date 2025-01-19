import { useState } from "react";
import { Button } from "./button";

export default function Form() {
  const [inputs, setInputs] = useState([
    { id: crypto.randomUUID(), value: "" },
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
    const newInput = { id: crypto.randomUUID(), value: "" };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = (id: string) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  return (
    <form>
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
              className="w-1/2 text-black pl-2"
            />
            <Button
              type="button"
              className="delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
              onClick={() => handleRemoveInput(input.id)}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <Button
        type="button"
        className="delay-150 ease-in-out hover:-translate-y-1 hover:scale-110"
        onClick={handleAddInput}
      >
        Add Another Quote
      </Button>
      <Button className="mt-5 delay-150 ease-in-out hover:-translate-y-1 hover:scale-110">
        Start Organization
      </Button>
    </form>
  );
}
