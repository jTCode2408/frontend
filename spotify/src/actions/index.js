//actions for fetching songs for BrowsePage

import axios from 'axios';

export const FETCHING_SONGS_START ='FETCHING_SONGS_START';
export const FETCHING_SONGS_SUCCESS= 'FETCHING_SONGS_SUCCESS';
export const FETCHING_SONGS_FAILURE = 'FETCHING_SONGS_FAILURE';
export const FILTER_SONGS ='FILTER_SONGS';
export const fetchSongs =()=>dispatch=>{
    dispatch({type:FETCHING_SONGS_START})
    axios
    .get("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=US")
    .then(res=>{
        console.log('FETCHSONGS',res)
        dispatch({type:FETCHING_SONGS_SUCCESS, payload:res.data})
    })
    .catch(err=>{
        console.log(err)
        dispatch({type:FETCHING_SONGS_FAILURE,payload:err})
    })
};


export const filterSongs = array => {
    return {type:FILTER_SONGS, payload: array}
}