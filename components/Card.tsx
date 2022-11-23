import * as React from 'react';

const Card = () => (
  <div className="col">
    <div className="card shadow-sm">
      <img src="https://wallpaperaccess.com/full/2109.jpg" alt="" />

      <div className="card-body">
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-dark">
              Partager
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
