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
            <View>
                <Text style={styles.titulo}>OpFlix</Text>
                <Text style={styles.adm}>Administrador</Text>

                <TouchableOpacity  onPress={this._irParaCategoria} style={styles.btm} >
                    <Text>Listar Categoria</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={this._irParaLançamentos} style={styles.btm}>
                    <Text>Listar Lançamentos</Text>
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
        fontSize: 37
    },

    adm: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 9
    },

})

export default Home;