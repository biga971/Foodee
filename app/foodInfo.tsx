import { COLORS, FONTS, Spacing, cheezyData } from '@/constants'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FoodInfo = () => {
    const router = useRouter()
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
                           onPress={ () => router.back() }
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

            <Text style={{ 
                ...FONTS.h1,
                color: COLORS.darkText,
                marginTop: Spacing.margin.xl,
                marginHorizontal: Spacing.margin.lg,
                }}
            >
                Add More Flavor 🤩
            </Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: Spacing.margin.lg,
            }}>
                {cheezyData.map( (data, index) => (
                    <View style={{
                        backgroundColor: COLORS.yellowNotification,
                        width: 108,
                        borderRadius: Spacing.borderRadius.lg,
                    }}>
                        <Image style={{height: 100, width: 92}} source={data.picture} />
                    </View>
                ))}
            </View>
        </View>
    )
}

export default FoodInfo


//D6D3C0

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#D6D3C0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 9,
    },
});