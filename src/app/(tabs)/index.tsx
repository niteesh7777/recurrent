import "@/global.css";
import AreaSafeView from "@/src/components/safe-area-view";
import { Link } from "expo-router";
import { Text } from "react-native";


export default function Index() {
  return (
    <AreaSafeView >
      <Text className="text-7xl font-sans-bold">Home</Text>
      <Link
        href={"/onboarding"}
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold text-center"
      >
        Go To Onboarding
      </Link>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold text-center"
      >
        SignIn
      </Link>
      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold text-center"
      >
        SingUp
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "spotify" },
        }}
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold text-center"
      >
        spotify subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-primary text-white p-4 font-sans-bold text-center"
      >
        claude subscription
      </Link>
    </AreaSafeView>
  );
}
