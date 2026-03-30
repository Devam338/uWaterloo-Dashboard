import { useMemo, useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import Tabs from './components/Tabs';
import AppGrid from './components/AppGrid';
import { apps, categoryLabels } from './data/apps';

function getCounts(items) {
  return {
    all: items.length,
    academic: items.filter((app) => app.category === 'academic').length,
    'student-life': items.filter((app) => app.category === 'student-life').length,
    tools: items.filter((app) => app.category === 'tools').length,
  };
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const counts = useMemo(() => getCounts(apps), []);

  const filteredApps = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return apps.filter((app) => {
      const matchesCategory = activeCategory === 'all' || app.category === activeCategory;
      const matchesSearch =
        !normalizedSearch ||
        app.name.toLowerCase().includes(normalizedSearch) ||
        app.desc.toLowerCase().includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="page-shell">
      <div className="bg-animation" aria-hidden="true">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      <main className="container">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <section className="hero-card">
          <div>
            <p className="hero-badge">Student productivity hub</p>
            <h2>Access your most-used Waterloo resources in one place.</h2>
            <p className="hero-copy">
              Browse academic, student-life, and everyday tools through a faster, cleaner dashboard
              built for campus navigation.
            </p>
          </div>
          <div className="hero-highlight">
            <span>Showing</span>
            <strong>{filteredApps.length}</strong>
            <span>{categoryLabels[activeCategory]}</span>
          </div>
        </section>

        <Stats counts={counts} onSelectCategory={setActiveCategory} />
        <Tabs activeCategory={activeCategory} onChangeCategory={setActiveCategory} />
        <AppGrid apps={filteredApps} />

        <footer className="footer">
          Built as a centralized Waterloo resource dashboard with React and reusable UI components.
        </footer>
      </main>
    </div>
  );
}
