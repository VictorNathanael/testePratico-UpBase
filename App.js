import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import Header from './src/components/header/index.js';
import Payment from './src/pages/payment/index.js';
import NavBar from './src/components/navbar/index.js';

export default function App() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style='light' />
                <Header title='Pagamentos' />
                <Payment />
                <NavBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
});
