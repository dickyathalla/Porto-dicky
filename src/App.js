import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary px-2 py-2 px-lg-5 py-lg-4">
            <div className="container-fluid">
              <a className="navbar-brand fw-bold" href="#">Dicky.dev</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link fw-bolder" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder" href="#portofolio">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bolder" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section id="hero">
            <div className="container position-relative my-5">
                <div className="row py-0 py-lg-5">
                    <div className="col-12 col-lg-6 order-1 order-lg-0 my-auto">
                        <h1 className="ff-poppins fw-bold">Software Engineer 👋🏻</h1>
                        <p>Hi, I'm Muhammad Dicky Athalla. A passionate Software Engineer based in Surabaya, Indonesia. 📍</p>
                        <a href="https://www.linkedin.com/in/dickyathalla/" className="text-black"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/dickyathalla" className="text-black ms-2"><i className="bi bi-github"></i></a>
                        <h5 className="mt-4">Tech stack   | <span><img src="assets/Group 111.png" className="ts" alt=""/></span></h5>
                    </div>
                    <div className="col-12 col-lg-5 offset-lg-1 order-0 order-lg-1 pb-3 pb-lg-0">
                        <img src="" className="hero-img" alt=""/>
                    </div>
                </div>
            </div>
          </section>

          <section id="about">
            <div className="container position-relative my-5">
                <div className="row my-5">
                    <div className="col-12 col-lg-6 my-auto mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start">
                        <img src="assets/img-side.webp" className="img-side" alt=""/>
                    </div>
                    <div className="col-12 col-lg-6 my-auto">
                        <p className="text-primary fw-bold m-0">ABOUT ME</p>
                        <h4 className="ff-poppins fw-bolder">A dedicated Software Engineer
                            based in Surabaya, Indonesia 📍</h4>
                        <p className="ff-mulish">As a budding Front-End Developer at the junior level, I bring a robust skill set encompassing HTML, CSS, JavaScript, ReactJS, Tailwind, and SCSS. My strength lies in creating and upkeeping responsive websites that provide a seamless user experience. I have profound knowledge in networking, server and data storage, IT infrastructure, and basic programming acquired during my studies. Additionally, I am a collaborative team member, thriving in partnerships with cross-functional teams to deliver exceptional web applications.</p>
                    </div>
                </div>
            </div>            
          </section>

          <section id="portofolio" className="ff-poppins bg-light">
            <div className="container-fluid position-relative py-5">
                <div className="row">
                    <p className="text-primary fw-bold">PORTOFOLIO</p>
                    <h5 className="fw-bolder mb-4">Each project is a unique piece of development 🧩</h5>
                        <div className="card mb-3 border-0 shadow p-4">
                            <div className="row g-0">
                              <div className="col-md-7">
                                <img src="assets/nanostack.png" className="img-fluid img-porto shadow" alt="..."/>
                              </div>
                              <div className="col-md-5 my-auto">
                                <div className="card-body ">
                                  <h4 className="card-title fw-bold">nanostack</h4>
                                  <p className="">A company profile website for software house based on Jombang, Indonesia.</p>
                                  <p className="fw-medium">React Js, Bootstrap, Vercel</p>
                                  <a href="https://www.nanostack.site/" target="__blank" className="btn btn-secondary d-block">visit 🔗</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card mb-3 border-0 shadow p-4">
                            <div className="row g-0">
                              <div className="col-md-5 order-1 order-lg-0 my-auto">
                                <div className="card-body ">
                                    <h4 className="card-title fw-bold">seaping.id</h4>
                                    <p className="">Seapin offers seamless cargo delivery solutions with integrated logistics and maritime transportation services, providing a range of options from Port to Port to Door to Door.</p>
                                    <p className="fw-medium">HTML, CSS, Bootstrap, Vercel</p>
                                    <a href="https://www.seaping.id/" target="__blank" className="btn btn-secondary d-block">visit 🔗</a>
                                  </div>
                              </div>
                              <div className="col-md-7 order-0 order-lg-1 d-flex justify-content-end">
                                <img src="assets/seaping.png" className="img-fluid img-porto shadow" alt="..."/>
                              </div>
                            </div>
                          </div>
                          <div className="card mb-3 border-0 shadow p-4">
                            <div className="row g-0">
                              <div className="col-md-7">
                                <img src="assets/bunda.png" className="img-fluid img-porto shadow" alt="..."/>
                              </div>
                              <div className="col-md-5 my-auto">
                                <div className="card-body ">
                                  <h4 className="card-title fw-bold">bunda bakery</h4>
                                  <p className="">Bunda Bakery is a bakery that specializes in crafting delicious and high-quality baked goods.</p>
                                  <p className="fw-medium">React Js, Bootstrap, Vercel</p>
                                  <a href="https://bunda-bakery.vercel.app/" target="__blank" className="btn btn-secondary d-block">visit 🔗</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                </div>
            </div>   
          </section>

          <section id="contact" className="ff-poppins">
            <div className="container position-relative py-5">
                <div className="row my-0 my-lg-5">
                    <p className="text-primary fw-bold">CONTACT</p>
                    <h4 className="fw-bold">Don't be shy! Hit me up! 👇</h4>
                    <div className="col-12 col-lg-3 mt-3">
                        <a href="https://www.google.com/maps/place/jombang/data=!4m2!3m1!1s0x2e786a948f359a31:0x3027a76e352bd20?sa=X&ved=2ahUKEwjVsaffueuCAxW8a2wGHR_qCYUQ8gF6BAgMEAA" target="__blank" className="text-decoration-none text-black">
                            <div className="row">
                                <div className="col-2 my-auto">
                                    <img src="assets/globe-asia-australia.svg" width="32" alt=""/>
                                </div>
                                <div className="col-10">
                                    <p className="m-0">location</p>
                                    <p className="fw-bolder m-0">Surabaya, Indonesia</p>
                                </div>
                            </div>                           
                        </a>
                    </div>
                    <div className="col-12 col-lg-3 offset-lg-1 mt-3">
                        <a href="mailto:someone@example.com" target="__blank" className="text-decoration-none text-black">
                            <div className="row">
                                <div className="col-2 my-auto">
                                    <img src="assets/globe-asia-australia.svg" width="32" alt=""/>
                                </div>
                                <div className="col-10">
                                    <p className="m-0">mail</p>
                                    <p className="fw-bolder m-0">dickyathallah@gmail.com</p>
                                </div>
                            </div>                           
                        </a>
                    </div>
                </div>
            </div>  
          </section>
          <footer id="footer" className="bg-dark text-light ff-poppins">
            <div className="container-fluid position-relative py-5">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <p className="fw-bolder">Copyright © 2023. All rights are reserved</p>
                    </div>
                    <div className="col-12 col-lg-4 offset-lg-1 text-start text-lg-end">
                        <a href="https://www.linkedin.com/in/dickyathalla/" className="text-light"><i className="bi bi-linkedin"></i></a>
                        <a href="https://github.com/dickyathalla" className="text-light ms-2"><i className="bi bi-github"></i></a>
                    </div>
                </div>
            </div>  
          </footer>
    </div>
  );
}

export default App;
