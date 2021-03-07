const Gallery = ({ isLoaded, items }) => {
  if (!isLoaded) {
    return (
      <section className="gallery" id="gallery">
        Loading...
      </section>
    );
  } else {
    return (
      <section className="gallery" id="gallery">
        {items.map((photo) => {
          return (
            <div
              className={
                "gallery-item " +
                (photo.width < photo.height ? "portrait" : "landscape")
              }
              key={photo.id}
            >
              <img src={photo.src.large} alt="taken from pexels" />
              <div className="img-properties">
                <a href={photo.photographer_url}>
                  Photo by {photo.photographer}
                </a>
                <a href={photo.src.original}>Download</a>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
};

export default Gallery;
