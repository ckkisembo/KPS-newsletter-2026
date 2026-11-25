import { useState } from 'react';

// One photo that falls back to a grey placeholder if the file is missing
function SpotlightPhoto(props) {
  const [failed, setFailed] = useState(false);

  if (!props.src || failed) {
    return <div className="img-placeholder spotlight-photo">[ photo ]</div>;
  }
  return (
    <img
      src={props.src}
      alt={props.alt || 'Spotlight photo'}
      className="spotlight-photo"
      onError={() => setFailed(true)}
    />
  );
}

// The golf photos, shown at their natural shape, with the pull quote between them.
// Props: data (the object exported from spotlight.js)
function SpotlightPhotos(props) {
  const data = props.data;

  return (
    <div className="photo-column">
      {/* photo-sticky keeps the photos in view while you read the long columns beside them */}
      <div className="photo-sticky">
      {data.photos.map((photo, index) => (
        <div key={index}>
          <SpotlightPhoto src={photo.src} alt={photo.alt} />
          {photo.caption && (
            <p className="editor-note text-center mt-1">{photo.caption}</p>
          )}

          {/* The pull quote sits right after the first photo */}
          {index === 0 && data.pullQuote && (
            <blockquote className="pull-quote mb-0">
              <p className="mb-1">“{data.pullQuote.text}”</p>
              <footer>{data.pullQuote.who}</footer>
            </blockquote>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}

export default SpotlightPhotos;
