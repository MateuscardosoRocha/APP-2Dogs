import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Login() {

    const navigation = useNavigation();
    const navigateToAbout = () => {
        navigation.navigate('About'); // Nome da tela de destino definido na navegação
    };

    return (
        <View style={styles.container}>
            <View style={styles.upperView}>
                <ImageBackground style={styles.image} source={require('../../../assets/ouro_fino_skate_eletrico_nikon.png')}>
                    <LinearGradient style={styles.gradient} colors={['transparent', '#000000']}>
                        <View style={styles.logoView}>
                            <Image style={styles.logo} source={require('../../../assets/logo_registrado.png')} />
                        </View>
                        <View style={styles.inputView}>
                            <View style={styles.welcomeView}>
                                <Text style={styles.welcomeText}>Entre para o</Text>
                                <Text style={styles.welcomeText}>Universo Two Dogs</Text>
                            </View>
                            <View style={styles.textInputView}>
                                <TextInput style={styles.input} placeholder='E-mail'></TextInput>
                                <TextInput style={styles.input} placeholder='Password'></TextInput>
                            </View>
                            <View style={styles.forgotPasswordView}>
                                <TouchableOpacity>
                                    <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={styles.lowerView}>
                <View style={styles.login}>
                    <TouchableOpacity style={styles.btnLogin} onPress={navigateToAbout} >
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                </View>
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
        flex: 0.7,
        justifyContent: 'space-around',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    gradient: {
        height: '100%',
    },
    logoView: {
        display: 'flex',
        flex: 0.5,
        alignItems: 'center',

    },
    logo: {
        resizeMode: 'contain',
        marginTop: '25%',
        width: '60%',
        height: '60%',

    },
    lowerView: {
        display: 'flex',
        flex: 0.3,
        alignItems: 'center',
    },
    inputView: {
        display: 'flex',
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    welcomeView: {
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        flex: 0.3,
        marginBottom: 0
    },
    welcomeText: {
        color: '#ffffff',
        fontSize: 27,
        fontWeight: 'bold',
    },
    textInputView: {
        width: '100%',
        flex: 0.4,
        display: 'flex',
        alignItems: 'center',

    },
    input: {
        backgroundColor: '#ffffff',
        width: '70%',
        flex: 0.5,
        marginBottom: 10,
        paddingStart: 10,
        borderRadius: 5,
    },
    forgotPasswordView: {
        display: 'flex',
        flex: 0.3,
        width: '70%',
        alignItems: 'flex-end',

    },
    forgotPassword: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontWeight: 'bold'
    },
    login: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: '100%',
    },
    btnLogin: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F4C030",
        width: '70%',
        padding: 16,
        borderRadius: 5,
        marginTop: '-6.5%'
    },
    register: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingBottom: '8%',
        width: '100%',
    },
    registerText: {
        width: '50%',
        paddingBottom: 20,
        fontWeight: 'extra-bold'
    },
    registerInfo: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btnRegister: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#CCCCCC",
        width: '70%',
        padding: 16,
        borderRadius: 6,
    }
})

