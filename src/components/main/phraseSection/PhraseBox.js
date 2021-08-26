import React, { useLayoutEffect } from 'react'
import { onViewport } from '../../../helpers/onViewport';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

export const PhraseBox = () => {
    
    const { height } = useWindowDimensions()

    useLayoutEffect(() => {
        const box = document.getElementsByClassName('PhraseBox')[0];
        document.addEventListener('scroll', ()=>{

            const int = setInterval(()=>{
                console.log(onViewport( box, height ));
            }, 1000)
            setTimeout(() => {
                clearInterval(int)
            }, 1000);
            


            return()=>{
                document.removeEventListener('scroll');
            }
        })
    }, [])

    
    return (
        <div className="container PhraseBox">
            <div className="PhraseBox__box">

                <p className="animate__animated animate__backInLeft">
                   
                   " Mollit est do ut laborum aliquip nulla dolor nostrud commodo. Officia nisi minim pariatur est ipsum dolore ea ut et pariatur ea velit magna nulla. "
                </p>

            </div>
        </div>
    )
}
