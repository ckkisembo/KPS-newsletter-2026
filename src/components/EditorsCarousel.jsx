function EditorsCarousel(props) {
  return (
    <div
      id="editorsCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {props.editors.map((editor, index) => (
          <div
            key={editor.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            
            {/* When you have real photos, replace this div with: */}
            <img src={editor.photo} alt={editor.name} className="d-block w-100 rounded" />     
            
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#editorsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#editorsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default EditorsCarousel;