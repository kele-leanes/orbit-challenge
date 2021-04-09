import React, { memo, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

import { Spinner, Tag } from '../../components';
import { useShip } from '../../contexts/Ship/ShipState';
import { getShip } from '../../contexts/Ship/ShipActions';

export const ShipDetails = memo(
  ({
    route: {
      params: { url },
    },
  }) => {
    const [shipsState, shipsDispatch] = useShip();
    const { ship, loading, error, message, pilots, movies } = shipsState;

    useEffect(() => {
      getShip(shipsDispatch, url);
      return () => {
        shipsDispatch({
          type: 'SET_PILOTS',
          payload: null,
        });
        shipsDispatch({
          type: 'SET_MOVIES',
          payload: null,
        });
      };
    }, [shipsDispatch, url]);

    return (
      <SafeAreaView style={styles.container}>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Text>{message}</Text>
        ) : (
          <View style={styles.dataContainer}>
            <ScrollView>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>Name:</Text>
                <Text>{ship.name}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>Model:</Text>
                <Text>{ship.model}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>Passengers:</Text>
                <Text>{ship.passengers}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>HD Rating:</Text>
                <Text>{ship.hyperdrive_rating}</Text>
              </View>
              {pilots.length > 0 ? (
                <View style={styles.textWrapper}>
                  <Text style={styles.textbold}>Pilots:</Text>
                  <View style={styles.tagContainer}>
                    {pilots.map((pilot, index) => (
                      <Tag key={index} title={pilot.name} />
                    ))}
                  </View>
                </View>
              ) : null}
              {movies.length > 0 ? (
                <View style={styles.textWrapper}>
                  <Text style={styles.textbold}>Films:</Text>
                  <View style={styles.tagContainer}>
                    {movies.map((movie, index) => (
                      <Tag key={index} title={movie.title} />
                    ))}
                  </View>
                </View>
              ) : null}
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    );
  },
);
