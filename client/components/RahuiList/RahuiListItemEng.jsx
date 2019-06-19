import React, { Component } from 'react';




const RahuiListItemEng= props => {
 const rahui = props.rahui
 
 let handleclick=()=>{
    window.location = `#/rahui/${rahui.id}`; 
    }

    return ( 
        <div className="rahuilist" onClick={handleclick}>
            <h3 className="rahuiDescription">{rahui.description}</h3>
            <p>Issued by {rahui.iwi} on {rahui.date_placed}</p>         
        </div>
    );
    
}
 
export default RahuiListItemEng;