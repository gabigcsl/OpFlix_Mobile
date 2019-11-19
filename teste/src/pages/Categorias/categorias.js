import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Categoria extends Component {

    constructor() {
        super();
        this.state = {
            categorias: [],
            nome: null
        };
    }

    componentDidMount() {
        this._mostrarCategorias();
    }

    _mostrarCategorias = async () => {
        await fetch('http://192.168.5.84:5000/api/categoria')
            .then(resposta => resposta.json())
            .then(data => this.setState({ categorias: data }))
            .catch(erro => console.warn(erro));
    }

    _voltarHome = () => {
        this.props.navigation.navigate('MainNavigatior');
    }


    _cadastrarCategoria = async ()=> {
        await fetch (('http://192.168.5.84:5000/api/Categoria'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + await AsyncStorage.getItem('@opflix:token')
            },
            body: JSON.stringify ({
                nome: this.state.nome
            })
        })
        .then(this.setState ({nome: ''}))
        .then(this._mostrarCategorias())
    }

    render() {

        return (
            <View>
                
                <TouchableOpacity onPress={this._voltarHome}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.categorias}
                    keyExtractor={item => item.IdCategoria}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.lista}>{item.nome}</Text>
                        </View>
                    )}
                />

                <Text>Cadastrar Categoria</Text>
                <TextInput
                onChangeText= {nome => this.setState({nome})}
                value = {this.state.nome}
                />

                <TouchableOpacity
                onPress= {this._cadastrarCategoria}
                >
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles =StyleSheet.create({
    lista: {
        textAlign: "center",
    }
})

export default Categoria;
