# Refactor & Restore Ltd — Corporate Web Portal

Official single-page corporate portal for **Refactor & Restore Ltd** (`refactorandrestore.co.uk`), deployed via **GitHub Pages** with custom domain routing through **Namecheap Advanced DNS**.

The portal is designed around an enterprise "Digital Chassis" dark mode architecture, enforcing clean division segregation between the company's two operational profit centres while displaying statutory compliance credentials for B2B procurement officers [2, 147].

---

## 🚀 Key Features & Operational Divisions

### 1. Software Engineering & Data Analytics Consultancy (Active Division)
* **s386 Companies Act Compliance:** Statutory spreadsheet compliance auditing, financial model validation, and dynamic s830 solvency reserve engines [2].
* **High-Integrity Data Migrations:** Enterprise ETL pipelines, format transformations, and cloud storage sync SOPs [2].
* **Identity & Access Governance (IAM):** FCA, PRA, and ISO27001 least-privilege alignment, access control auditing, and tier-based permission mapping [2].
* **ITIL L3 Application Support:** Production incident triage, SLA escalation management, and 99%+ platform uptime protocols [2].

### 2. Hardware Repair & Restorations (Service Pipeline)
* **Board-Level Trace Repair:** Precision microsoldering, component desoldering, and PCB refactoring [2].
* **Hardware Diagnostics:** Component-level diagnostic testing, oscilloscope signal analysis, and silicon validation [2].
* **Legacy Restorations:** Vintage electronics and gaming console hardware refurbishment [2].

### 3. Statutory & Regulatory Compliance Panel
* **Registered Entity:** REFACTOR & RESTORE LTD (Company No. `17223867` — England & Wales) [2, 88]
* **HMRC VAT Registration:** `GB 523 1127 38` (MTD Cash Accounting) [2, 88]
* **Data Protection:** Registered Controller with the ICO (Ref: `ZC149152`) [2, 88]
* **Commercial Insurance:** Combined Liabilities underwritten by Markel International (Policy `COH20973` via Caunce O'Hara — £1m–£5m PI / £10m EL) [2, 88, 91]

---

## 📁 Repository Directory Structure

The site follows a decoupled 3-part front-end architecture (Separation of Concerns) [22, 24]:

```text
refactorandrestore.co.uk/
├── index.html                  # Semantic HTML5 layout & responsive component markup [24, 25]
├── css/
│   └── styles.css              # Custom CSS variables, design tokens & element styling [24, 25]
├── js/
│   └── main.js                 # Client-side DOM logic & dynamic footer year handling [24, 25]
├── assets/                     # Vector brand assets & SVGs [24, 25]
│   └── 04a_Logo_R&R_Horizontal_Transparent_Dark_NoTagline.svg [24, 25]
└── .gitignore                  # Version control exclusion rules (.vs/, system metadata) [45, 49]
```

---

## 🎨 Certified Brand System & Palette

* **Canvas Background:** Deep Midnight Violet (`#0F0D1B`) [1, 147]
* **Section Cards:** Elevated Dark Indigo Chassis (`#1B172E`) [1, 147]
* **Software Accent (Primary):** Luminous Lavender (`#A78BFA`) [1, 147]
* **Hardware Accent (Focal Points):** Mint Emerald Glow (`#34D399`) [1, 147]
* **Status Badges:** Vivid Emerald (`#10B981`) [1, 147]
* **Alert Highlights:** Laser Amber (`#FBBF24`) [1, 147]
* **Neutral Borders:** Slate Fog (`#94A3B8`) [1, 147]
* **Primary Typography:** Aptos / System Sans-Serif [1, 147]

---

## 🌐 Infrastructure & DNS Deployment SOP (`SOP-OPS-ADM-001`)

The repository is configured for automated deployment via GitHub Pages linked to Namecheap Advanced DNS [75, 81]:

### Namecheap DNS Record Configuration
| Record Type | Host | Target Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME Record** | `www` | `rickrichards-426.github.io` | Automatic / 30 min |
| **A Record** | `@` | `185.199.108.153` | Automatic |
| **A Record** | `@` | `185.199.109.153` | Automatic |
| **A Record** | `@` | `185.199.110.153` | Automatic |
| **A Record** | `@` | `185.199.111.153` | Automatic |

* **Custom Domain:** Bound to `refactorandrestore.co.uk` in GitHub Repository Settings [75, 82].
* **Security:** Enforce HTTPS enabled with TLS/SSL certificate auto-provisioning [75, 82].

---

## 🛠️ Local Development Workflow

1. **Clone Repository:**
   ```bash
   git clone https://github.com/RickRichards-426/refactorandrestore.co.uk.git
   ```
2. **Open in Visual Studio Community:**
   * Open as Local Folder or load via `.sln` Solution File [51, 59].
   * Preview in browser via `Ctrl + Shift + W` (View in Browser) or Hot Reload [53, 55].
3. **Committing Changes:**
   * `.gitignore` automatically excludes local IDE cache (`.vs/` folder) and OS metadata [45, 49].
   * Commit and push directly via the **Git Changes** tab in Visual Studio [51].

---

## 📄 Legal & Statutory Disclosures

Refactor & Restore Ltd is a private limited company registered in England & Wales (Company No. 17223867) [88].  
Registered Office: 54 Belben Road, Poole, Dorset, BH12 4PH [88].  
Primary SIC: 62020 (IT Consultancy) | Secondary SIC: 62012, 62090, 95110 [88].  
Contact: `refactorandrestore@gmail.com` [88]
