import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Lock, LockIcon, LogInIcon, MailIcon, UserIcon } from "lucide-react";
import { NavLink } from "./ui/nav-link";
import { ButtonLink } from "./ui/button-link";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email"
                  start={<MailIcon size={16} />}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Password</FormLabel>
                <NavLink to="/" className="underline font-medium">
                  Forgot Password?
                </NavLink>
              </div>
              <FormControl>
                <Input
                  placeholder="password"
                  id="password"
                  type="password"
                  start={<LockIcon size={16} />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          fullWidth
          variant="brand"
          type="submit"
          start={<LogInIcon size={16} />}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
