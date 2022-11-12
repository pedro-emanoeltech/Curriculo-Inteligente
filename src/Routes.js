import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs'
import PerfilCtr from './Views/Perfil/PerfilCtr'
import VagaCtrList from './Views/Vaga/VagaCtrList'
import settingsCtr from './Views/settings/settingsCtr'
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes (){
    return(
        <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
            tabBarActiveTintColor:'#9fe801',
            tabBarShowLabel: true,
            tabBarStyle:{
                position:'absolute',
                backgroundColor: '#171626',
                borderTopWidth: 0,
                bottom:15,
                left:14,
                right:19,
                elevation:0,
                borderRadius:10,
                height:65,
                }
            }}
            >
            <Tab.Screen
            name="Perfil"
            component={PerfilCtr}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused})=>{
                    if(focused){
                        return <Ionicons name="person" size={size} color ={color}/>
                    }
                    return <Ionicons name="person-outline" size={size} color ={color}/>
                }
            }}
            />
            <Tab.Screen
            name="Vagas"
            component={VagaCtrList}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused})=>{
                    if(focused){
                        return <Ionicons name="briefcase" size={size} color ={color}/>
                    }
                    return <Ionicons name="briefcase-outline" size={size} color ={color}/>
                }
            }}
            />
            <Tab.Screen
            name="Configurações"
            component={settingsCtr}
            options={{
                headerShown: false,
                tabBarIcon: ({color,size,focused})=>{
                    if(focused){
                        return <Ionicons name="cog" size={33} color ={color}/>
                    }
                    return <Ionicons name="cog-outline" size={33} color ={color}/>
                }
            }}
            />
        </Tab.Navigator>
        </NavigationContainer>

    )
}



