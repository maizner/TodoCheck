import React from "react";
import signature from './signature.svg';


function Footer(){
    return (
        <div className='w-full flex flex-row content-center justify-center py-6 px-8'>
            <a rel="noreferrer" target="_blank" href="https://maiaaizner.notion.site/Hola-Soy-Maia-f94d9bae762849e682e2e9a60c4fce69">
                <img src={signature} className="" alt="contact me" />
            </a>
        </div>
    );
}

export{Footer};