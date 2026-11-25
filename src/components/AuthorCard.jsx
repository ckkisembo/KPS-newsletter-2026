import { useState } from 'react';

// Small "about the author" card: photo, name, a line of detail, optional email.
// Anything placed between <AuthorCard> ... </AuthorCard> (like a button) shows at the end.
// If the photo or name is missing, a placeholder shows instead.
function AuthorCard(props) {
  const [failed, setFailed] = useState(false);
  const hasPhoto = props.photo && !failed;

  return (
    <div className="author-card">

      {hasPhoto ? (
        <img
          src={props.photo}
          alt={props.name || 'Author'}
          className="author-photo"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="author-photo author-photo-placeholder">[ photo ]</div>
      )}

      <div>
        {props.name ? (
          <p className="author-name">{props.name}</p>
        ) : (
          <p className="author-meta fst-italic">[ author name ]</p>
        )}
        {props.role && <p className="author-meta">{props.role}</p>}
        {props.email && (
          <p className="author-meta">
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </p>
        )}
      </div>

      {props.children}
    </div>
  );
}

export default AuthorCard;
