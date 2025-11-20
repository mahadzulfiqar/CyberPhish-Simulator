// defender/defender.js
async function load() {
  const out = document.getElementById('out');
  try {
    const resp = await fetch('http://localhost:3000/events.log');
    const text = await resp.text();
    if (!text) { out.textContent = 'No logs yet.'; return; }
    const lines = text.trim().split('\n').map(l => JSON.parse(l));
    let report = '';
    lines.forEach((e, i) => {
      const flags = [];
      if (e.email_domain && e.email_domain !== 'example.com' && e.email_domain.includes('-')) flags.push('suspicious-domain');
      if (e.password_length < 6) flags.push('short-password');
      if (e.email_length < 6) flags.push('short-email');
      report += `#${i+1} ${e.timestamp}\n domain: ${e.email_domain} | email_len: ${e.email_length} | pwd_len: ${e.password_length} | flags: ${flags.join(', ') || 'none'}\n\n`;
    });
    out.textContent = report;
  } catch (err) {
    out.textContent = 'Cannot fetch logs. Make sure server is running and events.log is readable.\n' + err.message;
  }
}

document.getElementById('refresh').addEventListener('click', load);
load();
