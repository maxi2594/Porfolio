import React from 'react'

export const MenuOption = ({option, indice}) => {
    console.log(indice);
    return (
        
        <div className={`menu__option animate__animated animate__fadeInDown animate__delay-.${ indice }s`}>

            <span> { option } </span>        
            
        </div>
    )
}
