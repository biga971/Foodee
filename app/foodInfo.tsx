import { COLORS, FONTS, SIZES, Spacing, cheezyData } from '@/constants'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const FoodInfo = () => {
    const router = useRouter()
    return (
        <View style={{
          flex: 1,
          backgroundColor: COLORS.white
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

            <ScrollView>
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
                marginVertical: Spacing.margin.lg,
                ...styles.shadowItems,
            }}>
                {cheezyData.map( (data, index) => (
                    <View 
                        key={index}
                        style={{
                            backgroundColor: COLORS.yellowNotification,
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

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: Spacing.margin.lg,
                
            }}>
                <Text style={{ 
                    ...FONTS.h1,
                    color: COLORS.darkText,
                    }}
                >
                    Nutrition facts
                </Text>

                <Text style={{ 
                    ...FONTS.h2,
                    color: COLORS.darkText,
                    }}
                >
                    650 Cal
                </Text>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: Spacing.margin.lg,
                marginVertical: Spacing.margin.base,
            }} >
                <View style={{
                    alignItems: 'center',
                }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.darkText, }}>35 g</Text>
                    <Text style={{ ...FONTS.smallLight, color: COLORS.darkText, }}>Total Fat (45% DV)</Text>   
                </View>

                <View style={{
                    alignItems: 'center',
                }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.darkText, }}>43 g</Text>
                    <Text style={{ ...FONTS.smallLight, color: COLORS.darkText, }}>Total Carbs (16% DV)</Text>   
                </View>

                <View style={{
                    alignItems: 'center',
                }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.darkText, }}>36 g</Text>
                    <Text style={{ ...FONTS.smallLight, color: COLORS.darkText, }}>Protein</Text>   
                </View>
            </View>

            <View style={{
                marginHorizontal: Spacing.margin.lg,
                gap: 11,
            }}>
                <Text style={{ ...FONTS.h1, color: COLORS.darkText, }}>Description</Text>
                <Text style={{ ...FONTS.h4, color: COLORS.darkText, }}>Each Mr.Cheezy® with Cheese Bacon burger features thick-cut applewood smoked bacon atop a ¼ lb.</Text>   
            </View>




           
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
                        borderColor: COLORS.pink,
                        borderWidth: 1,
                        borderRadius: Spacing.borderRadius.base,
                        gap: 8,
                        width: SIZES.width/2 -  Spacing.margin.sm * 2 - 4
                        
                    }} 
                    >
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

                <View style={{
                    alignItems: 'center',
                    paddingHorizontal: Spacing.padding.lg,
                    paddingVertical: Spacing.padding.lg -5,
                    backgroundColor: COLORS.pink,
                    borderRadius: Spacing.borderRadius.base,
                    width: SIZES.width/2 -  Spacing.margin.sm * 2 
                }} 
                >
                    <Text style={{ ...FONTS.h3,color: COLORS.white,}}>Add to Cart</Text>
                    <Text style={{ ...FONTS.h2Bold ,color: COLORS.white,}}>$27.45</Text>
                </View>
            </View>
            
        </View>
    )
}

export default FoodInfo


const styles = StyleSheet.create({
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
    shadowItems: {
        shadowColor: '#D6D3C0',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4.65,
        elevation: 9,
    },
});
