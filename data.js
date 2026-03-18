// ============================================================
//  data.js — Shuyue Zhan's personal homepage
//  修改内容只需改这个文件
// ============================================================

const SITE = {
  // ---- 基本信息 ----
  name: "Shuyue Zhan",
  shortName: "S. Zhan",
  title: "Biopharma Scientist",
  badge: "Open to opportunities",
  heroDesc:
    "Biopharma scientist with a Ph.D. from the University of Georgia (2023). " +
    "My research focuses on nanoparticle-based cancer immunotherapy, radiodynamic therapy, and cell-based bioassay development. " +
    "Experienced in GMP project management, bioassay validation, and translational research. " +
    "Co-host of the VITA1001 Modern Pharma podcast.",

  // ---- 联系方式 ----
  email: "example@gmail.com",             // TODO: 换成真实邮箱
  github: "https://github.com/Sue0129",
  linkedin: "https://www.linkedin.com/in/shuyue-zhan-phd-vita1001/",
  scholar: "https://scholar.google.com/citations?user=-jQc_koAAAAJ&hl=en",

  // ---- 工作经历 ----
  experience: [
    {
      org: "Thermo Fisher Scientific",
      role: "Scientist",                  // TODO: 确认具体职位
      date: "2023 - Oct 2025",
      tag: "Industry",
      tagColor: "blue",
      desc: "Developed complex cell-based bioassays. Managed cross-functional GMP projects. Bioassay development, validation, and transfer for biopharmaceutical products.",
    },
    {
      org: "University of Georgia",
      role: "Ph.D. Researcher",
      date: "Aug 2018 - 2023",
      tag: "Ph.D.",
      tagColor: "purple",
      desc: "Research on nanoparticle-based cancer therapeutics and immunotherapy. Published in ACS Nano Letters and other top journals. Developed sodium chloride nanoparticles for cancer treatment and radiodynamic therapy approaches.",
    },
    // TODO: 添加更多经历（实习等）
  ],

  // ---- 教育背景 ----
  education: [
    {
      org: "University of Pennsylvania",
      degree: "Marketing Certificate",
      date: "2026",
      tag: "Cert",
      tagColor: "orange",
      desc: "",
    },
    {
      org: "University of Georgia",
      degree: "Ph.D.",                    // TODO: 确认具体专业
      date: "Aug 2018 - 2023 · Athens, GA",
      tag: "Ph.D.",
      tagColor: "green",
      desc: "Mary Laraine Young Hines Graduate Fellowship in Cancer Research · Outstanding Graduate Student of the Year (ACS Northeast Georgia) · Summer Research Grant · Research & Teaching Assistance Scholarship",
    },
    {
      org: "",                            // TODO: 填写本科学校
      degree: "B.S.",                     // TODO: 填写本科专业
      date: "2014 - 2018",
      tag: "B.S.",
      tagColor: "blue",
      desc: "",
    },
  ],

  // ---- 技术栈 ----
  skills: [
    {
      icon: "🔬",
      category: "Research",
      items: ["Nanoparticle Synthesis", "Cancer Immunotherapy", "Radiodynamic Therapy", "Drug Delivery", "Cell Biology"],
    },
    {
      icon: "🧪",
      category: "Bioassay & GMP",
      items: ["Cell-based Bioassays", "Bioassay Validation", "GMP", "Quality Control", "Method Transfer", "Regulatory Affairs"],
    },
    {
      icon: "💻",
      category: "Tools & Skills",
      items: ["Flow Cytometry", "HPLC", "SEM/TEM", "In Vivo Studies", "Data Analysis", "Project Management"],
    },
  ],

  // ---- 论文发表 ----
  publications: [
    {
      title: "Sodium Chloride Nanoparticles Potentiate Radiation Therapy by Disrupting Osmolarity Balance and Enhancing Antitumor Immunity",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "ACS Nano Letters",
      link: "",
    },
    {
      title: "Salt Nanoparticles as Cancer Therapeutics",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Review",
      link: "",
    },
    {
      title: "Calcium Nanoparticles Target and Activate T Cells to Enhance Anti-Tumor Function",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Cancer Immunotherapy",
      link: "",
    },
    {
      title: "Potassium Iodide Nanoparticles Enhance Radiotherapy Against Breast Cancer by Exploiting the Sodium-Iodide Symporter",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Radiotherapy",
      link: "",
    },
    {
      title: "Radiodynamic Therapy with CsI(Na)@MgO Nanoparticles and 5-Aminolevulinic Acid",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Radiodynamic Therapy",
      link: "",
    },
    {
      title: "Barium Tungstate Nanoparticles to Enhance Radiation Therapy Against Cancer",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Radiation Therapy",
      link: "",
    },
    {
      title: "Radiation-Induced Ferroptosis via Liposomal Delivery of 7-Dehydrocholesterol",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Ferroptosis",
      link: "",
    },
    {
      title: "Iron Oxide Nanoparticles Induce Macrophage Secretion of ATP and HMGB1 to Enhance Irradiation-Led Immunogenic Cell Death",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Immunogenic Cell Death",
      link: "",
    },
    {
      title: "Nanoconjugates to Enhance PDT-Mediated Cancer Immunotherapy by Targeting the Indoleamine-2,3-Dioxygenase Pathway",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "PDT / Immunotherapy",
      link: "",
    },
    {
      title: "Modulation of Dendritic Cell Function via Nanoparticle-Induced Cytosolic Calcium Changes",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Immunology",
      link: "",
    },
    {
      title: "In Situ Growth of Mesoporous Silica with Drugs on Titanium Surface and Its Biomedical Applications",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Biomaterials",
      link: "",
    },
    {
      title: "A Sensitive Label-Free Immunosensor for Detection α-Fetoprotein in Whole Blood Based on Anticoagulating Magnetic Nanoparticles",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Biosensors",
      link: "",
    },
    {
      title: "Hemocompatible ɛ-Polylysine-Heparin Microparticles: A Platform for Detecting Triglycerides in Whole Blood",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Diagnostics",
      link: "",
    },
    {
      title: "Degradation Performance of Polyglutamic Acid and Its Application of Calcium Supplement",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Materials Science",
      link: "",
    },
  ],

  // ---- 新闻动态 ----
  news: [
    { date: "2026-03", text: "Completed Marketing certification from the University of Pennsylvania." },
    { date: "2025-12", text: "Completed ORAQ Regulatory Affairs Training Program." },
    { date: "2025-10", text: "Transitioned from Thermo Fisher Scientific — exploring new opportunities in biopharma." },
    { date: "2023-04", text: "Awarded Outstanding Graduate Student of the Year by the Northeast Georgia Section of ACS!" },
    { date: "2023", text: "Completed Ph.D. at the University of Georgia!" },
    { date: "2022-10", text: "Awarded Mary Laraine Young Hines Graduate Fellowship in Cancer Research." },
    { date: "2022-04", text: "Received Summer Research Grant." },
    // 添加更多新闻
  ],

  // ---- 博客 / Podcast ----
  blogPosts: [
    {
      title: "VITA1001 Modern Pharma Podcast",
      date: "2024-01-01",
      tags: ["Podcast", "Pharma", "Career"],
      summary: "Co-hosting the VITA1001 Modern Pharma podcast with Fangyuan D., covering pharmaceutical industry roles, career development, and insights from biopharma professionals. 12+ episodes and counting.",
      link: "",  // TODO: 添加播客链接
    },
    {
      title: "Guest Editor: Nanoparticles in Cancer Immunotherapy",
      date: "2024-06-01",
      tags: ["Nanoparticles", "Cancer", "Editorial"],
      summary: "Serving as Guest Editor for MDPI Pharmaceutics Special Issue: 'Nanoparticles in Cancer Immunotherapy Application.' Curating cutting-edge research on nanomedicine approaches to enhance anti-tumor immunity.",
      link: "",  // TODO: 添加链接
    },
  ],

  // ---- 日夜模式时间段 (24h) ----
  dayStart: 6,
  dayEnd: 18,
};
