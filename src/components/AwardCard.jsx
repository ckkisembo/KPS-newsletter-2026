
function AwardCard({ award, orientation }) {
  const isLandscape = orientation === 'landscape';

  return (
    <div
      className={`card h-100 ${isLandscape ? '' : ''}`}
      style={{
        background: '#faf3e4',
        border: '1px solid #e0d0b8',
        borderTop: '4px solid #8B6914',
      }}
    >
      <div className="card-body">

        {/* Award title */}
        <h6
          className="card-title"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: '#5a3e1b',
            fontSize: isLandscape ? '1rem' : '0.95rem',
          }}
        >
          {award.title}
        </h6>

        {/* Divider */}
        <hr style={{ borderColor: '#e0d0b8', margin: '0.5rem 0' }} />

        {/* Description */}
        <p
          className="card-text"
          style={{
            fontSize: '0.8rem',
            color: '#7a6652',
            fontStyle: 'italic',
          }}
        >
          {award.description}
        </p>

        {/* Recipients */}
        <div className="mt-auto">
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#8B6914',
              marginBottom: '0.25rem',
            }}
          >
            ⭐ Recipient{award.recipients.length > 1 ? 's' : ''}
          </p>
          <ul className="list-unstyled mb-0">
            {award.recipients.map((name, index) => (
              <li
                key={index}
                style={{
                  fontSize: '0.85rem',
                  color: '#5a3e1b',
                  fontWeight: '500',
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AwardCard;