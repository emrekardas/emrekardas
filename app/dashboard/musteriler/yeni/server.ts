"use server";

import { redirect } from "next/navigation";
import { addClient } from "@/app/lib/data";

export async function addClientAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (!name) {
    redirect("/dashboard/musteriler/yeni");
  }

  const id = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;

  await addClient({
    id,
    name,
    company: company || undefined,
    email: email || undefined,
    phone: phone || undefined,
    notes: notes || undefined,
  });

  redirect("/dashboard/musteriler");
}
