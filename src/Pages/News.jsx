import React from "react";
import Advert from '../components/Advert';
import AchieverCard from '../components/AchieverCard';
import { reunionSlides, memorialEntries, achievers } from '../data/newsData';
import { img } from '../utils/imagePath';

function News() {
  return (
    <div className="container page-container">

      {/* ——— FOUR COLUMN LAYOUT ——— */}
      <div className="row g-3">

        {/* ——— COL 1: News title + Reunion slideshow ——— */}
        <div className="col-12 col-md-4 d-flex flex-column gap-3">

          {/* News title / opening statement */}
          <div className="panel panel-feature">
            <h2 className="page-heading" style={{ borderBottom: 'none' }}>
              News
            </h2>
            <p className="panel-text fst-italic">
              Update on how we are faring — reunions, achievements,
              remembrance, and what is coming next.
            </p>
            <p className="panel-text">
              [ opening paragraph setting the tone for this
              year's news section. What has been a standout year for
              the group? ]
            </p>
            <p className="editor-note">
              [ awaiting opening statement ]
            </p>
          </div>

          {/* Reunion slideshow — by Patrick */}
          <div className="panel panel-warm flex-grow-1">

            <div
              id="reunionCarousel"
              className="carousel slide h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {reunionSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    {slide.type === 'intro' ? (

                      /* First slide — intro text */
                      <div
                        className="rounded p-3"
                        style={{
                          background: 'linear-gradient(135deg, #f0e8d8 0%, #faf3e4 100%)',
                          minHeight: '220px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <h5
                          className="panel-title text-center"
                          style={{ borderBottom: 'none' }}
                        >
                          {slide.title}
                        </h5>
                        <p className="panel-text text-center fst-italic">
                          {slide.text}
                        </p>
                        <p
                          className="text-center mb-0"
                          style={{
                            fontSize: '0.75rem',
                            color: '#8B6914',
                            fontStyle: 'italic',
                          }}
                        >
                          by Patrick
                        </p>
                      </div>

                    ) : slide.src ? (

                      /* Photo slide — real image */
                      <div style={{ position: 'relative' }}>
                        <img
                          src={slide.src}
                          alt={slide.caption}
                          className="d-block w-100 rounded"
                          style={{ height: '220px', objectFit: 'cover' }}
                          onError={e => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div
                          className="img-placeholder rounded"
                          style={{ display: 'none', height: '220px' }}
                        >
                          {slide.caption}
                        </div>
                        {slide.caption && (
                          <div
                            className="rounded-bottom"
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.6))',
                              color: 'white',
                              padding: '1.5rem 0.75rem 0.5rem',
                              fontSize: '0.8rem',
                            }}
                          >
                            {slide.caption}
                          </div>
                        )}
                      </div>

                    ) : (

                      /* Placeholder — no src yet */
                      <div
                        className="img-placeholder rounded"
                        style={{ height: '220px' }}
                      >
                        {slide.caption || '[ reunion photo ]'}
                      </div>

                    )}
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#reunionCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#reunionCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>

        </div>

        {/* ——— COL 2: Advert + Memorial + Advert ——— */}
        <div className="col-12 col-md-2 d-flex flex-column gap-3">

          <Advert 
            src="/images/news/bbbakery.mp4" 
            path="/images/news/bbbakery.mp4" 
            mediaType="video"
          />

          {/* Memorial */}
          <div className="panel flex-grow-1" style={{ background: '#f0ede8', border: '1px solid #c9b99a' }}>
            <h5
              className="panel-title"
              style={{ color: '#4a3728' }}
            >
              In Memoriam
            </h5>
            <p
              className="panel-text fst-italic"
              style={{ fontSize: '0.8rem', color: '#7a6652' }}
            >
              We remember those who have passed on — those dear to our members.
            </p>

            <ul className="list-unstyled">
              {memorialEntries.map(entry => (
                <li
                  key={entry.id}
                  className="mb-3 pb-3"
                  style={{ borderBottom: '1px dashed #c9b99a' }}
                >
                  <p
                    className="mb-0"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: '600',
                      color: '#4a3728',
                      fontSize: '0.9rem',
                    }}
                  >
                    {entry.name}
                  </p>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: '0.78rem',
                      color: '#7a6652',
                      fontStyle: 'italic',
                    }}
                  >
                    {entry.relation}
                  </p>
                  {entry.note && (
                    <p
                      className="mb-0 mt-1"
                      style={{ fontSize: '0.75rem', color: '#a89070' }}
                    >
                      {entry.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <p className="editor-note">
              [ add names and relations to memorialEntries in newsData.js ]
            </p>
          </div>

          {/* Advert bottom */}
          <Advert src="/images/news/sonnyad.jpg" path="/images/news/sonnyad.jpg" />
        </div>

        {/* ——— COL 3: Ian Update + Carol's book launch ——— */}
        <div className="col-12 col-md-3 d-flex flex-column gap-3">

          {/* Ian Update */}
          <div className="panel panel-light flex-grow-1">
            <h5 className="panel-title">Ian Update</h5>
            <p className="panel-text">
              [ Carol km: opening paragraph of Ian's update —
              what has Ian been up to this year? ]
            </p>
            <p className="panel-text">
              [ second paragraph. ]
            </p>
            <p className="panel-text">
              [ third paragraph. ]
            </p>
            <p className="panel-text">
              [ fourth paragraph. ]
            </p>
            <p className="editor-note">
              [ awaiting update on Ian from Carol km and the visiting team ]
            </p>
          </div>

          {/* Carol's book launch */}
          <div className="panel panel-warm">
            <h5 className="panel-title">📖 Coming Soon</h5>
            <p
              className="panel-text fst-italic"
              style={{ color: '#8B6914', fontSize: '0.9rem' }}
            >
              Carol's Upcoming Book Launch
            </p>
            <p
              className="panel-text"
              style={{ fontSize: '0.85rem' }}
            >
              [ Carol: a teaser — title, theme, or a short tantalising
              excerpt. No pressure! ]
            </p>
            <p className="editor-note">
              [ awaiting teaser from Carol, only if she is ready]
            </p>
          </div>

        </div>

        {/* ——— COL 4: High Achievers ——— */}
        <div className="col-12 col-md-3 d-flex flex-column gap-3">

          {/* Opening statement */}
          <div className="panel panel-feature">
            <h5 className="panel-title">Our High Achievers</h5>
            <p className="panel-text fst-italic">
              Celebrating the accomplishments of our classmates this year —
              those who have excelled and made us all proud.
            </p>
            <p className="editor-note">
              [ awaiting opening statement ]
            </p>
          </div>

          {/* Achiever cards */}
          {achievers.map(achiever => (
            <AchieverCard
                key={achiever.id}
                name={achiever.name}
                photo={achiever.photo}
                caption={achiever.caption}
            />
            ))}
        
          <p className="editor-note">
            [ add achiever photos and captions to newsData.js ]
          </p>

        </div>

      </div>
    </div>
  );
}

export default News;