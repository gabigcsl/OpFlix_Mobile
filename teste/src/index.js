import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/Login/login';
import HomeScreen from './pages/Home/home';
import CadastroSreen from './pages/Cadastro/cadastro';
import CategoriaScreen from './pages/Categorias/categorias';
import LancamentoScreen from './pages/Lançamentos/lancamentos';


const MainNavigatior = createStackNavigator({
    Home: { screen: HomeScreen },
}, { initialRouteName: 'Home', });

const CategNavigatior = createStackNavigator({
    Categoria: { screen: CategoriaScreen },
});

const LancNavigatior = createStackNavigator({
    Lancamento: { screen: LancamentoScreen },
});

const AuthStack = createBottomTabNavigator({
    Login: { screen: LoginScreen, },
    Cadastro: { screen: CadastroSreen, }
});


export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigatior,
            AuthStack,
            CategNavigatior,
            LancNavigatior,
        },
        {
            initialRouteName: 'MainNavigatior'
        },
    ));