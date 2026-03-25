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
  email: "szmelody9@gmail.com",
  github: "https://github.com/shuyuezhan",
  linkedin: "https://www.linkedin.com/in/shuyue-zhan-phd-vita1001/",
  scholar: "https://scholar.google.com/citations?user=-jQc_koAAAAJ&hl=en",

  // ---- 工作经历 ----
  experience: [
    {
      org: "Thermo Fisher Scientific",
      role: "Senior Scientist",
      date: "2023 - Oct 2025",
      tag: "Industry",
      tagColor: "blue",
      desc: "Developed complex cell-based bioassays. Managed cross-functional GMP projects. Bioassay development, validation, and transfer for biopharmaceutical products.",
    },
    {
      org: "PPD",
      role: "Graduate Intern",
      date: "May 2022 - Aug 2022",
      tag: "Intern",
      tagColor: "orange",
      desc: "Completed rigorous GMP training, mastered ICH guidelines and international regulatory requirements. Performed potency testing for stability and release samples, ensuring full compliance with established quality control protocols and SOPs.",
    },
    {
      org: "University of Georgia",
      role: "Ph.D. Researcher",
      date: "Aug 2018 - 2023",
      tag: "Ph.D.",
      tagColor: "purple",
      desc: "Research on nanoparticle-based cancer therapeutics and immunotherapy. Published in ACS Nano Letters, Nature Communications, ACS Nano and other top journals. Developed sodium chloride nanoparticles for cancer treatment and radiodynamic therapy approaches.",
    },
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
      degree: "Ph.D. in Chemistry",
      date: "Aug 2018 - 2023 · Athens, GA",
      tag: "Ph.D.",
      tagColor: "green",
      desc: "Mary Laraine Young Hines Graduate Fellowship in Cancer Research · Outstanding Graduate Student of the Year (ACS Northeast Georgia) · Summer Research Grant · Research & Teaching Assistance Scholarship",
    },
    {
      org: "Nanjing Normal University (南京师范大学)",
      degree: "B.S. in Chemistry",
      date: "2014 - 2018 · Nanjing, China",
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
      venue: "Nano Letters, 2025",
      link: "https://doi.org/10.1021/acs.nanolett.5c03022",
    },
    {
      title: "Salt Nanoparticles as Cancer Therapeutics",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Review",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-jQc_koAAAAJ",
    },
    {
      title: "Calcium Nanoparticles Target and Activate T Cells to Enhance Anti-Tumor Function",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Nature Communications, 2024",
      link: "https://doi.org/10.1038/s41467-024-54402-y",
    },
    {
      title: "Potassium Iodide Nanoparticles Enhance Radiotherapy Against Breast Cancer by Exploiting the Sodium-Iodide Symporter",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "ACS Nano, 2021",
      link: "https://doi.org/10.1021/acsnano.1c01435",
    },
    {
      title: "Radiodynamic Therapy with CsI(Na)@MgO Nanoparticles and 5-Aminolevulinic Acid",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Journal of Nanobiotechnology, 2022",
      link: "https://doi.org/10.1186/s12951-022-01537-z",
    },
    {
      title: "Barium Tungstate Nanoparticles to Enhance Radiation Therapy Against Cancer",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Nanomedicine, 2020",
      link: "https://doi.org/10.1016/j.nano.2020.102230",
    },
    {
      title: "Radiation-Induced Ferroptosis via Liposomal Delivery of 7-Dehydrocholesterol",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Journal of Nanobiotechnology, 2025",
      link: "https://doi.org/10.1186/s12951-025-03303-3",
    },
    {
      title: "Iron Oxide Nanoparticles Induce Macrophage Secretion of ATP and HMGB1 to Enhance Irradiation-Led Immunogenic Cell Death",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Bioconjugate Chemistry, 2024",
      link: "https://doi.org/10.1021/acs.bioconjchem.4c00488",
    },
    {
      title: "Nanoconjugates to Enhance PDT-Mediated Cancer Immunotherapy by Targeting the Indoleamine-2,3-Dioxygenase Pathway",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Journal of Nanobiotechnology, 2021",
      link: "https://doi.org/10.1186/s12951-021-00919-z",
    },
    {
      title: "Modulation of Dendritic Cell Function via Nanoparticle-Induced Cytosolic Calcium Changes",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "ACS Nano, 2024",
      link: "https://doi.org/10.1021/acsnano.4c00550",
    },
    {
      title: "In Situ Growth of Mesoporous Silica with Drugs on Titanium Surface and Its Biomedical Applications",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "ACS Applied Materials & Interfaces, 2017",
      link: "https://doi.org/10.1021/acsami.7b05163",
    },
    {
      title: "A Sensitive Label-Free Immunosensor for Detection α-Fetoprotein in Whole Blood Based on Anticoagulating Magnetic Nanoparticles",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Biosensors and Bioelectronics, 2017",
      link: "https://doi.org/10.1016/j.bios.2017.04.015",
    },
    {
      title: "Hemocompatible ɛ-Polylysine-Heparin Microparticles: A Platform for Detecting Triglycerides in Whole Blood",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Biosensors and Bioelectronics, 2018",
      link: "https://doi.org/10.1016/j.bios.2017.08.030",
    },
    {
      title: "Degradation Performance of Polyglutamic Acid and Its Application of Calcium Supplement",
      authors: "<strong>S. Zhan</strong>, et al.",
      venue: "Materials Science",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-jQc_koAAAAJ",
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
      link: "https://vita1001.com",
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
