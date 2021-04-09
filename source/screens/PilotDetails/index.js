import React, { memo, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

import { usePilot } from '../../contexts/Pilot/PilotState';
import { getPilot } from '../../contexts/Pilot/PilotActions';
import { Spinner, Tag } from '../../components';

export const PilotDetails = memo(
  ({
    route: {
      params: { url },
    },
  }) => {
    const [pilotsState, pilotsDispatch] = usePilot();
    const { pilot, loading, error, message, ships, movies } = pilotsState;

    useEffect(() => {
      getPilot(pilotsDispatch, url);
      return () => {
        pilotsDispatch({
          type: 'SET_SHIPS',
          payload: null,
        });
        pilotsDispatch({
          type: 'SET_MOVIES',
          payload: null,
        });
      };
    }, [pilotsDispatch, url]);

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
                <Text>{pilot.name}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>Gender:</Text>
                <Text>{pilot.gender}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>Height:</Text>
                <Text>{pilot.height}</Text>
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.textbold}>Brith:</Text>
                <Text>{pilot.birth_year}</Text>
              </View>
              {ships.length > 0 ? (
                <View style={styles.textWrapper}>
                  <Text style={styles.textbold}>Starships:</Text>
                  <View style={styles.tagContainer}>
                    {ships.map((ship, index) => (
                      <Tag key={index} title={ship.name} />
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
