import Hero from "../components/Hero"
import Products from "../components/Products"

import { NavLink } from "react-router-dom"

const HomeView = () => {
    
    return (
        <>
            <Hero />

            <section className="container-fluid bg-primary text-white">
                <div className="row w-75 mx-auto py-5">
                    <h2 className="display-5">Sobre Nosotros</h2>
                    <div className="col-12">
                        <p className="m-0" style={{lineHeight: '2'}}>¡Hola! Soy Juan Jerez. Fui inspirado por mi propia experiencia al observar los beneficios del CBD en mi vida. Esta inspiración me llevó a fundar SUPER CBD con el objetivo de compartir los beneficios del CBD con el mundo.</p>
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
                        <NavLink 
                            to="/nosotros" 
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: 'instant'});
                            }}
                            className="col-12 col-md-6 col-lg-3 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mt-4"
                        >Ver Nosotros</NavLink>
                    </div>
                </div>
            </section>

            <Products />
        </>
    )
}

export default HomeView