import { View, Button, Text, SafeAreaView, Image }  from 'react-native'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

    var [ personagens, setPersonagens ] = useState([])
    var listaPersonagens = []

    const BuscarItens = async () => {
        var url = "https://rickandmortyapi.com/api/character"
        await axios.get(url)
                   .then( retorno => {
                        var lista = retorno.data.results
                        setPersonagens( lista )
                        listaPersonagens = lista 
                   })
    }
    
    var dados = personagens.map( linha => {
        return(
            <View>
                <Text>{ linha.name }</Text>
                <Image source={ linha.image }
                       style={{
                            width: "200px",
                            height: "200px"
                       }}
                />
            </View>
        )
    })

    return(
        <SafeAreaView>
            <View>
                <Button title="Buscar"
                    onPress={ () => { BuscarItens() } }
                />
            </View>
            { dados }
        </SafeAreaView>
    )
}

export default App

