

import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch, Appearance,StatusBar } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    
  }
  return (
    <View style={{flex:1}}>
      <StatusBar style="auto" />
      <Switch
        style={{marginBottom:500, marginLeft:150}}
        trackColor={{ false: "light", true: "dark" }}
        thumbColor={isEnabled ? colorScheme == 'light' : colorScheme == 'dark'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
  }
// import React, { Component } from 'react';
// import { AppRegistry, View, Button, StyleSheet, Platform ,StatusBar} from 'react-native';


// export default class App extends Component {

//   constructor() {

//     super();
//     this.state = { ColorHolder: '#'}
//   }

//   ChangeColorFunction = () => {
   
//     // var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     this.setState({
//       ColorHolder: 'blue'
//     })
//   }
//   ChangeColorFunctionRed = () => {
   
//     // var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     this.setState({
//       ColorHolder: 'red'
//     })
//   }
//   ChangeColorFunctionblue = () => {
   
//     var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     this.setState({
//       ColorHolder: 'black'
//     })
//   }
//   render() {
//     return (
//       <View style={[styles.container, { backgroundColor: this.state.ColorHolder }]} >
//       <StatusBar backgroundColor={this.state.ColorHolder  }/>
         
//         <Button title="blue" onPress={this.ChangeColorFunction} />
   
//         <Button title="Red" onPress={this.ChangeColorFunctionRed} />
//         <Button title="black" onPress={this.ChangeColorFunctionblue } />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create(
//   {
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     },

//   });
// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View, Button } from "react-native";

// export default class App extends Component {
//   //Binding the function with class
//   buttonClickListener = () => {
//     alert("Clicked On Button !!!");
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.headerText}>Set Button Color In React Native.</Text>

//         <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
//           <Button
//             onPress={this.buttonClickListener}
//             title="Button One"
//             color="#00B0FF"
//           />
//         </View>

//         <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
//           <Button
//             onPress={this.buttonClickListener}
//             title="Button Two"
//             color="#EC407A"
//           />
//         </View>

//         <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
//           <Button
//             onPress={this.buttonClickListener}
//             title="Button Three"
//             color="#1DE9B6"
//           />
//         </View>

//         <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
//           <Button
//             onPress={this.buttonClickListener}
//             title="Button Three"
//             color="#FF3D00"
//           />
//         </View>
//         <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]}>
//           <Button
//             onPress={this.buttonClickListener}
//             title="Button Three"
//             color="#90A4AE"
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   headerText: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//     fontWeight: "bold"
//   },
//   button: {
//     padding: 20,
//     fontSize: 15,
//     fontFamily: "arial",
//     width: 400,
//     height: 40,
//     textAlign: "center"
//   }
// });
// import React, { useState } from "react";
// import { Button, View,StatusBar } from "react-native";

// export default function App() {
//   const [bgColor, setBgColor] = useState(randomHex());

//   var styles = {
//     container: {
//       flex: 1,
//       alignItems: "center",
//       justifyContent: "center"
//     }
//   };

//   function randomHex() {
//     console.log("Func Called");
//     let letters = "0123456789ABCDEF";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   return (
//     <View style={[styles.container, { backgroundColor: bgColor }]}>
//       <Button title="red " onPress={() => setBgColor(randomHex())} />
//       <StatusBar style="auto" backgroundColor={bgColor} />
//     </View>
//   );
// }