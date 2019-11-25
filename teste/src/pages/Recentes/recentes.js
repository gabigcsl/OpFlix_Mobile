import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

class Recentes extends Component {
    constructor () {
        super ();
        this.state = {
            recentes: [],
            
        }
    }

    static navigationOptions = {
        header:null
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
            < View  style={styles.tela}>
            <TouchableOpacity onPress={this._voltarHome}>
                    <Text style={styles.btn}>Voltar</Text>
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
        fontSize: 35,
        color : '#DCDCDC',
        marginTop: 15

    },
    nome : {
        fontSize: 19,
        textAlign: "center",
        marginTop : 20,
        color : '#DCDCDC',
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 1,
        width: 250,
        marginLeft: 75

    },
    data: {
        textAlign: "center",
        color : '#DCDCDC',

    },

    btn: {
        color : '#DCDCDC',
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 45,
        marginLeft: 15,
        marginTop: 10
    },

    
    tela : {
        backgroundColor: '#000000',
          height: '100%'   
      },
})


export default Recentes;