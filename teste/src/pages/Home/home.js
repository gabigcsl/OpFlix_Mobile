import React, {Component} from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { View, Text} from 'react-native';
import console = require('console');


class Home extends Component {

    constructor () {
        super ();
        this.state = {
            categorias: [],
        };
    }

    componentDidMount() {
        this._mostrarCategorias();
    }

    _mostrarCategorias = async () => {
        await fetch('https://192.168.5.84:5000/api/Categoria')
        .then (resposta => resposta.json())
        .then (data => this.setState({categorias: data}))
        .catch (erro => console.warn(erro));
    }


    render(){  
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
        return(
            <View>
                 <Text>OpFlix</Text>
                 <Text>Administrador</Text>
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

export default Home;