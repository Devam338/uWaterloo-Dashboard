export default function AppCard({ app }) {
  return (
    <a
      className="app-card"
      href={app.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${app.name}`}
    >
      <div className={`app-icon icon-${app.color}`}>{app.icon}</div>
      <div className="app-name">{app.name}</div>
      <div className="app-desc">{app.desc}</div>
      <span className="app-link">Open resource ↗</span>
    </a>
  );
}
