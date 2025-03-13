import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const MOCK_POSTS = [
  {
    id: '1',
    username: 'TheDonAyo',
    imageUrl: 'https://api.a0.dev/assets/image?text=beautiful%20sunset%20landscape&aspect=4:5',
    likes: 234,
    caption: 'Beautiful sunset today! 🌅',
  },
  {
    id: '2',
    username: 'seth_setse',
    imageUrl: 'https://api.a0.dev/assets/image?text=urban%20photography%20street%20life&aspect=4:5',
    likes: 456,
    caption: 'City vibes 🌆',
  },
];

export default function HomeScreen({ navigation }) {
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <View style={styles.avatar} />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Feather name="more-vertical" size={20} color="black" />
      </View>
      
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      
      <View style={styles.postActions}>
        <View style={styles.leftActions}>
          <TouchableOpacity>
            <MaterialIcons name="favorite-border" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <Feather name="message-circle" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionIcon}>
            <Feather name="send" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.postFooter}>
        <Text style={styles.likes}>{item.likes} likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.caption}>{item.caption}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
      </View>
      <FlatList
        data={MOCK_POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DBDBDB',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  post: {
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DBDBDB',
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    marginLeft: 16,
  },
  postFooter: {
    paddingHorizontal: 12,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  captionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  caption: {
    marginLeft: 4,
  },
});