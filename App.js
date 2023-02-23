import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import {StyleSheet, Button, Text, View, Linking, ImageBackground} from 'react-native';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Main function, the main home screen of the app

function HomeScreen ({ navigation}) {
  return (
    //APEX Logo at the front
    <View style={styles.container}>
        <Image source={{uri: 'https://dta0yqvfnusiq.cloudfront.net/inves51693941/2019/01/logo-5c5365fbbd67c.jpg'}}
        style={{width: 415, height: 85}} /> 
  
{/* Background image for the top */}


{/* Text above 'Welcome' */}
  <Text style={{color: '#e6e2d3', fontSize: 18, }}>
  <Text>Welcome to the future of Education and Tracking </Text>
  </Text>
      <Text style={{color: '#e6e2d3', fontSize: 18, }}>
Educational Information Tracking System</Text>  
      <Text style={{color: '#e6e2d3', fontSize: 18, fontWeight: 'bold', right:10}}>
      Turn-Key Income Properties </Text>  
      
 {/* Welcome header with line */}
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
  <View>
  <Text style={{color: '#e6e2d3', fontSize: 30, fontFamily: 'Apple SD Gothic Neo', width: 120, textAlign: 'center'}}>Welcome</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
  </View> 

{/* First Scroll View(Main) */}
<ScrollView bounces = {false}>

<Text style={{color: '#e6e2d3', fontSize: 20, fontWeight: 'bold', fontFamily: 'System'}}> 
        Real Estate Markets We  Invest In: 
        </Text>

        {/* Location Buttons */}
        <TouchableOpacity
          onPress={() => navigation.navigate('New Jersey')}
          style={styles.buttons}>
          <Text style={{ fontSize: 20, color: '#ccc' }}>New Jersey</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('Ohio')}
          style={styles.buttons}>
          <Text style={{ fontSize: 20, color: '#ccc' }}>Ohio</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('Maryland')}
          style={styles.buttons}>
          <Text style={{ fontSize: 20, color: '#ccc' }}>Maryland</Text>
          </TouchableOpacity>
      <Text style={{color: '#e6e2d3', fontSize: 20, fontFamily: 'System'}}>
      APEX Capital Group is a privately-held, real estate investment firm with offices in New Jersey and New York. 
      We locate, acquire, rehabilitate, and sell distressed residential properties. 
      We are a full-service, real estate investment firm working to provide busy professionals with premium real estate investment opportunities 
      in the form of lucrative turn-key rental properties in the New Jersey, Michigan, Maryland, and Ohio markets.
      APEX Capital Group is a privately-held, real estate investment firm with offices in New Jersey and New York. 
      We locate, acquire, rehabilitate, and sell distressed residential properties. 
      We are a full-service, real estate investment firm working to provide busy professionals with premium real estate investment opportunities 
      in the form of lucrative turn-key rental properties in the New Jersey, Michigan, Maryland, and Ohio markets.
      APEX Capital Group is a privately-held, real estate investment firm with offices in New Jersey and New York. 
      We locate, acquire, rehabilitate, and sell distressed residential properties. 
      We are a full-service, real estate investment firm working to provide busy professionals with premium real estate investment opportunities 
      in the form of lucrative turn-key rental properties in the New Jersey, Michigan, Maryland, and Ohio markets.
      APEX Capital Group is a privately-held, real estate investment firm with offices in New Jersey and New York. 
      We locate, acquire, rehabilitate, and sell distressed residential properties. 
      We are a full-service, real estate investment firm working to provide busy professionals with premium real estate investment opportunities 
      in the form of lucrative turn-key rental properties in the New Jersey, Michigan, Maryland, and Ohio markets.
      </Text> 

        
       </ScrollView>
{/* End of ScrollView */}

{/* Notably Mention text with same configuration as Welcome */}

<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
    <View>
      <Text style={{color: '#e6e2d3', fontSize: 12, fontFamily: 'Apple SD Gothic Neo', fontWeight: 'bold', width: 120, textAlign: 'center'}}>Notably Mentioned</Text>
    </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
</View>

{/* Second Scroll view for accomplishments "as seen in...." */}

<ScrollView 
          horizontal= {true}
          decelerationRate={0}
          snapToInterval={200} //your element width
          snapToAlignment={"center"}>
      </ScrollView>

{/* Bottom Background in between second scrollview and Notably Mentioned */}



{/* Main functional buttons */}

<View style={{flexDirection: "row", padding: 20}}>
  <TouchableOpacity
    onPress={() => navigation.navigate('Menu')}
    style={styles.buttons}>
    <Text style={{ fontSize: 20, color: '#ccc' }}>About</Text>
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => Linking.openURL(`tel:${7323435753}`)}
    style={styles.buttons}>
    <Text style={{ fontSize: 20, color: '#ccc' }}>Call</Text>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={() => Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description') }
    title="support@example.com" 
    style={styles.buttons}>
    <Text style={{ fontSize: 20, color: '#ccc' }}>Email</Text>
      </TouchableOpacity>
  </View>
</View>
  );
}

// CSS 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollingBackground: {
    backgroundColor: "#0B7483"
  },
  buttons: {
    backgroundColor: '#006094' , padding : 10,  marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
  }
});

// Secondary Screen

function SecondScreen({ navigation }) {
  return (
    // Main Text
    <View style={styles.container}>
      <Text style={{color: '#e6e2d3', fontSize: 20, fontWeight: 'bold'}}> 
      Main Menu</Text>

      {/* Center Buttons */}

       <TouchableOpacity
       onPress={() => navigation.navigate('FAQ')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.navigate('Properties')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Properties</Text>
      </TouchableOpacity>

  {/* Bottom Buttons */}
  <View style={{flexDirection: "row", padding: 20, position: 'absolute',
    bottom:0}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

// Third Screen "FAQ's"
function FAQ({ navigation }) {
  return (
    <View style={styles.container}>
{/* Simple Scrol View for Text */}
      <ScrollView>
        <Text style={{color: '#e6e2d3', fontSize: 20, fontWeight: 'bold'}}>
        Rental Transaction Overview</Text>
        <Text style={{color: '#e6e2d3', fontWeight: 'bold', fontSize: 15, fontFamily: 'Apple SD Gothic Neo', alignSelf: 'center'}}>
        APEX Capital Group is the operator in all of these transactions and is responsible for procuring the properties and conducting all necessary due diligence.

These responsibilities include:

1. Analyzing all of the financial aspects of each property for both cash purchases and leveraged purchases.

2. Conducting all inspections

radon testing
underground storage tank sweeps
home inspections
3. Working with the township to obtain certificates of occupancy and smoke certification.

APEX Capital Group coordinates with attorneys, sellers, agents, title, and insurance to close the property. 
Upon closing, we work closely with the property management company to ensure that all aspects of the property have been taken care of, 
including project management for renovations, marketing for tenants, vetting and placing of tenants, collecting deposits and monthly rent, 
cash control and banking, conducting inspections of the property, and making recommendations to enhance net operating income. </Text>  
      </ScrollView>
      
{/* Home and Back Buttons at the bottom */}
<View style={{flexDirection: "row", padding: 20}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


//Jersey Page

function NewJerseyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
{/* Home and Back Buttons at the bottom */}
<View style={{flexDirection: "row", padding: 20, position: 'absolute',
    bottom:0}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

//Ohio Page

function OhioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
{/* Home and Back Buttons at the bottom */}
<View style={{flexDirection: "row", padding: 20, position: 'absolute',
    bottom:0}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

// Maryland Page

function MarylandScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
{/* Home and Back Buttons at the bottom */}
<View style={{flexDirection: "row", padding: 20, position: 'absolute',
    bottom:0}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

//Properties Screen

function PropertiesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
{/* Home and Back Buttons at the bottom */}
<View style={{flexDirection: "row", padding: 20, position: 'absolute',
    bottom:0}}>
      <TouchableOpacity
       onPress={() => navigation.navigate('Home')}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => navigation.goBack()}
       style={styles.buttons}>
        <Text style={{ fontSize: 20, color: '#ccc' }}>Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={SecondScreen} />
        <Stack.Screen name="FAQ" component={FAQ} />
        <Stack.Screen name="New Jersey" component={NewJerseyScreen} />
        <Stack.Screen name="Ohio" component={OhioScreen} />
        <Stack.Screen name="Maryland" component={MarylandScreen} />
        <Stack.Screen name="Properties" component={PropertiesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;