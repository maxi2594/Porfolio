import React from 'react'

export const Hero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero__cover">
                    <div className="hero__container">

                        <div className="hero__cover-frase">
                            
                            <h1 className="animate__animated animate__backInUp"> 
                                I M VEGA MAXIMILIANO
                            </h1>
                            <h1 className="animate__animated animate__backInUp">
                                I M A DEVELOPER 
                            </h1>

                        </div>

                        <button 
                            className="btn hero__btn animate__animated animate__backInUp">
                            Start Porfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
