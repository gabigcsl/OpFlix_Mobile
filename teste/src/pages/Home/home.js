import React, { Component } from 'react';
// import { Dropdown } from 'react-native-material-dropdown';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


class Home extends Component {

    constructor() {
        super();
        this.state = {};
    }

    // componentDidMount() {
    //     this._mostrarCategorias();
    // }

    // _mostrarCategorias = async () => {
    //     await fetch('http://192.168.5.84:5000/api/categoria')
    //         .then(resposta => resposta.json())
    //         .then(data => this.setState({ categorias: data }))
    //         .catch(erro => console.warn(erro));
    // }

    static navigationOptions = {
        header:null
    }

    _irParaCategoria = () => {
        this.props.navigation.navigate('CategNavigatior');
    }

    _irParaLançamentos = () => {
        this.props.navigation.navigate('LancNavigatior');
    }
    
    _irParaRecentes = () => {
        this.props.navigation.navigate('RecNavigatior');
    }

    
    _voltarLogin = () => {
        this.props.navigation.navigate('AuthStack');
    }

    render() {
        // let categoria = 
        // [
        //     {value: 'Cadastrar/Listar',},
        //     {value: 'Listar',}
        // ];

        //   let lancamentos = [{
        //     value: 'Cadastrar/Listar',
        //   }, {
        //     value: 'Listar',
        //   }];




        return (
            <View style={styles.tela}>
                <TouchableOpacity onPress={this._voltarLogin}>
                    <Text style={styles.sair}>Sair</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>OpFlix</Text>
                <Text style={styles.adm}>Administrador</Text>

                <TouchableOpacity  onPress={this._irParaCategoria} >
                    <Text style={styles.categoria}>Listar Categoria</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this._irParaLançamentos}>
                    <Text style={styles.lancamentos}>Listar Lançamentos</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this._irParaRecentes}>
                    <Text style={styles.recentes}>Filmes Recentes</Text>
                </TouchableOpacity>


                {/* <FlatList
                    data={this.state.categorias}
                    keyExtractor={item => item.IdCategoria}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.nome}</Text>
                        </View>
                    )}
                /> */}

                {/* <Dropdown 
                label ='Categorias'
                data={categoria}
                />

                <Dropdown 
                label ='Lançamentos'
                data={lancamentos}
                /> */}

        <Image
          source={{uri:'https://cdn4.iconfinder.com/data/icons/planner-basic/64/popcorn-movie-time-512.png'}}
          style={styles.img}
        />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    titulo: {
        textAlign: "center",
        fontSize: 37,
        color: '#DCDCDC',

    },

    adm: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 9,
        color: '#DCDCDC',

    },
    
    tela : {
        backgroundColor: '#000000',
        height: '100%'   
     },

     sair: {
        color: '#DCDCDC',
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 30,
        marginLeft: 15,
        marginTop: 20
     },

     categoria: {
        color: '#DCDCDC',
        marginTop: 45,
        marginLeft: 10,
        fontSize: 15,
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 115

        

     },

     
     lancamentos: {
        color: '#DCDCDC',
        marginTop: 15,
        fontSize: 15,
        marginLeft: 10,
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 140


     },

     recentes: {
        color: '#DCDCDC',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 10,
        borderBottomColor:'#FF8C00',
        borderBottomWidth: 2,
        width: 120
     },

     img: {
        width: 300, 
        height: 300,
        marginLeft: 50
    },


})

export default Home;

