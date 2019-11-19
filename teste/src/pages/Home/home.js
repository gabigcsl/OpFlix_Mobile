import React, { Component } from 'react';
// import { Dropdown } from 'react-native-material-dropdown';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


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
                <Text style={styles.titulo}>OpFlix</Text>
                <Text style={styles.adm}>Administrador</Text>


                <TouchableOpacity  onPress={this._irParaCategoria} style={styles.btm} >
                    <Text style={styles.categoria}>Listar Categoria</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this._irParaLançamentos} style={styles.btm}>
                    <Text style={styles.lancamentos}>Listar Lançamentos</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this._irParaRecentes} style={styles.btm}>
                    <Text style={styles.recentes}>Filmes Recentes</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._voltarLogin}>
                    <Text style={styles.sair}>Sair</Text>
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



})

export default Home;

///editar pagina home
//editar btn
//