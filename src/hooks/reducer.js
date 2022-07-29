import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state,action) => {
  switch (action.type) {
    case SET_LOADING:
   return {...state,loading:true}
   case SET_STORIES:
    console.log(action.payload.nbpages);
    return{...state,loading:false,hits:action.payload.hits,nbpages:action.payload.nbpages}
  case REMOVE_STORY:
    return{...state,hits:state.hits.filter(st=>st.objectID!==action.payload)}
  case HANDLE_SEARCH:
    return {...state,query:action.payload}
    case HANDLE_PAGE:
      if (action.payload === '+') {
        let nextPage = state.pg + 1
        if (nextPage > state.nbpages - 1) {
          nextPage = 0
        }
        return { ...state, pg: nextPage }
      }
      if (action.payload === '-') {
        let prevPage = state.pg - 1
        if (prevPage < 0) {
          prevPage = state.nbpages - 1
        }
        return { ...state, pg: prevPage }
      }break;
    default:
      throw new Error(`no matching ${action.type} action type`)
  }

}
export default reducer
