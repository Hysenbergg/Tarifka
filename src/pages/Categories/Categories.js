import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import axios from 'axios';
import CategorieCard from '../../components/CategorieCard';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}) => {

    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    
    const renderCategries = ({item}) => <CategorieCard 
        category={item} 
        onSelect={() => handleCategorySelect(item.strCategory)}
    />

    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsPages', {strCategory});
    }
    
    if(loading){return <ActivityIndicator size="large" />}

    if(error){return <Text> {error} </Text>}

    return(
        <FlatList 
            data={data.categories}
            renderItem={renderCategries}
        />
    )
}

export default Categories;