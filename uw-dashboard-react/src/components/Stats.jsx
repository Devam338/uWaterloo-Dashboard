export default function Stats({ counts, onSelectCategory }) {
  const cards = [
    { label: 'Total Apps', value: counts.all, category: 'all' },
    { label: 'Academic', value: counts.academic, category: 'academic' },
    { label: 'Student Life', value: counts['student-life'], category: 'student-life' },
    { label: 'Tools', value: counts.tools, category: 'tools' },
  ];

  return (
    <section className="stats">
      {cards.map((card) => (
        <button
          key={card.category}
          className="stat-card"
          onClick={() => onSelectCategory(card.category)}
          type="button"
        >
          <span className="stat-label">{card.label}</span>
          <span className="stat-value">{card.value}</span>
        </button>
      ))}
    </section>
  );
}
