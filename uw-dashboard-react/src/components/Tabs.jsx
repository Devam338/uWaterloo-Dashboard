const tabs = [
  { key: 'all', label: 'All Apps' },
  { key: 'academic', label: '📚 Academic' },
  { key: 'student-life', label: '🎯 Student Life' },
  { key: 'tools', label: '🛠️ Tools' },
];

export default function Tabs({ activeCategory, onChangeCategory }) {
  return (
    <nav className="tabs" aria-label="App categories">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          className={`tab ${activeCategory === tab.key ? 'active' : ''}`}
          onClick={() => onChangeCategory(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
