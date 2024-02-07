import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <>
        <header className='hero hero-image container-fluid'>

            <div className='row align-items-center text-sm-start text-lg-center text-primary'>

                <div className='w-75 mx-auto mb-4'>
                    <h1 className='display-3 my-4'>SUPER CBD</h1>
                    <p className='mb-4'>Experimenta una vida más relajada y equilibrada con nuestros aceites y gomitas.</p>
                    <NavLink to="/">
                        <Button className='col-12 col-md-6 col-lg-3 btn py-3 rounded-pill btn-secondary text-white fw-bold shadow-lg mb-4'>Ver Productos</Button>
                    </NavLink>
                </div>

            </div>

        </header>
    </>
  )
}

export default Hero