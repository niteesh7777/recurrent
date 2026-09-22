import { styled } from "nativewind";
import { ReactNode } from "react";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const AreaSafeView = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">{children}</SafeAreaView>
  );
};

export default AreaSafeView;
