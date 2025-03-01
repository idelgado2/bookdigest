"use client";
import { useState } from "react";
import Form from "../ui/noteform";

export default function Page() {
  const [data, setData] = useState([]);

  const saveQuotes = (childFormData: any) => {
    setData(childFormData);
  };

  return (
    <main>
      <h3>Main Page</h3>
      <Form saveQuotesToParent={saveQuotes} />
      <h5 className="pt-5">
        Data Passed from Child:
        {data.map((item) => (
          <p key={item.id}>{item.value}</p>
        ))}
      </h5>
    </main>
  );
}
