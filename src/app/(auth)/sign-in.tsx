import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text>SignIn</Text>
      <Link href={"/"} className="mt-4 bg-primary p-4 text-white rounded">
        Go Back
      </Link>
    </View>
  );
};

export default SignIn;
