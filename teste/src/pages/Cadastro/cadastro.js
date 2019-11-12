import React, {Component} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';

class Cadastro extends Component {

    constructor () {
        super();
        this.state = {
            nome: null,
            email: null,
            senha: null,
        };
    }

    _cadastrarUsuario = async () => {
        await fetch ('http://192.168.5.84:5000/api/usuario', {
            method:'POST',
            headers: {
                Accept: 'applicatin/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify ({
                  nome:this.state.nome,
                  email: this.state.email,
                  senha: this.state.senha,
              })
        })
        .then(resposta => resposta.json())
        //Testar status da requisição, se for 200 redirecionar
        _irParaLogin = async status => {
            if(status === 200) {
                try{
                    this.props.navigation.navigate ('/login');
                }catch (error) { }
                
            }
        }
    }

    render() {
        return(
            <View>
                <Text>Cadastro</Text>

                <TextInput
                    placeholder="nome"
                    onChangeText={nome => this.setState({ nome })}
                    value={this.state.nome}
                />

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
 
                 <TouchableOpacity onPress={this.status}>
                     <Text>Cadastrar</Text>
                 </TouchableOpacity>

            </View>
        );
    }
}
export default Cadastro;
