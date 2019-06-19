import React, { Component } from 'react';




const RahuiListItemReo= props => {
 const rahui = props.rahui
 
 let handleclick=()=>{
    window.location = `#/rahui/${rahui.id}`; 
    }

    return ( 
        <div className="rahuilist" onClick={handleclick}>
            <h3 className="rahuiDescription">{rahui.description}</h3>
            <p>I Whakaputaina e {rahui.iwi} i te {rahui.date_placed}</p>  
        </div>
    );
    
}
 
export default RahuiListItemReo;