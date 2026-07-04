import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ADMIN_USER = "admin";
const ADMIN_PASS = "2415Emre-";
const COOKIE_NAME = "umb_session";

export function validateCredentials(username: string, password: string) {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export async function createSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, "ok", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
  });
}

export async function destroySession() {
  const store = await cookies();
  store.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    path: "/",
    maxAge: 0,
  });
}

export async function requireAuth() {
  const store = await cookies();
  const session = store.get(COOKIE_NAME);
  if (!session || session.value !== "ok") {
    redirect("/login");
  }
}
