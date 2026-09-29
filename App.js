import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('For You');

  return (
    <View style={styles.container}>
      {/* VIDEO / IMAGE BACKGROUND - Like your screenshot */}
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc' }} 
        style={styles.videoBackground}
        resizeMode="cover"
      >
        {/* TOP TABS */}
        <View style={styles.topTabs}>
          <TouchableOpacity><Text style={styles.tabText}>Drama</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.tabText}>Following</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.tabText}>Friends</Text></TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.activeTabText}>For You</Text>
            <View style={styles.underline} />
          </TouchableOpacity>
          <Ionicons name="search" size={28} color="white" style={{marginLeft: 15}} />
        </View>

        {/* CENTER PLAY BUTTON */}
        <View style={styles.playButton}>
          <FontAwesome name="play" size={40} color="white" />
        </View>

        {/* RIGHT ACTIONS - 42, 4, 1, Share */}
        <View style={styles.rightBar}>
          <View style={styles.profileWrap}>
            <View style={styles.profilePic} />
            <View style={styles.plusBtnSmall}>
              <Text style={{color:'white', fontWeight:'bold', fontSize: 16}}>+</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.rightItem}>
            <Ionicons name="heart" size={35} color="white" />
            <Text style={styles.rightText}>42</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.rightItem}>
            <Ionicons name="chatbubble-ellipses" size={32} color="white" />
            <Text style={styles.rightText}>4</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.rightItem}>
            <Ionicons name="bookmark" size={32} color="white" />
            <Text style={styles.rightText}>1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.rightItem}>
            <Ionicons name="arrow-redo-sharp" size={32} color="white" />
            <Text style={styles.rightText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* BOTTOM TEXT OVER VIDEO */}
        <View style={styles.captionWrap}>
          <Text style={styles.caption}>promise I will work hardt{"\n"}to make you happy.{"\n"}Even if I have nothing, will{"\n"}give you everything!{"\n"}have.</Text>
          <Text style={styles.flagText}>🇺🇸 Tears 🇺🇸</Text>
          <Text style={styles.hashText}>#tiktok #tendencia #t...  See more</Text>
        </View>
      </ImageBackground>

      {/* BOTTOM NAV - Home Explore + Inbox Me */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={28} color="white" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="grid-outline" size={26} color="#888" />
          <Text style={styles.navText}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerPlus}>
          <View style={styles.plusInner}>
            <Ionicons name="add" size={28} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbox-ellipses-outline" size={26} color="#888" />
          <Text style={styles.navText}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={26} color="#888" />
          <Text style={styles.navText}>Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  videoBackground: { flex: 1, justifyContent: 'space-between' },
  topTabs: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 45, paddingHorizontal: 10 },
  tabText: { color: '#ccc', fontSize: 16, fontWeight: '600' },
  activeTabText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  underline: { height: 3, backgroundColor: 'white', marginTop: 5, width: 35, alignSelf: 'center' },
  playButton: { position: 'absolute', top: '45%', left: '45%', backgroundColor: 'rgba(0,0,0,0.2)', padding: 10, borderRadius: 10 },
  rightBar: { position: 'absolute', right: 10, bottom: 120, alignItems: 'center' },
  profileWrap: { marginBottom: 25, alignItems: 'center' },
  profilePic: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#555', borderWidth: 2, borderColor: 'white' },
  plusBtnSmall: { backgroundColor: '#FE2C55', width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: -10 },
  rightItem: { alignItems: 'center', marginBottom: 18 },
  rightText: { color: 'white', fontSize: 13, fontWeight: '600', marginTop: 4 },
  captionWrap: { position: 'absolute', bottom: 15, left: 12, right: 80 },
  caption: { color: 'white', fontSize: 20, fontWeight: 'bold', lineHeight: 26, textShadowColor: 'rgba(0,0,0,0.8)', textShadowRadius: 5 },
  flagText: { color: 'white', marginTop: 12, fontWeight: '600' },
  hashText: { color: 'white', marginTop: 4, fontWeight: '500' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'black', height: 75, borderTopWidth: 0.5, borderTopColor: '#222', paddingBottom: 10 },
  navItem: { alignItems: 'center' },
  navText: { color: '#888', fontSize: 10, marginTop: 3 },
  navTextActive: { color: 'white', fontSize: 10, marginTop: 3, fontWeight: 'bold' },
  centerPlus: { backgroundColor: 'white', width: 50, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderLeftWidth: 3, borderLeftColor: '#25F4EE', borderRightWidth: 3, borderRightColor: '#FE2C55' },
  plusInner: { justifyContent: 'center', alignItems: 'center' },
});
