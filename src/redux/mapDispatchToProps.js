import * as ACTIONS from './actionTypeStrings'

const mapDispatchToProps = (dispatch) => {
    return {
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
        }
    }
}

export default mapDispatchToProps