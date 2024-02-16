import Hero from "../components/Hero"
import Products from "../components/Products"

import { NavLink } from "react-router-dom"

const HomeView = () => {
    
    return (
        <>
            <Hero />

            <section className="container-fluid bg-primary text-white">
                <div className="flex-row-reverse row w-75 mx-auto py-5 align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img 
                            className="d-inline d-sm-none img-fluid bg-light rounded-circle shadow-lg" 
                            src="/juan-jerez.png"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                        <img 
                            className="d-none d-sm-inline img-fluid bg-light rounded-circle shadow-lg" 
                            src="/juan-jerez.png" 
                            width="250"
                            height="250"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mt-5 mt-md-0">Fundador</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>¡Hola! Soy Juan Jerez. Fui inspirado por mi propia experiencia al observar los beneficios del CBD en mi vida. Esta inspiración me llevó a fundar SUPER CBD con el objetivo de compartir los beneficios del CBD con el mundo.</p>
                        <NavLink 
                            to="/nosotros" 
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: 'instant'});
                            }}
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mt-4"
                        >Ver Nosotros</NavLink>
                    </div>
                </div>
            </section>

            <section className="container-fluid bg-primary text-white border-top">
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
                        <p className="m-0" style={{lineHeight: '2'}}>El Cannabidiol (CBD) es uno de los cannabinoides medicinales que se encuentran en las plantas de cáñamo. El CBD a diferencia del THC, no es adictivo, psicotrópico, ni psicoactivo, o sea que "no te vuela". El CBD es el cannabinoide más estudiado por la ciencia, debido a sus grandes beneficios para la salud física y mental.</p>
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

            <section className="container-fluid bg-primary text-white border-top">
                <div className="flex-row-reverse row w-75 mx-auto py-5 align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img 
                            className="d-inline d-sm-none img-fluid rounded shadow-lg" 
                            src="/cbd-model.png"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                        <img 
                            className="d-none d-sm-inline img-fluid rounded shadow-lg" 
                            src="/cbd-model.png" 
                            width="350"
                            height="350"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mt-5 mt-md-0">Beneficios del CBD</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>El CBD alivia la ansiedad, reduce el dolor, mejora el sueño y ofrece propiedades antiinflamatorias y neuroprotectoras, beneficiando a quienes buscan tratamientos naturales para diversas condiciones de salud.</p>
                        <NavLink 
                            to="/preguntas" 
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: 'instant'});
                            }}
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mt-4"
                        >Ver Blog</NavLink>
                    </div>
                </div>
            </section>

            <Products />
        </>
    )
}

export default HomeView