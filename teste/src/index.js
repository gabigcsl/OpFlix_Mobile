import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/Login/login';
import HomeScreen from './pages/Home/home';
import CadastroSreen from './pages/Cadastro/cadastro';


const MainNavigatior = createStackNavigator ({
    Home:{screen:HomeScreen}
});

const AuthStack = createBottomTabNavigator({
    Login: { screen: LoginScreen, },
    Cadastro: {screen: CadastroSreen,}
});


export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigatior,
            AuthStack,
        },
        {
            initialRouteName: 'AuthStack'
        },
    ));