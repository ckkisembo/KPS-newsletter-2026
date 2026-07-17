import React from "react";

import AwardCard from '../components/AwardCard';
import { featuredAwards, slideshowAwards } from '../data/awards';
import { img } from '../utils/imagePath';



function Awards() {
  return (
    <div className="container page-container">

      {/* ——— ROW 1: Title + Award + Advert ——— */}
      <div className="row g-3 mb-3">

        {/* Title / Opening paragraph — wide */}
        <div className="col-12 col-md-5">
          <div className="panel panel-feature h-100">
            <h2 className="page-heading" style={{ borderBottom: 'none' }}>
              Awards by Liz
            </h2>
            <p className="panel-text fst-italic">
              Not your typical awards, and Liz makes sure that we all get an award!
            </p>
            <p className="panel-text">
              [ Liz: opening paragraph on the awards — the spirit
              behind them, how recipients were chosen, and what they
              mean to the group. ]
            </p>
            <p className="editor-note">
              [ awaiting opening statement from Liz ]
            </p>
          </div>
        </div>

        {/* Featured Award 1 — portrait */}
        <div className="col-12 col-md-4">
          <AwardCard award={featuredAwards[0]} orientation="portrait" />
        </div>

        {/* Advert */}
        <div className="col-12 col-md-3">
          <div className="panel panel-warm h-100">
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8B6914',
              }}
            >
              Ad for Alumni Businesses
            </p>
            <img
              src={img("/images/awards/norahad.jpeg")}
              alt="Advertisement"
              className="img-fluid rounded"
              style={{ width: '100%', objectFit: 'cover' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="img-placeholder rounded"
              style={{ display: 'none', height: '150px' }}
            >
              [ Advert image ]
            </div>
            <p className="editor-note text-center mt-1">
              [ add advert to /images/awards/norahad.jpeg ]
            </p>
          </div>
        </div>

      </div>

      {/* ——— ROW 2: Award | Slideshow | Advert + Award ——— */}
      <div className="row g-3 mb-3">

        {/* Featured Award 2 — portrait, left */}
        <div className="col-12 col-md-2 d-flex flex-column gap-3">
          <div className="flex-grow-1">
            <AwardCard award={featuredAwards[1]} orientation="portrait" />
          </div>

          {/* Advert below award in left column */}
          <div className="panel panel-warm">
            <p
              className="mb-2"
              style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8B6914',
              }}
            >
              Ad for Alumni Businesses
            </p>
            <img
              src={img("/images/awards/wendyad.jpg")}
              alt="Advertisement"
              className="img-fluid rounded"
              style={{ width: '100%', objectFit: 'cover' }}
              onError={e => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="img-placeholder rounded"
              style={{ display: 'none', height: '100px' }}
            >
              [ Advert image ]
            </div>
          </div>
        </div>

        {/* Award Slideshow — large centre block */}
        <div className="col-12 col-md-7">
          <div className="panel panel-light h-100">
            <h5 className="panel-title text-center">The Awards spill over show</h5>

            <div
              id="awardsCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div className="carousel-inner">
                {slideshowAwards.map((award, index) => (
                  <div
                    key={award.id}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    {/* Each slide is an AwardCard */}
                    <div className="px-4 py-2">
                      <AwardCard award={award} orientation="landscape" />
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#awardsCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  style={{ filter: 'invert(1)' }}
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#awardsCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  style={{ filter: 'invert(1)' }}
                ></span>
              </button>

            </div>

            <p className="editor-note text-center mt-3">
              [ add remaining awards to slideshowAwards in awards.js ]
            </p>
          </div>
        </div>

        {/* Right column — Award top + Award bottom */}
        <div className="col-12 col-md-3 d-flex flex-column gap-3">
          <div className="flex-grow-1">
            <AwardCard award={featuredAwards[2]} orientation="portrait" />
          </div>
          <div className="flex-grow-1">
            <AwardCard award={featuredAwards[3]} orientation="landscape" />
          </div>
        </div>

      </div>

      {/* ——— ROW 3: Three landscape award cards across the bottom ——— */}
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <AwardCard award={featuredAwards[4]} orientation="landscape" />
        </div>
        <div className="col-12 col-md-4">
          <AwardCard award={featuredAwards[5]} orientation="landscape" />
        </div>
        <div className="col-12 col-md-4">
          <AwardCard award={featuredAwards[6]} orientation="landscape" />
        </div>
      </div>

    </div>
  );
}

export default Awards;