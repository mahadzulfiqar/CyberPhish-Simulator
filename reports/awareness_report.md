# PhishGuard — Awareness Report

## Objective
Demonstrate phishing mechanics safely and teach detection & mitigation to students/visitors.

## Ethical boundary
- No actual credentials are captured.
- Demo collects only metadata: email domain and lengths.
- Server stores only metadata in `events.log`.

## Demo workflow
1. User visits simulated login page (demo/index.html).
2. On submit the demo displays "attacker view" locally and sends safe metadata to local server.
3. Defender dashboard (defender/defender.html) reads metadata and applies heuristics.

## Indicators used (demo)
- Domain mismatch and suspicious domain characters.
- Unusually short passwords.
- Rapid repeated submissions from same origin.
- Email domain not matching expected vendor domain.

## Mitigation & recommendations
- Always check URL and SSL lock.
- Hover over links before clicking.
- Use 2FA for critical accounts.
- Train users on report flow (report suspected phishing to security team).
- Deploy email filters and link scanning.

## Learning outcomes for visitors
- Understand social engineering vs technical attack.
- See what metadata attackers can use.
- See defender heuristics and response basics.
