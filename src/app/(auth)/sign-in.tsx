import AreaSafeView from "@/src/components/safe-area-view";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <AreaSafeView>
      <View className="flex-1 justify-center items-center  ">
        <Text>SignIn</Text>
        <Link href={"/"} className="mt-4 bg-primary p-4 text-white rounded">
          Go Home
        </Link>
      </View>
    </AreaSafeView>
  );
};

export default SignIn;
