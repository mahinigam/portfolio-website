export const projectsData = [
  {
    id: 'codebase-cartographer',
    index: '01',
    name: 'Codebase Cartographer',
    type: 'STRUCTURAL FORENSICS ENGINE',
    utility:
      'Transforms repositories into a navigable Neo4j knowledge graph of files, symbols, dependencies, Git history, risk signals, and AI-generated architectural summaries. Built to answer where behavior lives, what is load-bearing, and what might break before a refactor lands.',
    stack: ['Next.js', 'React 19', 'TypeScript', 'FastAPI', 'Neo4j', 'Tree-sitter', 'Gemini', 'Ollama'],
    metrics: [
      ['Graph', 'files + symbols + imports'],
      ['History', 'up to 500 commits'],
      ['Search', 'Neo4j vector index'],
      ['Tests', 'pytest + Vitest'],
    ],
    repo: 'https://github.com/mahinigam/codebase-cartographer',
  },
  {
    id: 'aegismind',
    index: '02',
    name: 'AegisMind',
    type: 'SERVERLESS DOCUMENT INTELLIGENCE',
    utility:
      'Audits financial and legal documents with multimodal Gemini inference, deterministic Pydantic outputs, and visual grounding back to exact pages. The system is event-driven on GCP so it can process asynchronously with zero runtime idle cost.',
    stack: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'Gemini 2.5 Flash', 'Cloud Run', 'GCS', 'Eventarc'],
    metrics: [
      ['Runtime', 'serverless'],
      ['Grounding', 'page bounding boxes'],
      ['Queueing', 'Pub/Sub DLQ'],
      ['Review', 'human-in-loop'],
    ],
    repo: 'https://github.com/mahinigam/aegismind',
  },
  {
    id: 'autonote',
    index: '03',
    name: 'AutoNote',
    type: 'DOCUMENT AI NOTES',
    utility:
      'Turns PDFs, DOCX, text, and raw pasted material into structured notes with Gemini-backed generation and document Q&A. It ships with export paths for TXT, PDF, and DOCX so extracted understanding can leave the app cleanly.',
    stack: ['Flask', 'Gemini 1.5 Flash', 'PyMuPDF', 'python-docx', 'ReportLab', 'Markdown'],
    metrics: [
      ['Formats', 'PDF / DOCX / TXT'],
      ['Upload cap', '10MB'],
      ['Exports', 'TXT / PDF / DOCX'],
      ['Deploy', 'Render-ready'],
    ],
    repo: 'https://github.com/mahinigam/autonote',
  },
  {
    id: 'atlas-intelligence',
    index: '04',
    name: 'Atlas.Intelligence',
    type: 'GEOPOLITICAL COMMAND SURFACE',
    utility:
      'Fetches geopolitical news from multiple providers, then deduplicates, ranks, clusters, and summarizes country intelligence through a map-first interface. It exposes provider health and pipeline state instead of hiding uncertainty behind a polished headline feed.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'FastAPI', 'Redis', 'MapLibre GL', 'Gemini 2.5 Flash-Lite'],
    metrics: [
      ['Providers', '6 parallel sources'],
      ['Core file', '1,695-line ranking pipeline'],
      ['Window', '3-day default'],
      ['Tests', '7 backend tests'],
    ],
    repo: 'https://github.com/mahinigam/atlas.intelligence',
  },
  {
    id: 'vocab',
    index: '05',
    name: 'Vocab',
    type: 'IOS WORD GALAXY',
    utility:
      'A cinematic vocabulary journal for building a personal word graph with definitions, synonyms, and persistent local storage. The project focuses on interaction polish, tailored onboarding, and a constellation-style learning surface.',
    stack: ['Swift', 'SwiftData', 'iOS 17', 'Xcode 15'],
    metrics: [
      ['Platform', 'iOS 17+'],
      ['Storage', 'SwiftData'],
      ['Language', 'Swift 5.9'],
      ['Interface', 'graph-like UI'],
    ],
    repo: 'https://github.com/mahinigam/vocab',
  },
  {
    id: '4xl',
    index: '06',
    name: '4XL',
    type: 'HYBRID IMAGE UPSCALING',
    utility:
      'Performs 4x neural image upscaling through a privacy-first hybrid inference path: WebGPU/WASM in the browser when possible, server fallback when needed. Local mode keeps images on-device after the model cache is populated.',
    stack: ['React', 'Vite', 'ONNX Runtime Web', 'WebGPU', 'WASM', 'Gradio', 'Real-ESRGAN', 'nginx'],
    metrics: [
      ['Scale', '4x fixed'],
      ['Input max', '1024x1024px'],
      ['Tile', '192px + 16px overlap'],
      ['Timeout', '60 seconds'],
    ],
    repo: 'https://github.com/mahinigam/4xl',
    demo: 'https://huggingface.co/spaces/mahinigam/4xl',
  },
  {
    id: 'task-scheduler',
    index: '07',
    name: 'Distributed Task Scheduler',
    type: 'BACKEND RELIABILITY SYSTEM',
    utility:
      'Implements priority task submission, async workers, retry backoff, dead letter queues, idempotent Lua claims, and worker heartbeat reclamation. It is designed as a production-grade queueing system rather than a toy scheduler.',
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'Lua', 'JSON logs'],
    metrics: [
      ['Rate limit', '50 tasks/min/IP'],
      ['Retries', '2s -> 4s -> 8s'],
      ['Queue', 'Redis ZSET priority'],
      ['Failure sink', 'PostgreSQL DLQ'],
    ],
    repo: 'https://github.com/mahinigam/task-scheduler',
  },
  {
    id: 'fraud-detection',
    index: '08',
    name: 'Hybrid Fraud Detection',
    type: 'IMBALANCED ML FRAMEWORK',
    utility:
      'Combines a three-stage imbalance handling strategy with 10 models, a stacking ensemble, Optuna tuning, and SHAP explainability. The target is high-recall fraud detection with interpretable outputs and sub-100ms inference.',
    stack: ['Python', 'XGBoost', 'LightGBM', 'CatBoost', 'PyTorch', 'Optuna', 'SHAP', 'SMOTE'],
    metrics: [
      ['Datasets', '6.3M + 6.3M rows'],
      ['Models', '10 + stacker'],
      ['Target', '<100ms inference'],
      ['Recall lift', '22-38% target'],
    ],
    repo: 'https://github.com/mahinigam/fraud_detection',
  },
]

export const skillMatrix = [
  {
    number: '01',
    domain: 'INTELLIGENCE',
    items: ['XGBoost', 'PyTorch', 'Optuna', 'SHAP', 'Applied Statistics'],
  },
  {
    number: '02',
    domain: 'SYSTEMS',
    items: ['Python', 'SQL', 'Power BI', 'ETL Pipelines', 'Git'],
  },
  {
    number: '03',
    domain: 'ARCHITECTURE',
    items: ['Data Structures', 'Algorithms', 'System Design'],
  },
]
