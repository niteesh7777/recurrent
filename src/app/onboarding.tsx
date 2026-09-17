import { Text, View } from "react-native";
import AreaSafeView from "../components/safe-area-view";

const OnBoarding = () => {
  return (
    <AreaSafeView>
      <View className="flex-1 justify-center items-center bg-background">
        <Text className="text-xl font-bold">Onboarding screen</Text>
      </View>
    </AreaSafeView>
  );
};

export default OnBoarding;
