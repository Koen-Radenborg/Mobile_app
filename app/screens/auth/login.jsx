import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert('Validatiefout', 'Beide velden zijn verplicht.');
            return;
        }

        try {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) {
                const { username: savedUsername, password: savedPassword } = JSON.parse(storedUser);
                
                if (username === savedUsername && password === savedPassword) {
                    Alert.alert('Succes', 'Inloggen geslaagd!');
                    router.push('../../screens/tabs/home');
                } else {
                    Alert.alert('Fout', 'Onjuiste gebruikersnaam of wachtwoord.');
                }
            } else {
                Alert.alert('Fout', 'Geen account gevonden. Registreer eerst.');
            }
        } catch (error) {
            Alert.alert('Fout', 'Er is iets misgegaan. Probeer opnieuw.');
        }
    };

    return (
        <ImageBackground style={styles.background} source={require('../../../assets/images/Landing-Background-2.png')}>
            <View style={styles.overlay}>
                <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />

                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Gebruikersnaam" 
                        placeholderTextColor="#000"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Wachtwoord" 
                        placeholderTextColor="#000" 
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword} 
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>INLOGGEN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('../../screens/auth/register')}>
                    <Text style={styles.accountText}>Nog geen account? Registreer!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        filter: 'brightness(1.5)',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        padding: 10,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        position: 'absolute',
        top: 40,
        left: 20,
    },
    formContainer: {
        width: '100%',
        paddingBottom: 15,
        alignItems: 'center',
    },
    input: {
        width: '95%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        color: '#000', 
        borderRadius: 15,
        paddingLeft: 15,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        width: '95%',
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 7,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    accountText: {
        color: '#fff', 
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
});

export default Login;
