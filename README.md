📌 CyberPhish Simulator

A safe, educational phishing simulation project with defender analysis tools.
No real credentials are captured — this project is for awareness & learning only.

🚀 About the Project

CyberPhish Simulator demonstrates how phishing attacks work and how defenders detect them, using a simple and safe login simulation.

The goal is to educate visitors during the Open House about:

How easily users can be tricked

What information attackers look for

How defenders analyze suspicious login attempts

Why phishing is the #1 cyber threat today

🧩 Project Modules
1️⃣ Phishing Simulation (demo/)

Fake login page

Shows how attackers simulate credential capture

No real data is stored

For awareness only

2️⃣ Attacker View (demo/demo.js)

Shows:

Entered email

Entered password

Browser info

Device information

Timestamp

This is only shown locally to explain the concept.

3️⃣ Defender Dashboard (defender/)

Displays how a cybersecurity analyst would detect:

Suspicious domain patterns

Repeated login attempts

Failed authentications

Device mismatch alerts

Simplified but effective for teaching.

4️⃣ Server Layer (server/)

Local, safe backend storing:

Metadata

Logs

Mock alerts

No real passwords or personal data.

5️⃣ Awareness Reports (reports/)

Contains:

Phishing explanation

Attack indicators

Defense strategies

Screenshots from the project

6️⃣ Open House Script (slides/)

Short explanation for presenting the project.

🏗 Project Structure
CyberPhish-Simulator/
│── demo/
│    ├── index.html
│    ├── styles.css
│    └── demo.js
│
│── defender/
│    ├── index.html
│    └── defender.js
│
│── server/
│    ├── server.py
│    └── logs.json
│
│── reports/
│    └── awareness_report.md
│
└── README.md

🔒 Important Note

This project is strictly for educational purposes.
It does NOT steal any real credentials.
It does not connect to external networks.
Everything runs locally and safely.

🎯 Purpose

To educate students on:

Social engineering

Phishing risks

Safe browsing habits

Detection and defense



🛠 Technologies Used

HTML, CSS, JavaScript

Python (Flask) for backend logs

JSON file-based storage

Web-based demo pages

📢 Author

Mahad Zulfiqar
Cybersecurity Enthusiast | BS Software Engineering
