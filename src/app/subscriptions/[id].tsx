import AreaSafeView from "@/src/components/safe-area-view";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <AreaSafeView>
      <Text>SubscriptionDetails : {id}</Text>
    </AreaSafeView>
  );
};

export default SubscriptionDetails;
