import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CardHistory = ({ imgBg, imgPft, name }) => {
    return (
        <TouchableOpacity
            activeOpacity={.8}
        >
            <View style={styles.history}>
                <ImageBackground
                    source={{
                        uri: imgBg
                    }}
                    resizeMode="cover"
                    style={styles.ImgBg}
                >
                    <Image
                        source={{
                            uri: imgPft
                        }}
                        style={styles.imgProfileHistory}
                    />
                    <Text style={styles.textHistory}>
                        {name}
                    </Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default CardHistory

const styles = StyleSheet.create({
    history: {
        width: 120,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 5
    },
    ImgBg: {
        flex: 1,
        position: 'relative',
    },
    imgProfileHistory: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'blue',
        padding: 5,
        top: 10,
        left: 10
    },
    textHistory: {
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.9)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        position: 'absolute',
        bottom: 10,
        left: 10
    },
})
