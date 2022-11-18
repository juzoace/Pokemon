import axios from "axios";
const baseURL = 'https://pokeapi.co/api/v2/';

const getPokemon =() =>{
    return axios.get(`${baseURL}pokemon/${1}`).then((res)=>{
        if(res.status===200) return res
        else throw new Error('Invalid Request')
    })
}

export {baseURL,getPokemon}