import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet, View, Text } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { FONTS, COLORS, Spacing } from '@/constants';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
const TabBarIcon = (props: {
  color: string;
  name: string
  icon:  React.ComponentProps<typeof Ionicons>['name'];
  iconSelected:  React.ComponentProps<typeof Ionicons>['name'];
}) => {
  return (
    <>
    
    <View style={{
      position: 'absolute', 
      alignItems: 'center', 
      justifyContent: 'center', 
      top: 0,  
      height: 92,
    }}>
      
      <Ionicons 
        name={props.color === '#F28482'?props.iconSelected:props.icon} 
        size={38} 
        color={props.color === '#F28482'?props.color:COLORS.darkText} />  
      <Text style={{ 
        ...FONTS.h4Light,
        color: props.color === '#F28482'?props.color:COLORS.darkText
      }}
      >
        {props.name}
      </Text>
    </View> 
    </>
  )
}


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle : {
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: Platform.OS === 'android' ? 10 : 25,
          marginHorizontal: Spacing.margin.sm,
          borderRadius: Spacing.borderRadius.lg,
          height: 92,
          ...styles.shadow
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon  
            name="Location" 
            icon="location-outline" 
            iconSelected="location-sharp"
            color={color} 
          />,
          headerShown: false 
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon  
          name="Home" 
          icon="home-outline" 
          iconSelected="home-sharp"
          color={color} 
        />,
        headerShown: false 
        }}
      />
      <Tabs.Screen
        name="myCart"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon  
          name="My Cart" 
          icon="cart-outline" 
          iconSelected="cart-sharp"
          color={color} 
        />,
        }}
      />
       <Tabs.Screen
        name="me"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon  
          name="Home" 
          icon="accessibility-outline" 
          iconSelected="accessibility-sharp"
          color={color} 
        />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});