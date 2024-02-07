import React from 'react'

const FAQ = () => {
    return (
        <>
            <section className='container-fluid bg-primary text-white'>
                <div className='row w-75 mx-auto pb-5'>
                    <h2 className='display-5 pt-5'>Preguntas Frecuentes</h2>
                    <div className='col-12'>
                        <h5 className='my-3 fw-bold'>¿Qué es el CBD?</h5>
                        <p>El CBD es un cannabinoide no psicoactivo que se encuentra en la planta de cannabis. Se ha demostrado que el CBD tiene efectos relajantes y antiinflamatorios.</p>
                    </div>
                    <div className='col-12'>
                        <h5 className='my-3 fw-bold'>¿El CBD es legal?</h5>
                        <p>Sí, el CBD es legal en Chile. Nuestros productos contienen menos del 0,2% de THC, el cual es el compuesto psicoactivo del cannabis.</p>
                    </div>
                    <div className='col-12'>
                        <h5 className='my-3 fw-bold'>¿El CBD es seguro?</h5>
                        <p>Sí, el CBD es seguro. No es tóxico y no tiene efectos secundarios graves. Sin embargo, siempre es recomendable consultar con un médico antes de consumir CBD.</p>
                    </div>
                    <div className='col-12'>
                        <h5 className='my-3 fw-bold'>¿El CBD es adictivo?</h5>
                        <p>No, el CBD no es adictivo. De hecho, se ha demostrado que el CBD puede ayudar a las personas a superar adicciones a otras sustancias.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ