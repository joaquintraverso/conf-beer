import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

function MapScreen() {
  return(
    <View style={styles.container}>
      <MapView style={styles.map}      
        initialRegion={{
          latitude:-32.480575, 
          longitude:-58.2361143,
          latitudeDelta: 0.0700,
          longitudeDelta: 0.0700
      }}>
      <Marker coordinate={{
        latitude:-32.480439241464104, 
        longitude:-58.2339363462879
      }}>
        <Callout>
          <Text>Conferencias: Drakkar</Text>
        </Callout>
      </Marker>
    </MapView>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  map:{
    width: '100%',
    height: '100%',
  }
})

export default MapScreen;