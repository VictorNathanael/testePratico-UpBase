import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function NavBar() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonFooter}>
                    <HomeIcon style={styles.icons} />
                    <Text style={styles.iconsText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFooter}>
                    <AssignmentTurnedInOutlinedIcon style={styles.icons} />
                    <Text style={styles.iconsText}>Plantões</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonFooter}>
                    <FavoriteBorderIcon style={styles.icons} />
                    <Text style={styles.iconsText}>Favoritos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFooter}>
                    <PersonOutlineOutlinedIcon style={styles.icons} />
                    <Text style={styles.iconsText}>Minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#ffff',
        alignItems: 'center',
        zIndex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        margin: 10,
    },
    icons: {
        color: '#6d7a78',
        height: 17,
        width: 17,
    },
    iconsText: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Montserrat_400Regular',
        color: '#6d7a78',
    },
    buttonFooter: {
        alignItems: 'center',
    },
});
