"use server";

import { cookies } from "next/headers";

export async function loginAction(data: any) {
  (await cookies()).set("auth", JSON.stringify(data), {
    httpOnly: true,
    path: "/",
  });
}

export async function logoutAction() {
  (await cookies()).delete("auth");
}
