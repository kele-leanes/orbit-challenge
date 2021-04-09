import React, { memo, useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export const Card = memo(({ name, url, handlePress }) => {
  const onHandlePress = useCallback(() => {
    handlePress(url);
  }, [handlePress, url]);
  return (
    <TouchableOpacity onPress={onHandlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
});
