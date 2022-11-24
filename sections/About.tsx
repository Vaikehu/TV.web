import * as React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h1 className="fw-bold text-center">En savoir plus</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 img-profil overflow-hidden">
            <img
              src="https://picsum.photos/seed/picsum/1000/1300"
              className="img-fluid"
              alt=""
              height="500px"
            />
          </div>
          <div className="col-md-8">
            <h1 className="fw-bold mt-4">TEHIVA Vaikehu</h1>
            <h3 className="text-primary my-4">Web Developer</h3>
            <p className="lead mb-4">
              Passionné par la réalisation et le développement de projets web,
              je me suis tout naturellement tourné vers une carrière de
              développeur web. Aujourd'hui je souhaite intégrer une entreprise
              dynamique et jeune, aussi je serai ravi de rejoindre votre équipe
              en tant que développeur web.
            </p>
            <div className="buttons">
              <button>
                <a
                  class="btn btn-primary text-white px-4 py-2"
                  target="_blank"
                  href="https://vaikehu.github.io/C.Vjs-vpik9b/"
                >
                  Telecharger CV
                </a>
              </button>
              <button className="btn btn-outline-primary text-darck px-4 py-2">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
