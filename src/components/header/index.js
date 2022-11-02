import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Header(props) {
    return (
        <header style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <ArrowBackIcon style={styles.imageArrow} />
                </TouchableOpacity>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </header>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1,
        backgroundColor: '#006557',
    },
    header: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 18,
    },

    title: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
    },
    imageArrow: {
        color: '#ffff',
        position: 'fixed',
        left: 20,
        height: 24,
        width: 24,
    },
});
