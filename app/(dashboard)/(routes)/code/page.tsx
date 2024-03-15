"use client";

import Heading from "@/components/Heading";
import { Code } from "lucide-react";
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
import { ChatCompletionRequestMessage } from "openai";
import { Empty } from "@/components/Empty";
import { Loader } from "@/components/Loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/userAvatar";
import { BotAvatar } from "@/components/botAvatar";
import ReactMarkdown from "react-markdown";
import { useProModal } from "@/hooks/UseProModel";
import toast from "react-hot-toast";
import useSwitch from "@/store/Switch";

function CodePage() {
  const proModel = useProModal();
  const router = useRouter();
  const [messages, setmessages] = useState<ChatCompletionRequestMessage[]>([]);
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
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const res = await axios.post("/api/code", {
        messages: newMessages,
      });

      setmessages((current) => [...current, userMessage, res.data]);

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
            title="Code"
            description="Our most advanced coding model."
            icon={Code}
            iconColor={isDark ? "text-[#52ba69]" : "text-[#297139]"}
            bgColor="bg-[#4ca8615c]"
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
                          placeholder="Simple login page using next.js"
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

            {messages.length === 0 && !isLoading && (
              <Empty label={"Start Coding"} />
            )}

            <div className="flex flex-col-reverse gap-y-4">
              {messages.map((msg) => (
                <div
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg",
                    msg.role === "user"
                      ? "bg-white border border-black/10"
                      : "bg-muted"
                  )}
                  key={msg.content}
                >
                  {msg.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <ReactMarkdown
                    components={{
                      pre: ({ node, ...props }) => (
                        <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                          <pre {...props} />
                        </div>
                      ),
                      code: ({ node, ...props }) => (
                        <code
                          {...props}
                          className="bg-black/10 p-1 rounded-lg"
                        ></code>
                      ),
                    }}
                    className={"text-sm overflow-hidden leading-7"}
                  >
                    {msg.content || ""}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodePage;
