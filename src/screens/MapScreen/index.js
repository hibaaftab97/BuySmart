import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, Dimensions,ImageBackground, Text, Alert, PermissionsAndroid } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";

const MapScreen = props => {

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
   
    

    useEffect(() => {
        console.log('useEffectuseEffectuseEffect');

        const permission = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Example App',
                        'message': 'Example App access to your location '
                    }
                )
                console.log("You grantedd",granted)

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("You can use the location")
                   
    
                } else {
                    console.log("location permission denied")
                }
            } catch (err) {
                console.warn(err)
            }
        }
        permission().
        then(()=>{
            Geolocation.getCurrentPosition(
                position => {
                    console.log('positionpositionposition', position);

                    setLatitude(position.coords.latitude)
                    setLongitude(position.coords.longitude)
                    // setCoordinates({
                    //     latitude: position.coords.latitude,
                    //     longitude: position.coords.longitude
                    // })
                    // const northeastLat = parseFloat(boundingBox.northEast.latitude);
                    // const southwestLat = parseFloat(boundingBox.southWest.latitude);
                    // setLatitudedelta(northeastLat - southwestLat)
                    // setLongitudedelta(latitudedelta * ASPECT_RATIO)

                   

                },
                error => {

                    Alert.alert(error.message.toString());
                },
                {
                    showLocationDialog: true,
                    enableHighAccuracy: true,
                    timeout: 20000,
                    maximumAge: 0
                }
            )
        }).
        catch(console.error);
      
           
        

    }, [])

    console.log('lattt', longitude, latitude)
    return (
        <MapView
            style={{ flex: 1 }}
            // mapType={Platform.OS == "android" ? "none" : "standard"}
            initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
            {/* <Marker
                coordinate={{
                    latitude: latitude,
                    longitude: longitude,
                }}>
            </Marker> */}
        </MapView>
    );
};

export default MapScreen;