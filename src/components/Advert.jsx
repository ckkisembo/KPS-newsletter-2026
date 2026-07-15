function Advert({ src, path, mediaType = "image" }) {
  return (
    <div className="panel panel-warm">
      <p
        style={{
          fontSize: '0.7rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: '#8B6914',
          marginBottom: '0.5rem',
        }}
      >
        Ad for Alumni Businesses
      </p>

      {src ? (
        <div style={{ position: 'relative' }}>

          {mediaType === 'video' ? (
            /* Video advert */

            <video
              className="rounded"
              style={{ width: '100%', objectFit: 'cover' }}
              controls
              autoPlay
              muted
              loop
              playsInline
              onError={e => {
                e.target.style.display = 'none';
                document.getElementById(`advert-placeholder-${src}`)
                  .style.display = 'flex';
              }}
            >
             <source src={src} type="video/mp4" />
              Your browser does not support video. 
            </video>
          ) : ( 
            /* Image advert */
            <img
              src={src}
              alt="AD for Alumni Businesses"
              className="img-fluid rounded"
              style={{ width: '100%', objectFit: 'cover' }}
              onError={e => {
                e.target.style.display = 'none';
                document.getElementById(`advert-placeholder-${src}`).style.display = 'flex';
              }}
            />

          )}
          
          <div
            id={`advert-placeholder-${src}`}
            className="img-placeholder rounded"
            style={{ display: 'none', height: '120px' }}
          >
            [ Advert image ]
          </div>
        </div>
      ) : (
        <div
          className="img-placeholder rounded"
          style={{ height: '120px' }}
        >
          [ Advert image ]
        </div>
      )}

      {path && (
        <p className="editor-note text-center mt-1">
          [ add advert to {path} ]
        </p>
      )}
    </div>
  );
}

export default Advert;