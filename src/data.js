import profilePhoto from "./assets/곽재현_2.jpg";
import profilePhotoHeic from "./assets/곽재현_2.HEIC";

export const profile = {
  name: "Jaehyun Kwak",
  title: "Ph.D. Student, Graduate School of AI, KAIST",
  photo: profilePhoto,
  photoSources: [{ srcSet: profilePhotoHeic, type: "image/heic" }],
  advisor: "Prof. Se-Young Yun",
  email: "jaehyun98@kaist.ac.kr",
  interests: "Multimodal Large Language Model, Vision-Language Model",
  researchFocus:
    "More specifically, my current research focuses on visual reasoning in VLMs and methods for strengthening causality in latent representations.",
  links: {
    kaist: "https://www.kaist.ac.kr/en/",
    lab: "https://osi.kaist.ac.kr/",
    advisor: "https://fbsqkd.github.io/",
    cv: "https://drive.google.com/file/d/11hGj9fgn1KW_YHLPuHkcVbTzBO57RvUc/view?usp=sharing",
    scholar: "https://scholar.google.com/citations?user=8oiT-7EAAAAJ&hl=ko",
  },
};

export const news = [
  ["Jul. 2026", "DualDrift accepted to ICML 2026 Workshop."],
  ["Feb. 2026", "When and Where to Attack? is now available on arXiv."],
  ["Jul. 2025", "QuRe accepted to ICML 2025."],
  ["May 2025", "SelfReplay accepted to SenSys 2025."],
  ["Mar. 2025", "Started my Ph.D. in the Graduate School of AI at KAIST."],
];

export const publications = [
  {
    title:
      "When and Where to Attack? Stage-wise Attention-Guided Adversarial Attack on Large Vision Language Models",
    authors:
      "Jaehyun Kwak, Nam Cao, Boryeong Cho, Segyu Lee, Sumyeong Ahn†, Se-Young Yun†",
    venue: "Under Review",
    note:
      "Adversarial attack method that perturbs high-attention regions in a stage-wise manner.",
    links: { Paper: "https://arxiv.org/pdf/2602.04356" },
  },
  {
    title:
      "QuRe: Query-Relevant Retrieval through Hard Negative Sampling in Composed Image Retrieval",
    authors: "Jaehyun Kwak, Izaaz Inhar, Se-Young Yun, Sung-Ju Lee",
    venue: "ICML 2025",
    note:
      "Composed image retrieval method trained with self-paced learning and hard negative sampling.",
    links: {
      Paper: "https://arxiv.org/pdf/2507.12416",
      Code: "https://github.com/jaehyun-kwak/QuRe",
    },
  },
  {
    title:
      "DualDrift: Combining Forward and Reverse Drifts for One-Step Generative Modeling",
    authors:
      "Hojung Jung*, Juhyeong Kim*, Jaehyun Kwak, Boryeong Cho, Junhyeok Yang, Youngrok Park, Sangmin Bae, Se-Young Yun",
    venue: "ICML 2026 Workshop",
    note:
      "One-step generative modeling method combining data-side forward drift and rollout-side reverse drift.",
    links: { Paper: "https://openreview.net/forum?id=H5J9zbBlHX" },
  },
  {
    title:
      "UniSAFE: A Comprehensive Benchmark for Safety Evaluation of Unified Multimodal Models",
    authors:
      "Segyu Lee*, Boryeong Cho*, Hojung Jung*, Seokhyun An, Juhyeong Kim, Jaehyun Kwak, Yongjin Yang, Sangwon Jang, Youngrok Park, Wonjun Chang, Se-Young Yun",
    venue: "Under Review",
    note:
      "Safety benchmark for unified multimodal models across seven input/output modality settings.",
    links: { Paper: "https://arxiv.org/pdf/2603.17476" },
  },
  {
    title:
      "SelfReplay: Adapting Self-Supervised Sensory Models via Adaptive Meta-Task Replay",
    authors:
      "Hyungjun Yoon, Jaehyun Kwak, Biniyam Tolera, Gaole Dai, Mo Li, Taesik Gong, Kimin Lee, Sung-Ju Lee",
    venue: "SenSys 2025",
    note:
      "Few-shot domain adaptation method addressing domain shift between pre-training and fine-tuning data.",
    links: { Paper: "https://arxiv.org/pdf/2404.15305" },
  },
  {
    title: "Federated Learning with Incomplete Sensing Modalities",
    authors: "Adiba Orzikulova*, Jaehyun Kwak*, Jaemin Shin, Sung-Ju Lee",
    venue: "arXiv 2024",
    note: "Federated learning method for handling incomplete sensing modalities.",
    links: { Paper: "https://arxiv.org/pdf/2405.11828v1" },
  },
];
