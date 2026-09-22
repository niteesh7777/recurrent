import { HOME_SUBSCRIPTIONS } from "@/constants/data";
import "@/global.css";
import HomeMainListHeader from "@/src/components/home-main-list-header";
import AreaSafeView from "@/src/components/safe-area-view";
import SubscriptionCard from "@/src/components/subscription-card";
import { useState } from "react";
import { FlatList } from "react-native";
export default function Index() {
  const [expandedItem, setExpandedItem] = useState<String | null>();
  function handlePress(id: string) {
    // if (id !== expandedItem) {
    //   setExpandedItem(id);
    // } else {
    //   setExpandedItem(null);
    // }
    setExpandedItem((previd) => (previd === id ? null : id));
  }
  return (
    <AreaSafeView>
      <FlatList
        ListHeaderComponent={<HomeMainListHeader />}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={item.id === expandedItem}
            onPress={() => handlePress(item.id)}
            // onCancelPress={() => setExpandedItem(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-14"
      />
    </AreaSafeView>
  );
}
