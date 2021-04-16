import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Biscoito extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: 'Siga os bons e aprenda com eles.',
            img: require('../img/biscoito.png')
        }

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'O riso é a menor distância entre duas pessoas.',
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ];
    }

    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

        this.setState({ //quando clicar vai chamar essa função
            textoFrase: '"' + this.frases[numeroAleatorio] + '"',
            img: require('../img/biscoitoAberto.png')
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.img}
                    source={this.state.img}
                />

                <Text style={styles.txtFrase}>{this.state.textoFrase}</Text>

                <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
                    <View style={styles.btnArea}>
                        <Text style={styles.btnTxt}>Quebrar biscoito</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Biscoito;

const styles = StyleSheet.create({
    img: {
        width: 250,
        height: 250
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtFrase: {
        fontSize: 20,
        color: '#DD7B22',
        margin: 30,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    btn: {
        width: 230,
        height: 50,
        borderWidth: 2,
        borderColor: '#DD7B22',
        borderRadius: 25
    },
    btnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#DD7B22'
    }
})