function LifestyleMediaCarousel({ slides }) {
  return (
    <div id="mediaCarousel" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            {slide.type === 'video' ? (
              /* Video slide — ready for when video is available */
              <video
                className="d-block w-100 rounded"
                style={{ height: '220px', objectFit: 'cover' }}
                controls
                src={slide.src}
              >
                Your browser does not support video.
              </video>
            ) : slide.src ? (
              /* Photo slide — real image */
              <img
                src={slide.src}
                alt={slide.caption}
                className="d-block w-100 rounded"
                style={{ height: '220px', objectFit: 'cover' }}                
              />
            ) : (
              /* Placeholder — no src yet */
              <div
                className="img-placeholder rounded"
                style={{ height: '220px' }}
              >
                {slide.caption || '[ photo placeholder ]'}
              </div>
            )}

            {/* Caption overlay — shows on real images */}
            {slide.caption && slide.src && (
              <div
                className="carousel-caption d-none d-md-block rounded-bottom"
                style={{
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.55))',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.5rem 0.75rem 0.5rem',
                }}
              >
                <small>{slide.caption}</small>
              </div>
            )}

          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mediaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mediaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default LifestyleMediaCarousel;