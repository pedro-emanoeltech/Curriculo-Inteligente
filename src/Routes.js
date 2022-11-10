import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PerfilCtr from './Views/Perfil/PerfilCtr'
import VagaCtr from './Views/Vaga/VagaCtr'

const Stack = createNativeStackNavigator()
const ScreenOptions ={

}

export default props =>{
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='PerfilCtr'
                screenOptions={ScreenOptions} >
                <Stack.Screen
                name="VagaCtr"
                component={VagaCtr}
                />
                <Stack.Screen
                name="PerfilCtr"
                component={PerfilCtr}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}