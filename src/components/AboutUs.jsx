const AboutUs = () => {
    return (
        <>
            <section className='about about-image container-fluid text-white border-top'>
                <div className='row w-75 mx-auto pb-5'>
                    <h2 className='display-5 pt-5'>SUPER CBD</h2>
                    <div className='col-12'>
                        <p className='m-0'>¡Bienvenido a SUPER CBD! Somos una empresa apasionada por el bienestar y la salud, dedicada a proporcionar productos con CBD de la más alta calidad para ayudar a nuestros clientes a alcanzar un equilibrio óptimo en su vida diaria.</p>
                    </div>

                    <h2 className="display-5 pt-5">Valores</h2>
                    <div className="col-12">
                        <p className="m-0">En SUPER CBD estamos comprometidos con la calidad, la transparencia y la sostenibilidad. Nuestros valores son la base de nuestra empresa y se reflejan en cada uno de nuestros productos y en la forma en la que nos relacionamos con nuestros clientes.</p>
                    </div>
                </div>
            </section>

            <section className="container-fluid bg-primary text-white">
                <div className="row w-75 mx-auto py-5">
                    <h2 className="display-5">Fundador</h2>
                    <div className="col-12">
                        <p className="m-0">¡Hola! Soy Juan Jerez. Fui inspirado por mi propia experiencia al observar los beneficios del CBD en mi vida. Esta inspiración me llevó a fundar SUPER CBD con el objetivo de compartir los beneficios del CBD con el mundo.</p>
                    </div>

                    <div className='col-12 d-flex flex-column align-items-center mt-5'>
                        <img 
                            className='img-fluid bg-white rounded-circle shadow-lg'
                            width="150"
                            height="150"
                            src="/juan-jerez.png" 
                            alt="Foto de Juan Jerez"
                        />
                        <h3 className='mt-4'>Juan Jerez</h3>
                        <p className="m-0">Ing. en Biotecnología</p>
                        <a href="https://www.linkedin.com/in/juan-manuel-jerez-baraona-b54486274/" target="_blank" className='col-12 col-md-6 col-lg-3 btn py-1 rounded-pill btn-secondary text-white fw-bold shadow-lg mt-4'><i className="bi bi-linkedin fs-5"></i> Linkedin</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs