import React from 'react';
import { ActivityIndicator, FlatList, Text, Linking } from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';

const Detail = ({route}) => {

    const {idMeal} = route.params;

    const {data, loading, error} = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ idMeal);
    
    const renderDetail = ({item}) => <DetailCard 
        detail={item} 
        onSelect={() => Linking.openURL(item.strYoutube)}
    />
    
    if(loading){return <ActivityIndicator size="large" />}

    if(error){return <Text> {error} </Text>}

    return(
        <FlatList 
            data={data.meals}
            renderItem={renderDetail}
        />
    )
}

export default Detail;