import React, {Component} from 'react';
import {View} from 'react-native';

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
        //Testar status da requisição, se for 200 redirecionar
        .then(resposta => resposta.json())
        .then(data => this.status)
        .catch(erro => console.warn(erro));
    };

    _irParaLogin = async status => {
        if (status != null) {
            try{
                this.props.navigation.navigate('')
            }catch (error) {}
        }
    }


    render() {
        return(
            <View>

            </View>
        );
    }
}
export default Cadastro;
