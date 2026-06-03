import { CaseStudy, ToolItem, Milestone } from "./types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "organic-sprint",
    title: "The 30-Day Organic Sprint",
    client: "Nuetel Communications",
    industry: "Social Strategy",
    location: "Manama, Bahrain",
    engagementPeriod: "30 Days (Sprint)",
    adSpendText: "0% Ad Spend (100% Organic)",
    roasText: "1,500+ New Followers Gained",
    imagePath: "/src/assets/images/nuetel_organic_sprint_1780221030171.png",
    impactMetrics: [
      { label: "New Organic Followers", value: "1,500+", subtext: "Acquired in 30-day window" },
      { label: "Total Ad Spend", value: "0%", subtext: "Purely driven by content" },
      { label: "Engagement Lift", value: "320%", subtext: "Compared to industry baseline" }
    ],
    challenge: "Nuetel suffered from low brand visibility in a highly saturated telecom sector in Bahrain. Stagnant organic reach combined with rising traditional advertising acquisition costs made it difficult to attract younger, digital-native customers.",
    solution: "Orchestrated a hyper-focused content sprint. Designed eye-catching reels and engaging educational vertical videos centered around digital-first lifestyles. Streamlined customer interaction loops by automating instant responses to direct messages, turning social comments into warm brand conversations.",
    results: [
      "Acquired over 1,500 active, highly engaged organic followers in under 30 days.",
      "Achieved zero budget ad spend for maximum ROI marketing efficiency.",
      "Generated immediate, high-intent inquiries around active telecom subscription packages."
    ],
    chartData: [
      { name: "Week 1", organic: 150, paid: 0, conversion: 1.2 },
      { name: "Week 2", organic: 480, paid: 0, conversion: 2.1 },
      { name: "Week 3", organic: 920, paid: 0, conversion: 3.5 },
      { name: "Week 4", organic: 1520, paid: 0, conversion: 5.2 }
    ]
  },
  {
    id: "hydrate-connect",
    title: "“Hydrate & Connect” Summer Campaign",
    client: "Nuetel Telecom",
    industry: "On-Ground Campaigns",
    location: "Bahrain",
    engagementPeriod: "Peak Summer",
    adSpendText: "Creative Outdoor Activation",
    roasText: "40% Engagement Lift",
    imagePath: "/src/assets/images/nuetel_hydrate_connect_1780221050547.png",
    impactMetrics: [
      { label: "Platform Engagement", value: "+40%", subtext: "Growth on Instagram & TikTok" },
      { label: "Interactive Touchpoints", value: "Padel", subtext: "Joint coordination with sports hubs" },
      { label: "Metric Source", value: "QR Code", subtext: "Traced back via custom bottle labels" }
    ],
    challenge: "Nuetel needed to increase brand visibility and engage target audience groups during the peak summer season, creating a memorable, practical association with connectivity.",
    solution: "Developed and executed ‘Hydrate & Connect’ — an innovative outdoor PR campaign linking refreshing hydration with internet speed. Coordinated branded water bottles featuring custom messaging ('Stay Hydrated, Stay Connected'), distributed them at major sports centers (padel outlets), and integrated follow-up metrics via branded QR codes.",
    results: [
      "Boosted top-of-mind brand recall and physical visibility across targeted outdoor crowds.",
      "Accelerated Instagram and TikTok audience engagement levels by 40% during the active timeline.",
      "Seamlessly linked everyday physical customer needs with Nuetel's speed value and reliable fiber messaging."
    ],
    chartData: [
      { name: "Launch", organic: 100, paid: 150, conversion: 1.0 },
      { name: "Week 2", organic: 340, paid: 400, conversion: 2.2 },
      { name: "Week 3", organic: 610, paid: 750, conversion: 3.5 },
      { name: "Peak", organic: 1200, paid: 1400, conversion: 4.0 }
    ]
  },
  {
    id: "golden-tulip-day",
    title: "“A Day at Golden Tulip” Video Campaign",
    client: "Golden Tulip Hotels",
    industry: "Video Storytelling",
    location: "Bahrain & Saudi Arabia",
    engagementPeriod: "Campaign Month",
    adSpendText: "Premium Reels & Storytelling",
    roasText: "2.0x Video Reach Increase",
    imagePath: "/src/assets/images/golden_tulip_day_1780221072198.png",
    impactMetrics: [
      { label: "Video View Reach", value: "2.0x", subtext: "Lift on Instagram & Facebook" },
      { label: "Booking Inquiries", value: "+20%", subtext: "Direct increase over baseline" },
      { label: "Geographical Focus", value: "GCC", subtext: "Localized for BH & KSA properties" }
    ],
    challenge: "Golden Tulip needed to refresh its online image, showcase its premium amenities (pool, spa, dining), and increase organic booking interest post-pandemic in Bahrain and Saudi Arabia.",
    solution: "Engineered a high-production storytelling series titled ‘A Day at Golden Tulip’. Oversaw the complete creative lifecycle: from scripting, on-site photography coordination, shot list creation, edit-room color grading to Arabic localization. Scheduled a rhythmic calendar of Reels and rich carousels.",
    results: [
      "Achieved a verified 2x increase in overall video reach across core social channels.",
      "Drove a 20% surge in direct digital hospitality booking inquiries in under 30 days.",
      "Elevated Golden Tulip's regional prestige through highly aesthetic, emotionally resonant lifestyle messaging."
    ],
    chartData: [
      { name: "Reel 1", organic: 150, paid: 100, conversion: 1.2 },
      { name: "Reel 2", organic: 450, paid: 350, conversion: 2.4 },
      { name: "Reel 3", organic: 920, paid: 750, conversion: 3.8 },
      { name: "Encore", organic: 1800, paid: 1200, conversion: 4.8 }
    ]
  }
];

export const TOOLKIT_ITEMS: ToolItem[] = [
  {
    name: "Gemini & LLM Prompting",
    category: "AI Content & Video",
    icon: "Cpu",
    description: "Developing specialized, contextual prompt paradigms to write engaging social scripts, local copy mutations, and tailored content calendars in record time.",
    efficiencyGain: "Saves 15+ hours weekly"
  },
  {
    name: "Video Post-Production (CapCut & Adobe)",
    category: "AI Content & Video",
    icon: "Video",
    description: "Editing high-retention, professional vertical videos focusing on premium color grading, clean subtitles, balanced pacing, and rich sound assets.",
    efficiencyGain: "2.5x faster content output"
  },
  {
    name: "Frictionless Workflow Automations",
    category: "Strategic Workflow",
    icon: "Workflow",
    description: "Integrating instant comment-to-DM response flows, linking lead responses directly to shared team tracker boards, and improving reaction times.",
    efficiencyGain: "Cuts response time from hours to <30s"
  },
  {
    name: "Analytics & ROI Pixel Tracking",
    category: "Analytics & Social Ad Operations",
    icon: "BarChart3",
    description: "Tracking digital conversion lifecycles. Creating functional performance templates highlighting acquisition cost variations and click-through results.",
    efficiencyGain: "Aesthetic approach backed by data"
  },
  {
    name: "Bilingual Social Media Operations",
    category: "Strategic Workflow",
    icon: "Target",
    description: "Formulating balanced campaigns optimized for diverse regional demographics, incorporating localized themes, and high-engagement visuals.",
    efficiencyGain: "Strong audience resonance"
  },
  {
    name: "Audience Persona Optimization",
    category: "Analytics & Social Ad Operations",
    icon: "UserCheck",
    description: "Developing accurate demographical targeting models to make sure performance budgets reach active high-intent candidates.",
    efficiencyGain: "Zero wasted marketing budgets"
  },
  {
    name: "Digital Growth & Engagement Mastery",
    category: "Verified Badges",
    icon: "Award",
    description: "Recognized tracking in creative copywriting, digital strategy planning, and next-generation social engagement standards.",
    efficiencyGain: "Verified Professional Delivery"
  },
  {
    name: "GCC Market Insights & Localization",
    category: "Verified Badges",
    icon: "Compass",
    description: "Deep cultural experience across the Kingdom of Bahrain & India. Actively seeking professional alignment dynamically in Dubai & UAE.",
    efficiencyGain: "Future Dubai Relocation Ready"
  }
];

export const TIMELINE: Milestone[] = [
  {
    year: "Dec 2025 – Mar 2026",
    role: "Social Media Specialist",
    company: "Crayons Global Media & Consultancy",
    location: "Remote (Bahrain-based)",
    description: "Led the development of end-to-end social media strategies across multiple client accounts within a fast-paced agency environment. Defined content pillars, brand voice, and storytelling frameworks for Bahrain-based brands.",
    outcomes: [
      "Brand Management: Developed and guided end-to-end social workflows for diverse client accounts keeping solid visual and narrative consistency.",
      "Audience Growth: Scrutinized platform insights, social listening, and trends to uncover audience expansion options.",
      "Creative Alignment: Collaborated closely with multi-disciplinary strategy and layout teams to secure outstanding storytelling.",
      "Event Activation: Structured high-visibility active launch workflows and interactive events to boost brand awareness."
    ],
    tags: ["Brand Management", "Audience Growth", "Strategy Planning", "Client Services"]
  },
  {
    year: "Jan 2025 – Oct 2025",
    role: "Freelance Digital Marketing Consultant",
    company: "Freelance Consultant (Brand Focus: Nawabi Ethnic Wear)",
    location: "India",
    description: "Conceived and executed the complete digital brand identity, positioning matrix, and storytelling narrative for Nawabi, a premium lifestyle and fashion brand.",
    outcomes: [
      "Identity Conception: Crafted the absolute voice, design direction, and digital styling footprint for a premium creative startup.",
      "Instagram Operations: Produced engagement-driven Instagram reels and bespoke visual hooks, multiplying active brand reach.",
      "Creator Outreach: Coordinated story-focused partnerships with digital influencers, photographers, and traditional creators.",
      "Performance Analytics: Followed operational analytics and campaign return indices to optimize brand trust and customer confidence."
    ],
    tags: ["Brand Positioning", "Instagram Reels", "Influencer Campaigns", "Social Content"]
  },
  {
    year: "Oct 2023 - Jan 2025",
    role: "Marketing Specialist",
    company: "Nuetel Communications B.S.C.",
    location: "Bahrain",
    description: "Managed Nuetel's complete multi-channel social media presence, overseeing content planning, execution, and organic data-driven optimization across all platforms.",
    outcomes: [
      "Social Strategy: Defined audience segmentation and customer personas to improve content relevance and lead-generation effectiveness.",
      "Publicity Sprints: Devised high-impact offline/online cross activations, including the successful Nuetel Summer Water Campaign.",
      "Financial Efficiency: Optimized and guided corporate marketing budgets to ensure maximized digital lead conversions.",
      "Executive Growth: Promoted executive brand awareness by aligning and elevating leadership positioning directly with the CEO."
    ],
    tags: ["Social Strategy", "Corporate Branding", "Budget Optimization", "Telecom Growth"]
  },
  {
    year: "April 2023 - Oct 2023",
    role: "Account Manager",
    company: "It's a Breakthrough",
    location: "Bahrain",
    description: "Managed social strategy development and creative ideation for multiple high-profile client accounts across hospitality, automotive, technology, and consumer sectors.",
    outcomes: [
      "Team Leadership: Spearheaded and guided an active team of 8 to 10 digital artists, copywriters, and developers to deploy stellar projects.",
      "Brand Portfolio: Headed creative and promotional execution for Golden Tulip Hotels Bahrain, Albandar Cars, and SFMGC.",
      "Organic Reach: Produced high-performing digital copy highly optimized for organic SEO relevance and community conversation rates.",
      "Stakeholder Insight: Handled complex accounts, introducing analytical reports and campaign optimizations to board executives."
    ],
    tags: ["Leadership (8-10)", "Hospitality & Retail", "SEO Copywriting", "Portfolio Strategy"]
  },
  {
    year: "Aug 2022 - Jan 2023",
    role: "Sales & Marketing Agent",
    company: "My Fatoorah B.S.C.",
    location: "Bahrain",
    description: "Operated at the dynamic intersection of payment interfaces (fintech) and merchant networks, negotiating commercial policies and onboarding high-value accounts.",
    outcomes: [
      "Sales Acceleration: Formulated robust sales pipelines, consistently meeting and exceeding quarterly commercial outcomes.",
      "Contract Negotiation: Served as the primary direct representative for key accounts, closing premium contracts.",
      "Onboarding: Managed technical and operational onboarding issues, providing a frictionless transition for merchants."
    ],
    tags: ["Fintech Growth", "VIP Negotiations", "B2B Accounts", "Merchant Support"]
  },
  {
    year: "Mar 2021 - Dec 2022",
    role: "Sales & Marketing Executive",
    company: "Next Delivery",
    location: "Bahrain",
    description: "Acquired restaurant vendor networks, launched joint marketing initiatives, and presented sales metrics reports to senior leadership.",
    outcomes: [
      "Merchant Acquisition: Deployed persuasive B2B sales methodologies to successfully onboard premium restaurants to the delivery application.",
      "Joint Campaigns: Partnered with marketing creatives to run joint social promos, elevating overall vendor order volumes.",
      "Rigorous Pipelines: Tracked daily performance funnel metrics and delivered high-fidelity analytics to corporate leaders."
    ],
    tags: ["Vendor Acquisition", "Joint Promo Sprints", "B2B Analytics", "Frictionless Sales"]
  },
  {
    year: "Sep 2019 - Mar 2021",
    role: "Flight Attendant",
    company: "Gulf Air",
    location: "Bahrain",
    description: "Delivered premium service, international hospitality, and safety protocols under rigid global aviation standards, sharpening public-facing communications.",
    outcomes: [
      "Operational Dignity: Upheld five-star global aviation hospitality rules under critical scheduling expectations.",
      "Crisis Resolution: Deployed immediate problem-solving, communications, and teamwork to secure optimal satisfaction in high-pressure arenas."
    ],
    tags: ["Elite Service", "Global Aviation", "Crisis Management", "Public Relations"]
  },
  {
    year: "Jan 2015 - Nov 2016",
    role: "Flight Attendant",
    company: "Air Asia",
    location: "India",
    description: "Managed customer relations, safety protocols, and cross-cultural onboard communication efficiently during fast-paced regional flights.",
    outcomes: [
      "Service Quality: Ensured supreme customer relations and comfortable passenger flight experiences during fast-paced flights.",
      "Cabin Compliance: Upheld airlines regulatory norms, and coordination across diverse staff teams."
    ],
    tags: ["Customer Connection", "Aviation Protocols", "Fast-Paced Operations"]
  },
  {
    year: "Sep 2013 - Nov 2014",
    role: "Flight Attendant",
    company: "GoAir",
    location: "India",
    description: "Maintained cabin safety, corporate compliance, and exceptional service standards for high volumes of domestic travellers.",
    outcomes: [
      "Safe Operations: Safeguarded aircraft cabin rules, client comfort, and corporate service regulations on high-volume routes.",
      "Crisis Interpersonal: Mastered empathetic social skills, public assistance, and detailed attention to hospitality comfort."
    ],
    tags: ["High-Volume Service", "Corporate Compliance", "Empathetic Support"]
  }
];
