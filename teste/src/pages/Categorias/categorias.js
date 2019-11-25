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

    static navigationOptions = {
        header:null
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
            <View style={styles.tela}>
                
                <TouchableOpacity onPress={this._voltarHome}>
                    <Text style={styles.voltar}>Voltar</Text>
                </TouchableOpacity>


    <View style={styles.caixa_btn}>

    <Text style={styles.cadastrar}>Cadastrar Categoria</Text>
                <View style= {{display: 'flex', alignItems: 'center'} }>
                <TextInput  style={styles.input}
                onChangeText= {nome => this.setState({nome})}
                value = {this.state.nome}
                />
                </View>

                <TouchableOpacity
                onPress= {this._cadastrarCategoria}
                >
                    <Text style={styles.ok}>Ok</Text>
                </TouchableOpacity>
    </View>

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
        color: '#DCDCDC',
        fontSize: 15
    },

    tela : {
       backgroundColor: '#000000',
         height: '100%'   
     },

     ok : {
         color : '#DCDCDC',
         textAlign: 'center',
         fontSize: 20,
         marginTop: 5
     },

     cadastrar : {
         color : '#DCDCDC',
         marginTop: 25,
         textAlign: 'center',
         fontSize: 20
     },

     voltar : {
         color : '#DCDCDC',
         marginTop: 15,
         marginLeft: 15,
         fontSize: 15,
         borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 45,
     },

     input: {
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 250,
        alignItems: "center",
        color : '#DCDCDC',

        
     },

     caixa_btn: {
        marginBottom: 40
     }

})

export default Categoria;
