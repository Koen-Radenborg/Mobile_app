import { ImageBackground, Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

const Register = () => {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Validation Error', 'All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Validation Error', 'Passwords do not match.');
            return;
        }

        router.push('../../screens/auth/login');
    };

    return (
        <ImageBackground style={styles.background} source={require('../../../assets/images/Landing-Background-3.png')}>
            <View style={styles.overlay}>
                <Image source={require('../../../assets/images/Logo.png')} style={styles.logo} />
                
                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Email Address" 
                        placeholderTextColor="#000"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Password" 
                        placeholderTextColor="#000" 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Confirm Password" 
                        placeholderTextColor="#000" 
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword} 
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('../../screens/auth/login')}>
                    <Text style={styles.accountText}>Already have an account? Sign in!</Text>
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
        color: '#000', 
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15,
    },
});

export default Register;
