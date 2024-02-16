import Hero from "../components/Hero"
import Products from "../components/Products"

import { NavLink } from "react-router-dom"

const HomeView = () => {
    
    return (
        <>
            <Hero />

            <section className="container-fluid bg-primary text-white border-bottom">
                <div className="row w-75 mx-auto py-5 align-items-center">
                    <div className="col-12 col-md-6">
                        <h2 className="display-5">Sobre Nosotros</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>¡Hola! Soy Juan Jerez. Fui inspirado por mi propia experiencia al observar los beneficios del CBD en mi vida. Esta inspiración me llevó a fundar SUPER CBD con el objetivo de compartir los beneficios del CBD con el mundo.</p>
                        <NavLink 
                            to="/nosotros" 
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: 'instant'});
                            }}
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mt-4"
                        >Ver Nosotros</NavLink>
                    </div>

                    <div className='col-12 col-md-6 d-flex flex-column align-items-center mt-5 mt-md-0'>
                        <img 
                            className='img-fluid bg-white rounded-circle shadow-lg'
                            width="150"
                            height="150"
                            src="/juan-jerez.png" 
                            alt="Foto de Juan Jerez"
                        />
                        <h3 className='mt-4'>Juan Jerez</h3>
                        <p className="m-0">Ing. en Biotecnología</p>
                    </div>
                </div>
            </section>

            <section className="container-fluid bg-primary text-white">
                <div className="row w-75 mx-auto py-5 align-items-center">
                    <div className="col-12 col-md-6">
                        <img 
                            className="d-inline d-sm-none img-fluid rounded shadow-lg" 
                            src="/cbd.png"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                        <img 
                            className="d-none d-sm-inline img-fluid rounded shadow-lg" 
                            src="/cbd.png" 
                            width="350"
                            height="350"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mt-5 mt-md-0">¿Qué es el CBD?</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>El Cannabidiol (CBD) es uno de los cannabinoides medicinales que se encuentran en las plantas de cáñamo. El CBD a diferencia del THC, no es adictivo, psicotrópico, ni psicoactivo, o sea que "no te vuela". El CBD es el cannabinoide más estudiado por la ciencia, debido a sus grandes beneficios para la salud mental y física.</p>
                        <NavLink 
                            to="/preguntas" 
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: 'instant'});
                            }}
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mt-4"
                        >Ver Preguntas</NavLink>
                    </div>
                </div>
            </section>

            <Products />
        </>
    )
}

export default HomeView