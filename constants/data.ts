import { ImageSourcePropType } from 'react-native';

export interface IHomeData {
    id: number
    name: string
    picture: ImageSourcePropType
}

export const homeData = [
    {
        id: 1,
        name: 'Burgers',
        picture: require('../assets/images/home/littleBurger.png'),
    },
    {
        id: 2,
        name: 'Fries',
        picture: require('../assets/images/home/fries.png'),
    },
    {
        id: 3,
        name: 'Drinks',
        picture: require('../assets/images/home/drink.png'),
    },
    {
        id: 4,
        name: 'Burgers',
        picture: require('../assets/images/home/littleBurger.png'),
    },
    {
        id: 5,
        name: 'Fries',
        picture: require('../assets/images/home/fries.png'),
    },
]

export interface ICheezyData {
    id: number
    name: string
    price: string
    picture: ImageSourcePropType
}

export const cheezyData = [
    {
        id: 1,
        name: 'Chedder',
        price: '+$0.79',
        picture: require('../assets/images/Cheezy/cheese.png')
    },
    {
        id: 2,
        name: 'Bacon',
        price: '+$0.59',
        picture: require('../assets/images/Cheezy/bacon.png'),
    },
    {
        id: 3,
        name: 'Drinks',
        price: '+$0.29',
        picture: require('../assets/images/Cheezy/onion.png'),
    },
]

export interface IMyCartData {
    id: number
    name: string
    price: string
    quantity: number
    picture: ImageSourcePropType
}

export const myCartData = [
    {
        id: 1,
        name: 'Mr.Cheezy',
        price: '$5.49',
        quantity: 5,
        picture: require('../assets/images/myCart/burger.png'),
    },
    {
        id: 2,
        name: 'Fries M',
        price: '$3.29',
        quantity: 3,
        picture: require('../assets/images/myCart/fries.png'),
    },
    {
        id: 3,
        name: 'Vanilla Ice',
        price: '$6.99',
        quantity: 4,
        picture: require('../assets/images/myCart/ice.png'),
    },
    {
        id: 4,
        name: 'Americano L',
        price: '$1.99',
        quantity: 10,
        picture: require('../assets/images/myCart/coffee.png'),
    }
]