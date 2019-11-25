import React, {Component} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

class Lancamentos extends Component{
    constructor() {
        super();
        this.state = {
            lancamentos: [],
        };
    }

    static navigationOptions = {
        header:null
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
            <View style={styles.tela}>

            <TouchableOpacity onPress={this._voltarHome}>
                    <Text style={styles.btn}>Voltar</Text>
                </TouchableOpacity>
                
                    <Text style={styles.titulo}>Lista de Lançamentos</Text>

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
        fontSize: 30,
        textAlign: "center",
        color : '#DCDCDC',
        marginTop: 15,

    },

    box:{
        textAlign: "center",
        color : '#DCDCDC',
        marginLeft: 20,
        marginEnd: 45,

    },
    filme:{
        fontSize: 22,
        textAlign: "center",
        marginTop: 18,
        color : '#DCDCDC',
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 1,
        width: 350,
        marginLeft: 30

    },

    tela : {
        backgroundColor: '#000000',
          height: '100%'   
      },

      btn: {
        color : '#DCDCDC',
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 45,
        marginLeft: 15,
        marginTop: 10


      },
    
})

export default Lancamentos;