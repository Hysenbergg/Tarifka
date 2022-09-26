import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';

const Meals = ({route, navigation}) => {
    const {strCategory} = route.params;
    
    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+ strCategory );
    
    const renderMeal = ({item}) => {
        return(<MealCard meal={item} onSelect={() => handleSelectMealDetails(item.idMeal)} />)
    }
    
    const handleSelectMealDetails = idMeal => {
        navigation.navigate('DetailPage', {idMeal});
    }

    if(loading){return <ActivityIndicator size="large" />}

    if(error){return <Text> {error} </Text>}

    return(
        <FlatList 
            data={data.meals}
            renderItem={renderMeal}    
        />
    )
}

export default Meals;