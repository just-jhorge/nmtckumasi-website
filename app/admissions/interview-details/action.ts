"use server";

import { prisma } from "@/lib/prisma";
import { searchDateSchema, type SearchDateType } from "@/validators";

export default async function searchDate(value: SearchDateType) {
  const validatedValue = searchDateSchema.safeParse(value);

  if (!validatedValue.success) {
    return { error: "Invalid value, please try again." };
  }

  const { pin } = validatedValue.data;

  console.log(pin);

  const data = await prisma.interview.findUnique({
    where: { pin: pin.toUpperCase() },
  });

  if (!data) {
    return { error: "MOH Pin not found. Please try again." };
  }

  return { data };
}
