import {StyleSheet,Text,View } from 'react-native';
const styles = StyleSheet.create({
  paragraph: {
    margin: 32,
    fontSize: 18,
    textDecorationLine: 'underLine',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default function App() {
  return (
    <View>
      <Text style={styles.paragraph}>Hello,World </Text>
    </View>
  );
}
