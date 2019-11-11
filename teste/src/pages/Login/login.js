import React, { Component } from 'react';

import { View, Text, TextInput , TouchableOpacity} from 'react-native';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: null,
            senha: null
        };
    
    }
    // chamda para a api
    _realizarLogin = async () => {
        await fetch('http://192.168.5.84:5000/api/Login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
    
        .then(resposta => resposta.json())
        .then(data => this._irParaHome(data.token))
    .catch(erro => console.warn(erro));

    
    };

    _irParaHome = async tokenAReceber => {
        if (tokenAReceber != null) {
            try {
                await AsyncStorange.setItem('@opflix:token', tokenAReceber);
                this.props.navigation.navigate('MainNavigator')
            }catch (error) { }
        }
    };
    render() {
        return (
            <View>
                <Text>Login</Text>

                <TextInput
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />

                <TextInput
                    placeholder="senha"
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                />

                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Entrar</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

export default Login;