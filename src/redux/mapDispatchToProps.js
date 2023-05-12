import * as ACTIONS from './actionTypeStrings'
import axios from 'axios'
import { BASE_URL } from '../assets/baseURL.js'

const mapDispatchToProps = (dispatch) => {
    
    return {
        ladeArtikel: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/artikel`)
                    .then((res) => {
                        dispatch({
                            type: ACTIONS.LOAD_ARTICLES,
                            payload: res.data
                        })
                    })
            })
        },
        ladeMaincats: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/maincats`)
                    .then((res) => {
                        dispatch({
                            type: ACTIONS.LOAD_MAINCATS,
                            payload: res.data
                        })
                    })
            })
        },
        ladeSubcats: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/subcats`)
                    .then((res) => {
                        dispatch({
                            type: ACTIONS.LOAD_SUBCATS,
                            payload: res.data
                        })
                    })
            })
        },
        ladeUser: () => {
            dispatch(() => {
                axios.get(`${BASE_URL}/users`)
                    .then((res) => {
                        dispatch({
                            type: ACTIONS.LOAD_USERS,
                            payload: res.data
                        })
                    })
            })
        },
        ladeKategorien: (formular) => {
            dispatch({
                type: ACTIONS.LOAD_CATEGORY,
                payload: formular
            })
        },
        aendereKategorie: (event) => {
            dispatch({
                type: ACTIONS.CHANGE_CATEGORY,
                payload: event
            })
        },
        ladeWarenkorb: (warenkorb) => {
            dispatch({
                type: ACTIONS.LOAD_CART,
                payload: warenkorb
            })
        },
        hinzufuegenZumWarenkorb: (produkt) => {
            dispatch({
                type: ACTIONS.ADD_TO_CART,
                payload: produkt
            })
        },
        entfernenVomWarenkorb: (index) => {
            dispatch({
                type: ACTIONS.REMOVE_FROM_CART,
                payload: index
            })
        },
        produktAuswaehlen: (produkt) => {
            dispatch({
                type: ACTIONS.SET_DETAILS,
                payload: produkt
            })
        }
    }
}

export default mapDispatchToProps