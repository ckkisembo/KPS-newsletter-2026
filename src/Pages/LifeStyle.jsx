import React from 'react';
import LifestyleMediaCarousel from '../components/LifestyleMediaCarousel';
import lifestyleMedia from '../data/lifestyleMedia';
import { img } from '../utils/imagePath';

// KOMA's interview Q&A data
const komaQA = [
  {
    id: 1,
    question: '[ Koma: first interview question ]',
    answer: '[ Interviewee\'s answer to the first question goes here. Write as much as needed — the text sits naturally in the column. ]',
  },
  {
    id: 2,
    question: '[ Koma: second interview question ]',
    answer: '[ Interviewee\'s answer to the second question. ]',
  },
  {
    id: 3,
    question: '[ Koma: third interview question ]',
    answer: '[ Interviewee\'s answer to the third question. ]',
  },
  {
    id: 4,
    question: '[ Koma: fourth interview question ]',
    answer: '[ Interviewee\'s answer to the fourth question. ]',
  },
  {
    id: 5,
    question: '[ Koma: fifth interview question ]',
    answer: '[ Interviewee\'s answer to the fifth question. ]',
  },
  {
    id: 6,
    question: '[ Koma: sixth interview question ]',
    answer: '[ Interviewee\'s answer to the sixth question. ]',
  },
];

function LifeStyle() {
  return (
    <div className="container page-container">

      {/* Page heading */}
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="page-heading">LifeStyle</h2>
          <p className="page-subheading">
            How best to live our lives after 50 — retirement, wellness,
            and keeping active.
          </p>
        </div>
      </div>

      {/* ——— TOP SECTION: three outer columns ——— */}
      <div className="row g-3 mb-4">

        {/* ——— LEFT COL: Jessica's article ——— */}
        <div className="col-12 col-md-2">
          <div className="panel panel-warm h-100">

            {/* Column heading — no slideshow here anymore */}
            <h5 className="panel-title">
              Reflections on Investment for Retirement
            </h5>
            <p className="panel-text fst-italic" style={{ fontSize: '0.8rem' }}>
              by Jessica
            </p>

            <p className="panel-text">
              [ Jessica's opening paragraph on reflections on investment
              for retirement goes here. ]
            </p>
            <p className="panel-text">
              [ second paragraph continues here. ]
            </p>
            <p className="panel-text">
              [ third paragraph. ]
            </p>
            <p className="editor-note">
              [ article continues in far right column ]
            </p>

          </div>
        </div>

        {/* ——— MIDDLE COL: KOMA's Interview ——— */}
        <div className="col-12 col-md-8">
          <div className="panel panel-light h-100">

            {/* KOMA interview header — centred */}
            <div className="text-center mb-4">
              <h4 className="page-heading" style={{ borderBottom: 'none' }}>
                KOMA's Interview
              </h4>
              <p className="panel-text fst-italic interview-header">
                [ KOMA: opening paragraph introducing the interviewee and the
                context of this interview. ]
              </p>
            </div>

            {/* Three sub-columns for Q&A */}
            <div className="row g-3">

              {/* Left sub-column — Q&A 1 & 2 */}
              <div className="col-md-4">
                {komaQA.slice(0, 2).map(item => (
                  <div key={item.id} className="qa-block">
                    <p className="qa-question">{item.question}</p>
                    <p className="panel-text">{item.answer}</p>
                  </div>
                ))}
              </div>

              {/* Centre sub-column — Q&A 3 & 4 */}
              <div className="col-md-4 interview-columns">
                {komaQA.slice(2, 4).map(item => (
                  <div key={item.id} className="qa-block">
                    <p className="qa-question">{item.question}</p>
                    <p className="panel-text">{item.answer}</p>
                  </div>
                ))}
              </div>

              {/* Right sub-column — Q&A 5 & 6 */}
              <div className="col-md-4">
                {komaQA.slice(4, 6).map(item => (
                  <div key={item.id} className="qa-block">
                    <p className="qa-question">{item.question}</p>
                    <p className="panel-text">{item.answer}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ——— RIGHT COL: Jessica cont'd + photo at bottom ——— */}
        <div className="col-12 col-md-2">
          <div className="panel panel-warm h-100 d-flex flex-column">

            {/* Continuation label */}
            <div className="continuation-label">
              <span>Investment for Retirement — cont'd</span>
            </div>

            <p className="panel-text">
              [ Jessica's article continues here. ]
            </p>
            <p className="panel-text">
              [ further paragraphs as needed. ]
            </p>
            <p className="panel-text">
              [ closing reflection or call to action. ]
            </p>

            {/* Photo of Jessica pushed to bottom */}
            <div className="mt-auto">
              <img
                src={img("/images/lifestyle/jessica.jpeg")}
                alt="Jessica"
                className="img-fluid rounded mb-1"
                style={{ width: '100%', objectFit: 'cover', maxHeight: '160px' }}
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Placeholder shown when photo not yet available */}
              <div
                className="img-placeholder mb-1"
                style={{ display: 'none', height: '100px' }}
              >
                [ Jessica's photo ]
              </div>
              <p
                className="editor-note text-center mb-0"
                style={{ fontSize: '0.7rem' }}
              >
                Jessica — contributor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ——— BOTTOM SECTION: Wellness | Media Carousel | Golfers ——— */}
      <div className="row g-3">

        {/* LEFT — Wellness, Health & Activity */}
        <div className="col-12 col-md-3">
          <div className="panel panel-light h-100">
            <h5 className="panel-title">Wellness, Health & Activity</h5>
            <p className="panel-text fst-italic" style={{ fontSize: '0.85rem' }}>
              Taking care of ourselves — mind, body and spirit.
            </p>
            <p className="panel-text">
              [ Carol km: opening paragraph on wellness and health
              activities the group has been engaged in this year. ]
            </p>
            <p className="panel-text">
              [ Dr. Albert: second paragraph — tips and other
              useful information for healthy living after 50. ]
            </p>
            <p className="panel-text">
              [ Martha / Carol km: third paragraph — group activities,
              routines, or initiatives worth highlighting. ]
            </p>
            <p className="editor-note">
              [ awaiting input from Carol km, Dr. Albert and Liz ]
            </p>
          </div>
        </div>

        {/* CENTRE — Unified media carousel */}
        <div className="col-12 col-md-6">
          <div className="panel panel-warm h-100">
            <h5 className="panel-title text-center">Photos & Video</h5>
            <LifestyleMediaCarousel slides={lifestyleMedia} />
            <p className="editor-note text-center mt-2">
              [ add photo paths and video to lifestyleMedia.js when ready ]
            </p>
          </div>
        </div>

        {/* RIGHT — The Golfers */}
        <div className="col-12 col-md-3">
          <div className="panel panel-light h-100">
            <h5 className="panel-title">⛳ The Golfers</h5>
            <p className="panel-text fst-italic" style={{ fontSize: '0.85rem' }}>
              Our classmates on the green — stories from the fairway.
            </p>
            <p className="panel-text">
              [ Charles: paragraph on the golf meetups —
              where, when, who showed up. ]
            </p>
            <p className="panel-text">
              [ Charles: reflections on the experience on the
              green — memorable moments, friendly competition. ]
            </p>
            <p className="panel-text">
              [ ???: any other golfer contributions
              or notable rounds to mention. ]
            </p>
            <p className="editor-note">
              [ awaiting input from Charles and the golfers ]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeStyle;