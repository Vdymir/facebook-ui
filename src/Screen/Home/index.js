import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Gap from './components/Gap';
import dataHistorys from '../../data/historas.json';
import CardHistory from './components/CardHistory';

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [dataHistory, setdataHistory] = useState([...dataHistorys]);
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
          <Icon name="search-outline" size={30} color="black" />
        </View>
      </View>
      {/* tabs */}
      <View style={styles.tabs}>
        <View style={styles.tabIcon}>
          <Icon name="home" size={30} color="blue" />
        </View>
        <View>
          <Icon name="play-outline" size={30} color="black" />
        </View>
        <View>
          <Icon name="file-tray-stacked-outline" size={30} color="black" />
        </View>
        <View>
          <Icon name="grid-outline" size={30} color="black" />
        </View>
        <View>
          <Icon name="notifications-outline" size={30} color="black" />
        </View>
        <View>
          <Icon name="menu-outline" size={30} color="black" />
        </View>
      </View>
      {/* que estas pensando */}
      <View style={styles.containerThink}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/78880612?v=4',
          }}
          style={styles.imgProfile}
        />
        <View style={styles.input}>
          <TextInput
            onChangeText={() => {}}
            value=""
            placeholder="¿Que estas pensando?"
            keyboardType="default"
          />
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Gap height={10} />
        {/* historys */}
        <ScrollView
          style={styles.historys}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {dataHistory.map(htr => (
            <CardHistory
              imgBg={htr.imgBg}
              imgPft={htr.imgPft}
              name={htr.name}
              key={htr.id}
            />
          ))}
        </ScrollView>
        <Gap height={10} />
        {/* Noticias */}
        <View>
          <View style={styles.noticeHeader}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/78880612?v=4',
              }}
              style={styles.imgProfile}
            />
            <View style={styles.headerTxtCont}>
              <Text style={styles.titleNotice}>Shitpost Tuneado</Text>
              <View style={{flexDirection: 'row', alignItem: 'center'}}>
                <Text>22 h</Text>
                <Icon
                  name="globe-outline"
                  size={22}
                  color="#000"
                  style={{marginLeft: 5}}
                />
              </View>
            </View>
            <Icon
              name="close-outline"
              size={30}
              color="#000"
              style={{marginTop: 10, marginRight: 10}}
            />
          </View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
            <ImageBackground
              source={{
                uri: 'https://i.blogs.es/0ec27f/memess/1366_2000.jpg',
              }}
              style={{height: 300, marginTop: 30}}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
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
    borderColor: 'rgba(0, 0, 0, .3)',
  },
  tabIcon: {
    borderBottomWidth: 2,
    borderColor: '#3b5998',
  },
  containerThink: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, .3)',
  },
  imgProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.8)',
    borderRadius: 20,
    marginLeft: 10,
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  historys: {
    padding: 10,
    marginRight: 10,
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerTxtCont: {
    flex: 1,
    marginLeft: 20,
    marginTop: 5,
  },
  titleNotice: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
});
