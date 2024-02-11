import React from 'react'
import { FlatList , TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native'
import { Spacing, COLORS, FONTS, IHomeData, homeData  } from '../constants';

const HorizontalFlatlist = () => {

    const onPress = () => {
    }
    
    const Item = ({data}: {data: IHomeData}) => {
        let color = COLORS.yellow

        if (data.id % 3 === 2) {
            color = COLORS.pinkBox
        }else if (data.id % 3 === 0) {
            color = COLORS.green
        }
        return (
        
            <TouchableOpacity
                style={{ 
                    marginRight: Spacing.margin.medium,
                    borderRadius: Spacing.borderRadius.lg,
                    paddingTop: 20,
                    width: 104,
                    backgroundColor: color,
                    alignItems: "center",
                    //justifyContent: "center",
                    ...styles.shadow   
                }}
                onPress={() => onPress()}
            >
                <Text style={{ ...FONTS.small, color: COLORS.darkText, alignItems: 'center', justifyContent:'center' }}>{data.name}</Text>
                <View style={{
                    width: '100%',
                    alignItems: 'flex-end',
                }}>

                </View>
                <Image style={{height: 94, width: 96,}} source={data.picture} resizeMode='stretch' />
            </TouchableOpacity>   
            
        );
    }
    return (
         <FlatList
            data={homeData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: IHomeData) => `${item.id}`}
            renderItem={({item}) => <Item data={item} />}
           /*  ListFooterComponent={(<View style={{
                //width: Spacing.margin.lg
            }}/>)} */
        />
    )
}



const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.tabShadowColor,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 9,
    },
});

export default HorizontalFlatlist