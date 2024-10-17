import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const Login = () => {
    var [ dados, setDados ] = useState({
        usuario: "",
        senha: ""
    })

    /*Para quem utilizar o celular
    const efetuarLogin = async () => {
        if (dados.usuario=="aula" && dados.senha=="123")
        {
            await AsyncStorage.setItem('login',true);
            
        }
    }
    */
    const efetuarLogin = () => {
        if (dados.usuario=="aula" && dados.senha=="123")
        {
            localStorage.setItem('login',true);
        }
    }   

    useEffect( () => {
        console.log("Iniciou a aplicação")
    }, [ dados.senha ])

    return(
        <View>
            <TextInput
                value={ dados.usuario }
                onChange={ (e) => setDados(
                    {
                        ...dados, 
                        usuario: e.target.value 
                    }
                )}
            />
            <TextInput
                value={ dados.senha }
                onChange={ (e) => setDados( 
                    {
                        ...dados,
                        senha: e.target.value 
                    }
                ) }
            />
            <Button
                onPress={ () => efetuarLogin() }
            >
                Enviar
            </Button>
        </View>
    )
}

export default Login