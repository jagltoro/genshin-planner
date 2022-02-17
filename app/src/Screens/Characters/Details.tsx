import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DetailsProps {}

const Details = (props: DetailsProps) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text>Details. {route.params.id}, {route.params.type}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {}
});
