import React from 'react'
import { StyleSheet, Text, View, useColorScheme, StatusBar } from 'react-native'

export const Home = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={styles.container}>
            <StatusBar  barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            {/* header */}
            <View>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
})
