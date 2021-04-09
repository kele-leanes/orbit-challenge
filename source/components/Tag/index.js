import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const Tag = memo(({ title }) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{title}</Text>
    </View>
  );
});
