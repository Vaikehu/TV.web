import * as React from 'react';
import Card from '../components/Card';

const Blog = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <body>
        <header>
          <div className="bg-dark collapse" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">Mon super blog </h4>
                  <p className="text-muted">
                    Add some information about the album below, the author, or
                    any other background context. Make it a few sentences long
                    so folks can pick up some informative tidbits. Then, link
                    them off to some social networking sites or contact
                    information.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Contact</h4>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-white">
                        Follow on Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Like on Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Email me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="/" className="navbar-brand d-flex align-items-center">
                <strong>Accueil</strong>
              </a>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Description de mon blog</h1>
                <p className="lead text-muted">
                  Something short and leading about the collection belowâ€”its
                  contents, the creator, etc. Make it short and sweet, but not
                  too short so folks donâ€™t simply skip over it entirely.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2 me-2">
                    Me contacter
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Visiter mon Linkedin
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {data.slice(0, 6).map(() => (
                  <Card />
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="text-muted py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">
              Album example is Â© Bootstrap, but please download and customize
              it for yourself!
            </p>
            <p className="mb-0">
              New to Bootstrap? <a href="/">Visit the homepage</a> or read our{' '}
              <a href="/docs/5.0/getting-started/introduction/">
                getting started guide
              </a>
            </p>
          </div>
        </footer>

        <script
          src="/docs/5.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </body>
    </div>
  );
};

export default Blog;
