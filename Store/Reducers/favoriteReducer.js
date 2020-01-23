// Store/Reducers/favoriteReducer.js

const initialState = { Settings : '', /*Images : []*/ }

export function toggleSettings(state = initialState, action) {
  let nextState
  console.log("state  : ")
    console.log(this.state)
  switch (action.type) {
    case 'TOGGLE_SETTINGS':
    
        state.Settings = action.value
        
/*


    case 'TOGGLE_IMAGES':
            const indexI = state.Images.findIndex(item => item === action.value)
            if (indexI !== -1) {
              // Liimage est déjà dans les favoris, on la supprime de la liste
              nextState = {
                ...state,
                image: state.Images.filter( (item, index) => index !== indexI)
              }
            }
            else {
              // L'Image n'est pas dans les favorites , on l'ajoute à la liste
              nextState = {
                ...state,
                Images: [action.value]
              }
            }*/
          

      return nextState || state
  default:
    return state
  }
}
