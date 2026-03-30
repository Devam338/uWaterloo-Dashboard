export default function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-icon"></div>
        <div>
          <p className="eyebrow">University of Waterloo</p>
          <h1>UW Dashboard</h1>
        </div>
      </div>

      <label className="search-container" aria-label="Search apps">
        <span className="search-icon">⌕</span>
        <input
          type="search"
          className="search-box"
          placeholder="Search apps, tools, and resources..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>
    </header>
  );
}
