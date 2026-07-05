export const profile = {
  name: "Jaehyun Kwak",
  title: "Ph.D. Student, Graduate School of AI, KAIST",
  photo: "/profile.jpg",
  advisor: "Prof. Se-Young Yun",
  email: "jaehyun98@kaist.ac.kr",
  interests:
    "Multimodal Large Language Model, Vision-Language Model, Information Retrieval",
  links: {
    cv: "/cv.pdf",
    scholar: "#",
    github: "#",
  },
};

export const news = [
  ["2026", "Serving as a peer reviewer for NeurIPS 2026 and ICML 2026."],
  ["2025", "QuRe accepted to ICML 2025."],
  ["2025", "SelfReplay accepted to SenSys 2025."],
  ["2025", "Started my Ph.D. in the Graduate School of AI at KAIST."],
];

export const publications = [
  {
    title:
      "When and Where to Attack? Stage-wise Attention-Guided Adversarial Attack on Large Vision Language Models",
    authors:
      "Jaehyun Kwak, Nam Cao, Boryeong Cho, Segyu Lee, Sumyeong Ahn†, Se-Young Yun†",
    venue: "Under Review",
    note:
      "Adversarial attack method for large vision-language models that progressively perturbs high-attention regions in a stage-wise manner.",
    links: { Paper: "#" },
  },
  {
    title:
      "QuRe: Query-Relevant Retrieval through Hard Negative Sampling in Composed Image Retrieval",
    authors: "Jaehyun Kwak, Izaaz Inhar, Se-Young Yun, Sung-Ju Lee",
    venue: "ICML 2025",
    note:
      "Composed image retrieval method trained with self-paced learning and hard negative sampling.",
    links: { Paper: "#", Code: "#" },
  },
  {
    title:
      "DualDrift: Combining Forward and Reverse Drifts for One-Step Generative Modeling",
    authors:
      "Hojung Jung*, Juhyeong Kim*, Jaehyun Kwak, Boryeong Cho, Junhyeok Yang, Youngrok Park, Sangmin Bae, Se-Young Yun",
    venue: "ICML 2026 Workshop",
    note:
      "One-step generative modeling method that combines data-side forward drift and rollout-side reverse drift.",
    links: { Paper: "#" },
  },
  {
    title:
      "UniSAFE: A Comprehensive Benchmark for Safety Evaluation of Unified Multimodal Models",
    authors:
      "Segyu Lee*, Boryeong Cho*, Hojung Jung*, Seokhyun An, Juhyeong Kim, Jaehyun Kwak, Yongjin Yang, Sangwon Jang, Youngrok Park, Wonjun Chang, Se-Young Yun",
    venue: "Under Review",
    note:
      "Comprehensive safety benchmark for unified multimodal models across seven input/output modality settings.",
    links: { Paper: "#" },
  },
  {
    title:
      "SelfReplay: Adapting Self-Supervised Sensory Models via Adaptive Meta-Task Replay",
    authors:
      "Hyungjun Yoon, Jaehyun Kwak, Biniyam Tolera, Gaole Dai, Mo Li, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "SenSys 2025",
    note:
      "Few-shot domain adaptation method addressing domain shift between pre-training and fine-tuning data.",
    links: { Paper: "#" },
  },
  {
    title: "Federated Learning with Incomplete Sensing Modalities",
    authors: "Adiba Orzikulova*, Jaehyun Kwak*, Jaemin Shin, Sung-Ju Lee",
    venue: "arXiv 2024",
    note:
      "Federated learning method for handling incomplete sensing modalities.",
    links: { Paper: "#" },
  },
];

export const honors = [
  ["Reviewer", "NeurIPS 2026 / ICML 2026 / MobiCom 2023–2024 / MobiSys 2023–2024"],
];
