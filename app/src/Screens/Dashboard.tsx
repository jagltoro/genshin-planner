import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {}
});
