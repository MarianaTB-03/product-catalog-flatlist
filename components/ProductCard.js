import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setLiked(true);
    }
  };

  const formattedPrice = product.price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.price}>{formattedPrice}</Text>

        <Pressable
          onPress={handleLike}
          style={({ pressed }) => [
            styles.likeButton,
            liked && styles.likeButtonActive,
            pressed && styles.likeButtonPressed,
          ]}
          android_ripple={{ color: '#ffd7d7' }}
        >
          <Text style={styles.likeIcon}>{liked ? '❤️' : '🤍'}</Text>
          <Text style={styles.likeText}>{likes}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 140,
    backgroundColor: '#eee',
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    minHeight: 36,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2b6cb0',
    marginTop: 4,
    marginBottom: 8,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  likeButtonActive: {
    backgroundColor: '#ffe3e3',
  },
  likeButtonPressed: {
    opacity: 0.6,
  },
  likeIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  likeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
  },
});