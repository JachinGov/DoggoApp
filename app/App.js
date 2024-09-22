import { Text, View, StyleSheet, StatusBar, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BreedListScreen } from './components/breedListScreen'
import { RandomDog } from "./components/dogImagesScreen";

function HomeScreen({navigation}) {
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

function SecondScreen({navigation}) {
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
      <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Second" component={BreedListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Third" component={RandomDog} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    resizeMode: 'cover',
    //height: "100%",
    //width: "100%",

  },
  contanier: {
    flex: 1,
  },
  button: {
    backgroundColor: '#841584', // Button background color
    //padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3, // For Android shadow
  },
  buttonText: {
    color: 'white', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'column', // Align children in a row
    justifyContent: 'space-between', // Space buttons to the edges
    paddingHorizontal: 32,
  },
  customButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3, // For Android shadow
  },
  buttonText: {
    color: 'white', // Set text color to white
    fontSize: 16,
    fontWeight: 'bold',
  },
});


