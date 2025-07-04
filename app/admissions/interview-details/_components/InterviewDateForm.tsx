"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useState, useTransition } from "react";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchDateSchema, type SearchDateType } from "@/validators";
import searchDate from "../action";
import { toast } from "sonner";
import InterviewDetailsModal from "./InterviewDetailsModal";
import { InterviewDetails } from "@/types";
import { useRouter } from "next/navigation";

export default function InterviewDateForm() {
  const router = useRouter();
  const [data, setData] = useState<InterviewDetails | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  const form = useForm<SearchDateType>({
    mode: "onSubmit",
    resolver: zodResolver(searchDateSchema),
    defaultValues: { pin: "" },
  });

  function onSubmit(value: SearchDateType) {
    startTransition(async () => {
      const response = await searchDate(value);

      if (response.error) {
        toast.error(response.error);
      }

      if (response.data) {
        setData(response.data);
      }
    });
  }

  return (
    <>
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
                      disabled={isPending}
                      placeholder="E.G: MOH1234567890"
                      className="border rounded-lg placeholder:text-sm uppercase"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              {isPending && <Loader className="size-4 animate-spin" />}
              {isPending ? "Searching..." : "Search"}
            </Button>
          </div>
        </form>
      </Form>
      {data && (
        <InterviewDetailsModal
          open={!!data}
          details={data}
          onOpenChange={() => {
            setData(undefined);
            form.reset();
            router.refresh();
          }}
        />
      )}
    </>
  );
}
