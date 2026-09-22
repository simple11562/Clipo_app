import React from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const { height } = Dimensions.get('window');
const videos = [
  { id: '1', user: '@john_portharcourt', caption: 'First Clipo! 🔥 PH to the world!', img: 'https://picsum.photos/400/800?1' },
    { id: '2', user: '@clipo_official', caption: 'Swipe up for next video 👆', img: 'https://picsum.photos/400/800?2' },
      { id: '3', user: '@portharcourt_girl', caption: 'Clipo is live!', img: 'https://picsum.photos/400/800?3' },
      ];

      export default function App() {
        return (
            <View style={styles.container}>
                  <FlatList
                          data={videos}
                                  pagingEnabled
                                          showsVerticalScrollIndicator={false}
                                                  snapToInterval={height}
                                                          snapToAlignment="start"
                                                                  decelerationRate="fast"
                                                                          renderItem={({ item }) => (
                                                                                    <ImageBackground source={{ uri: item.img }} style={styles.videoBox}>
                                                                                                <View style={styles.overlay}>
                                                                                                              <Text style={styles.user}>{item.user}</Text>
                                                                                                                            <Text style={styles.cap}>{item.caption}</Text>
                                                                                                                                          <View style={styles.row}>
                                                                                                                                                          <TouchableOpacity style={styles.btn}><Text>❤️ 12k</Text></TouchableOpacity>
                                                                                                                                                                          <TouchableOpacity style={styles.btn}><Text>💬 400</Text></TouchableOpacity>
                                                                                                                                                                                          <TouchableOpacity style={styles.btn}><Text>↗️ Share</Text></TouchableOpacity>
                                                                                                                                                                                                        </View>
                                                                                                                                                                                                                    </View>
                                                                                                                                                                                                                              </ImageBackground>
                                                                                                                                                                                                                                      )}
                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                  <View style={styles.topBar}><Text style={styles.logo}>Clipo</Text></View>
                                                                                                                                                                                                                                                      </View>
                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                        const styles = StyleSheet.create({
                                                                                                                                                                                                                                                          container: { flex: 1, backgroundColor: 'black' },
                                                                                                                                                                                                                                                            videoBox: { height, justifyContent: 'flex-end' },
                                                                                                                                                                                                                                                              overlay: { padding: 20, paddingBottom: 80, backgroundColor: 'rgba(0,0,0,0.3)' },
                                                                                                                                                                                                                                                                user: { color: 'white', fontWeight: 'bold', fontSize: 18 },
                                                                                                                                                                                                                                                                  cap: { color: 'white', marginTop: 6, fontSize: 15 },
                                                                                                                                                                                                                                                                    row: { flexDirection: 'row', marginTop: 15, gap: 10 },
                                                                                                                                                                                                                                                                      btn: { backgroundColor: 'white', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20 },
                                                                                                                                                                                                                                                                        topBar: { position: 'absolute', top: 40, left: 0, right: 0, alignItems: 'center' },
                                                                                                                                                                                                                                                                          logo: { color: 'white', fontWeight: 'bold', fontSize: 22 }
                                                                                                                                                                                                                                                                          });