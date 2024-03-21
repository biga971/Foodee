import { SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

import { COLORS, FONTS, SIZES, Spacing } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import HorizontalFlatList from '../../components/HorizontalFlatList'

import { MotiView } from 'moti';

import Animated, { FadeInDown } from 'react-native-reanimated';

export default function TabTwoScreen() {

  const [ searchText, setSearchText ] = useState('')
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView >
          <MotiView 
          
          from={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'timing',
          }}
          style={{
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
          </MotiView>

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
              width: SIZES.width - Spacing.margin.lg * 2 - 12 - 44,
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

          <Animated.Text 
            style={{...FONTS.largeTitle, color: COLORS.darkText, marginHorizontal: Spacing.margin.lg,}} 
            entering={FadeInDown.duration(400).delay(250)}
          >
            Today’s Menu
          </Animated.Text>

          <Animated.View style={{
            marginTop: 19,
            //marginBottom: 26,
            marginHorizontal: Spacing.margin.lg,
            paddingHorizontal: Spacing.padding.lg,
            paddingVertical: Spacing.padding.lg * 1.9,
            backgroundColor: COLORS.green,
            borderRadius: Spacing.borderRadius.lg,
            ...styles.shadowGreen,
          }}
          entering={FadeInDown.duration(400).delay(250)}
          >
            <View style={{
              backgroundColor: 'transparent',
            }}>
              <Animated.Text style={{...FONTS.h1, color: COLORS.white,}} entering={FadeInDown.duration(400).delay(500)}>Free Donut!</Animated.Text>
              <Animated.Text style={{...FONTS.h3, color: '#F4F1DE',}} entering={FadeInDown.duration(400).delay(500)}>For orders over $20</Animated.Text>
              <Animated.Image style={{
                position: 'absolute',
                width: 131,
                height: 121, 
                right: -15,
                top: -65,
                }} 
                source={require('../../assets/images/home/donut.png')}
                entering={FadeInDown.duration(400).delay(700)}
              />
            </View>
          </Animated.View>
            <HorizontalFlatList />
          <Animated.Text style={{
            ...FONTS.largeTitle, 
            color: COLORS.darkText, 
            marginHorizontal: Spacing.margin.lg,
            //marginVertical: Spacing.margin.medium,
            }}
            entering={FadeInDown.duration(400).delay(250)}
          >
            Best Offers 💕
          </Animated.Text>

          <Animated.View style={{
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
          }}
          entering={FadeInDown.duration(400).delay(250)}
          >
            <View style={{
              height: 88,
              width: 88,
            }}
            
            >
              <Animated.Image 
              style={{height: 82, width: 63,}} 
              source={require('../../assets/images/home/hotDog.png')}
              entering={FadeInDown.duration(400).delay(700)}/>
            </View>
            
            <View style={{

            }}>
              <Animated.Text 
                style={{...FONTS.h1, color: COLORS.darkText,}}
                entering={FadeInDown.duration(400).delay(500)}
              >
                Frenchdog
              </Animated.Text>
              <Animated.Text 
                style={{...FONTS.h3, color: COLORS.darkText, }}
                entering={FadeInDown.duration(400).delay(500)}
              >
                Tasty&Spicy 🌶🌶🌶
              </Animated.Text>
            </View>
            
          </Animated.View>

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
