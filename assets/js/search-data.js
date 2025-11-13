// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Select publications only. See my Google Scholar profile for a full list of publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks-panels",
          title: "Talks/Panels",
          description: "Invited Talks and Panels | Jekaterina Novikova",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-wiair-podcast",
          title: "WiAIR Podcast",
          description: "Women in AI Research WiAIR podcast",
          section: "Navigation",
          handler: () => {
            window.location.href = "/podcast/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-my-team-organized-the-ml4cmh2024-workshop-on-machine-learning-for-cognitive-and-mental-health-at-aaai-2024",
          title: 'My team organized the ML4CMH2024 Workshop on Machine Learning for Cognitive and Mental...',
          description: "",
          section: "News",},{id: "news-i-launched-a-new-podcast-women-in-ai-research-wiair",
          title: 'I launched a new podcast, Women in AI Research WiAIR',
          description: "",
          section: "News",},{id: "news-i-co-organized-the-heal-workshop-on-human-centered-evaluation-and-auditing-of-language-models-which-returned-at-chi-2025",
          title: 'I co-organized the HEAL Workshop on Human-centered Evaluation and Auditing of Language Models,...',
          description: "",
          section: "News",},{id: "news-i-co-organized-the-first-workshop-on-llm-security-llmsec-held-at-acl-2025",
          title: 'I co-organized the First Workshop on LLM Security LLMSEC, held at ACL 2025...',
          description: "",
          section: "News",},{id: "news-i-began-serving-as-chair-of-the-toronto-acm-w-professional-chapter",
          title: 'I began serving as Chair of the Toronto ACM-W Professional Chapter',
          description: "",
          section: "News",},{id: "podcast-open-science-and-llms",
          title: 'Open Science and LLMs',
          description: "Guest: Dr. Valentina Pyatkin",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/01_ep/";
            },},{id: "podcast-unlocking-llm-reasoning",
          title: 'Unlocking LLM Reasoning',
          description: "Guest: Simeng Sophia Han",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/02_ep/";
            },},{id: "podcast-llm-hallucinations-and-machine-unlearning",
          title: 'LLM Hallucinations and Machine Unlearning',
          description: "Guest: Dr. Abhilasha Ravichander",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/03_ep/";
            },},{id: "podcast-generalization-in-ai",
          title: 'Generalization in AI',
          description: "Guest: Dr. Dieuwke Hupkes",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/04_ep/";
            },},{id: "podcast-decentralized-ai",
          title: 'Decentralized AI',
          description: "Guest: Wanru Zhao",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/05_ep/";
            },},{id: "podcast-interpretable-ai",
          title: 'Interpretable AI',
          description: "Guest: Dr. Faiza Khan Khattak",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/06_ep/";
            },},{id: "podcast-robots-with-empathy",
          title: 'Robots with Empathy',
          description: "Guest: Dr. Angelica Lim",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/07_ep/";
            },},{id: "podcast-responsible-ai-for-health",
          title: 'Responsible AI for Health',
          description: "Guest: Aparna Balagopalan",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/08_ep/";
            },},{id: "podcast-bias-in-ai",
          title: 'Bias in AI',
          description: "Guest: Dr. Amanda Cercas Curry",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/09_ep/";
            },},{id: "podcast-limits-of-transformers",
          title: 'Limits of Transformers',
          description: "Guest: Dr. Nouha Dziri",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/10_ep/";
            },},{id: "podcast-can-we-trust-ai-explanations",
          title: 'Can We Trust AI Explanations?',
          description: "Guest: Dr. Ana Marasović",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/11_ep/";
            },},{id: "podcast-why-ai-doesn-t-understand-your-culture",
          title: 'Why AI Doesn’t Understand Your Culture?',
          description: "Guest: Dr. Vered Shwartz",
          section: "Podcast",handler: () => {
              window.location.href = "/podcast/12_ep/";
            },},{id: "projects-nlp4science-workshop-emnlp-2024",
          title: 'NLP4Science Workshop (EMNLP 2024)',
          description: "EMNLP 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01_project/";
            },},{id: "projects-ml-for-cognitive-and-mental-health-workshop-aaai-2024",
          title: 'ML for Cognitive and Mental Health Workshop (AAAI 2024)',
          description: "AAAI 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02_project/";
            },},{id: "projects-how-to-make-llms-efficient",
          title: 'How to Make LLMs Efficient?',
          description: "The SLM Show",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03_project/";
            },},{id: "projects-the-dual-nature-of-consistency-in-foundation-models",
          title: 'The Dual Nature of Consistency in Foundation Models',
          description: "TMLS 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04_project/";
            },},{id: "projects-bias-in-large-language-models",
          title: 'Bias in Large Language Models',
          description: "TMLS 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/05_project/";
            },},{id: "projects-deep-learning-methods-for-mental-health-prediction",
          title: 'Deep Learning Methods for Mental Health Prediction',
          description: "Re-Work Toronto AI Summit 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/06_project/";
            },},{id: "projects-machine-learning-methods-in-detecting-alzheimer-s-disease-from-speech-and-language",
          title: 'Machine Learning Methods in Detecting Alzheimer’s Disease from Speech and Language',
          description: "MLconf 2019",
          section: "Projects",handler: () => {
              window.location.href = "/projects/07_project/";
            },},{id: "projects-solving-real-life-challenges-in-detecting-cognitive-diseases-from-speech-using-ml",
          title: 'Solving Real-Life Challenges in Detecting Cognitive Diseases from Speech Using ML',
          description: "ODSC 2019",
          section: "Projects",handler: () => {
              window.location.href = "/projects/08_project/";
            },},{id: "projects-socially-intelligent-robot-and-its-impact-on-customer-experience",
          title: 'Socially Intelligent Robot and Its Impact on Customer Experience',
          description: "CogX 2017",
          section: "Projects",handler: () => {
              window.location.href = "/projects/09_project/";
            },},{id: "projects-life-as-a-researcher-in-the-department-of-computer-science",
          title: 'Life As a Researcher in the Department of Computer Science',
          description: "University of Bath",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=C75JskwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jnovikova", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/Jekaterina-Novikova/2848048", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Jekaterina-Novikova-2/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4754-6126", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/j-novikova-nlp.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/J_Novikova_NLP", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jeknov", "_blank");
        },
      },{
        id: 'social-acm',
        title: 'ACM DL',
        section: 'Socials',
        handler: () => {
          window.open("https://dl.acm.org/profile/87358850257/", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37085694440/", "_blank");
        },
      },];
