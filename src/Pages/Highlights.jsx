import React from "react";

function Highlights() {
  return (
    <div className="container page-container">

      {/* Page heading */}
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="page-heading"> 2026 Highlights</h2>
          <p className="page-subheading">
            The School Project takes center stage here as well as those notable moments and milestones from this year 
            whilst also making special mention of those who went out of their way to make it all happen.
            by Nathan / Titus
          </p>
        </div>
      </div>

      {/* ——— THREE COLUMN LAYOUT ——— */}
      <div className="row g-4">

        {/* ——— LEFT COLUMN — Featured Highlights + Shout Outs ——— */}
        <div className="col-12 col-md-3">
            <div
                className="d-flex flex-column gap-3"
                style={{ height: '100%' }}
            >

                {/* Featured Highlights — takes only as much space as it needs */}
                <div className="panel panel-warm">
                    <h5 className="panel-title">Featured Highlights</h5>
                    <ul className="list-unstyled mb-0">
                        {['???', '???', '???', '???'].map((item, index) => (
                        <li key={index} className="panel-list-item">
                            <span className="arrow">→</span>{item}
                        </li>
                        ))}
                    </ul>
                    <p className="editor-note">[ awaiting input from y'all ]</p>
                </div>

                {/* Shout Outs — grows to fill remaining space */}
                <div className="panel panel-warm flex-grow-1">
                    <h5 className="panel-title">✨ Shout Outs</h5>
                    <p className="panel-text fst-italic">
                        Special mentions of those who stepped up and gave of themselves
                        this year.
                    </p>
                    {[
                        { name: 'name', note: '???' },
                        { name: '???', note: '???' },
                        { name: '???', note: '???' },
                        { name: '???', note: '???' },
                    ].map((item, index) => (
                        <div key={index} className="shoutout-card">
                        <div className="shoutout-name">⭐ {item.name}</div>
                        <div className="shoutout-note">{item.note}</div>
                        </div>
                    ))}
                    <p className="editor-note">[ awaiting input from y'all ]</p>
                </div>

            </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col-12 col-md-6">
            <div className="panel panel-light">

                {/* ——— Centred opening statement ——— */}
                <div className="text-center mb-4">
                    <h3
                        className="page-heading"
                        style={{ borderBottom: 'none', fontSize: '1.6rem' }}
                    >
                        [ main opening headline for this section ]
                    </h3>
                    <p
                        className="panel-text fst-italic"
                        style={{ fontSize: '1.05rem', maxWidth: '85%', margin: '0 auto' }}
                    >
                        [ opening statement on the school ]
                    </p>
                </div>

                {/* ——— Newspaper columns — ABOVE quote/images ——— */}
                <div className="newspaper-columns mb-4">
                    <p className="panel-text">
                        [ first paragraph of the school project. ]
                    </p>
                    <p className="panel-text">
                        [ second paragraph continues here, flowing into the
                        next column when the first fills up. ]
                    </p>
                    <p className="panel-text">
                        [ third paragraph.  ]
                    </p>
                </div>

                {/* ——— Pull quote ——— */}
                <blockquote className="pull-quote">
                <p className="mb-1">"[ insert a memorable quote from participants in the School Project ]"</p>
                <footer>the author of quote</footer>
                </blockquote>

                {/* ——— Image grid ——— */}
                <div className="row g-2 mb-4">
                    <div className="col-5">
                        <div className="img-placeholder">[ Image 1 ]</div>
                    </div>
                    <div className="col-4">
                        <div className="img-placeholder">[ Image 2 ]</div>
                    </div>
                    <div className="col-3">
                        <div className="img-placeholder">[ Image 3 ]</div>
                    </div>
                </div>

                {/* ——— Newspaper columns — BELOW quote/images ——— */}
                <div className="newspaper-columns">
                    <p className="panel-text">
                        [ project story continues here below the images, would be nice to reference the images above ]
                    </p>
                    <p className="panel-text">
                        [ second paragraph of the continuation. ]
                    </p>
                    <p className="panel-text">
                        [ closing paragraph ]
                    </p>
                </div>

            </div>
        </div>

        {/* RIGHT COLUMN */}
        {/* ——— RIGHT COLUMN — school project overflow ——— */}
        <div className="col-12 col-md-3">
            <div className="panel panel-warm h-100">

                {/* Continuation label — newspaper style */}
                <div
                className="mb-3 pb-2"
                style={{ borderBottom: '2px solid #8B6914' }}
                >
                <span
                    style={{
                    fontSize: '0.7rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#8B6914'
                    }}
                >
                    School Project — cont'd
                </span>
                </div>

                {/* Overflow text */}
                <p className="panel-text">
                [ Editor: school project article continues here if the
                writer needs more space. The story flows naturally from
                the middle column into this one. ]
                </p>
                <p className="panel-text">
                [ Editor: additional paragraphs as needed. ]
                </p>
                <p className="panel-text">
                [ Editor: closing thoughts or a final reflection on the
                project. ]
                </p>

                <p className="editor-note">
                [ leave blank if middle column text is sufficient ]
                </p>

            </div>
        </div>

      </div>
    </div>
  );
}

export default Highlights;