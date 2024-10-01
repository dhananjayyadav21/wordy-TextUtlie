import React from "react";


function Alerts(prpos) {
 
  //Convert first word Capitle
  const Capitlize = (word)=>{
    let lower = word.toLowerCase();
    let first = lower.charAt(0).toUpperCase();
    let last = lower.slice(1);
    return first+last;
  }

  return prpos.alert && (
    <div>
     <div className={`container my-3 alert alert-${prpos.alert?.type} alert-dismissible fade show`}  role="alert">
        <strong>{Capitlize(prpos.alert?.type)}</strong>: {prpos.alert?.message} !!
        <button type="button" className="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button>
      </div>
    </div>
  );
}

export default Alerts;
