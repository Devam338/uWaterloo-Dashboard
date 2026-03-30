import AppCard from './AppCard';

export default function AppGrid({ apps }) {
  if (!apps.length) {
    return (
      <section className="empty-state">
        <h2>No results found</h2>
        <p>Try a different search term or switch categories.</p>
      </section>
    );
  }

  return (
    <section className="app-grid">
      {apps.map((app) => (
        <AppCard key={app.name} app={app} />
      ))}
    </section>
  );
}
