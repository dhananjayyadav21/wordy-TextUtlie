import React from "react";


function Alerts(prpos) {
 
  //Convert first word Capitle
  const Capitlize = (word)=>{
    let lower = word.toLowerCase();
    let first = lower.charAt(0).toUpperCase();
    let last = lower.slice(1);
    return first+last;
  }

  return  (
    <div className="container my-3" style={{height : '50px'}}>
    {prpos.alert && <div className={`container alert alert-${prpos.alert?.type} alert-dismissible fade show`} style={{padding: '8px'}}  role="alert">
        <strong>{Capitlize(prpos.alert?.type)}</strong>: {prpos.alert?.message} !!
      </div>}
    </div>
  );
}

export default Alerts;
