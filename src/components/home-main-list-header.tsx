import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import ListHeading from './list-headding';
import { HOME_BALANCE, HOME_USER, UPCOMING_SUBSCRIPTIONS } from '@/constants/data';
import UpcomingSubscriptionCard from './upcomming-subscription-card';
import { formatCurrency } from '../lib/utils';
import dayjs from 'dayjs';
import PlaceHolder from './place-holder';
import images from '@/constants/images';
import { icons } from '@/constants/icons';

const HomeMainListHeader = () => {
  return (
    <>
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
          renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <PlaceHolder>No Upcomming Subscriptions</PlaceHolder>
          }
        />
        <ListHeading title="All Subscription" />
      </View>
    </>
  );
}

export default HomeMainListHeader