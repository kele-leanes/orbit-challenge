import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import { Card, CardList, Spinner } from '../../components';

import { styles } from './styles';

import { useShip } from '../../contexts/Ship/ShipState';
import { getShips } from '../../contexts/Ship/ShipActions';
import { useNavigation } from '@react-navigation/core';

export const Ships = () => {
  const [shipsState, shipsDispatch] = useShip();
  const [page, setPage] = useState(1);
  const { ships, loading, error, message, nextPage } = shipsState;

  const navigation = useNavigation();

  useEffect(() => {
    getShips(shipsDispatch, page);
  }, [page, shipsDispatch]);

  const RenderItem = ({ item }) => {
    return <Card name={item.name} url={item.url} handlePress={handlePress} />;
  };

  const handleLoadMore = () => {
    if (!loading && nextPage) {
      setPage(page + 1);
    }
  };

  const handlePress = useCallback(
    url => {
      navigation.navigate('Ship Details', { url });
    },
    [navigation],
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Text style={styles.error}>{message}</Text>
        ) : (
          <CardList
            data={ships}
            renderItem={RenderItem}
            title={'Starships'}
            onEndReached={handleLoadMore}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
