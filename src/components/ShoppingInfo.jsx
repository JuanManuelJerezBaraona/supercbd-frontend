const ShoppingInfo = () => {
    return (
        <>
            <section className="container-fluid bg-primary text-white border-top">
                <div className="row w-75 mx-auto pb-5 align-items-center">
                    <div className="mt-5 col-md-4 text-center">
                        <img 
                            className="mb-2"
                            src="/mercado-pago.svg" 
                            alt="Logo de Mercado Pago" 
                            height="50"
                        />
                        <h2 className="fs-4">Pago Seguro</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>Con Mercado Pago, paga con tus tarjetas de débito y crédito.</p>
                    </div>

                    <div className="mt-5 col-md-4 text-center">
                        <img 
                            className="mb-2 bg-white rounded p-1"
                            src="/blue-express.svg" 
                            alt="Logo de Blue Express" 
                            height="50"
                        />
                        <h2 className="fs-4">Envío Seguro</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>Recibe en la puerta de tu casa en tan solo 24 a 96 Horas.</p>
                    </div>

                    <div className="mt-5 col-md-4 text-center">
                        <img 
                            className="mb-2"
                            src="/mercado-pago.svg" 
                            alt="" 
                            height="50"
                        />
                        <h2 className="fs-4">¿Qué es el CBD?</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>Con Mercado Pago, paga con tus tarjetas de débito y crédito.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingInfo