import React from 'react'
import { StyleSheet, Text, View, useColorScheme, StatusBar, Image, TextInput, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Gap from './components/Gap'

export const Home = () => {
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? '#000' : '#fff'}
            />
            {/* header */}
            <View style={styles.header}>
                <Text style={styles.title}>facebook</Text>
                <View style={styles.icon}>
                    <Icon
                        name='search-outline'
                        size={30}
                        color='black'
                    />
                </View>
            </View>
            {/* tabs */}
            <View style={styles.tabs}>
                <View style={styles.tabIcon}>
                    <Icon
                        name='home'
                        size={30}
                        color='blue'
                    />
                </View>
                <View>
                    <Icon
                        name='play-outline'
                        size={30}
                        color='black'
                    />
                </View>
                <View>
                    <Icon
                        name='file-tray-stacked-outline'
                        size={30}
                        color='black'
                    />
                </View>
                <View>
                    <Icon
                        name='grid-outline'
                        size={30}
                        color='black'
                    />
                </View>
                <View>
                    <Icon
                        name='notifications-outline'
                        size={30}
                        color='black'
                    />
                </View>
                <View>
                    <Icon
                        name='menu-outline'
                        size={30}
                        color='black'
                    />
                </View>
            </View>
            {/* que estas pensando */}
            <View style={styles.containerThink}>
                <Image
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/78880612?v=4'
                    }}
                    style={styles.imgProfile}
                />
                <View style={styles.input}>
                    <TextInput
                        onChangeText={() => { }}
                        value=''
                        placeholder="¿Que estas pensando?"
                        keyboardType="default"
                    />
                </View>
            </View>
            <Gap height={10} />
            {/* historys */}
            <View style={styles.historys}>
                <View style={styles.history}>
                    <ImageBackground
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/78880612?v=4'
                        }}
                        resizeMode="cover"
                        style={styles.ImgBg}
                    >
                        <Image
                            source={{
                                uri: 'https://avatars.githubusercontent.com/u/78880612?v=4'
                            }}
                            style={styles.imgProfileHistory}
                        />
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    title: {
        color: '#3b5998',
        fontSize: 32,
        fontWeight: 'bold',
    },
    icon: {
        backgroundColor: '#C0c1c1',
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, .3)'
    },
    tabIcon: {
        borderBottomWidth: 2,
        borderColor: '#3b5998'
    },
    containerThink: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, .3)'
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.8)',
        borderRadius: 20,
        marginLeft: 10,
        paddingLeft: 10
    },
    historys: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    history: {
        width: 120,
        height: 200,
        borderRadius: 20,
        overflow: 'hidden',
    },
    ImgBg: {
        flex: 1,
    },
    imgProfileHistory: {
        
    }
})
