"use server";

import { redirect } from "next/navigation";

export async function submitQuotes(formData: FormData) {
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  redirect("/notebook");
}
