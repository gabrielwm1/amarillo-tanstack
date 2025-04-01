// app/routes/index.tsx
import * as fs from "node:fs";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Text } from "@/components/ui/text";

const filePath = "count.txt";

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, "utf-8").catch(() => "0")
  );
}

const getCount = createServerFn({
  method: "GET",
}).handler(() => {
  return readCount();
});

const updateCount = createServerFn({ method: "POST" })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount();
    await fs.promises.writeFile(filePath, `${count + data}`);
  });

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div className="flex flex-col gap-4 text-center max-w-sm mx-auto mt-10">
      <Text size="5xl">Welcome</Text>
    </div>
    // <Button
    //   onClick={() => {
    //     updateCount({ data: 1 }).then(() => {
    //       router.invalidate();
    //     });
    //   }}
    // >
    //   Add 1 to {state}?
    // </Button>
  );
}
