import React from "react";
import avatar1x from './avatar@1x.png';
import avatar2x from './avatar@2x.png';
import avatar3x from './avatar@3x.png';



function Avatar (){
    return (

        <img 
            src={avatar1x} 
            srcSet={`${avatar1x} 1x, ${avatar2x} 2x, ${avatar3x} 3x`} 
            sizes="(max-width: 600px) 100vw, 50vw"
            className="" alt="Maia Aizner" 
        />
        
    );
}

export{ Avatar };