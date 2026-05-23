import { ServiceCategory, ComplianceAgency, ScholarshipItem, BlogPost, PortfolioItem, TestimonialItem } from "./types";

export const COMPANY_CONTACTS = {
  phone1: "+260 775 449 792",
  phone2: "+260 963 910 639",
  email: "rapidbusinessconsultancy83@gmail.com",
  office: "Lusaka, Zambia",
  address: "Premium Plaza, Dedan Kimathi Road, Lusaka, Zambia",
  slogan: "Seeing You Succeeding Is Our Pride.",
  whatsappNumber: "+260775449792",
  whatsappWelcomeMessage: "Hello Rapid Business Consultancy! I would like to inquire about your services."
};

export const CORE_VALUES = [
  {
    title: "Client Success First",
    description: "Our absolute core belief is that our growth is tied directly to the success of the clients we guide.",
    icon: "Heart"
  },
  {
    title: "Absolute Integrity",
    description: "Transparent, honest consultation with strict adherence to professional standards and regulatory frameworks.",
    icon: "Shield"
  },
  {
    title: "Rapid Execution",
    description: "Time is money. We process business documents, company profiles, and registrations with stellar turnaround.",
    icon: "Zap"
  },
  {
    title: "Elite Professionalism",
    description: "Whether drafting a constitution or configuring bookkeeping software, our work meets global corporate standards.",
    icon: "Briefcase"
  }
];

export const COMPANY_OBJECTIVES = [
  "Enable simple, hassle-free business compliance for Zambian startups and seasoned enterprises.",
  "Create world-class visual assets (company profiles, logos, guidelines) that make local businesses globally competitive.",
  "Guide Zambian students and young professionals step-by-step into life-changing local and international scholarships.",
  "Upgrade financial systems via professional accounting setup, strict bookkeeping, and automated tax advice.",
  "Optimize human resource operations through secure payroll systems, certified training, and firm policy handbooks."
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "business-dev",
    title: "Business Development",
    description: "Advisory, registration, and frameworks to turn custom startup ideas into high-growth investment-ready corporate structures.",
    iconName: "TrendingUp",
    services: [
      {
        id: "strategy-advisory",
        title: "Business Strategy & Advisory",
        description: "Comprehensive corporate diagnosis helping you map competitive advantages, structural expansion, and strategic market capture.",
        iconName: "Compass",
        bulletPoints: [
          "Market penetration diagnostics",
          "Competitive advantage mapping",
          "Custom expansion models",
          "Ongoing risk analysis"
        ]
      },
      {
        id: "startup-support",
        title: "Startup Support & Mentorship",
        description: "Guiding fresh entrepreneurs with critical legal structures, foundational tools, and key business insights to maximize longevity.",
        iconName: "Sparkles",
        bulletPoints: [
          "Co-founder equity advisory",
          "Operational roadmap design",
          "Business validation check",
          "Mentorship sessions"
        ]
      },
      {
        id: "company-structuring",
        title: "Company Structuring",
        description: "Setting up solid legal hierarchies, shareholding distribution, and asset allocation policies tailored to growth objectives.",
        iconName: "Network",
        bulletPoints: [
          "Shareholding class allocation",
          "Corporate governance structures",
          "Subsidiary configuration",
          "Asset separation models"
        ]
      },
      {
        id: "investment-readiness",
        title: "Investment Readiness Guidance",
        description: "Structuring financials, pitches, and compliance audits to make your business attractive to international and local venture capitalists.",
        iconName: "Coins",
        bulletPoints: [
          "Investor deck preparation",
          "Financial forecast validation",
          "Due-diligence health checks",
          "Valuation planning"
        ]
      }
    ]
  },
  {
    id: "marketing-branding",
    title: "Marketing & Branding",
    description: "Designing corporate visual identities and building aggressive social media and company profiles to turn your brand into an industry leader.",
    iconName: "Palette",
    services: [
      {
        id: "digital-marketing",
        title: "Digital Marketing Solutions",
        description: "Deploying high-efficiency paid traffic, search marketing, and lead-gen systems to capture clients actively searching for your services.",
        iconName: "Megaphone",
        bulletPoints: [
          "Targeted local ad setup",
          "Search visibility optimization (SEO)",
          "Lead capturing funnels",
          "Analytics and ROI tracking"
        ]
      },
      {
        id: "brand-identity",
        title: "Brand Identity Development",
        description: "Formulating cohesive visual standardizations including elite corporate logos, dynamic color palettes, and strict typography rules.",
        iconName: "Award",
        bulletPoints: [
          "Premium custom logo designs",
          "Color psychology pairing",
          "Brand typography rules",
          "Cohesive brand guidelines"
        ]
      },
      {
        id: "social-media-management",
        title: "Social Media Management",
        description: "Handling multi-channel messaging, copy schedules, and customer inquiries with professional consistency and target growth.",
        iconName: "Globe",
        bulletPoints: [
          "High-conversion content calendars",
          "Audience engagement protocols",
          "Competitor pattern tracking",
          "Cross-platform distribution"
        ]
      },
      {
        id: "social-media-designing",
        title: "Social Media Post Designing",
        description: "Stunning custom graphics, infographics, and carousel layouts built inside official branding assets to force thumbs to stop scrolling.",
        iconName: "Layers",
        bulletPoints: [
          "High-impact visual graphics",
          "Interactive carousels & banners",
          "Informative corporate infographics",
          "Cohesive filter/border styles"
        ]
      },
      {
        id: "company-profile-design",
        title: "Company Profile Designing",
        description: "Authorative, multi-page corporate profiles that detail capabilities, projects, team, and corporate structure to close B2B tenders.",
        iconName: "FileText",
        bulletPoints: [
          "Tender-compliant layouts",
          "Professional copywriting",
          "Bespoke graphic insertion",
          "Digital & print-ready formats"
        ]
      }
    ]
  },
  {
    id: "accounting-finance",
    title: "Accounting & Finance",
    description: "Stellar bookkeeping, professional tax compliance with ZRA, and software installations to shield your profits and guide sound decisions.",
    iconName: "Calculator",
    services: [
      {
        id: "bookkeeping-services",
        title: "Bookkeeping Services",
        description: "Continuous transaction recording, ledger balancing, and cashflow categorization for pristine, audit-ready financial transparency.",
        iconName: "Calendar",
        bulletPoints: [
          "Real-time expense logging",
          "Bank statement reconciliation",
          "Accounts receivable checks",
          "Monthly ledger balance reporting"
        ]
      },
      {
        id: "financial-statements",
        title: "Financial Statement Preparation",
        description: "Structuring comprehensive Balance Sheets, Income Statements, and Cash Flow Statements to report to stakeholders and banks.",
        iconName: "PieChart",
        bulletPoints: [
          "Frictionless balance sheet prep",
          "Direct profit & loss audits",
          "Detailed financial statements",
          "Annual reporting dossiers"
        ]
      },
      {
        id: "tax-preparation",
        title: "Tax Preparation & Filing (ZRA)",
        description: "Handling complicated Zambia Revenue Authority tax declarations including Income Tax, Turnover Tax, VAT, and PAYE returns.",
        iconName: "Briefcase",
        bulletPoints: [
          "Turnover tax calculations",
          "Strict monthly VAT returns",
          "TPIN tax filing strategies",
          "ZRA clean clearance certificate audits"
        ]
      },
      {
        id: "accounting-software",
        title: "Bookkeeping/Accounting Software Setup",
        description: "Proactive installation and customized configuration of QuickBooks, Sage, or custom cloud platforms paired with thorough staff training.",
        iconName: "Cpu",
        bulletPoints: [
          "Sage and QuickBooks installations",
          "Custom charts of accounts mapping",
          "Automated billing setup",
          "On-site team software training"
        ]
      }
    ]
  },
  {
    id: "hr-management",
    title: "Human Resource Management",
    description: "Protecting business longevity with secure recruitment processes, bulletproof employment policies, and error-free payroll software setup.",
    iconName: "Users",
    services: [
      {
        id: "recruitment-training",
        title: "Recruitment & Training",
        description: "Placing verified local professionals in critical roles and training staff in modern corporate cultures and elite performance metrics.",
        iconName: "UserCheck",
        bulletPoints: [
          "Rigorous background checks",
          "Skill gap assessment training",
          "Job description optimization",
          "Corporate onboarding framework"
        ]
      },
      {
        id: "payroll-management",
        title: "Payroll Management & Setup",
        description: "Installing robust automatic calculations for salaries, PAYE deductions, NHIMA subscriptions, and direct bank transfers.",
        iconName: "CreditCard",
        bulletPoints: [
          "Automatic payslip generations",
          "Compliant NAPSA deductions",
          "NHIMA monthly payroll returns",
          "Audit-ready payment records"
        ]
      },
      {
        id: "hr-policy",
        title: "HR Policy & Handbook Development",
        description: "Drafting bulletproof code of conduct handbooks and employment terms completely aligned with Zambian Labor Laws.",
        iconName: "FileShield",
        bulletPoints: [
          "Disciplinary code formulations",
          "Zambian Labor Code compliance",
          "Custom leave & benefit terms",
          "Conflict-resolution roadmaps"
        ]
      }
    ]
  },
  {
    id: "professional-doc",
    title: "Professional Documentation",
    description: "Flawless document preparation capturing corporate vision, student capabilities, and business layouts to help you secure opportunities.",
    iconName: "FileSpreadsheet",
    services: [
      {
        id: "cv-writing",
        title: "CV & Resume Writing",
        description: "Engineering strategic, ATS-optimized, high-impact CVs and cover letters showcasing leadership, technical skill, and results.",
        iconName: "User",
        bulletPoints: [
          "ATS-compliant architectures",
          "Result-oriented action verb copy",
          "Industry-specific skill layouts",
          "Persuasive tailored cover letters"
        ]
      },
      {
        id: "business-plan",
        title: "Business Plan Writing",
        description: "Developing comprehensive, data-driven business plans complete with local market size mapping, operations, and financial projections.",
        iconName: "BarChart3",
        bulletPoints: [
          "Executive summary writing",
          "Zambian market research analytics",
          "Socio-economic impact projections",
          "Full 3-to-5 year financial forecasts"
        ]
      },
      {
        id: "constitution-drafting",
        title: "Constitution Writing",
        description: "Formulating formal association, cooperative, or limited liability constitutions suitable for PACRA submissions and NGO guidelines.",
        iconName: "Gavel",
        bulletPoints: [
          "PACRA-compliant legal verbiage",
          "Executive board power terms",
          "Liquidation & holding guidelines",
          "Cooperative model configurations"
        ]
      },
      {
        id: "proposal-writing",
        title: "Proposal Writing",
        description: "Drafting highly-persuasive, detailed project proposals to secure lucrative B2B supply contracts, NGO donor grants, or equity partnerships.",
        iconName: "ClipboardList",
        bulletPoints: [
          "B2B service request replies",
          "Grant proposal configurations",
          "Clear budget allocation charts",
          "Measurable project roadmap design"
        ]
      }
    ]
  }
];

export const COMPLIANCE_AGENCIES: ComplianceAgency[] = [
  {
    id: "pacra",
    name: "PACRA",
    fullName: "Patents and Companies Registration Agency",
    logoText: "PACRA",
    description: "The primary legal gatekeeper for formal commerce in Zambia. All businesses must be registered under PACRA to open bank accounts, sign commercial leases, or trade legally.",
    requirements: [
      "Company Name clearance checking & validation",
      "Drafting and execution of Articles of Association or Cooperative Constitutions",
      "Annual returns submission to protect active company status",
      "Documentation of changes in Directors, Shareholders, or Share Capital"
    ],
    ctaText: "Inquire PACRA Setup"
  },
  {
    id: "zra",
    name: "ZRA",
    fullName: "Zambia Revenue Authority",
    logoText: "ZRA",
    description: "The official tax regulatory body in Zambia. Non-compliance leads to severe tax interest, heavy penalties, and immediate withdrawal of operating clearance certificates.",
    requirements: [
      "TPIN registration for corporate entities or individuals",
      "Monthly VAT, PAYE, and Turnover Tax accounting submissions",
      "Direct applications for ZRA Tax Clearance Certificates",
      "Strategic tax penalty waiver requests and dispute resolution representation"
    ],
    ctaText: "Inquire Tax Registration"
  },
  {
    id: "nhima",
    name: "NHIMA",
    fullName: "National Health Insurance Management Authority",
    logoText: "NHIMA",
    description: "Governs mandatory national health insurance compliance across Zambia. All formally employed citizens must be registered and monthly contributions paid accurately.",
    requirements: [
      "Official registration of the employer entity",
      "Prompt registration of the staff roster with NHIMA portal",
      "Calculation of the statutory 1% employee + 1% employer monthly splits",
      "NHIMA compliance clearance reports"
    ],
    ctaText: "Get NHIMA Compliant"
  },
  {
    id: "zppa",
    name: "ZPPA",
    fullName: "Zambia Public Procurement Authority",
    logoText: "ZPPA",
    description: "The governing agency overseeing public tenders and government distribution channels. Essential for securing state tenders, municipal logistics, and regional supply pacts.",
    requirements: [
      "Supplier registration on the electronic government portal (e-GP)",
      "Zambia public tender preparation and submission oversight",
      "Mandatory corporate documentation compliance and certified copies",
      "Tender bidding advice and strategic proposal alignments"
    ],
    ctaText: "Apply ZPPA Registration"
  },
  {
    id: "tcz",
    name: "TCZ",
    fullName: "Teaching Council of Zambia",
    logoText: "TCZ",
    description: "Ensures professional standards in the academic sector. It is illegal to employ or practice as an educator in Zambia without formal TCZ evaluation and standard licensing.",
    requirements: [
      "Teacher professional registration dossiers",
      "Evaluating foreign teacher academic credentials",
      "TCZ ongoing standard compliance consultation",
      "Academic institution certificate verification checks"
    ],
    ctaText: "Secure TCZ Licensing"
  },
  {
    id: "eiz",
    name: "EIZ",
    fullName: "Engineering Institution of Zambia",
    logoText: "EIZ",
    description: "Appoints standards for all engineering projects, architecture certifications, construction contracts, and engineering advisory models located inside Zambian borders.",
    requirements: [
      "Individual and corporate EIZ registrations",
      "EIZ certificate process guidance for specialized firms",
      "Annual dues and professional registration reviews",
      "Project planning compliance and safety audits mapping"
    ],
    ctaText: "Request EIZ Assistance"
  },
  {
    id: "nmcz",
    name: "NMCZ",
    fullName: "Nursing and Midwifery Council of Zambia",
    logoText: "NMCZ",
    description: "Assures correct clinical credentials and licensing protocols for medical clinics, nursing bureaus, community health facilities, and midwives nationwide.",
    requirements: [
      "Clinic licensing pre-screening support documentation",
      "Nurse/midwife professional verification processing",
      "Medical institution statutory compliance consults",
      "NMCZ board exam preparation advisory services"
    ],
    ctaText: "Consult NMCZ Process"
  }
];

export const SCHOLARSHIPS_DATA: ScholarshipItem[] = [
  {
    id: "zambia-local-merit",
    title: "Zambian Public Universities Grant Scheme",
    type: "Zambian",
    location: "UNZA, CBU, or Mulungushi University (Zambia)",
    coverage: "Tuition Fees & Accommodation Subsidy",
    description: "Official government, NGO, and corporate grants assisting brilliant local high school graduates with high scores to study locally.",
    eligibility: [
      "Must hold Grade 12 Certificate with 5 O-level Merits or higher",
      "Zambian citizenship with official NRC documentation",
      "Admission letter to a accredited public university in Zambia"
    ],
    deadline: "October 15, 2026"
  },
  {
    id: "uk-commonwealth-zambia",
    title: "Zambia-UK Commonwealth Scholarship Pathway",
    type: "International",
    location: "Leading Universities (United Kingdom)",
    coverage: "Fully Funded (Tuition, Flights, Monthly Stipend)",
    description: "Prestigious British council fellowships aimed at transforming high-potential Zambian leaders across Healthcare, Law, Engineering, and Finance.",
    eligibility: [
      "Acquired a minimum of a strong 2:1 upper-class Bachelors degree",
      "Zambian permanent resident or citizen",
      "A detailed, measurable 5-year developmental plan showing benefit to Zambia"
    ],
    deadline: "September 10, 2026"
  },
  {
    id: "china-silk-road-scholarship",
    title: "Lusaka to Beijing Silk Road Scholarship",
    type: "Study Abroad",
    location: "Tsinghua & Peking Universities (China)",
    coverage: "Fully Funded + Housing + Medical Insurance",
    description: "Exclusive academic exchange targeting infrastructure development, tech systems, computer science, and agricultural innovation.",
    eligibility: [
      "Excellent grades in STEM disciplines",
      "Under age 30 for Bachelor/Master admissions",
      "2 letters of recommendation from senior academic professors"
    ],
    deadline: "August 01, 2026"
  },
  {
    id: "hungaricum-stipendium-zambia",
    title: "Stipendium Hungaricum Scholarship (Hungary)",
    type: "International",
    location: "Top Hungarian State Universities",
    coverage: "Full Tuition + Dorm Room Space + Living Allowance",
    description: "Annual bilateral agreement between the Hungarian government and Zambia Ministry of Education, supporting BSc, MSc, and PhD tracks.",
    eligibility: [
      "Nominated officially by the Zambia Ministry of Education",
      "Exceptional academic reports",
      "Fluent english proficiency (IELTS not strictly required if degree was in English)"
    ],
    deadline: "January 15, 2027"
  },
  {
    id: "turkiye-burslari-zambia",
    title: "Türkiye Bursları Scholarship - Zambian Intake",
    type: "Study Abroad",
    location: "Prestigious Turkish Research Institutions",
    coverage: "Fully Funded, German/Turkish lessons, Health Cover",
    description: "Fully-funded government scholarship designed for international students to pursue degrees in Medicine, Business, Architecture, or Agriculture.",
    eligibility: [
      "Minimum of 70% academic grade average (75-90% for master/doctoral)",
      "Must not be currently registered in a Turkish university",
      "Strong letter of purpose describing career targets"
    ],
    deadline: "February 20, 2027"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-pacra-zra-guide",
    title: "How to Keep Your Business Fully Compliant in Zambia: PACRA & ZRA Insights",
    summary: "Registering a company is only step one. Discover the critical monthly and annual statutory duties required to protect your business license from regulatory fines.",
    content: "Building an enterprise in Zambia is highly rewarding, but failure to establish compliant channels can trigger devastating capital penalties. Each year, thousands of local businesses are struck off the Patents and Companies Registration Agency (PACRA) database because they failed to submit their simple Annual Returns. Similarly, the Zambia Revenue Authority (ZRA) routinely issues strict enforcement notices to businesses that operate without a registered Taxpayer Identification Number (TPIN). \n\nTo keep your company compliant, follow this checklist:\n1. Submit Annual Returns to PACRA within 3 months of your firm's anniversary date.\n2. Apply for a TPIN within 30 days of registration.\n3. File Turnover Tax (4% on gross sales below K800,000 per annum) by the 14th of every month.\n4. Avoid penalties by filing VAT returns on time.\n\nAt Rapid Business Consultancy, we take this administrative load completely off your shoulders so you can focus on building revenue, securing tenders, and growing your brand securely.",
    category: "Compliance",
    author: "Grace Mwansa, Senior Advisory Partner",
    date: "May 18, 2026",
    readTime: "4 min read",
    imageAlt: "Business compliance and registration papers in Lusaka office"
  },
  {
    id: "blog-scholarship-secrets",
    title: "A Complete Guide to Applying for International Scholarships from Zambia",
    summary: "Securing an abroad scholarship is not about luck; it is about preparing authority documents. Learn how we help students build bulletproof dossiers that win committees.",
    content: "Every year, organizations like the Commonwealth, Stipendium Hungaricum, and DAAD set aside hundreds of fully-funded study spots specifically for Zambian students. Yet, over 80% of applicants are rejected at the initial sorting stage. The culprit? Poorly formatted CVs, vague study proposals, and weak recommendation letters.\n\nTo construct an elite scholarship portfolio, focus on these three assets:\n- The Academic CV: Detail clear, quantifiable social service and academic metrics. Avoid generic word processors.\n- The Personal Mission Statement: Clearly link how your target degree in Medicine, AI, or Engineering will address a specific developmental bottleneck in Zambia.\n- Professional Recommendation Letters: Request specific references detailing your actual research output, rather than generic praise.\n\nRapid Business Consultancy provides step-by-step guidance, transcript appraisals, admission request help, and professional document designs optimized to win global admissions committees.",
    category: "Scholarship",
    author: "Dr. Kelvin Chilufya, Scholar Coordinator",
    date: "April 29, 2026",
    readTime: "6 min read",
    imageAlt: "Zambian student celebrating international university scholarship admission"
  },
  {
    id: "blog-profile-brand-power",
    title: "The Power of a Professional Company Profile for Attracting Corporate Investors",
    summary: "Your company profile is your formal handshake. Understand the structural framework of profiles that convince corporate partners and win governmental procurement bids.",
    content: "Many Zambian startups pitch high-value mining or civil projects using messy 1-page leaflets or standard word processor printouts. This triggers immediate rejection. Corporate procurement partners and government agencies like ZPPA require a formal, structurally organized Company Profile before placing a bid on active tenders.\n\nAn elite business profile must contain:\n- A detailed Executive Summary and structural organizational hierarchy.\n- Fully registered compliance certifications (PACRA, ZRA TPIN, ZPPA Certificates).\n- Clear, detailed technical capability statements summarizing past completions.\n- Highly detailed safety, quality assurance (QA), and localized environmental preservation clauses.\n\nOur branding designers engineer custom, stunning company profiles complete with elegant layouts matching your corporate blue-and-gold identity to help you win valuable agreements.",
    category: "Branding",
    author: "Banda Chanda, Chief Visual Officer",
    date: "May 12, 2026",
    readTime: "5 min read",
    imageAlt: "Custom corporate golden-navy branding layout on desk"
  },
  {
    id: "blog-tax-tpin-obligations",
    title: "Understanding ZRA Tax Obligations for Small Businesses: TPIN and Turnover Tax",
    summary: "Confused about tax bands in Zambia? Read this high-level summary explaining TPIN activation, turnover tax regulations, and statutory deduction compliance.",
    content: "Keeping accurate accounting calculations is not just about avoiding ZRA fines—it is about planning business expansion. In Zambia, small businesses earning under K800,000 per year are usually taxed under the Turnover Tax mechanism. This attracts an easy 4% flat tax rate, filed and paid on the ZRA TaxOnlines portal by the 14th of every month.\n\nFirms exceeding K800,000 per year must transition to Corporate Income Tax (standard 30% on net profits) and file Value Added Tax (VAT) regularly if their products are non-exempt. Working with an expert accounting team minimizes tax liabilities legally while ensuring that you possess a clean Tax Clearance Certificate for commercial opportunities.\n\nLet Rapid Business Consultancy manage your bookkeeping software solutions, payroll reports, and monthly ZRA reports cleanly.",
    category: "Tax",
    author: "Mulenga Kabwe, Senior CPA Consultant",
    date: "May 03, 2026",
    readTime: "5 min read",
    imageAlt: "Tax calculators and sheets in Zambia office"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-co-profile-civil",
    title: "Premium Company Profile - Kaleza Civil Engineering Group",
    category: "Company Profiles",
    client: "Kaleza Civil Group (Lusaka)",
    description: "Designed a stunning, 20-page high-impact company profile detailing machinery fleet, civil infrastructure compliance certificates, EIZ credentials, and historical projects.",
    features: [
      "Custom gold-foil accent digital graphics",
      "Full compliance certification section layouts",
      "ATS-friendly bidding capability layouts",
      "Printed and luxury digital formats"
    ],
    imageSource: "Civil Profile Showcase"
  },
  {
    id: "port-branding-hotel",
    title: "Complete Visual Identity System - Mwansa Safari Lodge",
    category: "Branding & Identity",
    client: "Mwansa SAFARIS (Livingstone)",
    description: "Formulated an elegant, nature-inspired golden-sand and deep-navy visual system representing top-tier tourism. Included custom letterheads, vehicle decals, and employee uniform guidelines.",
    features: [
      "Custom hand-drawn elephant emblem logo",
      "Official brand guide books and typeface pairings",
      "Social media templates on Instagram & Facebook",
      "Office stationery assets layouts"
    ],
    imageSource: "Safari Brand Design"
  },
  {
    id: "port-social-retail",
    title: "Social Media Campaign post - ZedTech Electronics",
    category: "Social Media Design",
    client: "ZedTech Electronics (Kabwe & Copperbelt)",
    description: "Engineered a high-impact product-launch graphic series for social accounts that generated a 200% increase in lead generation in 14 days.",
    features: [
      "Bold tech-mono display graphics",
      "Interactive multi-pane swipe carousels",
      "Promotional banner graphics matching official colors",
      "Custom highlight covers mapping product lines"
    ],
    imageSource: "ZedTech Launch Ads"
  },
  {
    id: "port-doc-coop",
    title: "Constitutional & Business Plan dossier - Copperbelt Agro Co-Op",
    category: "Business Documents",
    client: "Chambishi Agricultural Co-operative Society",
    description: "Prepared an extensive, grant-approved, multi-page business plan and operational constitution used to register on the Ministry of Agriculture fertilizer input program.",
    features: [
      "Secured K250,000 in regional development funding",
      "Full market-sizing & machinery operational charts",
      "PACRA-compliant custom voting clauses",
      "Expert local sector analysis reports"
    ],
    imageSource: "Agro Business Dossier"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-biz-kaleza",
    name: "Emmanuel Kaleza",
    role: "Managing Director",
    company: "Kaleza Civil Engineering",
    content: "Rapid Business Consultancy is an absolute game changer! They configured our entire company profile, aligned our EIZ parameters, and filed our ZRA tax clearings. Within a week, we secured our biggest government construction bidding task. 'Seeing You Succeeding Is Our Pride' is not just a slogan—it is their true operational blueprint!",
    rating: 5,
    category: "Business"
  },
  {
    id: "test-student-mumbai",
    name: "Prudence Chileshe",
    role: "Master of Science Student",
    company: "Stipendium Hungaricum Awardee",
    content: "I tried applying for international scholarships for two years with no success. Dr. Kelvin at Rapid redesigned my academic CV, customized my personal statement for the Hungary program, and helped me prep for the embassy interview. I got fully funded and I am flying out this autumn! Words cannot express my gratitude.",
    rating: 5,
    category: "Scholarship"
  },
  {
    id: "test-biz-lisa",
    name: "Lisa Tembo",
    role: "Founder",
    company: "Chic Boutique Ltd",
    content: "PACRA and ZRA compliance was a source of massive anxiety for my startup. Rapid Business handled our business registration and set up our bookkeeping software. I now file my 4% monthly turnover tax without stress. I strongly recommend their friendly consultants!",
    rating: 5,
    category: "Compliance"
  },
  {
    id: "test-coop-agro",
    name: "Elder Samuel Phiri",
    role: "Chairman",
    company: "Chambishi Agro Co-op",
    content: "Our organization needed a complex PACRA constitution and a persuasive proposal to raise funding. The consultants at Rapid Business drafted a flawless, bulletproof document. The funding panel was incredibly impressed, and we raising full grant support inside three weeks.",
    rating: 5,
    category: "Business"
  }
];
