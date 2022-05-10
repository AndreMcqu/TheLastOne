import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View style={{ flex: 8, }}>
          <View style={{ flex: 3, backgroundColor: "purple" }} />
          <View style={{ flex: 1, backgroundColor: "yellow" }} />
          <View style={{ flex: 1, backgroundColor: "pink" }} />
        </View>
        <View style={{ flex: 2, backgroundColor: "red" }} />
        <View style={{ flex: 1, backgroundColor: "blue" }} />
        <View style={{ flex: 2, }}>
          <View style={{ flex: 3, backgroundColor: "turquoise" }} />
          <View style={{ flex: 1, backgroundColor: "pink" }} />
        </View>
      </View>
      <View style={{ flex: 2, }}>
          <View style={{ flex: 1, backgroundColor: "gray" }} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
