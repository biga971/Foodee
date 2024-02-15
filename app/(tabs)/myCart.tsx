import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { COLORS, FONTS, Spacing } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: Spacing.margin.lg,
          
      }} >
          <Text style={{ 
            ...FONTS.largeTitle,
            color: COLORS.darkText,
            }}
          >
            My Cart
          </Text>
          <TouchableOpacity style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 44,
                width: 44,
                backgroundColor: '#F5CAC3',
                borderRadius: Spacing.borderRadius.sm,
            }}
            onPress={ () => router.back() }
          >
              <Ionicons name="close" size={32} color={COLORS.pink} />
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#C2BFAC',
    shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
    elevation: 9,
},
});