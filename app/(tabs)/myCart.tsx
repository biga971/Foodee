import { SafeAreaView, StyleSheet, TouchableOpacity, Image, Platform, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { COLORS, FONTS, SIZES, Spacing, cheezyData } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { myCartData } from '@/constants';

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
              onPress={ () => router.push('/(tabs)/home') }
            >
                <Ionicons name="close" size={32} color={COLORS.pink} />
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView>
      <View style={{
        marginHorizontal: Spacing.margin.lg,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: Spacing.margin.lg,
      }}>
        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{ ...FONTS.xsmall, color: COLORS.darkText,}}>My Order</Text>
          <Circle opacity={1} text='1' /> 
        </View>

        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{ ...FONTS.xsmall, color: COLORS.darkText, opacity: 0.25}}>Details</Text>
          <Circle opacity={0.25} text='2' /> 
        </View>

        <View style={{
          alignItems: 'center',
        }}>
          <Text style={{ ...FONTS.xsmall, color: COLORS.darkText, opacity: 0.25}}>Payment</Text>
          <Circle opacity={0.25} text='3' /> 
        </View>

        <View style={{ 
          position: 'absolute', 
          height: 1 , 
          backgroundColor: COLORS.pink, 
          width: SIZES.width/2  , 
          top: 44, 
          zIndex: -1,
          opacity: 0.25, 
        }} />
        <View style={{ 
          position: 'absolute', 
          height: 1 , 
          backgroundColor: COLORS.pink, 
          width: SIZES.width/2 -Spacing.margin.lg * 4.2, 
          top: 44, 
          left: SIZES.width/2 , 
          opacity: 0.25, 
          zIndex: -1, }} />

      </View>

      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: Spacing.margin.lg,
          marginBottom: Spacing.margin.lg,
        }} 
      >
        <Text style={{ ...FONTS.largeTitle, color: COLORS.darkText,}}>Order</Text>
        <Text style={{ ...FONTS.h2, color: COLORS.pink,}}>Clear all</Text>     
      </View>



      {myCartData.map( (data, index) => (
        <View 
          key={index}
          style= {{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: Spacing.margin.lg,
            paddingHorizontal: Spacing.padding.xl,
            paddingVertical: Spacing.padding.base,
            marginBottom: Spacing.margin.base,
            borderRadius: Spacing.borderRadius.lg,
            gap: 20,
            ...styles.shadow
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20,}} >
            <Image style={{height: 60, width: 60}} source={data.picture} />
            <View style={{}} >
              <Text style={{ ...FONTS.h5, color: COLORS.darkText,}}>{data.name}</Text>
              <Text style={{ ...FONTS.smallLight, color: COLORS.pink,}}>{data.price}</Text>  
            </View>
          </View>
         

          <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center'}}> 
            <View style={{
              height: 24,
              width: 24,
              borderRadius: 50,
              backgroundColor: '#F7EDE2'
            }}>
                <Ionicons name="remove" size={24} color={COLORS.pink} />
            </View>

            <Text style={{ ...FONTS.h2,color: COLORS.darkText,}}>5</Text>

            <View style={{
              height: 24,
              width: 24,
              borderRadius: 50,
              backgroundColor: COLORS.pink
            }}>
                <Ionicons name="add" size={24} color={COLORS.white} />
            </View>
          </View>
          
        </View>
      ))}

      <Text style={{ ...FONTS.largeTitle, color: COLORS.darkText,marginHorizontal: Spacing.margin.lg, marginTop: Spacing.margin.lg, }}>Don’t Forget ☺</Text>

      <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: Spacing.margin.lg,
              marginVertical: Spacing.margin.lg,
      }}>
        {cheezyData.map( (data, index) => (
            <View 
                key={index}
                style={{
                    backgroundColor: '#F7EDE2',
                    width: 108,
                    borderRadius: Spacing.borderRadius.lg,
                    paddingVertical: Spacing.padding.lg,
                    alignItems: 'center',
                    gap: 8
                }}
            
            >
                <Image style={{height: 100, width: 92}} source={data.picture} />
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{...FONTS.small}}>{data.name}</Text>
                    <Text style={{...FONTS.small}}>{data.price}</Text>
                </View>
            </View>
        ))}
      </View>

      <View style={{ height: 100, }} />
      </ScrollView>

      <View style={{
        position: 'absolute',
        flexDirection: 'row',
        marginHorizontal: Spacing.margin.sm,
        height: 92,
        bottom: Platform.OS === 'android' ? 10 : 25,
        backgroundColor: COLORS.white,
        borderRadius: Spacing.borderRadius.lg,
        padding: 8,
        gap: 8,
        width: SIZES.width -  Spacing.margin.sm * 2,
        ...styles.shadow
      }}>
              

          <View style={{
            flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: Spacing.padding.lg,
              paddingVertical: Spacing.padding.lg -5,
              backgroundColor: COLORS.pink,
              borderRadius: Spacing.borderRadius.base,
              width: '100%',
              gap: 12
          }} 
          >
              <Text style={{ ...FONTS.h3,color: COLORS.white,}}>Next Step</Text>
              <Text style={{ ...FONTS.h2Bold ,color: COLORS.white,}}>$85.18</Text>
          </View>
      </View>

            
    </View>
  );
}



const Circle = (props: {
  opacity: number,
  text: string,
}) => {
  const {opacity, text} = props
  return (
    <View style={{
      height: 44, 
      width: 44, 
      backgroundColor: COLORS.pink, 
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: opacity,
    }}>
      <Text style={{ ...FONTS.xsmallLight, color: COLORS.white,}}>{text}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#F2CC8F',
    shadowOffset: {
        width: 0,
        height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 20,
  },
  shadowItems: {
    shadowColor: '#D6D3C0',
    shadowOffset: {
        width: 0,
        height: 15,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 20,
  },
});
