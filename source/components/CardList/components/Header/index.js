import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const Header = memo(({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});
