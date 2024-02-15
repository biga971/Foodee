import { SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

import { COLORS, FONTS, SIZES, Spacing } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import HorizontalFlatList from '../../components/HorizontalFlatList'

export default function TabTwoScreen() {

  const [ searchText, setSearchText ] = useState('')
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.yellowNotification,
            marginHorizontal: Spacing.margin.lg,
            paddingHorizontal: Spacing.padding.lg,
            paddingVertical: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.lg,
            gap: 12,
            ...styles.shadow,
          }}>
            <Image style={{height: 64, width: 64,}} source={require('../../assets/images/home/icon.png')}/>
            <Text style={{...FONTS.h3, color: COLORS.darkText, width: 200,}}>Welcome back, Pin! How Hungry are you?</Text>
          </View>

          <View style={{
            flexDirection: 'row',
            marginHorizontal: Spacing.margin.lg,
            gap: 12,
            marginVertical: Spacing.margin.xl,
          }}>
            <View style={{
              flexDirection: 'row',
              height: 44,
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: Spacing.borderRadius.sm,
              paddingHorizontal: Spacing.padding.lg,
              gap: 8,
              width: SIZES.width - Spacing.margin.lg*2 - 12 - 44,
            }}>
              <Ionicons name='search' size={24} color={COLORS.darkText} />  
              <TextInput
                style={{
                  fontFamily: "Unbounded-Light", 
                  fontSize: SIZES.h4,
                }}
                onChangeText={setSearchText}
                placeholder="Search..."
                value={searchText}
              />
            </View>
            <TouchableOpacity style={{
              backgroundColor: COLORS.pink,
              alignItems: 'center',
              justifyContent: 'center',
              height: 44,
              width: 44,
              borderRadius: Spacing.borderRadius.sm
            }} >
              <Ionicons name='options' size={30} color='white' />  
            </TouchableOpacity>
          </View>

          <Text style={{...FONTS.largeTitle, color: COLORS.darkText, marginHorizontal: Spacing.margin.lg,}}>Today’s Menu</Text>

          <View style={{
            marginTop: 19,
            //marginBottom: 26,
            marginHorizontal: Spacing.margin.lg,
            paddingHorizontal: Spacing.padding.lg,
            paddingVertical: Spacing.padding.lg * 1.9,
            backgroundColor: COLORS.green,
            borderRadius: Spacing.borderRadius.lg,
            ...styles.shadowGreen,
          }}>
            <View style={{
              backgroundColor: 'transparent',
            }}>
              <Text style={{...FONTS.h1, color: COLORS.white,}}>Free Donut!</Text>
              <Text style={{...FONTS.h3, color: '#F4F1DE',}}>For orders over $20</Text>
              <Image style={{
                position: 'absolute',
                width: 131,
                height: 121, 
                right: -15,
                top: -65,
                }} 
                source={require('../../assets/images/home/donut.png')}
              />
            </View>
          </View>
            <HorizontalFlatList />
          <Text style={{
            ...FONTS.largeTitle, 
            color: COLORS.darkText, 
            marginHorizontal: Spacing.margin.lg,
            //marginVertical: Spacing.margin.medium,
            }}
          >
            Best Offers 💕
          </Text>

          <View style={{
            flexDirection: 'row',
            marginHorizontal: Spacing.margin.lg,
            paddingHorizontal: Spacing.padding.lg,
            paddingVertical: Spacing.padding.base,
            backgroundColor: COLORS.white,
            borderRadius: Spacing.borderRadius.lg,
            gap: 20,
            /* borderColor: COLORS.yellow,
            borderWidth: 1 , */
            ...styles.shadowBestOff,
          }}>
            <View style={{
              height: 88,
              width: 88,
            }}>
              <Image style={{height: 82, width: 63,}} source={require('../../assets/images/home/hotDog.png')}/>
            </View>
            
            <View style={{

            }}>
              <Text style={{...FONTS.h1, color: COLORS.darkText,}}>Frenchdog</Text>
              <Text style={{...FONTS.h3, color: COLORS.darkText, }}>Tasty&Spicy 🌶🌶🌶</Text>
            </View>
            
          </View>

          <View style={{ height: 62, marginTop: 30}}/>
        </ScrollView>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: COLORS.yellowNotification,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  shadowGreen: {
    shadowColor: COLORS.greenShadowColor,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5.46,

    elevation: 9,
  },
  shadowBestOff:{
    shadowColor: '#F2CC8F',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  }
});
