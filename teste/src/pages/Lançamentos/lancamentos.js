import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

class Lancamentos extends Component{
    constructor() {
        super();
        this.state = {
            lancamentos: [],
        };
    }

    componentDidMount() {
        this._mostrarLancamentos();
    }

    _mostrarLancamentos = async () => {
        await fetch('http://192.168.5.84:5000/api/lancamento')
            .then(resposta => resposta.json())
            .then(data => this.setState({ lancamentos: data }))
            .catch(erro => console.warn(erro));
    }

    _voltarHome = () => {
        this.props.navigation.navigate('MainNavigatior');
    }
    render () {
        return (
            <View>
                    <Text style={styles.titulo}>Lista de Lançamentos</Text>

            <TouchableOpacity onPress={this._voltarHome}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

                    <FlatList
                    data={this.state.lancamentos.sort((a,b) => a.idCategoria > b.idCategoria)}
                    keyExtractor={item => item.idLancamento}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.box} style={styles.filme}>{item.nome}</Text>
                            <Text style={styles.box}>{item.sinopse}</Text>
                            <Text style={styles.box}>{item.tipo}</Text>
                            <Text style={styles.box}>{item.duração}</Text>
                            <Text style={styles.box}>{item.datal}</Text>
                            <Text style={styles.box}>{item.idCategoria}</Text>
                            <Text style={styles.box}>{item.idPlataforma}</Text>

                        </View>
                    )}
                />

            </View>
        );
    }
}

const styles =StyleSheet.create ({
    titulo: {
        fontSize: 20,
        textAlign: "center",
    },

    box:{
        textAlign: "center",
    },
    filme:{
        fontSize: 18,
        textAlign: "center",
        marginTop: 15,

    }
})

export default Lancamentos;