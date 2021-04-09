import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import { Card, CardList, Spinner } from '../../components';

import { styles } from './styles';

import { usePilot } from '../../contexts/Pilot/PilotState';
import { getPilots } from '../../contexts/Pilot/PilotActions';
import { useNavigation } from '@react-navigation/core';

export const Pilots = () => {
  const [pilotsState, pilotsDispatch] = usePilot();
  const [page, setPage] = useState(1);
  const { pilots, loading, error, message, nextPage } = pilotsState;

  const navigation = useNavigation();

  useEffect(() => {
    getPilots(pilotsDispatch, page);
  }, [page, pilotsDispatch]);

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
      navigation.navigate('Pilot Details', { url });
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
            data={pilots}
            renderItem={RenderItem}
            title={'Pilots'}
            onEndReached={handleLoadMore}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
