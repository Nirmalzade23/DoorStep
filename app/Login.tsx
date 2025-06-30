import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const router = useRouter()
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        style={styles.backButton}
                    >
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Let's Sign You In</Text>
                    <Text style={styles.subHeaderText}>Welcome Back, You have been missed!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="mail-outline" size={24} color="gray" style={styles.inputIcon} />
                        <TextInput
                            placeholder='Enter your email address'
                            style={styles.textInput}
                            keyboardType='email-address'
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.inputIcon} />
                        <TextInput
                            placeholder='Enter your password'
                            style={styles.textInput}
                            secureTextEntry={!isPasswordShow}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordShow(!isPasswordShow)}
                        >
                            <Ionicons name={isPasswordShow ? "eye-off-outline" : "eye-outline"} size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => router.replace('/Tabs/Home')}
                    style={styles.signInButton}
                >
                    <Text style={styles.signInButtonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.dividerText}>Or Sign in with</Text>
                    <View style={styles.divider} />
                </View>

                <View style={styles.socialLoginContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-google" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-apple" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Ionicons name="logo-facebook" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Don't have an account ? </Text>
                    <TouchableOpacity>
                        <Text style={styles.registerLink}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    backButton: {
        padding: 8,
        borderRadius: 9999,
        width: 40,
        backgroundColor: '#E5E7EB', // gray-200
    },
    headerContainer: {
        marginVertical: 20,
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subHeaderText: {
        fontSize: 18,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
    },
    inputWrapper: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#D1D5DB', // gray-300
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    inputIcon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
    },
    signInButton: {
        marginTop: 20,
        backgroundColor: '#5d17b0',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#D1D5DB', // gray-300
    },
    dividerText: {
        marginHorizontal: 8,
        fontSize: 14,
        color: '#6B7280', // gray-500
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#D1D5DB', // gray-300
        borderRadius: 8,
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: '#6B7280', // gray-500
    },
    registerLink: {
        color: '#5d17b0',
        fontWeight: '600',
    },
});