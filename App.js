import { FlatList, Dimensions, View, Text, StyleSheet, StatusBar } from 'react-native';
import { Video } from 'expo-av';
const { height, width } = Dimensions.get('window');
const VIDEOS = [
  { id: '1', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', user: '@design_lover', cap: 'Living room goals ✨ #fyp' },
  { id: '2', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', user: '@clipo', cap: 'Swipe up — works! 🔥' },
  { id: '3', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', user: '@portharcourt', cap: 'Built from my phone 📱' },
];
function Card({ item }){
  return (
    <View style={styles.page}>
      <Video source={{ uri: item.url }} style={styles.video} shouldPlay isLooping resizeMode="cover" />
      <View style={styles.bottom}><Text style={styles.user}>{item.user}</Text><Text style={styles.cap}>{item.cap}</Text></View>
      <View style={styles.right}><Text style={styles.btn}>❤️{'\n'}24k</Text><Text style={styles.btn}>💬{'\n'}1k</Text><Text style={styles.btn}>🔖</Text></View>
    </View>
  );
}
export default function App(){
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden />
      <FlatList data={VIDEOS} pagingEnabled snapToInterval={height} decelerationRate="fast" showsVerticalScrollIndicator={false} keyExtractor={i=>i.id} renderItem={({item})=><Card item={item} />} />
    </View>
  );
}
const styles = StyleSheet.create({
  page: { height, width, backgroundColor: 'black' },
  video: { flex: 1 },
  bottom: { position: 'absolute', bottom: 90, left: 12, right: 80 },
  user: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  cap: { color: 'white', marginTop: 6, fontSize: 14 },
  right: { position: 'absolute', bottom: 90, right: 10, gap: 18, alignItems: 'center' },
  btn: { color: 'white', fontSize: 18, textAlign: 'center' },
});
