import React from "react";
import EditorsCarousel from '../components/EditorsCarousel';
import editors from '../data/editors';
import contents from '../data/contents';

function Editorial(props) {
    return (
    <div className="container my-4">

      {/* ——— ROW 1: Editor's Note — full width ——— */}
      <div className="row mb-4">
        <div className="col-12">
            <div 
                className="rounded p-4"
                style={{
                  background: 'linear-gradient(135deg, #f0e8d8 0%, #faf3e4 100%)'}}
            >
            <div
                style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '5rem',
                    lineHeight: '0.5',
                    color: '#8B6914',
                    opacity: 0.4,
                    marginBottom: '1rem',
                    userSelect: 'none'
                }}
            >
            </div>
            <h2 
                className="mb-3"
                style={{ color: '#5a3e1b' }}
            >
                ✍️ Editor's Note
            </h2>
            <p>
              Welcome to the third Edition of the KPS Class of '80-86 Annual Magazine!
            </p>

            <p>
                The response to the second edition was overwhelmingly positive. Our heartfelt thanks for the many
                compliments and encouraging feedback! For a minute we felt like professionals! 😎
            </p>

            <p>
                The editorial team this year was joined by three brave gentlemen who willingly stepped into the unknown.
                Their arrival brought a different but good energy. Look out for it!
            </p>

            <p>
                To every contributor, encourager, silent reader, thank you. This magazine belongs to you!
            </p>  

            <div
              className="mt-4 pt-3"
              style={{ borderTop: '1px dashed #c9a96e' }}  
            >
                <p
                    className="mb-1"
                    style={{
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic',
                    fontSize: '1.5rem',
                    color: '#8B6914',
                    background: 'linear-gradient(135deg, #f0e8d8 0%, #faf3e4 100%)',
                    borderLeft: '5px solid #8B6914',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                    }}                
                >
                    With love and gratefulness 🙏                
                </p> 

                <p
                    className="mb-0 fst-italic"
                    style={{ color: '#7a6652', fontSize: '0.95rem' }} 
                >
                    - Editorial Committee
                </p>
            </div>                         
          </div>
        </div>
      </div>

      {/* ——— ROW 2: Slideshow (left) + Table of Contents (right) ——— */}
      <div className="row">

        {/* — Bottom Left: Photo Slideshow — */}
        <div className="col-12 col-md-4 mb-4">
          <div className="border rounded p-3 h-100">
            <h5 className="border-bottom pb-2 mb-3">Meet the Editors</h5>
            <EditorsCarousel editors={editors} />
          </div>
        </div>

        {/* — Bottom Right: Table of Contents — */}
        <div className="col-12 col-md-8 mb-4">
          <div
            className="border rounded p-3 h-100"
            style={{ background: '#f5ede0' }}
          >
            <h5 className="border-bottom pb-2 mb-3">Table of Contents</h5>

            <ul className="list-group list-group-flush">
              {contents.map(item => (
                <li
                  key={item.id}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                  onClick={() => props.onNavigate(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div>
                    <div style={{ fontWeight: '500' }}>{item.label}</div>
                    <small className="text-muted">{item.desc}</small>
                  </div>
                  <span style={{ color: '#8B6914', fontSize: '1.2rem' }}>→</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Editorial;