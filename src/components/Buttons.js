import React from "react";

import { useGlobalContext } from "../hooks/context";

const Buttons = () => {
  const { loading, pg, nbpages, handlePage } = useGlobalContext();
  console.log(nbpages);
  return (
    <div className="btn-container">
      <button disabled={loading} onClick={()=>handlePage('-')}>prev</button>
      <p>
        {pg + 1} of {nbpages}
      </p>
      <button disabled={loading} onClick={()=>handlePage('+')}>next</button>
    </div>
  );
};

export default Buttons;
