import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


import Task from '../components/Task'

export default class ToDo extends Component {
    render() {
        return (
            <View 
            style={[
                styles.container,
                { 
                    flexDirection: 'column' 
                }
            ]
        }>
            <Text style={styles.title}>TODO LIST</Text>
            <View style={styles.flex}>
                <TextInput
                    style={styles.input} 
                    placeholder='Digite sua Tarefa'
                    placeholderTextColor={'#da2535'}
                />
                <View style={styles.spacer}></View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.text}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.spacer}></View>
            <View>
                <Task desc='Comprar livro' ></Task>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        fontFamily: 'Poppins',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 72,
        color: '#da2535'

    },
    input: {
        padding: 20,
        width: 200,
        height: 50,
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0, 0.25)',

        
    },
    button: {
        padding: 15,
        alignItems: 'center',
        width: 112,
        height: 50,
        backgroundColor: '#da2535',
        borderRadius: 10,
        border: 'none',
        tintColor: '#FFFFFFF'
    },

    text: {
        color: '#FFFFFF',
    },

    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    spacer: {
        padding: 5,
    },

})