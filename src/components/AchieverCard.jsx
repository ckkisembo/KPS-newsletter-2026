function AchieverCard({ name, photo, caption }) {
  return (
    <div className="panel panel-warm">

      {/* Photo */}
      {photo ? (
        <>
          <img
            src={photo}
            alt={name}
            className="img-fluid rounded mb-2"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div
            className="img-placeholder rounded mb-2"
            style={{ display: 'none', height: '160px' }}
          >
            [ photo ]
          </div>
        </>
      ) : (
        <div
          className="img-placeholder rounded mb-2"
          style={{ height: '160px' }}
        >
          [ photo ]
        </div>
      )}

      {/* Name */}
      <p
        className="mb-1"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: '600',
          color: '#5a3e1b',
          fontSize: '0.95rem',
        }}
      >
        {name}
      </p>

      {/* Caption */}
      <p
        className="mb-0"
        style={{
          fontSize: '0.8rem',
          color: '#7a6652',
          fontStyle: 'italic',
        }}
      >
        {caption}
      </p>

    </div>
  );
}

export default AchieverCard;