# PhishGuard Open House Demo Script

## 1️⃣ Introduction
Hello, I’m Mahad Zulfiqar.  
Today, I will show you **PhishGuard**, a safe phishing simulation and defender tool.

**Objective:**  
- Demonstrate how phishing attacks work  
- Show how defenders detect suspicious activity  
- Educate visitors about cybersecurity  

---

## 2️⃣ Problem
Phishing is **the #1 cyber threat** today.  
Attackers trick users into giving login credentials or sensitive information.  

---

## 3️⃣ Current Solution (Phase 1)
- We have a **rule-based simulation**  
- Shows fake login page (demo)  
- Captures **safe metadata only** (email domain, length, timestamp)  
- Defender dashboard reads this metadata to **flag suspicious activity**  
- **No real credentials are captured**  

---

## 4️⃣ Demo Plan
We will demo **3–5 URLs** live:

1. **Safe URL** – e.g., `example.com`  
2. **Malicious URL** – e.g., `evil-login.com`  
3. **Tricky/Mixed URL** – e.g., `example-login.xyz`  

**Steps:**  
1. Open `demo/index.html` in the browser  
2. Enter URL/email and password (fake credentials only)  
3. Press “Sign in”  
4. Observe the **attacker view** (metadata shown)  
5. Open `defender/defender.html` to see how the dashboard flags suspicious entries  
6. Explain why each URL was flagged or safe  

**Key points to explain while demoing:**  
- What metadata attackers can see  
- What defenders analyze  
- Importance of checking URLs before entering credentials  

---

## 5️⃣ How It Works
**Simulation Module:**  
- Fake login page  
- Local display of metadata (domain, length, timestamp)  

**Defender Module:**  
- Reads logs from the server  
- Flags suspicious domains or short credentials  
- Visualizes risk levels (simple color/flag system)  

---

## 6️⃣ Future Improvements (Phase 2)
**Optional discussion if asked:**  
1. **Lightweight ML Model** – Predict malicious URLs more accurately  
2. **Dashboard** – Visual detection score, threat level (low, medium, high)  
3. **Real-Time Multi-URL Scanning** – Scan many URLs at once, color-coded by risk  

**Simple explanation:**  
> “It learns from thousands of URLs and shows results visually with risk levels.”

---

## 7️⃣ Safety Notes
- Everything runs locally  
- No real credentials are stored or transmitted  
- Metadata only is logged for demonstration  
- Visitors’ data is safe  

---

## 8️⃣ Backup Plan
- Keep OneDrive/USB backup of project  
- Have test URLs ready for demo  
- Screenshot of demo output in case browser/server fails  

---

## ✅ Summary
- Phase 1: Safe, rule-based phishing simulation + defender dashboard  
- Phase 2: ML, visual dashboard, multi-URL scanning (future work)  
- Main goal: Educate and raise awareness about phishing attacks  

**End of Demo**
