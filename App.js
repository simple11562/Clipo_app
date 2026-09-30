import { useState } from 'react';
import { FlatList, Dimensions, View, Text, Pressable, StyleSheet, StatusBar } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

const { height, width } = Dimensions.get('window');

const VIDEOS = [
  { id: '1', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', user: '@design_lover', caption: 'Living room goals ✨' },
  { id: '2', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', user: '@clipo', caption: 'This scrolls now! Swipe up 🔥' },
  { id: '3', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', user: '@portharcourt', caption: 'Made from my phone 📱 #fyp' },
];

function VideoCard({ item }) {
  const player = useVideoPlayer(item.url, p => { p.loop = true; p.play(); });
  return (
    <View style={styles.container}>
      <VideoView player={player} style={styles.video} contentFit="cover" />
      <Pressable onPress={() => player.playing ? player.pause() : player.play()} style={StyleSheet.absoluteFill} />
      <View style={styles.bottom}>
        <Text style={styles.user}>{item.user}</Text>
        <Text style={styles.caption}>{item.caption}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.icon}>❤️ 24k</Text>
        <Text style={styles.icon}>💬 1k</Text>
        <Text style={styles.icon}>🔖</Text>
        <Text style={styles.icon}>↗️</Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden />
      <FlatList
        data={VIDEOS}
        pagingEnabled
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <VideoCard item={item} />}
        keyExtractor={i => i.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height, width, backgroundColor: 'black' },
  video: { flex: 1 },
  bottom: { position: 'absolute', bottom: 90, left: 12, right: 80 },
  user: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  caption: { color: 'white', marginTop: 6 },
  right: { position: 'absolute', bottom: 90, right: 10, gap: 18 },
  icon: { color: 'white', fontSize: 22, textAlign: 'center' },
});
