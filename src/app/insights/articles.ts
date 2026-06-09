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
    title: "Key Changes in GST Compliance for the Current Financial Year",
    excerpt:
      "An overview of significant amendments and compliance requirements under GST that businesses need to be aware of, including changes to return filing procedures and reconciliation requirements.",
    date: "June 2026",
    readTime: "5 min read",
    slug: "gst-compliance-changes",
    featured: true,
    color: "emerald",
    content: `
The Goods and Services Tax (GST) framework continues to evolve with regular amendments aimed at improving compliance and plugging revenue leakages. The current financial year has brought several notable changes that businesses across all sectors must be aware of.

## Key Changes in Return Filing

The GST Council has revised certain filing timelines and reconciliation requirements. Businesses filing GSTR-1 and GSTR-3B are required to ensure timely reconciliation with auto-populated data in GSTR-2B. Discrepancies beyond the prescribed threshold may attract scrutiny during assessments.

## Input Tax Credit Reconciliation

One of the most critical compliance areas remains Input Tax Credit (ITC) reconciliation. The current framework requires taxpayers to reconcile ITC claims with GSTR-2B on a monthly basis. Any excess ITC claimed without matching supplier data is subject to reversal with applicable interest.

## Annual Return Filing

The GSTR-9 (Annual Return) continues to be mandatory for taxpayers above the prescribed turnover threshold. Businesses should ensure that all monthly returns are accurately filed before attempting the annual return reconciliation.

## E-Invoicing Applicability

E-invoicing requirements have been progressively extended to cover a larger segment of taxpayers. Businesses should verify whether they fall within the current applicability threshold and ensure their billing systems are integrated with the Invoice Registration Portal (IRP).

## Compliance Recommendations

- Maintain systematic month-wise reconciliation of ITC
- Ensure all suppliers are filing returns regularly to safeguard ITC claims
- Review all pending notices and respond within stipulated timelines
- Conduct periodic internal GST audits to identify and correct discrepancies

*This article is for general informational purposes only and does not constitute professional advice. Please consult a qualified professional for specific guidance on your GST compliance requirements.*
    `.trim(),
  },
  {
    category: "Tax Updates",
    title: "Understanding the New Income Tax Return Filing Requirements",
    excerpt:
      "A comprehensive guide to the updated income tax return forms and their implications for individual and corporate taxpayers in the current assessment year.",
    date: "May 2026",
    readTime: "7 min read",
    slug: "income-tax-return-requirements",
    featured: true,
    color: "blue",
    content: `
The Income Tax Department has introduced revised ITR forms for the current assessment year. Taxpayers — individuals, HUFs, firms, LLPs, and companies — should familiarise themselves with the applicable form and the changes introduced.

## Key Changes in ITR Forms

The revised forms require more detailed disclosure of income from various sources, including enhanced reporting for capital gains, foreign assets, and business income. Taxpayers with complex income structures should review the schedule-wise disclosure requirements carefully.

## Disclosure of High-Value Transactions

The current year's returns include expanded requirements for disclosure of high-value financial transactions, including significant cash deposits, property purchases, and foreign remittances. These disclosures are cross-referenced with data from banks and registrars under the Annual Information Statement (AIS).

## Annual Information Statement (AIS)

Taxpayers are advised to review their AIS and Taxpayer Information Summary (TIS) before filing returns. The AIS aggregates information reported by banks, financial institutions, mutual funds, and other entities. Any discrepancies should be addressed and feedback submitted on the portal before filing.

## Due Dates

Filing due dates vary based on whether the taxpayer is required to have their accounts audited under the Income Tax Act or any other law. Taxpayers should note the applicable due dates and plan accordingly to avoid interest and penalties.

## Advance Tax

Taxpayers with estimated tax liability exceeding the prescribed threshold are required to pay advance tax in four instalments. Shortfall in advance tax payment attracts interest under Sections 234B and 234C.

## Compliance Recommendations

- Review AIS/TIS well in advance of filing
- Reconcile TDS credits with Form 26AS
- Ensure all bank accounts and investments are correctly disclosed
- Seek professional advice for complex income situations

*This article is for general informational purposes only and does not constitute professional advice. Please consult a qualified professional for guidance specific to your tax situation.*
    `.trim(),
  },
  {
    category: "Compliance Updates",
    title: "MCA Compliance Calendar: Key Annual Filing Deadlines",
    excerpt:
      "An essential checklist of regulatory filings and deadlines under the Companies Act that every business must track to maintain good standing.",
    date: "May 2026",
    readTime: "4 min read",
    slug: "mca-compliance-calendar",
    featured: true,
    color: "slate",
    content: `
Companies and Limited Liability Partnerships (LLPs) incorporated under the Companies Act, 2013 and LLP Act, 2008 respectively are required to file various annual returns and documents with the Registrar of Companies (ROC). Non-compliance attracts significant penalties and may result in the company being struck off.

## Key Annual Filings for Companies

**MGT-7 / MGT-7A (Annual Return)**
Every company is required to file its Annual Return within 60 days of the Annual General Meeting. The Annual Return contains information about the shareholders, directors, and key managerial personnel.

**AOC-4 (Financial Statements)**
Audited financial statements are required to be filed within 30 days of the Annual General Meeting. Companies with subsidiaries are required to file consolidated financial statements as well.

**ADT-1 (Appointment of Auditor)**
Where a new auditor is appointed or an existing appointment is ratified, the company must file ADT-1 within 15 days of the AGM.

## Key Annual Filings for LLPs

**LLP Form 11 (Annual Return)**
LLPs are required to file their Annual Return by 30th May each year.

**LLP Form 8 (Statement of Account and Solvency)**
LLPs must file the Statement of Account and Solvency by 30th October each year.

## Director KYC

All directors holding a DIN are required to complete their annual KYC (DIR-3 KYC or DIR-3 KYC Web) by 30th September each year. Failure to comply results in deactivation of the DIN.

## Compliance Recommendations

- Maintain a compliance calendar with due dates for all applicable filings
- Plan AGMs and board meetings in advance to ensure timely filing
- Ensure statutory registers and minute books are maintained and updated
- Engage a professional for secretarial compliance to avoid penalties

*This article is for general informational purposes only and does not constitute professional advice. Please consult a qualified professional for guidance on your specific compliance obligations.*
    `.trim(),
  },
  {
    category: "Audit Insights",
    title: "Internal Controls Best Practices for Growing Businesses",
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

*This article is for general informational purposes only and does not constitute professional advice. Please consult a qualified professional for guidance on designing internal controls appropriate to your business.*
    `.trim(),
  },
  {
    category: "Business Advisory",
    title: "Working Capital Management: Strategies for SMEs",
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

*This article is for general informational purposes only and does not constitute professional advice. Please consult a qualified professional for guidance specific to your business situation.*
    `.trim(),
  },
  {
    category: "Tax Updates",
    title: "Tax Implications of ESOP Schemes for Employees and Employers",
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

*This article is for general informational purposes only and does not constitute professional advice. Please consult a qualified professional for guidance on ESOP tax planning specific to your situation.*
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
