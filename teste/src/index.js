import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/Login/login';
import HomeScreen from './pages/Home/home';
import CategoriaScreen from './pages/Categorias/categorias';
import LancamentoScreen from './pages/Lançamentos/lancamentos';
import RecenteScreen from './pages/Recentes/recentes';

const MainNavigatior = createStackNavigator({
    Home: { screen: HomeScreen },
}, { initialRouteName: 'Home', });

const CategNavigatior = createStackNavigator({
    Categoria: { screen: CategoriaScreen },
});

const LancNavigatior = createStackNavigator({
    Lancamento: { screen: LancamentoScreen },
});

const RecNavigatior = createStackNavigator({
    Recentes: { screen: RecenteScreen },
});

const AuthStack = createStackNavigator({
    Login: { screen: LoginScreen, },
});


export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigatior,
            AuthStack,
            CategNavigatior,
            LancNavigatior,
            RecNavigatior,
        },
        {
            initialRouteName: 'AuthStack'
        },
    ));