import React, { useState } from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function login() {
    const [observacoes, setObservacoes] = useState('');
    return (
        <SafeAreaView style={styles.container}>

            {/*} IMAGEM DE LOGIN{*/}
            <View style={styles.topo}>
                <Image
                    style={styles.login}
                    source={require('../atv_pam1/assets/imagens/registration.png')}
                />
            </View>
            <Text style={styles.texto}> CADASTRO </Text>

            {/*} CAMPO CODIGO CATEGORIA{*/}
            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} keyboardType='numeric' placeholder='CÓDIGO CATEGORIA'/>
            </View>

            {/*} CAMPO NOME CATEGORIA {*/}
            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder='NOME CATEGORIA'/>
            </View>

            {/* CAMPO DE OBSERVACOES CATEGORIA */}
            <View style={styles.containerTextInput}>    
                <TextInput style={styles.textInput} placeholder='OBSERVAÇÕES DA CATEGORIA' onChangeText={(text) => setObservacoes (text)} value={observacoes} multiline/>
            </View>

            {/*} BOTAO DE LOGIN{*/}
            <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.txtLogin}>CADASTRAR</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding:16,
    },
    topo: {
        alignItems: "center",

    },
    login: {
        width: 350
    },
    texto: {
        color: '#333',
        marginBottom: 30,
        fontWeight: '500',
        fontSize: 28
    },

    containerTextInput: {        
        borderBottomColor:'#000',
        borderBottomWidth:1,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16
    },
    
    textInput: {
        padding:16,
    },
    btnLogin: {
        backgroundColor:'#3480EB',
        borderRadius:10,
        marginBottom:30,
        padding: 20,
        fontSize: 15,
        marginTop:60
    },
    txtLogin: {
        textAlign:'center',
        fontWeight:'700',
    },

});