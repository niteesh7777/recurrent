import {
  HOME_BALANCE,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import "@/global.css";
import ListHeading from "@/src/components/list-headding";
import PlaceHolder from "@/src/components/place-holder";
import AreaSafeView from "@/src/components/safe-area-view";
import UpcomingSubscriptionCard from "@/src/components/upcomming-subscription-card";
import { formatCurrency } from "@/src/lib/utils";
import dayjs from "dayjs";
import { FlatList, Image, Text, View } from "react-native";
export default function Index() {
  return (
    <AreaSafeView>
      <View className="home-header">
        <View className="home-user">
          <Image source={images.avatar} className="home-avatar" />
          <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon" />
      </View>
      <View className="home-balance-card">
        <Text className="home-balance-label">Balance</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>
          <Text className="home-balance-date">
            {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
          </Text>
        </View>
      </View>
      <View>
        <ListHeading title="Up Comming" />

        <FlatList
          data={UPCOMING_SUBSCRIPTIONS}
          renderItem={({ item }) => (
            <UpcomingSubscriptionCard
              icon={item.icon}
              price={item.price}
              currency={item.currency}
              daysLeft={item.daysLeft}
              name={item.name}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <PlaceHolder>No Upcomming Subscriptions</PlaceHolder>
          }
        />
      </View>
      <View>
        <ListHeading title="All Subscription" />
      </View>
    </AreaSafeView>
  );
}
