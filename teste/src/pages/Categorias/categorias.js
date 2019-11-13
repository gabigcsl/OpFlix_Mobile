import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

class Categoria extends Component {

    constructor() {
        super();
        this.state = {
            categorias: [],
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