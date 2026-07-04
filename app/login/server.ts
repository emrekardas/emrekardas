"use server";

import { redirect } from "next/navigation";
import { createSession, validateCredentials } from "@/app/lib/auth";

export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!validateCredentials(username, password)) {
    return { error: "Kullanıcı adı veya şifre hatalı." };
  }

  await createSession();
  redirect("/dashboard");
}
