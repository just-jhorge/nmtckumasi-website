"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  pin: z
    .string()
    .length(12, "Pin must be exactly twelve (12) characters")
    .regex(
      /^MOH[a-zA-Z0-9]{9}$/,
      "Pin must start with 'MOH' and contain only letters and numbers"
    ),
});

export default function InterviewDateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
    defaultValues: { pin: "" },
  });

  function onSubmit(value: z.infer<typeof formSchema>) {
    alert(JSON.stringify(value, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full flex items-start gap-2">
          <FormField
            name="pin"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    required
                    maxLength={12}
                    placeholder="E.G: MOH1234567890"
                    className="border rounded-lg placeholder:text-sm uppercase"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            Search Date
          </Button>
        </div>
      </form>
    </Form>
  );
}
