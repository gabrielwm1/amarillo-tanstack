import { Text } from "@/components/ui/text";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/text")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 max-w-screen-sm mx-auto mt-10">
      <div className="flex gap-2 text-center">
        <Text size="xl" accent weight="extrabold">
          Welcome
        </Text>
        <Text size="xl" accent weight="bold">
          Welcome
        </Text>
        <Text size="xl" accent weight="semibold">
          Welcome
        </Text>
        <Text size="xl" accent weight="medium">
          Welcome
        </Text>
        <Text size="xl" accent weight="normal">
          Welcome
        </Text>
        <Text size="xl" accent weight="light">
          Wecome
        </Text>
        <Text size="xl" accent weight="extralight">
          Welcome
        </Text>
        <Text size="xl" accent weight="thin">
          Welcome
        </Text>
      </div>
      <div className="flex gap-2 text-center">
        <Text size="xl" weight="extrabold">
          Welcome
        </Text>
        <Text size="xl" weight="bold">
          Welcome
        </Text>
        <Text size="xl" weight="semibold">
          Welcome
        </Text>
        <Text size="xl" weight="medium">
          Welcome
        </Text>
        <Text size="xl" weight="normal">
          Welcome
        </Text>
        <Text size="xl" weight="light">
          Wecome
        </Text>
        <Text size="xl" weight="extralight">
          Welcome
        </Text>
        <Text size="xl" weight="thin">
          Welcome
        </Text>
      </div>
      <div className="flex gap-2 text-center">
        <Text size="xl" scale="brand" weight="extrabold">
          Welcome
        </Text>
        <Text size="xl" scale="brand" weight="bold">
          Welcome
        </Text>
        <Text size="xl" scale="brand" weight="semibold">
          Welcome
        </Text>
        <Text size="xl" scale="brand" weight="medium">
          Welcome
        </Text>
        <Text size="xl" scale="brand" weight="normal">
          Welcome
        </Text>
        <Text size="xl" scale="brand" weight="light">
          Wecome
        </Text>
        <Text size="xl" scale="brand" weight="extralight">
          Welcome
        </Text>
        <Text size="xl" scale="brand" weight="thin">
          Welcome
        </Text>
      </div>
      <div className="flex gap-2 text-center">
        <Text size="xl" scale="brand" accent={true} weight="extrabold">
          Welcome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="bold">
          Welcome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="semibold">
          Welcome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="medium">
          Welcome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="normal">
          Welcome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="light">
          Wecome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="extralight">
          Welcome
        </Text>
        <Text size="xl" scale="brand" accent={true} weight="thin">
          Welcome
        </Text>
      </div>

      <div className="flex flex-col gap-2 text-start ">
        <Text size="9xl" accent>
          Welcome
        </Text>
        <Text accent size="8xl">
          Welcome
        </Text>
        <Text accent size="7xl">
          Welcome
        </Text>
        <Text accent size="6xl">
          Welcome
        </Text>
        <Text accent size="5xl">
          Welcome
        </Text>
        <Text accent size="4xl">
          Welcome
        </Text>
        <Text accent size="3xl">
          Welcome
        </Text>
        <Text accent size="2xl">
          Welcome
        </Text>
        <Text accent size="xl">
          Welcome
        </Text>
        <Text accent size="lg">
          Welcome
        </Text>
        <Text accent size="md">
          Welcome
        </Text>
        <Text accent size="sm">
          Welcome
        </Text>
        <Text accent size="xs">
          Welcome
        </Text>
      </div>

      {/* brand scale */}

      {/* <div className="flex flex-col gap-2 text-center">
        <Text scale="brand" size="9xl">
          Welcome
        </Text>
        <Text scale="brand" size="8xl">
          Welcome
        </Text>
        <Text scale="brand" size="7xl">
          Welcome
        </Text>
        <Text scale="brand" size="6xl">
          Welcome
        </Text>
        <Text scale="brand" size="5xl">
          Welcome
        </Text>
        <Text scale="brand" size="4xl">
          Welcome
        </Text>
        <Text scale="brand" size="3xl">
          Welcome
        </Text>
        <Text scale="brand" size="2xl">
          Welcome
        </Text>
        <Text scale="brand" size="xl">
          Welcome
        </Text>
        <Text scale="brand" size="lg">
          Welcome
        </Text>
        <Text scale="brand" size="md">
          Welcome
        </Text>
        <Text scale="brand" size="sm">
          Welcome
        </Text>
        <Text scale="brand" size="xs">
          Welcome
        </Text>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <Text scale="brand" accent size="9xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="8xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="7xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="6xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="5xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="4xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="3xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="2xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="xl">
          Welcome
        </Text>
        <Text scale="brand" accent size="lg">
          Welcome
        </Text>
        <Text scale="brand" accent size="md">
          Welcome
        </Text>
        <Text scale="brand" accent size="sm">
          Welcome
        </Text>
        <Text scale="brand" accent size="xs">
          Welcome
        </Text>
      </div> */}
    </div>
  );
}
