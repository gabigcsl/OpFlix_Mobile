import React, { Component } from 'react';

import { View, Text, TextInput , TouchableOpacity, AsyncStorage, StyleSheet} from 'react-native';


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
                await AsyncStorage.setItem('@opflix:token', tokenAReceber);
                this.props.navigation.navigate('MainNavigatior')
            }catch (error) {
                console.warn(error)
             }
        }
        
    };
    render() {
        return (
            <View style={styles.fundo}>
                <Text style={styles.login}>Login</Text>

                

                <Text style={styles.email}>E-mail:</Text>

                <TextInput style= {styles.input}
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />

                <Text style={styles.senha}>Senha:</Text>

                <TextInput style= {styles.input2}
                    placeholder="senha"
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                />

                <TouchableOpacity   onPress={this._realizarLogin}>
                    <Text style= {styles.btn}>Entrar</Text>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    fundo : {
        backgroundColor: '#000000',
        height: '100%'
    },

    login: {
        textAlign: "center",
        fontSize: 50,
        marginTop: 50,
        color: '#DCDCDC',
    },

    email: {
        color: '#DCDCDC',
        fontSize: 17,
        marginTop: 30,
        marginLeft:20,

    },

    senha : {
        color: '#DCDCDC',
        fontSize: 17,
        marginTop: 30,
        marginLeft:20,
    },

    input: {
        marginLeft:20,

        padding: 10,
        margin: 15,
        height: 40,
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        color: '#DCDCDC',
    },

    input2: {
        marginLeft:20,
        marginTop: 20,

        padding: 10,
        margin: 15,
        height: 40,
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        color: '#DCDCDC',
        
    },
    
    btn: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 20,
        color : '#DCDCDC',
        
    }

})

export default Login;

