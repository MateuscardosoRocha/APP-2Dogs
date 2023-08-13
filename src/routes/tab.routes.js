import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons'
import About from '../pages/About/About'
import Others from '../pages/Others/Others'
import Transfer from '../pages/Transfer/Transfer'
import Login from '../pages/Login/Login'

const Tab = createBottomTabNavigator();

export default function TabRoutes() {


    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Sair'>

            <Tab.Screen
                name='Sobre'
                component={About}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='info' color={color} size={size} />
                }}
            />
            <Tab.Screen
                name='Serviços'
                component={Others}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='file-minus' color={color} size={size} />
                }}

            />
            <Tab.Screen
                name='Transferência'
                component={Transfer}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='edit-2' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='Sair'
                component={Login}
                options={{ tabBarStyle: { display: 'none' }, tabBarIcon: ({ color, size }) => <Feather name='log-out' color={color} size={size} /> }}



            />

        </Tab.Navigator>
    )
}