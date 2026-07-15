import React from "react";
import Advert from '../components/Advert';

function SpinOffs() {
  return (
    <div className="container page-container">

      {/* Page heading */}
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="page-heading">SpinOffs</h2>
          <p className="page-subheading">
            What we have been up to in the subgroups — Tours & Travel, business
            networks, the ladies group and our book club, Next Chapter.
          </p>
        </div>
      </div>

      {/* ——— FOUR COLUMN LAYOUT ——— */}
      <div className="row g-3">

        {/* ——— COL 1: Heading/Opening + Next Chapter ——— */}
        <div className="col-12 col-md-3 d-flex flex-column gap-3">

          {/* Opening paragraph */}
          <div className="panel panel-light">
            <h5 className="panel-title">SpinOffs</h5>
            <p className="panel-text">
              [ opening paragraph introducing this section —
              what are the spinoffs, their relevance to the group or lack thereof, 
              and what readers will find here. ]
            </p>
          </div>

          {/* Next Chapter — standalone article */}
          <div className="panel panel-warm flex-grow-1">
            <h5 className="panel-title">Next Chapter (Pseudo Book Club)</h5>
            <p
              className="panel-text fst-italic"
              style={{ fontSize: '0.8rem' }}
            >
              [ by Titus / Liz ]
            </p>
            <p className="panel-text">
              [ The books we have read/ planned to read, and the takeaway ]
            </p>
            <p className="panel-text">
              [ Martha: quizzes ]
            </p>
            <p className="panel-text">
              [ Lilian: social media break ]
            </p>
            <p className="panel-text">
              [ Charles: Calvin ]
            </p>
            <p className="editor-note">
              [ other contributions by Brian / Stephen / Ismail ]
            </p>
          </div>

        </div>

        {/* ——— COL 2: Alumni Tours & Travel + Advert ——— */}
        <div className="col-12 col-md-3 d-flex flex-column gap-3">

          {/* Alumni Tours & Travel*/}
          <div className="panel panel-light flex-grow-1">
            <h5 className="panel-title">Alumni Tours & Travel</h5>
            <p
              className="panel-text fst-italic"
              style={{ fontSize: '0.8rem' }}
            >
                Focus on Alumni's Global footprint
                by Derek/Lilian
            </p>
            <p className="panel-text">
              [ opening paragraph on the Alumni Global Presence ]
            </p>
            <p className="panel-text">
              [ second paragraph — where they are and their interactions ]
            </p>
            <p className="panel-text">
              [ third paragraph — how members can get involved
              or find out more. ]
            </p>
            <p className="panel-text">
              [ fourth paragraph. ]
            </p>
            <p className="editor-note">
              [ awaiting input from Derek and Lilian ]
            </p>
          </div>

          {/* Advert — image based */}
          <Advert src="/images/spinoffs/mararead.jpg" path="/images/spinoffs/mararead.jpg" />
        </div>

        {/* ——— COL 3: Advert + Ladies by Carol km ——— */}
        <div className="col-12 col-md-3 d-flex flex-column gap-3">

          {/* Advert — image based */}
          <Advert src="/images/spinoffs/ishaaziad.jpg" path="/images/spinoffs/ishaaziad.jpg" />

          {/* Ladies — by Carol km */}
          <div className="panel panel-light flex-grow-1">
            <h5 className="panel-title">Ladies</h5>
            <p
              className="panel-text fst-italic"
              style={{ fontSize: '0.8rem' }}
            >
              by Carol km
            </p>
            <p className="panel-text">
              [ opening paragraph on the Ladies group —
              what they have been up to. ]
            </p>
            <p className="panel-text">
              [ second paragraph — activities, gatherings,
              or highlights from the Ladies group this year. ]
            </p>
            <p className="panel-text">
              [ third paragraph. ]
            </p>
            <p className="panel-text">
              [ closing paragraph. ]
            </p>
            <p className="editor-note">
              [ awaiting input from Carol km ]
            </p>
          </div>

        </div>

        {/* ——— COL 4: Alumni Business Network / Insurance ——— */}
        <div className="col-12 col-md-3">
          <div className="panel panel-warm h-100">
            <h5 className="panel-title">Alumni Business Network</h5>
            <p
              className="panel-text fst-italic"
              style={{ fontSize: '0.8rem', color: '#8B6914' }}
            >
              Focus on Insurance — by Nathan
            </p>

            <p className="panel-text">
              [ opening paragraph on why insurance  ]
            </p>
            <p className="panel-text">
              [ second paragraph — focus on insurance.
              What products or services are being offered,
              and how alumni can benefit. ]
            </p>
            <p className="panel-text">
              [ third paragraph — how to get in touch
              or find out more. ]
            </p>
            <p className="panel-text">
              [ fourth paragraph — any other business
              network updates or upcoming events. ]
            </p>
            <p className="panel-text">
              [ closing paragraph. ]
            </p>
            <p className="editor-note">
              [ awaiting input from Nathan ]
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SpinOffs;