import * as React from 'react';

const Header = () => {
  return (
    <section id="home">
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="text-success">Web Developer</h3>
            <h1 className="display-1 fw-bold">VAIKEHU Tehiva 24 ans</h1>
            <div className="buttons mt-4 my-4">
              <button className="btn btn-outline-success px-4 py-2">
                Embauche moi
              </button>
              <a
                className="btn btn-success text-white px-4 py-2"
                target="_blank"
                href="https://vaikehu.github.io/TV.blog/"
              >
                A propos de moi
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div
              id="myCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://picsum.photos/id/237/1000/1300.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/id/238/1000/1300.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://picsum.photos/id/239/1000/1300.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    height="600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
