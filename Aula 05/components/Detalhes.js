import { Text, Button } from 'react-native'

export default Detalhes = ({ navigation, route }) => {

    const id = route.params.id

    return(
        <Text>
            Detalhes { id }
            <Button title="Voltar para HOME" 
                    onPress={ () => {
                        navigation.goBack()
                    } }
            />
        </Text>
    )
}