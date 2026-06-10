export type Article = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  featured: boolean;
  color: "emerald" | "blue" | "slate";
  content: string;
};

export const articles: Article[] = [
  {
    category: "GST Updates",
    title: "GST Compliance: Significant Amendments for the Current Financial Year",
    excerpt:
      "An overview of significant amendments and compliance requirements under GST that businesses need to be aware of, including changes to return filing procedures and reconciliation requirements.",
    date: "June 2026",
    readTime: "8 min read",
    slug: "gst-compliance-changes",
    featured: true,
    color: "emerald",
    content: `
The Goods and Services Tax (GST) framework is subject to regular amendments through notifications, circulars and Finance Act provisions. FY 2025-26 has introduced several important changes that businesses — manufacturers, traders, and service providers alike — must incorporate into their compliance processes.

## Introduction of GSTR-1A

One of the significant procedural changes for FY 2025-26 is the operationalisation of GSTR-1A. This is a new amendment return that allows a registered taxpayer to amend details furnished in GSTR-1 for the same tax period before filing GSTR-3B. The key features are:

- GSTR-1A can be filed after GSTR-1 is filed and before GSTR-3B is filed for the same period.
- Amendments made through GSTR-1A are auto-populated into GSTR-3B, ensuring that the outward supply data and the tax liability in GSTR-3B remain consistent.
- This eliminates the earlier practice of making corrections only in the subsequent month's GSTR-1 through amendment tables.

Businesses should review their invoice-level data after filing GSTR-1 and use GSTR-1A where corrections are necessary before the GSTR-3B filing deadline.

## Rule 86B: Restriction on Use of ITC for Payment of Output Tax

Rule 86B continues to apply to registered persons whose taxable supply (excluding exempt and zero-rated supply) exceeds ₹50 lakhs in a month. Under this rule, at least 1% of the output tax liability must be paid in cash — the balance can be set off from the Electronic Credit Ledger.

There are specific exclusions to this restriction, including:
- Taxpayers who have paid income tax exceeding ₹1 lakh in each of the last two financial years.
- Taxpayers who have received a refund of more than ₹1 lakh in the preceding financial year on account of export or inverted duty structure.
- Taxpayers whose supply is predominantly to government entities.

Businesses close to the ₹50 lakh monthly threshold should monitor their turnover and maintain adequate cash balance in the Electronic Cash Ledger to avoid non-compliance.

## E-Invoicing: Revised Threshold and System Updates

E-invoicing under GST has been progressively made applicable to a wider base of taxpayers. As of the current financial year:

- E-invoicing is mandatory for taxpayers with aggregate annual turnover exceeding ₹5 crore in any preceding financial year.
- The Invoice Registration Portal (IRP) generates an Invoice Reference Number (IRN) and a QR code that must be present on every tax invoice issued to a registered recipient.
- E-invoices are auto-populated into the supplier's GSTR-1, reducing manual data entry and reconciliation effort.

Businesses falling within the threshold must ensure their billing software is integrated with the IRP. Non-issuance of e-invoices where mandatory is treated as non-issuance of a valid tax invoice, which can result in denial of ITC to the recipient.

## Key CBIC Circulars and Clarifications

The Central Board of Indirect Taxes and Customs (CBIC) has issued several circulars during FY 2025-26 clarifying aspects of GST law, including:

**Place of Supply for Services**: Clarifications on the place of supply for cross-border services, particularly for software, cloud-based services and data processing services provided to overseas recipients.

**ITC on Employee-Related Expenses**: Circulars clarifying the eligibility of ITC on expenses such as employee insurance, canteen facilities, and leased accommodation provided by employers.

**Valuation of Corporate Guarantees**: Following amendments to valuation rules, the GST treatment of corporate guarantees provided by holding companies to subsidiaries (and vice versa) has been clarified, impacting group entities significantly.

Businesses should review these circulars in the context of their specific transactions and assess whether any adjustments to ITC claims or output tax positions are required.

## Input Tax Credit: Key Compliance Points

ITC continues to be the most contentious area of GST compliance. For FY 2025-26, key points include:

- ITC can only be claimed to the extent it appears in the taxpayer's GSTR-2B.
- ITC on capital goods must be spread over the useful life (typically 60 months), and reversal obligations on disposal or change of use must be tracked.
- ITC on inputs used partly for business and partly for exempt or non-business purposes must be reversed under the proportionate reversal rules (Rule 42 and 43).
- Businesses should conduct periodic reconciliation of books of accounts with GSTR-2B to identify ineligible ITC and make timely reversals.

## Annual Return and Reconciliation Statement

The GSTR-9 (Annual Return) and GSTR-9C (Reconciliation Statement) for FY 2024-25 are due to be filed during the current financial year. Key points:

- GSTR-9 is mandatory for taxpayers with aggregate turnover exceeding ₹2 crore.
- GSTR-9C (self-certified reconciliation) is mandatory for taxpayers with aggregate turnover exceeding ₹5 crore.
- The annual return requires reconciliation of ITC as per books, GSTR-3B, and GSTR-2A/2B, and any differences must be explained or adjusted.

## Compliance Checklist for FY 2025-26

- Verify e-invoicing applicability and ensure IRP integration
- Use GSTR-1A for amendments before GSTR-3B filing each month
- Monitor Rule 86B applicability and maintain adequate cash ledger balance
- Reconcile GSTR-2B with purchase register monthly
- Review CBIC circulars for impact on specific transactions
- Prepare for GSTR-9 / GSTR-9C filing for FY 2024-25

*This article is for informational purposes only and does not constitute professional advice.*
    `.trim(),
  },
  {
    category: "Tax Updates",
    title: "Income Tax Return Filing: Updated Requirements for the Current Assessment Year",
    excerpt:
      "A comprehensive guide to the updated income tax return forms and their implications for individual and corporate taxpayers in the current assessment year.",
    date: "May 2026",
    readTime: "10 min read",
    slug: "income-tax-return-requirements",
    featured: true,
    color: "blue",
    content: `
The Income Tax Department has notified the ITR forms for Assessment Year (AY) 2026-27 (relating to income earned during FY 2025-26). Several significant changes have been introduced, particularly in light of the Finance Act 2025 amendments to capital gains taxation, the revised Schedule AL requirements, and updated reporting obligations under the Annual Information Statement (AIS) framework.

## Applicability of ITR Forms for AY 2026-27

The choice of ITR form depends on the nature of the taxpayer and their income sources:

- **ITR-1 (Sahaj)**: Individuals with salary income, one house property, other sources income up to ₹50 lakh. Not applicable where taxpayer has capital gains, business income, or is a director/holds unlisted shares.
- **ITR-2**: Individuals and HUFs with capital gains, income from more than one house property, or foreign assets. Does not include business/professional income.
- **ITR-3**: Individuals and HUFs with business or professional income (including presumptive income where ITR-4 is not applicable).
- **ITR-4 (Sugam)**: Individuals, HUFs, and firms (other than LLPs) opting for presumptive taxation under Sections 44AD, 44ADA, or 44AE, subject to turnover/income limits.
- **ITR-5**: Partnership firms, LLPs, AOPs, BOIs, and other entities.
- **ITR-6**: Companies other than those claiming exemption under Section 11.
- **ITR-7**: Trusts, political parties, research institutions, and other entities filing under Sections 139(4A) to 139(4F).

## Key Changes Pursuant to Finance Act 2025

**Capital Gains Reporting — Post-Amendment Structure**

The Finance Act 2025 introduced significant changes to the capital gains taxation structure, which are now fully reflected in the AY 2026-27 ITR forms:

- **Short-Term Capital Gains (STCG) on listed equity shares / equity mutual funds (Section 111A)**: The tax rate has been revised to 20% (from the earlier 15%) for transfers on or after 23rd July 2024. The ITR Schedule CG now separately captures gains taxable at the new rate.
- **Long-Term Capital Gains (LTCG) on listed equity shares / equity mutual funds (Section 112A)**: The exemption threshold remains ₹1.25 lakh per year, but the tax rate is now 12.5% (revised from 10%). Gains on assets transferred before and after 23rd July 2024 are separately reported.
- **LTCG on other assets (Section 112)**: The indexation benefit has been removed for transfers of certain assets on or after 23rd July 2024, and a flat rate of 12.5% applies. Taxpayers holding assets acquired before this date need to carefully compute gains under the applicable rules.
- **Holding Period Changes**: The holding period for certain assets (such as unlisted bonds and debentures) to qualify as long-term has been revised. Taxpayers should verify the applicable holding period for each asset class.

**Updated Schedule AL (Assets and Liabilities)**

Schedule AL requires disclosure of assets and liabilities as at the end of the financial year. For AY 2026-27:

- The threshold for mandatory disclosure has been revised — individuals and HUFs with total income exceeding ₹50 lakh (previously ₹1 crore in some contexts) are required to file Schedule AL.
- The schedule now requires more granular disclosure, including category-wise listing of financial assets, immovable property, jewellery, vehicles, and outstanding liabilities.
- Taxpayers must ensure that all assets held in their name (including jointly held assets) are accurately disclosed.

## Annual Information Statement (AIS) and Pre-filled Returns

The AIS framework continues to be the backbone of the income tax return pre-filling initiative. For AY 2026-27:

- AIS now includes data from a wider set of sources including cryptocurrency exchanges, payment aggregators, offshore reporting entities, and foreign assets disclosures under FATCA/CRS.
- The Taxpayer Information Summary (TIS) consolidates the AIS data into a category-wise summary that is used for pre-filling ITR.
- Taxpayers should review the AIS carefully before filing and submit feedback for any incorrect or duplicate entries. Discrepancies between reported income and the AIS data may trigger automated notices.

## Key Deductions and Exemptions — Changes for AY 2026-27

- **Section 80C**: The aggregate limit of ₹1.5 lakh remains unchanged, though taxpayers opting for the new tax regime (Section 115BAC) cannot claim most deductions.
- **New Tax Regime (Section 115BAC)**: The new tax regime with revised slab rates is now the default regime for individuals and HUFs. Taxpayers wishing to continue with the old regime (and claim deductions under Chapter VIA) must specifically opt out.
- **Standard Deduction**: Under the new regime, the standard deduction for salaried individuals and pensioners has been revised.
- **Rebate under Section 87A**: Eligibility and quantum of rebate differs between the old and new regime — taxpayers should verify their rebate entitlement.

## Due Dates for AY 2026-27

The following are the standard due dates (subject to any extensions notified by the CBDT):

- **31st July 2026**: Individuals, HUFs, and other taxpayers not required to get accounts audited (and not having international/specified domestic transactions).
- **31st October 2026**: Taxpayers required to get accounts audited (companies, firms with turnover above prescribed limits, professionals with gross receipts above limits).
- **30th November 2026**: Taxpayers required to furnish a report in Form 3CEB (transfer pricing report).

## Advance Tax Obligations

Taxpayers with estimated tax liability exceeding ₹10,000 (after TDS) are required to pay advance tax in four instalments:

| Instalment | Due Date | Minimum Cumulative Payment |
|---|---|---|
| 1st | 15th June 2025 | 15% of tax liability |
| 2nd | 15th September 2025 | 45% of tax liability |
| 3rd | 15th December 2025 | 75% of tax liability |
| 4th | 15th March 2026 | 100% of tax liability |

Shortfall in advance tax payment attracts interest under Section 234B (shortfall) and Section 234C (deferment of instalments).

## Compliance Checklist for AY 2026-27

- Review AIS and TIS on the income tax portal; submit feedback for incorrect entries
- Identify applicable ITR form based on income sources
- Compute capital gains under the revised rates (pre and post 23 July 2024 transfers separately)
- Prepare Schedule AL with complete asset and liability disclosure
- Verify TDS credits in Form 26AS and reconcile with salary certificates (Form 16) and other TDS certificates
- Determine whether the old or new tax regime is more beneficial and opt accordingly before filing
- Ensure advance tax payments are made by the due dates to avoid interest

*This article is for informational purposes only and does not constitute professional advice.*
    `.trim(),
  },
  {
    category: "Compliance Updates",
    title: "Annual Compliance Under the Companies Act: Key ROC Filing Deadlines",
    excerpt:
      "An essential checklist of regulatory filings and deadlines under the Companies Act that every business must track to maintain good standing.",
    date: "May 2026",
    readTime: "7 min read",
    slug: "mca-compliance-calendar",
    featured: true,
    color: "slate",
    content: `
Every company incorporated under the Companies Act, 2013 and every Limited Liability Partnership (LLP) registered under the LLP Act, 2008 is required to comply with a set of annual statutory filings with the Ministry of Corporate Affairs (MCA) / Registrar of Companies (ROC). Non-compliance attracts financial penalties, disqualification of directors, and in extreme cases, strike-off of the entity.

The following is a structured compliance checklist for FY 2025-26, with applicable forms, due dates, and consequences of default.

## Companies: Annual Compliance Checklist

**1. Annual General Meeting (AGM)**

Every company (other than a One Person Company) must hold its AGM within 6 months from the close of the financial year, i.e., by 30th September 2026 for FY 2025-26. The AGM is the trigger event for several downstream filings.

**2. AOC-4 — Filing of Financial Statements**

| Particulars | Details |
|---|---|
| Form | AOC-4 (or AOC-4 XBRL for applicable companies) |
| Contents | Balance Sheet, Profit & Loss Account, Directors' Report, Auditor's Report, CFS (if applicable) |
| Due Date | Within 30 days of AGM (i.e., by 29th October 2026 if AGM held on 30th September) |
| Late Filing Fee | ₹100 per day of delay (no cap) |

Companies required to file in XBRL format include listed companies and companies with paid-up capital of ₹5 crore or more, or turnover of ₹100 crore or more.

**3. MGT-7 / MGT-7A — Annual Return**

| Particulars | Details |
|---|---|
| Form | MGT-7 (for companies other than small companies and OPCs) / MGT-7A (for small companies and OPCs) |
| Contents | Shareholding pattern, director details, KMP details, meetings held, indebtedness |
| Due Date | Within 60 days of AGM (i.e., by 29th November 2026 if AGM held on 30th September) |
| Late Filing Fee | ₹100 per day of delay (no cap) |

**4. ADT-1 — Appointment/Ratification of Auditor**

| Particulars | Details |
|---|---|
| Form | ADT-1 |
| Trigger | New appointment or ratification at AGM |
| Due Date | Within 15 days of AGM |

Note: Under the Companies Act, 2013, auditor appointments at the first AGM are for a 5-year term. Ratification at each subsequent AGM is optional (following the 2017 amendment) unless the articles require it.

**5. DIR-3 KYC — Director KYC**

| Particulars | Details |
|---|---|
| Form | DIR-3 KYC (for first-time KYC) / DIR-3 KYC Web (for subsequent years if no change) |
| Applicability | Every individual holding a DIN as at 31st March of the financial year |
| Due Date | 30th September 2026 |
| Consequence of Default | DIN is marked as "Deactivated due to non-filing of DIR-3 KYC". DIN cannot be used until KYC is completed with a late fee of ₹5,000. |

**6. MSME-1 — Half-Yearly Return for Dues to MSMEs**

Companies with outstanding payments to MSME suppliers for more than 45 days must file MSME-1 twice a year:
- For the period October to March: due by 30th April 2026
- For the period April to September: due by 31st October 2026

**7. DPT-3 — Return of Deposits**

Every company (other than a government company) must file DPT-3 annually by 30th June, reporting outstanding deposits or money received that is not a deposit.

## LLPs: Annual Compliance Checklist

**1. LLP Form 11 — Annual Return**

| Particulars | Details |
|---|---|
| Form | Form 11 |
| Contents | Details of partners, their contribution, and changes during the year |
| Due Date | 30th May 2026 (for FY 2025-26) |
| Late Filing Fee | ₹100 per day of delay after due date |

**2. LLP Form 8 — Statement of Account and Solvency**

| Particulars | Details |
|---|---|
| Form | Form 8 |
| Contents | Statement of Assets and Liabilities, Statement of Income and Expenditure, Solvency declaration |
| Due Date | 30th October 2026 (for FY 2025-26) |
| Audit Requirement | LLPs with turnover exceeding ₹40 lakh or contribution exceeding ₹25 lakh must get accounts audited |
| Late Filing Fee | ₹100 per day of delay after due date |

## Consequences of Non-Compliance

Non-filing of statutory documents has the following consequences:

- **Financial Penalties**: Late filing attracts ₹100 per day per form, with no upper cap, resulting in significant penalties over time.
- **Director Disqualification**: Under Section 164(2) of the Companies Act, if a company has not filed its financial statements or annual returns for three consecutive years, its directors are disqualified from being appointed as directors of any company for five years.
- **Company Strike-Off**: The ROC may initiate strike-off proceedings under Section 248 against companies that have not been filing their annual returns and financial statements.
- **LLP Dissolution**: Similarly, LLPs that default in annual filings may face dissolution proceedings.

## Key Dates Summary — FY 2025-26

| Event | Due Date |
|---|---|
| LLP Form 11 (Annual Return) | 30 May 2026 |
| DPT-3 (Return of Deposits) | 30 June 2026 |
| MSME-1 (Apr–Sep period) | 31 Oct 2026 |
| LLP Form 8 (Accounts & Solvency) | 30 Oct 2026 |
| AOC-4 (Financial Statements) | Within 30 days of AGM |
| MGT-7 / MGT-7A (Annual Return) | Within 60 days of AGM |
| DIR-3 KYC | 30 Sep 2026 |

## Compliance Recommendations

- Maintain a dedicated compliance calendar with reminders set 30 days in advance of each due date
- Hold the AGM well before 30th September to allow sufficient time for downstream filings
- Ensure DIN of all directors is active and KYC is completed by 30th September
- Engage a professional for ROC and MCA filings to avoid inadvertent errors and penalties

*This article is for informational purposes only and does not constitute professional advice.*
    `.trim(),
  },
  {
    category: "Audit Insights",
    title: "Internal Controls: A Framework for Growing Business Entities",
    excerpt:
      "As businesses scale, robust internal controls become critical. This article explores practical frameworks for implementing effective internal controls.",
    date: "April 2026",
    readTime: "6 min read",
    slug: "internal-controls-best-practices",
    featured: false,
    color: "blue",
    content: `
As businesses grow, the complexity of operations increases and the risk of errors, irregularities, and fraud also rises. A robust internal control framework helps businesses mitigate these risks, ensure reliable financial reporting, and maintain regulatory compliance.

## What Are Internal Controls?

Internal controls are processes and procedures designed and implemented by management to provide reasonable assurance regarding the achievement of operational objectives, reliability of financial reporting, and compliance with applicable laws and regulations.

## Key Components of an Internal Control Framework

**Control Environment**
The control environment sets the tone of the organisation. It includes the values, ethics, and integrity demonstrated by management, and the organisational structure and assignment of authority and responsibility.

**Risk Assessment**
Management should periodically identify and assess risks that may affect the achievement of business objectives. This includes both internal risks (process failures, key person dependencies) and external risks (regulatory changes, market disruptions).

**Control Activities**
Control activities are the specific policies and procedures that help ensure management directives are carried out. These include authorisation controls, reconciliation procedures, physical safeguards, and segregation of duties.

**Segregation of Duties**
A fundamental control principle — no single individual should have complete control over a transaction from initiation to recording to custody. Segregation of duties reduces the risk of both error and fraud.

**Information and Communication**
Relevant information should be identified, captured, and communicated in a form and timeframe that enables people to carry out their responsibilities.

**Monitoring**
Internal controls should be monitored over time to assess their quality and effectiveness. This may include ongoing monitoring activities and periodic internal audits.

## Common Control Gaps in Growing Businesses

- Over-reliance on a single person for critical functions
- Absence of formal approval processes for expenses and purchases
- Lack of periodic bank reconciliation
- No formal vendor onboarding or due diligence process
- Absence of documented Standard Operating Procedures (SOPs)

*For guidance on matters specific to your business or compliance requirements, please contact CPALS & Co.*
    `.trim(),
  },
  {
    category: "Business Advisory",
    title: "Working Capital Management: Considerations for Small and Medium Enterprises",
    excerpt:
      "Effective working capital management is crucial for business sustainability. We explore strategies for optimising cash flow and liquidity.",
    date: "April 2026",
    readTime: "5 min read",
    slug: "working-capital-management",
    featured: false,
    color: "emerald",
    content: `
Working capital — the difference between current assets and current liabilities — is the lifeblood of any business. For Small and Medium Enterprises (SMEs), effective management of working capital is often the difference between sustainable growth and financial stress.

## Understanding the Working Capital Cycle

The working capital cycle represents the time taken to convert net current assets and liabilities into cash. A shorter cycle generally indicates efficient operations. The cycle typically includes:

- Raw material procurement and storage
- Production or service delivery
- Inventory holding
- Credit extended to customers (debtors)
- Payment received from customers

## Key Areas of Working Capital Management

**Receivables Management**
Timely collection of outstanding dues is critical. Businesses should establish clear credit terms, conduct periodic reviews of debtor ageing, and follow up systematically on overdue accounts.

**Inventory Management**
Excess inventory ties up working capital. Businesses should adopt inventory optimisation techniques — such as just-in-time procurement where feasible — and conduct periodic stock reviews to identify slow-moving or obsolete items.

**Payables Management**
While timely payment to vendors is important for maintaining relationships and creditworthiness, businesses should also leverage credit terms offered by suppliers to manage cash outflows efficiently.

**Cash Flow Forecasting**
A 13-week or monthly rolling cash flow forecast helps businesses anticipate shortfalls and surpluses, enabling proactive management of working capital needs.

## Banking and Finance

SMEs should explore working capital credit facilities available from banks, including cash credit facilities, overdrafts, and invoice discounting. CMA (Credit Monitoring Arrangement) data preparation is typically required for such facilities.

*For guidance on matters specific to your business or compliance requirements, please contact CPALS & Co.*
    `.trim(),
  },
  {
    category: "Tax Updates",
    title: "Tax Treatment of Employee Stock Option Plans (ESOPs): An Overview",
    excerpt:
      "Employee Stock Option Plans have specific tax treatment at different stages. This article provides clarity on the applicable tax provisions.",
    date: "March 2026",
    readTime: "6 min read",
    slug: "esop-tax-implications",
    featured: false,
    color: "slate",
    content: `
Employee Stock Option Plans (ESOPs) have become an integral component of compensation packages, particularly in technology and startup companies. The tax treatment of ESOPs involves multiple stages and requires careful planning by both employees and employers.

## Stages of an ESOP

**Grant**: The company grants options to the employee at a specified exercise price.

**Vesting**: Options vest over a period (the vesting period), typically subject to continued employment and performance conditions.

**Exercise**: The employee exercises the vested options and acquires shares at the exercise price.

**Sale**: The employee subsequently sells the shares.

## Tax Treatment for Employees

**At Exercise (Perquisite Tax)**
When an employee exercises options, the difference between the Fair Market Value (FMV) on the date of exercise and the exercise price is treated as a perquisite under the head "Salaries." This amount is subject to tax deduction at source (TDS) by the employer.

For listed companies, FMV is the closing price on the date of exercise. For unlisted companies, FMV is determined by a Category I Merchant Banker.

**Special Provisions for Eligible Start-ups**
Eligible start-ups (as defined under the Income Tax Act) have been granted a deferred payment option. Employees of such start-ups may pay the perquisite tax within 48 months of the allotment or on sale of shares or on cessation of employment, whichever is earliest.

**At Sale (Capital Gains)**
When shares acquired through ESOP are subsequently sold, the gain is taxable as capital gains. The cost of acquisition for capital gains purposes is the FMV on the date of exercise (i.e., the value on which perquisite tax was paid).

The holding period and tax rate depend on whether the shares are listed or unlisted and the duration of holding.

## Employer Obligations

Employers are required to deduct TDS on the perquisite value at the time of exercise. For unlisted companies, obtaining a Merchant Banker certificate for FMV determination is mandatory.

*For guidance on matters specific to your business or compliance requirements, please contact CPALS & Co.*
    `.trim(),
  },
];

export const categoryColors: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
};

export const accentColors: Record<string, string> = {
  emerald: "bg-emerald-500",
  blue: "bg-blue-600",
  slate: "bg-slate-400",
};
