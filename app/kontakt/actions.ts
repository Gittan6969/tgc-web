"use server";

type ContactData = {
  name: string;
  email: string;
  reason: "prototyp"|"offert"|"ovrigt";
  message: string;
  honey?: string;
  token?: string;
};

export async function sendContact(data: ContactData) {
  if (data.honey) {
    return { ok: false };
  }
  return { ok: true };
}
