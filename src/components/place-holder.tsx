import { ReactNode } from "react";
import { Text, View } from "react-native";

const PlaceHolder = ({ children }: { children: ReactNode }) => {
  return (
    <View className="p-2 text-center">
      <Text className="text-sm font-sans-semibold">{children}</Text>
    </View>
  );
};

export default PlaceHolder;
