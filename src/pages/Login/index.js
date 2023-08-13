import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native'
import React from 'react'

const index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <ImageBackground style={styles.image} source={require('./ouro_fino_skate_eletrico_nikon.png')}>
                    <View style={styles.logoView}>
                        <Image style={styles.logo} source={require('./logo_registrado.png')} />
                    </View>
                    <View>
                    </View>
                    <View style={styles.inputView}>
                        <View style={styles.welcomeView}>
                            <Text style={styles.welcomeText}>Entre para o</Text>
                            <Text style={styles.welcomeText}>Universo Two Dogs</Text>
                        </View>
                        <TextInput style={styles.input} placeholder='E-mail'></TextInput>
                        <TextInput style={styles.input} placeholder='Password'></TextInput>
                        <View style={styles.forgotPasswordView}>
                            <TouchableOpacity>
                                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.lowerView}>
                <TouchableOpacity style={styles.login}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.register}>
                    <View style={styles.registerText}>
                        <Text style={styles.registerInfo}>Tem um produto Two Dogs e ainda não se cadastrou?</Text>
                    </View>
                    <TouchableOpacity style={styles.btnRegister}>
                        <Text>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column'
    },
    upperView: {
        display: 'flex',
        backgroundColor: "blue",
        flex: 0.7,
        justifyContent: 'space-around',
    },
    image: {
        height: '100%',
    },
    logoView: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
    },
    lowerView: {
        display: 'flex',
        flex: 0.3,
        alignItems: 'center',
    },
    inputView: {
        display: 'flex',
        alignItems: 'center',
    },
    welcomeView: {
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 22,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 6,
        width: '70%',
        marginBottom: 10,
        borderRadius: 5,
    },
    forgotPasswordView: {
        display: 'flex',
        width: '70%',
        alignItems: 'flex-end',
    },
    forgotPassword: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    login: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F4C030",
        width: '70%',
        padding: 10,
        borderRadius: 5,
        transform: [
            { translateY: -20 }
        ]
    },
    register: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffffff',
        paddingBottom: '8%',
        width: '100%',
    },
    registerText: {
        width: '50%',
        paddingBottom: 20,
    },
    registerInfo: {
        fontWeight: 'bold'
    },
    btnRegister: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CCCCCC",
        width: '70%',
        padding: 10,
    }
})

export default index