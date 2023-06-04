import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default props  => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.desc}</Text>
            <View style={styles.flex}>
                <TouchableOpacity>
                    <AntDesign name='check' style={{color: '#FFFFFF', fontSize: 20}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name='close' style={{color: '#FFFFFF', fontSize: 20}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 13,
        width: 320,
        height: 50,
        backgroundColor: '#da2535',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontWeight: '500',
        fontSize: 16,
        fontFamily: 'Poppins',
        color: '#FFFFFF',
    },
    flex: {
        flexDirection: 'row'
    }
})