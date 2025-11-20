// demo/demo.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value; // NOTE: never sent/stored

  // SAFE metadata only:
  const domainPart = email.includes('@') ? email.split('@')[1] : 'none';
  const emailLength = email.length;
  const passwordLength = password.length;

  // Compose a safe payload (no password, no full email)
  const payload = {
    email_domain: domainPart,
    email_length: emailLength,
    password_length: passwordLength,
    timestamp: new Date().toISOString(),
    demo_origin: window.location.hostname
  };

  // Show local simulation of "attacker view"
  const result = document.getElementById('result');
  result.classList.remove('hidden');
  result.innerHTML = `
    <strong>Simulation: what attacker sees</strong>
    <ul>
      <li>Email domain: <code>${payload.email_domain}</code></li>
      <li>Email length: ${payload.email_length}</li>
      <li>Password length: ${payload.password_length}</li>
      <li>Captured at: ${payload.timestamp}</li>
    </ul>
    <p><em>Note:</em> This demo sends only safe metadata for analysis; actual credentials are not transmitted or stored.</p>
  `;

  // Send safe metadata to local server for Defender module (optional)
  try {
    await fetch('http://localhost:3000/log-metadata', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    // server might be offline; we still show the demo locally.
    console.warn('Server not available (it is optional):', err.message);
  }

  // Redirect to a real site to simulate normal phishing flow (for UX only)
  setTimeout(() => {
    window.location.href = 'https://example.com';
  }, 2200);
});
