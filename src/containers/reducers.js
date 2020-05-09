import{
    FETCH_FAVORITE_DOGS,
    FETCH_ERRORS,
    REMOVE_FAVORITE_DOGS,
    ADD_FAVORITE_DOGS,
    DISABLE_BUTTON_BY_ID,
    LOADING_STARTS,
    ENABLE_BUTTON_BY_ID

}from "./types";
 const initalState={
     favorites:[],
     loadingFavorites:false,
     errorMessage:""
 }
 export const dogsReducer(state=initialstate,action) =>{
     switch(action.type){
         case LOADING_STARTS:
            return {...state, loadingFavorites: true}
        case "SET_FAVORITES":
            return {...state, favorites: action.payload, loadingFavorites: false}
    }
}


const getFavorites = () => {
  return (dispatch, getState) => {
      dispatch(favoritesLoading());
      axios.get("/favorites").then((favorites) => {

          dispatch(favoritesSuccess(favorites))
      }).catch((err) => {

          dispatch(favoritesSuccess(getState().favorites))
      })
  }
};

const favoritesLoading = () => {
    return {type: "LOAD_FAVORITES"}
};

const favoritesSuccess = (favorites) => {
    return {type: "SET_FAVORITES", payload: favorites}
};
export const dogsReducer(state=initalState,action)=>{
    switch(action.type){
        case LOADING_STARTS:
            return{...state,loadingFavorites:true}
        case FETCH_FAVORITE_DOGS:
            return{...state,favorites:action.payload,loadingFavorites:false}
        case REMOVE_FAVORITE_DOGS:
            return{...state,favorites:state.favorites.filter((dog)=>dog.dogId!==action.payload),disableButtonById:false}
        case ADD_FAVORITE_DOGS:
            return{...state,favorites:[...state,favorites,action.payload]}
        case DISABLE_BUTTON_BY_ID:
            return{...state,disableButtonById:action.payload}
        case FETCH_ERRORS:
            return{...state,loadingFavorites:false,errorMessage:action.payload,disableButtonById:false}
        case ENABLE_BUTTON_BY_ID:
            return{...state,enableButtonById:action.payload}
        default:
            reutrn:state;

    
}}