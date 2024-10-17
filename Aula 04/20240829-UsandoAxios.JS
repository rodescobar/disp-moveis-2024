import { useState } from 'react'
import { Text, ScrollView, View, Button } from 'react-native'
import { Card, Avatar } from 'react-native-paper'
import axios from 'axios'


const App = () => {

  var [ personagens, setPersonagens ] = useState([])

    const BuscarItens = async () => {
        var url = "https://rickandmortyapi.com/api/character"
        await axios.get(url)
                   .then( retorno => {
                        console.log("oi")
                        var lista = retorno.data.results
                        setPersonagens( lista )

                   })
    }

    var dados = personagens.map( item => {
      var LeftContent = () => 
        <Avatar.Image size={24} source={ item.image } />
      

      return (
        <Card>
          <Card.Title title={ item.name }
                      subtitle={ item.status }
                      left={ LeftContent }
                      />
          <Card.Content>
              <Card.Cover source={ item.image } 
              />
              <Text>Texto qualquer</Text>
          </Card.Content>
      </Card>
      )
    })

    return(
        <ScrollView>
          <View>
            <Button title="Carregar"
              onPress={ () => { BuscarItens() } }
            />
          </View>
          { dados } 
        </ScrollView>
    )
}

export default App