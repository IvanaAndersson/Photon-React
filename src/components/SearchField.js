const SearchField = () => {
  return (
    <section className="search" id="search">
      <h1 id="heading">What pictures would you like to see?</h1>

      <form className="search-form">
        <input type="text" name="search" id="search" className="search-input" />
        <button type="submit" className="submit-btn" id="submit-button">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchField;
