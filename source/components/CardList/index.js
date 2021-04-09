import React, { memo, useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Header } from './components';

import { styles } from './styles';

export const CardList = memo(
  ({ data = [], renderItem = () => {}, title, onEndReached = () => {} }) => {
    const animation = useRef(new Animated.Value(600)).current;
    useEffect(() => {
      animIn();
    }, []);
    const animIn = () => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
    const transformStyle = {
      transform: [
        {
          translateY: animation,
        },
      ],
    };

    const headerComponent = () => {
      return <Header title={title} />;
    };
    return (
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        style={[styles.container, transformStyle]}
        ListHeaderComponent={headerComponent}
        bounces={false}
        stickyHeaderIndices={[0]}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.01}
      />
    );
  },
);
