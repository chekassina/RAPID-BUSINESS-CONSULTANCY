import {
  ServiceCategory,
  ComplianceAgency,
  ScholarshipItem,
  BlogPost,
  PortfolioItem,
  TestimonialItem
} from "./types";

export const COMPANY_CONTACTS = {
  // Direct Calls
  phone1: "+260775449792",

  // Business WhatsApp
  phone2: "+260963910639",

  email: "rapidbusinessconsultancy83@gmail.com",
  office: "Lusaka, Zambia",
  address: "Premium Plaza, Dedan Kimathi Road, Lusaka, Zambia",
  slogan: "Seeing You Succeeding Is Our Pride.",

  // Main WhatsApp Business Line
  whatsappNumber: "+260963910639",

  whatsappWelcomeMessage:
    "Hello Rapid Business Consultancy! I would like to inquire about your services."
};

export const CORE_VALUES = [
  {
    title: "Client Success First",
    description:
      "Our absolute core belief is that our growth is tied directly to the success of the clients we guide.",
    icon: "Heart"
  },
  {
    title: "Absolute Integrity",
    description:
      "Transparent, honest consultation with strict adherence to professional standards and regulatory frameworks.",
    icon: "Shield"
  },
  {
    title: "Rapid Execution",
    description:
      "Time is money. We process business documents, company profiles, and registrations with stellar turnaround.",
    icon: "Zap"
  },
  {
    title: "Elite Professionalism",
    description:
      "Whether drafting a constitution or configuring bookkeeping software, our work meets global corporate standards.",
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
    description:
      "Advisory, registration, and frameworks to turn custom startup ideas into high-growth investment-ready corporate structures.",
    iconName: "TrendingUp",
    services: [
      {
        id: "strategy-advisory",
        title: "Business Strategy & Advisory",
        description:
          "Comprehensive corporate diagnosis helping you map competitive advantages, structural expansion, and strategic market capture.",
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
        description:
          "Guiding fresh entrepreneurs with critical legal structures, foundational tools, and key business insights to maximize longevity.",
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
        description:
          "Setting up solid legal hierarchies, shareholding distribution, and asset allocation policies tailored to growth objectives.",
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
        description:
          "Structuring financials, pitches, and compliance audits to make your business attractive to international and local venture capitalists.",
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
    description:
      "Designing corporate visual identities and building aggressive social media and company profiles to turn your brand into an industry leader.",
    iconName: "Palette",
    services: [
      {
        id: "digital-marketing",
        title: "Digital Marketing Solutions",
        description:
          "Deploying high-efficiency paid traffic, search marketing, and lead-gen systems to capture clients actively searching for your services.",
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
        description:
          "Formulating cohesive visual standardizations including elite corporate logos, dynamic color palettes, and strict typography rules.",
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
        description:
          "Handling multi-channel messaging, copy schedules, and customer inquiries with professional consistency and target growth.",
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
        description:
          "Stunning custom graphics, infographics, and carousel layouts built inside official branding assets to force thumbs to stop scrolling.",
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
        description:
          "Authoritative, multi-page corporate profiles that detail capabilities, projects, team, and corporate structure to close B2B tenders.",
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
    description:
      "Professional bookkeeping, tax compliance with ZRA, and accounting software setup to guide smarter financial decisions.",
    iconName: "Calculator",
    services: [
      {
        id: "bookkeeping-services",
        title: "Bookkeeping Services",
        description:
          "Continuous transaction recording, ledger balancing, and cashflow categorization for audit-ready financial transparency.",
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
        description:
          "Structuring comprehensive Balance Sheets, Income Statements, and Cash Flow Statements for stakeholders and banks.",
        iconName: "PieChart",
        bulletPoints: [
          "Balance sheet preparation",
          "Profit & loss analysis",
          "Detailed financial statements",
          "Annual reporting dossiers"
        ]
      },
      {
        id: "tax-preparation",
        title: "Tax Preparation & Filing (ZRA)",
        description:
          "Handling Zambia Revenue Authority tax declarations including Income Tax, Turnover Tax, VAT, and PAYE returns.",
        iconName: "Briefcase",
        bulletPoints: [
          "Turnover tax calculations",
          "Monthly VAT returns",
          "TPIN tax filing strategies",
          "ZRA clearance certificate audits"
        ]
      },
      {
        id: "accounting-software",
        title: "Bookkeeping/Accounting Software Setup",
        description:
          "Installation and configuration of QuickBooks, Sage, and cloud accounting systems with staff training.",
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
  description:
    "Protecting business longevity with secure recruitment processes, bulletproof employment policies, and error-free payroll software setup.",
  iconName: "Users",
  services: [
    {
      id: "recruitment-training",
      title: "Recruitment & Training",
      description:
        "Placing verified local professionals in critical roles and training staff in modern corporate cultures and elite performance metrics.",
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
      description:
        "Installing robust automatic calculations for salaries, PAYE deductions, NHIMA subscriptions, and direct bank transfers.",
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
      description:
        "Drafting bulletproof code of conduct handbooks and employment terms completely aligned with Zambian Labor Laws.",
      iconName: "FileShield",
      bulletPoints: [
        "Disciplinary code formulations",
        "Zambian Labor Code compliance",
        "Custom leave & benefit terms",
        "Conflict-resolution roadmaps"
      ]
    },
    {
      id: "labour-related-issues",
      title: "Labour Related Issues",
      description:
        "Professional guidance and resolution support for workplace disputes, employee relations, and labour law compliance.",
      iconName: "Scale",
      bulletPoints: [
        "Employee grievance handling",
        "Workplace conflict resolution",
        "Labour law compliance advisory",
        "Disciplinary hearing guidance"
      ]
    }
  ]
},
  {
    id: "professional-doc",
    title: "Professional Documentation",
    description:
      "Professional business and personal documents designed to help you secure opportunities.",
    iconName: "FileSpreadsheet",
    services: [
      {
        id: "cv-writing",
        title: "CV & Resume Writing",
        description:
          "ATS-optimized CVs and cover letters showcasing leadership, skills, and achievements.",
        iconName: "User",
        bulletPoints: [
          "ATS-compliant layouts",
          "Professional action-oriented wording",
          "Industry-specific formatting",
          "Tailored cover letters"
        ]
      },
      {
        id: "business-plan",
        title: "Business Plan Writing",
        description:
          "Comprehensive business plans complete with market research and financial projections.",
        iconName: "BarChart3",
        bulletPoints: [
          "Executive summary writing",
          "Market research analytics",
          "Financial forecasting",
          "Business growth projections"
        ]
      },
      {
        id: "constitution-drafting",
        title: "Constitution Writing",
        description:
          "Formal constitutions for cooperatives, NGOs, and companies suitable for PACRA registration.",
        iconName: "Gavel",
        bulletPoints: [
          "PACRA-compliant legal drafting",
          "Executive board terms",
          "Operational guidelines",
          "Cooperative structures"
        ]
      },
      {
        id: "proposal-writing",
        title: "Proposal Writing",
        description:
          "Persuasive project and grant proposals for contracts, NGOs, and partnerships.",
        iconName: "ClipboardList",
        bulletPoints: [
          "Grant proposal writing",
          "Budget allocation charts",
          "Project roadmap design",
          "Professional business proposals"
        ]
      }
    ]
  },
  {
  id: "licensing-compliance",
  title: "Licensing & Regulatory Compliance",
  description:
    "Professional assistance with regulatory licensing, registrations, statutory compliance, and authority approvals for businesses, institutions, NGOs, and professionals.",
  services: [
    {
      id: "zppa-registration",
      title: "ZPPA Registration",
      description:
        "Registration and compliance support for suppliers, contractors, and businesses under the Zambia Public Procurement Authority.",
      bulletPoints: [
        "ZPPA Supplier Registration",
        "Bidder Documentation Preparation",
        "Procurement Compliance Assistance",
        "Tender Eligibility Guidance",
        "Annual Renewal Support",
      ],
    },

    {
      id: "nmcz-registration",
      title: "NMCZ Professional Licensing",
      description:
        "Professional licensing and renewal support for nurses and midwives through the Nursing and Midwifery Council of Zambia.",
      bulletPoints: [
        "NMCZ Registration Support",
        "Practicing License Assistance",
        "License Renewals",
        "Professional Documentation",
        "Compliance Guidance",
      ],
    },

    {
      id: "zihrm-registration",
      title: "ZIHRM Human Resource Registration",
      description:
        "Professional registration and compliance assistance for HR practitioners under the Zambia Institute of Human Resource Management.",
      bulletPoints: [
        "ZIHRM Membership Registration",
        "HR Practitioner Compliance",
        "Professional Documentation",
        "Annual Membership Renewals",
        "Consultation & Advisory",
      ],
    },

    {
      id: "zim-registration",
      title: "ZIM Marketing Professional Registration",
      description:
        "Professional marketing registration and membership assistance through the Zambia Institute of Marketing.",
      bulletPoints: [
        "ZIM Membership Registration",
        "Professional Marketing Certification Guidance",
        "Documentation Assistance",
        "Membership Renewal Support",
        "Marketing Professional Advisory",
      ],
    },
  ],
}
];

export const COMPLIANCE_AGENCIES: ComplianceAgency[] = [
  {
    id: "pacra",
    name: "PACRA",
    fullName: "Patents and Companies Registration Agency",
    logoText: "PACRA",
    description:
      "The primary legal gatekeeper for formal commerce in Zambia.",
    requirements: [
      "Company Name clearance checking & validation",
      "Articles of Association drafting",
      "Annual returns submission",
      "Director & shareholder changes"
    ],
    ctaText: "Inquire PACRA Setup"
  },

  {
    id: "zra",
    name: "ZRA",
    fullName: "Zambia Revenue Authority",
    logoText: "ZRA",
    description:
      "The official tax regulatory body in Zambia for businesses and individuals.",
    requirements: [
      "TPIN registration",
      "VAT & PAYE submissions",
      "Tax clearance applications",
      "Tax dispute consultation"
    ],
    ctaText: "Inquire Tax Registration"
  },

  {
    id: "nhima",
    name: "NHIMA",
    fullName: "National Health Insurance Management Authority",
    logoText: "NHIMA",
    description:
      "Handles national health insurance compliance across Zambia.",
    requirements: [
      "Employer registration",
      "Staff registration",
      "Monthly NHIMA calculations",
      "Compliance reporting"
    ],
    ctaText: "Get NHIMA Compliant"
  },

  {
    id: "zppa",
    name: "ZPPA",
    fullName: "Zambia Public Procurement Authority",
    logoText: "ZPPA",
    description:
      "Oversees public tenders and government procurement systems.",
    requirements: [
      "Supplier registration",
      "Tender application guidance",
      "Corporate compliance documents",
      "Proposal alignment support"
    ],
    ctaText: "Apply ZPPA Registration"
  },

  {
    id: "nmcz",
    name: "NMCZ",
    fullName: "Nursing and Midwifery Council of Zambia",
    logoText: "NMCZ",
    description:
      "Regulates nursing and midwifery professional licensing in Zambia.",
    requirements: [
      "Professional verification",
      "Clinic licensing support",
      "Compliance consultation",
      "Board exam guidance"
    ],
    ctaText: "Consult NMCZ Process"
  }
];

export const SCHOLARSHIPS_DATA: ScholarshipItem[] = [];

export const BLOG_POSTS: BlogPost[] = [];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [];

export const TESTIMONIALS_DATA: TestimonialItem[] = [];