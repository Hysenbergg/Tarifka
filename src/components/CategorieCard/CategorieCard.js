import React from 'react';
import {Image, View, Text, TouchableOpacity } from 'react-native';
import {  } from 'react-native-gesture-handler';
import styles from './CategorieCard.style';

const CategorieCard = ({category, onSelect}) => {
    return(
        <TouchableOpacity onPress={onSelect} >
            <View style={styles.container} >
                <View style={styles.body_container} >
                    <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
                    <Text style={styles.categoryName}> {category.strCategory} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CategorieCard;