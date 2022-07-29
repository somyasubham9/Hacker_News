import React, { useContext, useEffect, useReducer } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "../hooks/reducer";

const url = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  loading: true,
  query: "Django",
  hits: [],
  pg: 0,
  nbpages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbpages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStories(`${url}query=${state.query}&page=${state.pg}`);
  }, [state.query, state.pg]);
  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };
  const handlePage=(val)=>{
    dispatch({type:HANDLE_PAGE,payload:val})
  }
  return (
    <AppContext.Provider value={{ ...state, removeStory,handlePage, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
