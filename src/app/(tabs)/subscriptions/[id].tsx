import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>SubscriptionDetails : {id}</Text>
    </View>
  );
};

export default SubscriptionDetails;
