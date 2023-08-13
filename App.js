
import { StyleSheet, Text, View } from 'react-native';
import About from './src/pages/About'
import Transfer from './src/pages/Transfer'
import Others from './src/pages/Others'
import Menu from './src/components/Menu'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <About/> */}
      {/* <Transfer/> */}
      <Others/>
      <Menu/>
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
