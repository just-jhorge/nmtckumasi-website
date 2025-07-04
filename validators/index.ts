import { z } from "zod";

export const searchDateSchema = z.object({
  pin: z
    .string()
    .length(12, "Pin must be exactly twelve (12) characters")
    .regex(
      /[a-zA-Z0-9]{12}$/,
      "Pin must start with 'MOH' and contain only letters and numbers"
    ),
});

export type SearchDateType = z.infer<typeof searchDateSchema>;
