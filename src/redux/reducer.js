import * as ACTIONS from './actionTypeStrings'

const initState = {
    warenkorb: [],
    formular: {
        hauptkategorie: "-1",
        unterkategorie: "-1"
    },
    artikel: [],
    maincats: [],
    subcats: [],
    users: [],
    detailauswahl: null
}

const reducer = (state = initState, action) => {

    switch(action.type) {

      /********************
       * ARTIKEL LADEN
       ********************/
      // action.payload = Artikel-Array
      case ACTIONS.LOAD_ARTICLES:
        return {
          ...state,
          artikel: action.payload
        }

      /********************
       * MAINCATS LADEN
       ********************/
      // action.payload = maincats-Array
      case ACTIONS.LOAD_MAINCATS:
        return {
          ...state,
          maincats: action.payload
        }

      /********************
       * SUBCATS LADEN
       ********************/
      // action.payload = subcats-Array
      case ACTIONS.LOAD_SUBCATS:
        return {
          ...state,
          subcats: action.payload
        }

      /********************
       * USER LADEN
       ********************/
      // action.payload = users-Array
      case ACTIONS.LOAD_USERS:
        return {
          ...state,
          users: action.payload
        }

      // action.payload = Formular-Objekt
      case ACTIONS.LOAD_CATEGORY:
        return {
          ...state,
          formular: action.payload
        }

      // action.payload = Event-Objekt
      case ACTIONS.CHANGE_CATEGORY:
        if (action.payload.target.name === "hauptkategorie") {
          // neuer Value der Hauptkategorie
          return {
            ...state,
            formular: {
              [action.payload.target.name]: action.payload.target.value,
              unterkategorie: "-1"
            }
          }
        } else {
          // neuer Value der Unterkategorie
          return {
            ...state,
            formular: {
              ...state.formular,
              [action.payload.target.name]: action.payload.target.value
            }
          }
        }

      // action.payload = Warenkorb-Array
      case ACTIONS.LOAD_CART:
        return {
          ...state,
          warenkorb: action.payload
        }

      // action.payload = Produkt (Objekt)
      case ACTIONS.ADD_TO_CART:
        return {
          ...state,
          warenkorb: [...state.warenkorb, action.payload]    
        }
      
      // action.payload = Index
      case ACTIONS.REMOVE_FROM_CART:
        const NEUES_ARRAY = state.warenkorb.filter((value, index) => {
          return action.payload != index
        })
        return {
          ...state,
          warenkorb: NEUES_ARRAY
        }
      
      case ACTIONS.SET_DETAILS:
        return {
          ...state,
          detailauswahl: action.payload
        }

      default:
        return state
    }
}

export default reducer