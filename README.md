# Refactor & Restore Ltd — Corporate Web Portal

Official single-page corporate portal for **Refactor & Restore Ltd** (`refactorandrestore.co.uk`), deployed via **GitHub Pages** with custom domain routing through **Namecheap Advanced DNS**.

The portal is designed around an enterprise "Digital Chassis" dark mode architecture, enforcing clean division segregation between the company's two operational profit centres while displaying statutory compliance credentials for B2B procurement officers.

---

## 🚀 Key Features & Operational Divisions

### 1. Software Engineering & Data Analytics Consultancy (Active Division)
* **s386 Companies Act Compliance:** Statutory spreadsheet compliance auditing, financial model validation, and dynamic s830 solvency reserve engines.
* **High-Integrity Data Migrations:** Enterprise ETL pipelines, format transformations, and cloud storage sync SOPs.
* **Identity & Access Governance (IAM):** FCA, PRA, and ISO27001 least-privilege alignment, access control auditing, and tier-based permission mapping.
* **ITIL L3 Application Support:** Production incident triage, SLA escalation management, and 99%+ platform uptime protocols.

### 2. Hardware Repair & Restorations (Service Pipeline)
* **Board-Level Trace Repair:** Precision microsoldering, component desoldering, and PCB refactoring.
* **Hardware Diagnostics:** Component-level diagnostic testing, oscilloscope signal analysis, and silicon validation.
* **Legacy Restorations:** Vintage electronics and gaming console hardware refurbishment.

### 3. Statutory & Regulatory Compliance Panel
* **Registered Entity:** REFACTOR & RESTORE LTD (Company No. `17223867` — England & Wales)
* **HMRC VAT Registration:** `GB 523 1127 38` (MTD Cash Accounting)
* **Data Protection:** Registered Controller with the ICO (Ref: `ZC149152`)
* **Commercial Insurance:** Combined Liabilities underwritten by Markel International (Policy `COH20973` via Caunce O'Hara — £1m–£5m PI / £10m EL)

---

## 📁 Repository Directory Structure

The site follows a decoupled 3-part front-end architecture (Separation of Concerns):

```text
refactorandrestore.co.uk/
├── index.html                  # Semantic HTML5 layout & responsive component markup
├── css/
│   └── styles.css              # Custom CSS variables, design tokens & element styling
├── js/
│   └── main.js                 # Client-side DOM logic & dynamic footer year handling
├── assets/                     # Vector brand assets & SVGs
│   └── 04a_Logo_R&R_Horizontal_Transparent_Dark_NoTagline.svg
└── .gitignore                  # Version control exclusion rules (.vs/, system metadata)
```

---

## 🎨 Certified Brand System & Palette

* **Canvas Background:** Deep Midnight Violet (`#0F0D1B`)
* **Section Cards:** Elevated Dark Indigo Chassis (`#1B172E`)
* **Software Accent (Primary):** Luminous Lavender (`#A78BFA`)
* **Hardware Accent (Focal Points):** Mint Emerald Glow (`#34D399`)
* **Status Badges:** Vivid Emerald (`#10B981`)
* **Alert Highlights:** Laser Amber (`#FBBF24`)
* **Neutral Borders:** Slate Fog (`#94A3B8`)
* **Primary Typography:** Aptos / System Sans-Serif

---

## 🌐 Infrastructure & DNS Deployment SOP (`SOP-OPS-ADM-001`)

The repository is configured for automated deployment via GitHub Pages linked to Namecheap Advanced DNS:

### Namecheap DNS Record Configuration
| Record Type | Host | Target Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME Record** | `www` | `rickrichards-426.github.io` | Automatic / 30 min |
| **A Record** | `@` | `185.199.108.153` | Automatic |
| **A Record** | `@` | `185.199.109.153` | Automatic |
| **A Record** | `@` | `185.199.110.153` | Automatic |
| **A Record** | `@` | `185.199.111.153` | Automatic |

* **Custom Domain:** Bound to `refactorandrestore.co.uk` in GitHub Repository Settings.
* **Security:** Enforce HTTPS enabled with TLS/SSL certificate auto-provisioning.

---

## 🛠️ Local Development Workflow

1. **Clone Repository:**
   ```bash
   git clone https://github.com/RickRichards-426/refactorandrestore.co.uk.git
   ```
2. **Open in Visual Studio Community:**
   * Open as Local Folder or load via `.sln` Solution File.
   * Preview in browser via `Ctrl + Shift + W` (View in Browser) or Hot Reload.
3. **Committing Changes:**
   * `.gitignore` automatically excludes local IDE cache (`.vs/` folder) and OS metadata.
   * Commit and push directly via the **Git Changes** tab in Visual Studio.

---

## 📄 Legal & Statutory Disclosures

Refactor & Restore Ltd is a private limited company registered in England & Wales (Company No. 17223867).  
Registered Office: 54 Belben Road, Poole, Dorset, BH12 4PH.  
Primary SIC: 62020 (IT Consultancy) | Secondary SIC: 62012, 62090, 95110.  
Contact: `refactorandrestore@gmail.com`
