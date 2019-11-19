import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

class Recentes extends Component {
    constructor () {
        super ();
        this.state = {
            recentes: [],
            
        }
    }

    componentDidMount() {
        this._mostrarRecentes();
    }

    _mostrarRecentes = async () => {
        await fetch('http://192.168.5.84:5000/api/lancamento')
            .then(resposta => resposta.json())
            .then(data => this.setState({ recentes: data }))
            .catch(erro => console.warn(erro));
    }


    _voltarHome = () => {
        this.props.navigation.navigate('MainNavigatior');
    }
    

    render() {
        return (
            < View >
            <TouchableOpacity onPress={this._voltarHome}>
                    <Text>Voltar</Text>
                </TouchableOpacity>

            <Text style={styles.titulo} >Recentes</Text>

            <FlatList
                    data={this.state.recentes.sort((a,b) => a.datal < b.datal)}
                    keyExtractor={item => item.idLancamento}
                    
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.data}>{item.datal}</Text>
                        </View>
                    )}
                />


            </View>
        );
    }
}

const styles =StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 20,
    },
    nome : {
        fontSize: 15,
        textAlign: "center",
        marginTop : 9,
    },
    data: {
        textAlign: "center"
    },
})


export default Recentes;