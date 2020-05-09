import axios from axios 
export const fetchData=(apiHost)=>{

} 
const loadingStart=()=>{

};
const successHandle=(response)=>{

} 
const errorHandle=()=>{

};
export const toggle=()=>{

};
export const addFavoriteDog=(apiHost,id)=>{
    return async dispatch=>{
        try{
            const response=await axios.post('${apiHost}/favorites',{id})
            dispatch({
                type:ADD_FAVORITE_DOGS,
                payload:response.data
            })
        
            }
    catch(error){
        console.log(error);
        dispatch(errorHandle());
        
    }
    }
}
export const toggle= ()=>{

}
export const removeFavoriteDog=(apiHost,foundDogId,dogId)=>{
    return async dispatch =>{
        try{
            await axios.delete('${apiHost}/favorites/${foundDogId}')
            dispatch({
                type:REMOVE_FAVORITE_DOGS,
                payload:dogId
            })
        }
        catch(error){
            console.log(error);
            dispatch(errorHandle());
            
        }
    }
}
export const disableFavoriteButtonById=(id)=>{
    return{
        type:"DISABLE_BUTTON_BY_ID",
        payload:id

    }
}
export const enableFavoriteButton=(id)=>{
    return{
        type:"ENABLE_BUTTON_BY_ID",
        payload:id
    }
}

