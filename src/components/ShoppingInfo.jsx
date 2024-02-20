const ShoppingInfo = () => {
    return (
        <>
            <section className="container-fluid bg-primary text-white border-top">
                <div className="row mx-auto pb-5 align-items-center">
                    <div className="mt-5 col-md-4 text-center">
                        <h1 className="display-5"><i className="bi bi-credit-card-fill"></i></h1>
                        <h2 className="fs-4">Mercado Pago</h2>
                        <p className="m-0 w-75 mx-auto" style={{lineHeight: '2'}}>Con Mercado Pago, paga con tus tarjetas de débito y crédito.</p>
                    </div>

                    <div className="mt-5 col-md-4 text-center">
                        <h1 className="display-5"><i className="bi bi-box-fill"></i></h1>
                        <h2 className="fs-4">Blue Express</h2>
                        <p className="m-0 w-75 mx-auto" style={{lineHeight: '2'}}>¡Envíos a todo Chile! Recibe en tu casa en tan solo 24 a 96 Horas.</p>
                    </div>

                    <div className="mt-5 col-md-4 text-center">
                        <h1 className="display-5"><i className="bi bi-telephone-fill"></i></h1>
                        <h2 className="fs-4">Post Venta</h2>
                        <p className="m-0 w-75 mx-auto" style={{lineHeight: '2'}}>Nuestro compromiso contigo continúa después de tu compra.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShoppingInfo