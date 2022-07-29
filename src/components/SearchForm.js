import React from 'react'
import { useGlobalContext } from '../hooks/context'

const SearchForm = () => {
  const {query,handleSearch}=useGlobalContext();
  return <form onSubmit={(e)=>e.preventdefault()} className="search-form">
  
    
    <h2> <span ><svg className='news-icon' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="48" height="48"
viewBox="0 0 48 48"
><path fill="#6be3a2" d="M36,12v5h1v25c0,0.55-0.45,1-1,1H11c-2.76,0-5-2.24-5-5V10c0-2.76,2.24-5,5-5h21c2.76,0,5,2.24,5,5v2	H36z"></path><path fill="#6be3a2" d="M43,22v1h-1v16c0,1.66-1.34,3-3,3v1H17c-2.76,0-5-2.24-5-5V22c0-2.76,2.24-5,5-5h21	C40.76,17,43,19.24,43,22z"></path><path fill="#324561" d="M29,22H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h17c0.553,0,1,0.448,1,1S29.553,22,29,22z"></path><path fill="#324561" d="M29,16H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h17c0.553,0,1,0.448,1,1S29.553,16,29,16z"></path><path fill="#324561" d="M29,35h-5c-0.553,0-1-0.448-1-1s0.447-1,1-1h5c0.553,0,1,0.448,1,1S29.553,35,29,35z"></path><path fill="#324561" d="M29,29h-5c-0.553,0-1-0.448-1-1s0.447-1,1-1h5c0.553,0,1,0.448,1,1S29.553,29,29,29z"></path><path fill="#324561" d="M18,36h-5c-1.103,0-2-0.961-2-2.143v-5.714C11,26.961,11.897,26,13,26h5c1.103,0,2,0.961,2,2.143	v5.714C20,35.039,19.103,36,18,36z M13.009,28C13.034,28.004,13,28.054,13,28.143v5.714c0,0.098,0.041,0.148,0.052,0.156L17.991,34	C17.966,33.996,18,33.946,18,33.857v-5.714c0-0.098-0.041-0.148-0.052-0.156L13.009,28z"></path><path fill="#324561" d="M39,43c-2.206,0-4-1.794-4-4V12c0-0.552,0.447-1,1-1s1,0.448,1,1v27c0,1.103,0.897,2,2,2s2-0.897,2-2	V23c0-0.552,0.447-1,1-1s1,0.448,1,1v16C43,41.206,41.206,43,39,43z"></path></svg></span> Hacker NewsPad</h2>
    <input type='text' className='form-input' value={query} onChange={(e)=>handleSearch(e.target.value)} ></input>
  </form>
}

export default SearchForm
