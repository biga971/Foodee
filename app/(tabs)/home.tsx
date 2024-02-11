import { SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';

import { COLORS, FONTS, SIZES, Spacing } from '@/constants';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function TabTwoScreen() {

  const [ searchText, setSearchText ] = useState('')
  return (
    <View style={styles.container}>
      <SafeAreaView>
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

        }}>
          
        </View>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  shadow: {
    shadowColor: COLORS.shadowNotificationColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});
