import { Text, View, StyleSheet, StatusBar, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BreedListScreen } from './components/breedListScreen'
import { RandomDog } from "./components/dogImagesScreen";
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assests/Image/DoggoPic.jpg')} style={styles.image}>
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Doggo Breeds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer} >
        <TouchableOpacity style={styles.customButton} onPress={() => navigation.navigate('Third')}>
          <Text style={styles.buttonText}>Doggo Pictures</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

function SecondScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.listContainerontainer}>
      <BreedListScreen />
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={styles.contanier}>
      <StatusBar hidden={false} barStyle="light-content" backgroundColor='#000000' />
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Second" component={BreedListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Third" component={RandomDog} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  contanier: {
    flex: 1,
  },
  button: {
    backgroundColor: '#841584',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  customButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


