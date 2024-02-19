import { NavLink } from "react-router-dom"

const AboutCBDInfoHome = () => {
    return (
        <>
            <section className="container-fluid bg-primary text-white">
                <div className="flex-row-reverse row w-75 mx-auto py-5 align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img 
                            className="d-inline d-sm-none img-fluid rounded-circle" 
                            src="/logo.png"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                        <img 
                            className="d-none d-sm-inline img-fluid rounded-circle" 
                            src="/logo.png" 
                            width="250"
                            height="250"
                            alt="Imagen de un científico mirando por un microscopio el CBD" 
                        />
                    </div>

                    <div className="col-12 col-md-6">
                        <h2 className="display-5 mt-4 mt-md-0">Nosotros</h2>
                        <p className="m-0" style={{lineHeight: '2'}}>¡Bienvenido a SUPER CBD! Somos una empresa apasionada por el bienestar y la salud, dedicada a proporcionar productos con CBD de la más alta calidad para ayudar a nuestros clientes a alcanzar un equilibrio óptimo en su vida diaria.</p>
                        <NavLink 
                            to="/nosotros" 
                            onClick={() => {
                                window.scrollTo({top: 0, behavior: 'instant'});
                            }}
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-primary fw-bold shadow-lg mt-4"
                        >Ver Nosotros</NavLink>
                    </div>
                </div>
            </section>

            <section className="container-fluid bg-primary text-white">
                <div className="row w-75 mx-auto py-5 align-items-center border-top">
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
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-primary fw-bold shadow-lg mt-4"
                        >Ver Preguntas</NavLink>
                    </div>
                </div>
            </section>

            <section className="container-fluid bg-primary text-white">
                <div className="flex-row-reverse row w-75 mx-auto py-5 align-items-center  border-top">
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
                            className="col-12 col-lg-6 btn py-3 rounded-pill btn-secondary text-primary fw-bold shadow-lg mt-4"
                        >Ver Blog (Pronto)</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCBDInfoHome