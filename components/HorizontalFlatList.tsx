import React from 'react'
import { FlatList , TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import { Spacing, COLORS, FONTS, IHomeData, homeData  } from '../constants';
import { useRouter } from 'expo-router';
import Animated, { FadeInRight } from 'react-native-reanimated';

const HorizontalFlatlist = () => {

    const router = useRouter()
    const onPress = () => {
        router.push('/foodInfo')
    }
    
    const Item = ({data}: {data: IHomeData}) => {
        let color = COLORS.yellow

        const Touchable = Animated.createAnimatedComponent(TouchableOpacity)
        const time = data.id * 150 + 250
        if (data.id % 3 === 2) {
            color = COLORS.pinkBox
        }else if (data.id % 3 === 0) {
            color = COLORS.green
        }
        return (
        
            <Touchable
                style={{ 
                    marginRight: Spacing.margin.medium,
                    borderRadius: Spacing.borderRadius.lg,
                    paddingTop: 20,
                    width: 104,
                    backgroundColor: color,
                    alignItems: "center",
                    marginVertical: Spacing.margin.lg,
                    ...styles.shadow   
                }}
                onPress={() => onPress()}
                entering={FadeInRight.duration(400).delay(time)}
            >
                <Text style={{ ...FONTS.small, color: COLORS.darkText, alignItems: 'center', justifyContent:'center' }}>{data.name}</Text>
                <Animated.View style={{
                    width: '100%',
                    alignItems: 'flex-end', 
                }}
                >
                   <Animated.Image sharedTransitionTag='10' style={{height: 94, width: 96, borderBottomRightRadius: Spacing.borderRadius.lg,}} source={data.picture} />
                </Animated.View>
                
            </Touchable>   
            
        );
    }
    return (
         <FlatList
            data={homeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: IHomeData) => `${item.id}`}
            renderItem={({item}) => <Item data={item} />}
            ListHeaderComponent={<View style={{
                width: Spacing.margin.lg
            }}/>
            }
        />
    )
}



const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.yellowShadowColor,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 9,
    },
});

export default HorizontalFlatlist