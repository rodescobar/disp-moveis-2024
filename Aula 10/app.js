import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
    var [ coords, setCoords ] = useState({
                            latitude: -22.9068,
                            longitude: -43.1729,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })

    var [ mark, setMark ] = useState([ coords ])

    const duploClique = (e) => {
        var { coordinate } = e.nativeEvent
  
        setMark( [ ...mark, coordinate ] )
    }


    var marcadores = mark.map( (item, key) => {
        return(
            <Marker coordinate={ item }/>
        )
    })

    return(
        <View style={ styles.container }>
            <MapView style={ styles.map }
                region={coords}
                onDoublePress={ duploClique }
            >
                { marcadores }

            </MapView>
        </View>
    )
}

export default App

const styles = StyleSheet.create(
    {
        container: { flex: 1 },
        map: { flex: 1}
    }
)