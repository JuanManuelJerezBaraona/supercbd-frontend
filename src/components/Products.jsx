const Products = () => {
    return (
        <>
            <main className='container-fluid bg-primary text-white'>
                <h2 className='display-5 text-center pt-5'>Productos</h2>
                <p className='text-center'>Conoce nuestra variedad de productos con CBD</p>
                <div className='row text-center py-5'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <img src='/100mg.jpeg' alt='Product' className='img-fluid rounded-circle' width={300} />
                        <h5 className='my-3'>Aceite 100 mg de CBD (30 mL)</h5>
                        <p className="fs-5">$19.990</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <img src='/300mg.jpeg' alt='Product' className='img-fluid rounded-circle' width={300} />
                        <h5 className='my-3'>Aceite 300 mg de CBD (30 mL)</h5>
                        <p className="fs-5">$28.990</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <img src='/600mg.jpeg' alt='Product' className='img-fluid rounded-circle' width={300} />
                        <h5 className='my-3'>Aceite 600 mg de CBD (30 mL)</h5>
                        <p className="fs-5">$39.990</p>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <img src='/450mg.jpeg' alt='Product' className='img-fluid rounded-circle' width={300} />
                        <h5 className='my-3'>Gomitas 450 mg de CBD (60 gomitas)</h5>
                        <p className="fs-5">$42.990</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Products