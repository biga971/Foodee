import { COLORS, FONTS, Spacing } from '@/constants'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const FoodInfo = () => {
    return (
        <View style={{
          flex: 1,
          }} 
        >
            <View style={{
                height: 364,
                backgroundColor: COLORS.pink,
                borderBottomLeftRadius: Spacing.borderRadius.lg,
                borderBottomRightRadius: Spacing.borderRadius.lg,
            }}>
                <SafeAreaView>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: Spacing.margin.lg,
                        
                    }} >
                        <Text style={{ 
                            ...FONTS.largeTitle,
                            color: COLORS.white,
                            }}
                        >
                            Mr. Cheezy
                        </Text>
                        <TouchableOpacity style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 44,
                                width: 44,
                                backgroundColor: COLORS.pinkBox,
                                borderRadius: Spacing.borderRadius.sm,
                           }} 
                        >
                            <Ionicons name="close" size={32} color={COLORS.pink} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginHorizontal: Spacing.margin.lg,
                        gap: 4,
                        marginTop: Spacing.margin.lg + 1,
                    }}>
                        <View style={{
                            backgroundColor: '#F7EDE2',
                            borderRadius: Spacing.borderRadius.lg,
                            padding: Spacing.margin.base,
                            alignSelf: 'flex-start'
                        }}>
                            <Text style={{ 
                                ...FONTS.h3Bold,
                                color: COLORS.pink,
                                }}
                            >
                                Classic Taste
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: COLORS.green,
                            borderRadius: Spacing.borderRadius.lg,
                            padding: Spacing.margin.base,
                            alignSelf: 'flex-start'
                        }}>
                            <Text style={{ 
                                ...FONTS.h3Bold,
                                color: COLORS.white,
                                }}
                            >
                                Bestseller
                            </Text>
                        </View>

                        <Image 
                            style={{ 
                                position: 'absolute', 
                                height: 256, 
                                width: 294, 
                                zIndex: -1,
                                right: -30,
                            }} 
                            source={require('../assets/images/Cheezy/burger.png')}
                            resizeMode='contain' 
                        />
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default FoodInfo