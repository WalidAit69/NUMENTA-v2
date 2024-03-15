"use client";

import Heading from "@/components/Heading";
import { Music } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { useProModal } from "@/hooks/UseProModel";
import toast from "react-hot-toast";
import useSwitch from "@/store/Switch";
import { cn } from "@/lib/utils";

function MusicPage() {
  const router = useRouter();
  const proModel = useProModal();

  const [music, setmusic] = useState();

  const { isDark } = useSwitch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post("/api/music", values);

      setmusic(res.data.audio);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModel.onOpen();
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <section
      className={cn(
        "h-full flex flex-col justify-center bg-[#dfdfe0]",
        isDark && "bg-black"
      )}
    >
      <div
        className={cn(
          "h-[98%] mx-2 rounded-3xl bg-[#bbbbbb]",
          isDark && "bg-[#232627]"
        )}
      >
        <div className="pt-24">
          <Heading
            title="Music Generation"
            description="Turn your prompt into music."
            icon={Music}
            iconColor="text-[#e68a1d]"
            bgColor="bg-[#e68a1d66]"
            textColor={isDark ? "text-white" : "text-black"}
          />
        </div>

        <div className="px-4 lg:px-8">
          <div>
            <Form {...form}>
              <form
                className={cn(
                  "rounded-lg border border-zinc-400 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2",
                  isDark && "border-zinc-600"
                )}
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-2">
                        <Input
                          disabled={isLoading}
                          {...field}
                          placeholder="Piano solo"
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  disabled={isLoading}
                  className="col-span-full lg:col-span-2 w-full"
                >
                  Generate
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-4 mt-4">
            {isLoading && (
              <div className="p-20">
                <Loader />
              </div>
            )}

            {!music && !isLoading && <Empty label={"Start Generating"} />}

            {music && (
              <audio controls className="w-full mt-8">
                <source src={music} />
              </audio>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicPage;
