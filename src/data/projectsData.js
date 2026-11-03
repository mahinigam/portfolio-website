export const projectsData = [
  {
    id: 'codebase-cartographer',
    index: '01',
    name: 'Codebase Cartographer',
    type: 'STRUCTURAL FORENSICS ENGINE',
    utility:
      'Transforms repositories into a navigable Neo4j knowledge graph of files, dependencies, and Git history. Features a hybrid structural + semantic risk model and a two-tier AI architecture—using TypeSafe Jev for deterministic classification and Gemini/Ollama for generative architectural reasoning.',
    stack: ['Next.js', 'React 19', 'TypeScript', 'Python', 'FastAPI', 'Neo4j', 'TypeSafe Jev', 'Gemini'],
    metrics: [
      ['Graph', 'files + symbols + imports'],
      ['History', 'up to 500 commits'],
      ['Search', 'Neo4j vector index'],
      ['Jev Bonds', '10 structured decisions'],
    ],
    repo: 'https://github.com/mahinigam/codebase-cartographer',
  },
  {
    id: 'disvent',
    index: '02',
    name: 'Disvent',
    type: 'EVENT-STREAMING ENGINE',
    utility:
      'A real-time event-streaming and analytical engine designed for financial risk operations and fraud detection. Implements Avro-partitioned ingestion, stateful stream processing over sliding windows, low-latency OLAP serving, and a dual-route API.',
    stack: ['Redpanda', 'ClickHouse', 'PySpark', 'FastAPI', 'DuckDB', 'Prometheus', 'Grafana', 'Streamlit'],
    metrics: [
      ['Throughput', '2,500 tx/sec'],
      ['Risk Engine', '10-min sliding'],
      ['Analytics', 'Sub-second OLAP'],
      ['Security', 'X-API-Key'],
    ],
    repo: 'https://github.com/mahinigam/disvent',
  },
  {
    id: '4xl',
    index: '03',
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
    id: 'breakpoint',
    index: '04',
    name: 'Breakpoint',
    type: 'CREDIT-RISK DECISION SYSTEM',
    utility:
      'Turns calibrated credit-risk scores into a constrained Grow / Hold / Restrict policy, pairing a 200-feature LightGBM model with explicit portfolio guardrails and economic scenario analysis.',
    stack: ['Python', 'LightGBM', 'DuckDB', 'SHAP', 'Tableau', 'scikit-learn', 'pytest'],
    metrics: [
      ['Calibrated AUC', '0.9584'],
      ['Policy', 'Grow / Hold / Restrict'],
      ['Profit uplift', '+5.1% to +9.7%'],
      ['Worst-case regret', '1.83%'],
    ],
    repo: 'https://github.com/mahinigam/breakpoint',
  },
  {
    id: 'ai-risk-manager',
    index: '05',
    name: 'AI Risk Manager',
    type: 'FRAUD DEFENSE SYSTEM',
    utility:
      'A production-grade fraud defense system combining merchant-level risk aggregation, NetworkX-powered abuse-ring graph analysis, ROI-optimized decision thresholding, and Gemini-backed threat intelligence reporting.',
    stack: ['Python', 'NetworkX', 'Streamlit', 'LightGBM', 'XGBoost', 'Gemini 3.6 Flash', 'Optuna', 'SHAP'],
    metrics: [
      ['Datasets', '6.3M rows'],
      ['Detection', 'Abuse-Ring Graph'],
      ['Inference', '<100ms target'],
      ['ROI', '93.9% net savings'],
    ],
    repo: 'https://github.com/mahinigam/ai-risk-manager',
  },
  {
    id: 'vocab',
    index: '06',
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
    id: 'aegismind',
    index: '07',
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
    id: 'atlas-intelligence',
    index: '08',
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
    id: 'autonote',
    index: '09',
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
