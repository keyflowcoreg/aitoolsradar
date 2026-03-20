export interface Tool {
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  pricing: string;
  rating: number;
  pros: string[];
  cons: string[];
  url: string;
  affiliateUrl: string;
  features: string[];
  bestFor: string;
}

export type CategorySlug =
  | "code"
  | "writing"
  | "design"
  | "marketing"
  | "data"
  | "automation";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  toolCount: number;
  funnelCta?: {
    text: string;
    product: string;
    price: string;
    url: string;
  };
}

export const categories: Category[] = [
  {
    slug: "code",
    name: "Code",
    description:
      "AI-powered coding assistants that help you write, debug, and ship code faster. From auto-complete to full autonomous coding agents.",
    icon: "terminal",
    toolCount: 8,
    funnelCta: {
      text: "Master AI prompts to 10x your coding speed",
      product: "PromptForge",
      price: "$19",
      url: "https://promptforge.dev?ref=aitoolsradar",
    },
  },
  {
    slug: "writing",
    name: "Writing",
    description:
      "AI writing assistants for content creation, copywriting, email drafts, and more. Generate high-quality text at scale.",
    icon: "pencil",
    toolCount: 7,
  },
  {
    slug: "design",
    name: "Design",
    description:
      "AI image generators, design assistants, and creative tools. Create stunning visuals without traditional design skills.",
    icon: "palette",
    toolCount: 7,
    funnelCta: {
      text: "Generate complete landing pages with AI",
      product: "SiteForge",
      price: "$29",
      url: "https://siteforge.dev?ref=aitoolsradar",
    },
  },
  {
    slug: "marketing",
    name: "Marketing",
    description:
      "AI tools for SEO, social media, email marketing, and ad creation. Automate your marketing workflows and boost conversions.",
    icon: "megaphone",
    toolCount: 6,
  },
  {
    slug: "data",
    name: "Data",
    description:
      "AI-powered data analysis, visualization, and machine learning tools. Turn raw data into actionable insights without coding.",
    icon: "chart",
    toolCount: 6,
  },
  {
    slug: "automation",
    name: "Automation",
    description:
      "AI-enhanced workflow automation platforms. Connect your apps and automate repetitive tasks with intelligent triggers.",
    icon: "zap",
    toolCount: 6,
    funnelCta: {
      text: "Accept crypto payments on any site",
      product: "CryptoPayKit",
      price: "$49",
      url: "https://cryptopaykit.com?ref=aitoolsradar",
    },
  },
];

export const tools: Tool[] = [
  // === CODE (8 tools) ===
  {
    slug: "cursor",
    name: "Cursor",
    category: "code",
    description:
      "AI-first code editor built on VS Code with deep codebase understanding, multi-file editing, and natural language commands. Uses Claude and GPT-4 under the hood for intelligent code generation and refactoring.",
    pricing: "Free tier / Pro $20/mo / Business $40/mo",
    rating: 4.8,
    pros: [
      "Deep codebase context awareness",
      "Multi-file editing in one prompt",
      "Built on familiar VS Code interface",
      "Excellent tab completion",
    ],
    cons: [
      "Pro plan can get expensive for heavy usage",
      "Occasional slow responses during peak hours",
      "Learning curve for advanced features",
    ],
    url: "https://cursor.com",
    affiliateUrl: "https://cursor.com?ref=aitoolsradar",
    features: [
      "AI chat with codebase context",
      "Multi-file editing",
      "Natural language commands",
      "Tab auto-complete",
      "Codebase indexing",
      "Custom AI rules",
      "Git integration",
      "Terminal AI assistance",
    ],
    bestFor: "Developers who want an all-in-one AI-powered IDE",
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    category: "code",
    description:
      "Anthropic's agentic CLI coding tool that lives in your terminal. Plans, writes, tests, and commits code autonomously. Excels at complex multi-step tasks across large codebases with deep understanding.",
    pricing: "Included with Claude Pro $20/mo / Team $30/mo / Max $200/mo",
    rating: 4.9,
    pros: [
      "Best-in-class reasoning for complex tasks",
      "Terminal-native workflow",
      "Autonomous multi-step execution",
      "Excellent at large refactors",
    ],
    cons: [
      "CLI-only, no GUI editor",
      "Requires Claude subscription",
      "Token usage can be high on complex tasks",
    ],
    url: "https://claude.ai/code",
    affiliateUrl: "https://claude.ai/code?ref=aitoolsradar",
    features: [
      "Agentic coding in terminal",
      "Multi-file creation and editing",
      "Git integration",
      "Test writing and execution",
      "Codebase exploration",
      "Bug fixing",
      "Code review",
      "Project scaffolding",
    ],
    bestFor: "Terminal-native developers tackling complex coding tasks",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    category: "code",
    description:
      "GitHub's AI pair programmer that provides real-time code suggestions directly in your editor. Trained on billions of lines of code, it offers inline completions, chat, and now workspace-level understanding.",
    pricing: "Free tier / Pro $10/mo / Business $19/mo / Enterprise $39/mo",
    rating: 4.5,
    pros: [
      "Seamless GitHub integration",
      "Wide editor support (VS Code, JetBrains, Neovim)",
      "Fast inline suggestions",
      "Strong community and documentation",
    ],
    cons: [
      "Suggestions can be repetitive",
      "Less context-aware than Cursor or Claude Code",
      "Occasional license-problematic suggestions",
    ],
    url: "https://github.com/features/copilot",
    affiliateUrl: "https://github.com/features/copilot?ref=aitoolsradar",
    features: [
      "Inline code completion",
      "Chat assistant",
      "PR summaries",
      "Code review",
      "CLI assistance",
      "Workspace agent",
      "Multi-model support",
      "Knowledge bases",
    ],
    bestFor: "Teams already in the GitHub ecosystem",
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    category: "code",
    description:
      "AI-powered IDE by Codeium featuring Cascade, a deep contextual AI assistant. Offers flows-based editing where AI understands your intent across multiple files and suggests coherent changes.",
    pricing: "Free tier / Pro $15/mo / Teams $35/mo",
    rating: 4.4,
    pros: [
      "Cascade flow-based editing is innovative",
      "Good free tier",
      "Strong multi-file context",
      "Clean modern interface",
    ],
    cons: [
      "Newer product, smaller community",
      "Occasional hallucinations in suggestions",
      "Limited extension ecosystem vs VS Code",
    ],
    url: "https://windsurf.com",
    affiliateUrl: "https://windsurf.com?ref=aitoolsradar",
    features: [
      "Cascade AI assistant",
      "Flow-based editing",
      "Multi-file context",
      "Auto-complete",
      "Command suggestions",
      "Integrated terminal",
      "Git integration",
      "Custom models",
    ],
    bestFor: "Developers who want a fresh AI-native IDE experience",
  },
  {
    slug: "bolt",
    name: "Bolt",
    category: "code",
    description:
      "StackBlitz's AI-powered full-stack web development platform. Describe what you want in natural language and Bolt builds complete web apps with frontend, backend, and deployment -- all in the browser.",
    pricing: "Free tier / Pro $20/mo / Teams $40/mo",
    rating: 4.3,
    pros: [
      "Full-stack app generation from prompts",
      "No local setup required",
      "Instant deployment",
      "Great for prototyping",
    ],
    cons: [
      "Limited to web applications",
      "Complex apps need significant iteration",
      "Browser-based can feel constraining",
    ],
    url: "https://bolt.new",
    affiliateUrl: "https://bolt.new?ref=aitoolsradar",
    features: [
      "Natural language to full-stack app",
      "Browser-based IDE",
      "One-click deployment",
      "Real-time preview",
      "Package management",
      "Database setup",
      "API creation",
      "Responsive design",
    ],
    bestFor: "Non-developers and rapid prototyping",
  },
  {
    slug: "replit-ai",
    name: "Replit AI",
    category: "code",
    description:
      "Cloud-based IDE with AI Agent that can build, run, and deploy applications from natural language descriptions. Features collaborative coding and instant hosting.",
    pricing: "Free tier / Replit Core $25/mo / Teams $40/mo",
    rating: 4.2,
    pros: [
      "All-in-one development environment",
      "AI agent builds full apps",
      "Instant deployment and hosting",
      "Collaborative multiplayer coding",
    ],
    cons: [
      "Performance can lag on complex projects",
      "Limited language/framework support vs local dev",
      "Costly for heavy usage",
    ],
    url: "https://replit.com",
    affiliateUrl: "https://replit.com?ref=aitoolsradar",
    features: [
      "AI Agent app builder",
      "Cloud IDE",
      "Instant hosting",
      "Multiplayer coding",
      "Database integration",
      "Package management",
      "Version control",
      "Custom domains",
    ],
    bestFor: "Beginners and educators building apps from scratch",
  },
  {
    slug: "codeium",
    name: "Codeium",
    category: "code",
    description:
      "Free AI code completion tool supporting 70+ languages and 40+ editors. Provides fast, context-aware autocomplete with a generous free tier that makes it accessible to all developers.",
    pricing: "Free for individuals / Teams $12/mo per seat",
    rating: 4.1,
    pros: [
      "Generous free tier",
      "Supports 70+ programming languages",
      "Works in 40+ editors",
      "Fast completions with low latency",
    ],
    cons: [
      "Less advanced than Cursor or Copilot",
      "No agentic capabilities",
      "Chat feature is basic compared to competitors",
    ],
    url: "https://codeium.com",
    affiliateUrl: "https://codeium.com?ref=aitoolsradar",
    features: [
      "AI autocomplete",
      "70+ language support",
      "40+ editor integrations",
      "In-editor chat",
      "Code search",
      "Fast inference",
      "Context awareness",
      "Custom fine-tuning",
    ],
    bestFor: "Developers wanting free AI code completion",
  },
  {
    slug: "tabnine",
    name: "Tabnine",
    category: "code",
    description:
      "AI code assistant focused on privacy and security. Runs models locally or in a private cloud, making it ideal for enterprise environments with strict data policies.",
    pricing: "Free tier / Dev $12/mo / Enterprise custom pricing",
    rating: 3.9,
    pros: [
      "Privacy-first with local/private models",
      "Enterprise security compliance",
      "Supports all major IDEs",
      "No code leaves your environment",
    ],
    cons: [
      "Suggestions less sophisticated than cloud-based tools",
      "Local models require good hardware",
      "Smaller training data than competitors",
    ],
    url: "https://tabnine.com",
    affiliateUrl: "https://tabnine.com?ref=aitoolsradar",
    features: [
      "Local AI models",
      "Private cloud deployment",
      "IDE integration",
      "Team learning",
      "Code privacy",
      "SOC 2 compliance",
      "Custom models",
      "Whole-line completion",
    ],
    bestFor: "Enterprise teams with strict data privacy requirements",
  },

  // === WRITING (7 tools) ===
  {
    slug: "claude-ai",
    name: "Claude.ai",
    category: "writing",
    description:
      "Anthropic's conversational AI known for nuanced, thoughtful, and detailed writing. Excels at long-form content, analysis, research, and creative writing with a large context window.",
    pricing: "Free tier / Pro $20/mo / Team $30/mo / Max $200/mo",
    rating: 4.9,
    pros: [
      "Best-in-class writing quality and nuance",
      "200K+ token context window",
      "Excellent at following complex instructions",
      "Strong at analysis and research",
    ],
    cons: [
      "Can be verbose by default",
      "No real-time internet access in free tier",
      "Rate limits on free plan",
    ],
    url: "https://claude.ai",
    affiliateUrl: "https://claude.ai?ref=aitoolsradar",
    features: [
      "Long-form content generation",
      "Document analysis",
      "Creative writing",
      "Research synthesis",
      "200K context window",
      "Artifacts (code, documents)",
      "Image understanding",
      "Projects with custom instructions",
    ],
    bestFor: "Writers who need nuanced, high-quality long-form content",
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    category: "writing",
    description:
      "OpenAI's flagship conversational AI. The most widely used AI writing tool with strong general-purpose capabilities, real-time web browsing, image generation, and a vast plugin ecosystem.",
    pricing: "Free tier / Plus $20/mo / Team $25/mo / Enterprise custom",
    rating: 4.6,
    pros: [
      "Largest user community and ecosystem",
      "Real-time web browsing",
      "DALL-E image generation built in",
      "Custom GPTs for specialized tasks",
    ],
    cons: [
      "Writing can feel generic without careful prompting",
      "Shorter context window than Claude",
      "Frequent model changes can affect consistency",
    ],
    url: "https://chat.openai.com",
    affiliateUrl: "https://chat.openai.com?ref=aitoolsradar",
    features: [
      "Conversational AI",
      "Web browsing",
      "Image generation (DALL-E)",
      "Code interpreter",
      "Custom GPTs",
      "File uploads",
      "Voice mode",
      "Plugin ecosystem",
    ],
    bestFor: "General-purpose AI assistant with broad capabilities",
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "writing",
    description:
      "Enterprise AI content platform built for marketing teams. Maintains brand voice consistency across all content with templates, campaigns, and team collaboration features.",
    pricing: "Creator $49/mo / Pro $69/mo / Business custom",
    rating: 4.2,
    pros: [
      "Brand voice customization",
      "50+ content templates",
      "Team collaboration features",
      "Marketing-specific workflows",
    ],
    cons: [
      "Expensive compared to alternatives",
      "Output quality varies by template",
      "Learning curve for full feature set",
    ],
    url: "https://jasper.ai",
    affiliateUrl: "https://jasper.ai?ref=aitoolsradar",
    features: [
      "Brand voice settings",
      "50+ templates",
      "Campaign management",
      "Team collaboration",
      "SEO optimization",
      "Art generation",
      "Browser extension",
      "API access",
    ],
    bestFor: "Marketing teams needing consistent brand voice at scale",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    category: "writing",
    description:
      "AI-powered copywriting platform with workflow automation for sales and marketing teams. Generate emails, social posts, blog content, and sales copy with pre-built templates and workflows.",
    pricing: "Free tier / Starter $49/mo / Advanced $249/mo",
    rating: 4.0,
    pros: [
      "Great for short-form marketing copy",
      "Workflow automation for sales teams",
      "Easy-to-use interface",
      "Good template library",
    ],
    cons: [
      "Long-form content quality is average",
      "Free tier is very limited",
      "Can produce generic-sounding copy",
    ],
    url: "https://copy.ai",
    affiliateUrl: "https://copy.ai?ref=aitoolsradar",
    features: [
      "Sales email sequences",
      "Social media posts",
      "Blog content",
      "Ad copy",
      "Product descriptions",
      "Workflow automation",
      "CRM integration",
      "Multi-language support",
    ],
    bestFor: "Sales and marketing teams automating copywriting",
  },
  {
    slug: "writesonic",
    name: "Writesonic",
    category: "writing",
    description:
      "AI writing and image generation platform with built-in SEO tools. Offers Chatsonic (a ChatGPT alternative with real-time data) and Botsonic (custom AI chatbots).",
    pricing: "Free tier / Individual $16/mo / Teams $13/mo per seat",
    rating: 3.9,
    pros: [
      "Affordable pricing",
      "Built-in SEO optimization",
      "Real-time data via Chatsonic",
      "Multiple products in one platform",
    ],
    cons: [
      "Quality inconsistent across features",
      "Interface can feel cluttered",
      "Customer support can be slow",
    ],
    url: "https://writesonic.com",
    affiliateUrl: "https://writesonic.com?ref=aitoolsradar",
    features: [
      "Article writer",
      "Chatsonic (real-time AI chat)",
      "Botsonic (custom chatbots)",
      "SEO tools",
      "Image generation",
      "Landing page copy",
      "Multi-language",
      "API access",
    ],
    bestFor: "Budget-conscious writers who want SEO-optimized content",
  },
  {
    slug: "rytr",
    name: "Rytr",
    category: "writing",
    description:
      "Budget-friendly AI writing assistant with 40+ use cases and 30+ language support. Simple interface ideal for individuals and small businesses who need basic content generation.",
    pricing: "Free tier / Unlimited $9/mo / Premium $29/mo",
    rating: 3.7,
    pros: [
      "Very affordable",
      "Simple and intuitive interface",
      "40+ use cases",
      "30+ language support",
    ],
    cons: [
      "Output quality below premium tools",
      "Limited customization options",
      "No advanced workflow features",
    ],
    url: "https://rytr.me",
    affiliateUrl: "https://rytr.me?ref=aitoolsradar",
    features: [
      "40+ use cases",
      "30+ languages",
      "Tone selection",
      "Plagiarism checker",
      "SEO analyzer",
      "Chrome extension",
      "Document editor",
      "Team management",
    ],
    bestFor: "Budget-conscious individuals needing simple content generation",
  },
  {
    slug: "grammarly-ai",
    name: "Grammarly AI",
    category: "writing",
    description:
      "The grammar and writing assistant now powered by generative AI. Beyond corrections, it can rewrite, compose, and brainstorm content while maintaining your unique voice and tone.",
    pricing: "Free tier / Premium $12/mo / Business $15/mo per seat",
    rating: 4.3,
    pros: [
      "Seamless integration everywhere you write",
      "Excellent grammar and style corrections",
      "Tone detection and adjustment",
      "Strong privacy and security",
    ],
    cons: [
      "Generative AI features behind paywall",
      "Can be overly prescriptive in suggestions",
      "Limited creative writing capabilities",
    ],
    url: "https://grammarly.com",
    affiliateUrl: "https://grammarly.com?ref=aitoolsradar",
    features: [
      "Grammar and spelling check",
      "AI text generation",
      "Tone adjustment",
      "Style guide enforcement",
      "Plagiarism detection",
      "Browser extension",
      "Desktop app",
      "API integration",
    ],
    bestFor: "Anyone who wants polished, error-free writing everywhere",
  },

  // === DESIGN (7 tools) ===
  {
    slug: "midjourney",
    name: "Midjourney",
    category: "design",
    description:
      "The gold standard for AI image generation. Known for stunning artistic quality, particularly in illustration, concept art, and photorealistic styles. Accessed through Discord or the web app.",
    pricing: "Basic $10/mo / Standard $30/mo / Pro $60/mo / Mega $120/mo",
    rating: 4.8,
    pros: [
      "Highest aesthetic quality in the market",
      "Excellent at artistic and creative styles",
      "Consistent quality across prompts",
      "Active community for inspiration",
    ],
    cons: [
      "No free tier",
      "Discord-based workflow can be awkward",
      "Limited control over specific details",
      "No inpainting in basic plans",
    ],
    url: "https://midjourney.com",
    affiliateUrl: "https://midjourney.com?ref=aitoolsradar",
    features: [
      "Text-to-image generation",
      "Style customization",
      "Upscaling",
      "Variations",
      "Aspect ratio control",
      "Web editor",
      "Describe (image-to-text)",
      "Blend multiple images",
    ],
    bestFor: "Creatives seeking the highest quality AI-generated art",
  },
  {
    slug: "dall-e-3",
    name: "DALL-E 3",
    category: "design",
    description:
      "OpenAI's latest image generation model, integrated directly into ChatGPT. Excels at following complex, detailed prompts accurately with good text rendering capabilities.",
    pricing: "Included with ChatGPT Plus $20/mo / API usage-based",
    rating: 4.4,
    pros: [
      "Best text rendering in images",
      "Integrated into ChatGPT workflow",
      "Excellent prompt adherence",
      "Built-in content policy for safe outputs",
    ],
    cons: [
      "Less artistic flair than Midjourney",
      "Requires ChatGPT subscription for best access",
      "Limited style control",
    ],
    url: "https://openai.com/dall-e-3",
    affiliateUrl: "https://openai.com/dall-e-3?ref=aitoolsradar",
    features: [
      "Text-to-image",
      "Text rendering in images",
      "ChatGPT integration",
      "Edit and refine",
      "Multiple styles",
      "High resolution output",
      "API access",
      "Content safety filters",
    ],
    bestFor: "Users who want accurate prompt-following and text in images",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    category: "design",
    description:
      "Canva's Magic Studio brings AI to the popular design platform. Generate images, remove backgrounds, resize designs, create presentations, and auto-generate marketing materials.",
    pricing: "Free tier / Pro $15/mo / Teams $10/mo per person",
    rating: 4.5,
    pros: [
      "All-in-one design platform with AI",
      "Massive template library",
      "Easy for non-designers",
      "Strong collaboration features",
    ],
    cons: [
      "AI image quality below dedicated generators",
      "Pro features require subscription",
      "Can feel overwhelming with options",
    ],
    url: "https://canva.com",
    affiliateUrl: "https://canva.com?ref=aitoolsradar",
    features: [
      "Magic Studio (AI suite)",
      "Text-to-image",
      "Background removal",
      "Magic Resize",
      "Brand Kit",
      "Presentation builder",
      "Video editing",
      "Print on demand",
    ],
    bestFor: "Non-designers who need professional marketing materials",
  },
  {
    slug: "figma-ai",
    name: "Figma AI",
    category: "design",
    description:
      "AI features integrated into Figma's professional design tool. Auto-layout, AI-generated designs, content population, and design system suggestions for UI/UX professionals.",
    pricing: "Free tier / Professional $15/mo / Organization $45/mo",
    rating: 4.3,
    pros: [
      "Integrated into industry-standard design tool",
      "AI-powered auto-layout",
      "Content generation for mockups",
      "Strong plugin ecosystem",
    ],
    cons: [
      "AI features still maturing",
      "Requires Figma knowledge",
      "Some features limited to paid plans",
    ],
    url: "https://figma.com",
    affiliateUrl: "https://figma.com?ref=aitoolsradar",
    features: [
      "AI-powered design suggestions",
      "Auto-layout generation",
      "Content population",
      "Design system management",
      "Prototyping",
      "Dev mode",
      "Plugin marketplace",
      "Real-time collaboration",
    ],
    bestFor: "UI/UX designers wanting AI to speed up their workflow",
  },
  {
    slug: "adobe-firefly",
    name: "Adobe Firefly",
    category: "design",
    description:
      "Adobe's generative AI integrated across Creative Cloud. Trained on licensed content for commercial safety. Powers Generative Fill in Photoshop and text effects in Illustrator.",
    pricing: "Free tier (25 credits/mo) / Premium $10/mo / Creative Cloud included",
    rating: 4.2,
    pros: [
      "Commercially safe (trained on licensed content)",
      "Deep Adobe ecosystem integration",
      "Excellent Generative Fill in Photoshop",
      "Text effects and vector generation",
    ],
    cons: [
      "Requires Adobe subscription for full power",
      "Image quality below Midjourney",
      "Limited free credits",
    ],
    url: "https://firefly.adobe.com",
    affiliateUrl: "https://firefly.adobe.com?ref=aitoolsradar",
    features: [
      "Text-to-image",
      "Generative Fill",
      "Text effects",
      "Generative Expand",
      "Style references",
      "Vector generation",
      "3D composition",
      "Commercial licensing",
    ],
    bestFor: "Adobe users needing commercially-safe AI generation",
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo",
    category: "design",
    description:
      "AI image generation platform with fine-tuned models and strong control features. Offers model training, real-time generation canvas, and specialized models for game assets and product photography.",
    pricing: "Free tier (150 tokens/day) / Apprentice $12/mo / Artisan $30/mo / Maestro $60/mo",
    rating: 4.1,
    pros: [
      "Custom model fine-tuning",
      "Real-time canvas generation",
      "Specialized game asset models",
      "Generous free tier",
    ],
    cons: [
      "Interface can be complex",
      "Quality varies between models",
      "Token system can be confusing",
    ],
    url: "https://leonardo.ai",
    affiliateUrl: "https://leonardo.ai?ref=aitoolsradar",
    features: [
      "Text-to-image",
      "Model fine-tuning",
      "Real-time canvas",
      "Image-to-image",
      "Texture generation",
      "Motion video",
      "3D generation",
      "API access",
    ],
    bestFor: "Game developers and creators wanting custom AI models",
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    category: "design",
    description:
      "AI image generator that excels at typography and text rendering within images. Great for logo concepts, posters, and any design that requires readable text integrated into visuals.",
    pricing: "Free tier (10 images/day) / Basic $8/mo / Plus $20/mo / Pro $60/mo",
    rating: 4.0,
    pros: [
      "Best-in-class text rendering in images",
      "Affordable pricing",
      "Good free tier",
      "Strong typography capabilities",
    ],
    cons: [
      "General image quality below Midjourney",
      "Smaller community",
      "Fewer advanced editing features",
    ],
    url: "https://ideogram.ai",
    affiliateUrl: "https://ideogram.ai?ref=aitoolsradar",
    features: [
      "Text-to-image",
      "Typography rendering",
      "Logo generation",
      "Poster design",
      "Style presets",
      "Magic Prompt enhancement",
      "Image editing",
      "Batch generation",
    ],
    bestFor: "Designers needing accurate text in AI-generated images",
  },

  // === MARKETING (6 tools) ===
  {
    slug: "hubspot-ai",
    name: "HubSpot AI",
    category: "marketing",
    description:
      "AI features across HubSpot's CRM, marketing, sales, and service platform. Generate emails, blog posts, social content, and get AI-powered insights on your marketing performance.",
    pricing: "Free CRM / Starter $20/mo / Professional $890/mo / Enterprise $3,600/mo",
    rating: 4.4,
    pros: [
      "Integrated across entire marketing stack",
      "AI-powered CRM insights",
      "Content generation for all channels",
      "Strong analytics and reporting",
    ],
    cons: [
      "Very expensive at Professional/Enterprise tiers",
      "AI features locked behind higher plans",
      "Complex setup and learning curve",
    ],
    url: "https://hubspot.com",
    affiliateUrl: "https://hubspot.com?ref=aitoolsradar",
    features: [
      "AI content generation",
      "Predictive lead scoring",
      "Email optimization",
      "Social media scheduling",
      "Chatbot builder",
      "Campaign management",
      "Analytics dashboard",
      "CRM integration",
    ],
    bestFor: "Mid-to-large businesses wanting AI across their marketing stack",
  },
  {
    slug: "mailchimp-ai",
    name: "Mailchimp AI",
    category: "marketing",
    description:
      "AI-powered email marketing platform with smart content generation, send-time optimization, audience segmentation, and predictive analytics for email campaigns.",
    pricing: "Free tier (500 contacts) / Essentials $13/mo / Standard $20/mo / Premium $350/mo",
    rating: 4.1,
    pros: [
      "AI email content generation",
      "Smart send-time optimization",
      "Predictive audience segmentation",
      "Intuitive drag-and-drop builder",
    ],
    cons: [
      "Pricing scales steeply with contacts",
      "AI features limited on lower plans",
      "Template customization can be restrictive",
    ],
    url: "https://mailchimp.com",
    affiliateUrl: "https://mailchimp.com?ref=aitoolsradar",
    features: [
      "AI email writer",
      "Send-time optimization",
      "Audience segmentation",
      "Customer journey builder",
      "A/B testing",
      "Predictive analytics",
      "Landing pages",
      "Social posting",
    ],
    bestFor: "Small businesses starting with AI-powered email marketing",
  },
  {
    slug: "buffer-ai",
    name: "Buffer AI",
    category: "marketing",
    description:
      "Social media management platform with AI-powered post generation, hashtag suggestions, and optimal posting time recommendations. Simple, clean interface for solo entrepreneurs and small teams.",
    pricing: "Free tier (3 channels) / Essentials $6/mo / Team $12/mo",
    rating: 4.0,
    pros: [
      "Clean, simple interface",
      "AI post generation",
      "Very affordable",
      "Good analytics dashboard",
    ],
    cons: [
      "AI features are basic",
      "Limited social network integrations",
      "No advanced automation",
    ],
    url: "https://buffer.com",
    affiliateUrl: "https://buffer.com?ref=aitoolsradar",
    features: [
      "AI post writer",
      "Multi-platform scheduling",
      "Analytics",
      "Engagement tracking",
      "Hashtag suggestions",
      "Best time to post",
      "Link shortener",
      "Team collaboration",
    ],
    bestFor: "Solo entrepreneurs managing social media on a budget",
  },
  {
    slug: "hootsuite-ai",
    name: "Hootsuite AI",
    category: "marketing",
    description:
      "Enterprise social media platform with OwlyWriter AI for content generation, social listening, and advanced analytics. Manages multiple brands across all major social networks.",
    pricing: "Professional $99/mo / Team $249/mo / Enterprise custom",
    rating: 3.9,
    pros: [
      "Comprehensive social media management",
      "OwlyWriter AI for content creation",
      "Strong social listening capabilities",
      "Enterprise-grade security",
    ],
    cons: [
      "Expensive for small teams",
      "Interface feels dated",
      "Steep learning curve",
    ],
    url: "https://hootsuite.com",
    affiliateUrl: "https://hootsuite.com?ref=aitoolsradar",
    features: [
      "OwlyWriter AI",
      "Social listening",
      "Multi-network scheduling",
      "Advanced analytics",
      "Team management",
      "Content calendar",
      "Social ads management",
      "Compliance features",
    ],
    bestFor: "Enterprises managing multiple brands across social channels",
  },
  {
    slug: "adcreative-ai",
    name: "AdCreative",
    category: "marketing",
    description:
      "AI-powered ad creative generation platform. Produces conversion-focused ad images, copy, and videos for Facebook, Google, LinkedIn, and more. Scores creatives for predicted performance.",
    pricing: "Starter $29/mo / Professional $209/mo / Ultimate $449/mo",
    rating: 4.2,
    pros: [
      "AI-scored creatives for performance prediction",
      "Multi-platform ad generation",
      "Quick creative iteration",
      "Competitor analysis features",
    ],
    cons: [
      "Output can look templated",
      "Higher plans are expensive",
      "Limited video capabilities on lower tiers",
    ],
    url: "https://adcreative.ai",
    affiliateUrl: "https://adcreative.ai?ref=aitoolsradar",
    features: [
      "AI ad image generation",
      "Ad copy writing",
      "Performance scoring",
      "Competitor insights",
      "Multi-platform export",
      "Brand customization",
      "Video ad creation",
      "A/B testing",
    ],
    bestFor: "Performance marketers running multi-platform ad campaigns",
  },
  {
    slug: "surfer-seo",
    name: "Surfer SEO",
    category: "marketing",
    description:
      "AI-powered SEO content optimization platform. Analyzes top-ranking pages and provides real-time content scoring, keyword suggestions, and structure recommendations to help you rank higher.",
    pricing: "Essential $99/mo / Scale $219/mo / Enterprise custom",
    rating: 4.3,
    pros: [
      "Data-driven content optimization",
      "Real-time content scoring",
      "SERP analysis",
      "Strong integration with writing tools",
    ],
    cons: [
      "Expensive for casual users",
      "Learning curve for SEO beginners",
      "Keyword research could be deeper",
    ],
    url: "https://surferseo.com",
    affiliateUrl: "https://surferseo.com?ref=aitoolsradar",
    features: [
      "Content editor with scoring",
      "SERP analyzer",
      "Keyword research",
      "Content planner",
      "Audit tool",
      "AI writing assistant",
      "Internal linking",
      "Multi-language support",
    ],
    bestFor: "Content teams focused on SEO-driven organic growth",
  },

  // === DATA (6 tools) ===
  {
    slug: "julius-ai",
    name: "Julius AI",
    category: "data",
    description:
      "AI data analysis platform that lets you chat with your data. Upload spreadsheets, CSVs, or databases and ask questions in natural language. Generates charts, insights, and reports automatically.",
    pricing: "Free tier / Essential $25/mo / Professional $50/mo",
    rating: 4.3,
    pros: [
      "Intuitive natural language interface",
      "Beautiful auto-generated visualizations",
      "Supports many data formats",
      "No coding required",
    ],
    cons: [
      "Limited dataset sizes on free tier",
      "Complex analyses may need refinement",
      "Export options could be better",
    ],
    url: "https://julius.ai",
    affiliateUrl: "https://julius.ai?ref=aitoolsradar",
    features: [
      "Natural language data queries",
      "Auto-visualization",
      "Data cleaning",
      "Statistical analysis",
      "Report generation",
      "CSV/Excel/SQL support",
      "Collaboration",
      "API access",
    ],
    bestFor: "Business users who want insights from data without coding",
  },
  {
    slug: "rows",
    name: "Rows",
    category: "data",
    description:
      "AI-powered spreadsheet that combines the familiarity of Excel with built-in data integrations, AI analysis, and automation. Connect to APIs, databases, and services directly from cells.",
    pricing: "Free tier / Pro $59/mo / Enterprise custom",
    rating: 4.0,
    pros: [
      "Familiar spreadsheet interface with AI",
      "50+ built-in integrations",
      "Live data connections",
      "Beautiful sharing and presentation",
    ],
    cons: [
      "Smaller formula library than Excel",
      "Performance with large datasets",
      "Limited offline capabilities",
    ],
    url: "https://rows.com",
    affiliateUrl: "https://rows.com?ref=aitoolsradar",
    features: [
      "AI analyst",
      "50+ integrations",
      "Live data connections",
      "Custom dashboards",
      "Scheduled automations",
      "API connector",
      "Team sharing",
      "Chart builder",
    ],
    bestFor: "Teams wanting a modern spreadsheet with built-in AI",
  },
  {
    slug: "obviously-ai",
    name: "Obviously AI",
    category: "data",
    description:
      "No-code machine learning platform. Build and deploy predictive models in minutes by pointing at your data and choosing what to predict. No data science expertise required.",
    pricing: "Starter $75/mo / Professional $250/mo / Enterprise custom",
    rating: 3.9,
    pros: [
      "Truly no-code ML model building",
      "Fast model training",
      "Explainable AI results",
      "Easy deployment via API",
    ],
    cons: [
      "Limited model customization",
      "Expensive for small teams",
      "May not match custom ML performance",
    ],
    url: "https://obviously.ai",
    affiliateUrl: "https://obviously.ai?ref=aitoolsradar",
    features: [
      "No-code ML models",
      "Prediction builder",
      "Data visualization",
      "Model explainability",
      "API deployment",
      "Scheduled retraining",
      "Multiple algorithms",
      "Data connectors",
    ],
    bestFor: "Business teams who need predictive analytics without data scientists",
  },
  {
    slug: "akkio",
    name: "Akkio",
    category: "data",
    description:
      "No-code AI platform for data analytics and predictive modeling. Designed for agencies and SMBs to build, deploy, and scale AI solutions. Strong focus on lead scoring and churn prediction.",
    pricing: "Free trial / Grow $49/mo / Scale $99/mo / Enterprise custom",
    rating: 3.8,
    pros: [
      "Easy-to-use no-code interface",
      "White-label for agencies",
      "Fast model training",
      "Good for lead scoring use cases",
    ],
    cons: [
      "Limited to structured data",
      "Advanced customization restricted",
      "Visualization options are basic",
    ],
    url: "https://akkio.com",
    affiliateUrl: "https://akkio.com?ref=aitoolsradar",
    features: [
      "No-code ML models",
      "Lead scoring",
      "Churn prediction",
      "Data chat",
      "White-label",
      "Report generation",
      "Data integrations",
      "API access",
    ],
    bestFor: "Agencies building AI solutions for clients",
  },
  {
    slug: "polymer",
    name: "Polymer",
    category: "data",
    description:
      "AI-powered data visualization and analysis tool that turns spreadsheets into interactive dashboards. Ask questions in natural language and get instant charts, graphs, and insights.",
    pricing: "Free tier / Starter $20/mo / Pro $40/mo / Enterprise custom",
    rating: 3.7,
    pros: [
      "Beautiful auto-generated dashboards",
      "Natural language queries",
      "Easy sharing and embedding",
      "Affordable pricing",
    ],
    cons: [
      "Limited data transformation capabilities",
      "Best for simple datasets",
      "No predictive modeling",
    ],
    url: "https://polymersearch.com",
    affiliateUrl: "https://polymersearch.com?ref=aitoolsradar",
    features: [
      "AI dashboard builder",
      "Natural language search",
      "Auto-visualization",
      "Data storytelling",
      "Embeddable dashboards",
      "Google Sheets sync",
      "Slack integration",
      "Custom branding",
    ],
    bestFor: "Teams who need beautiful dashboards from spreadsheet data quickly",
  },
  {
    slug: "mindsdb",
    name: "MindsDB",
    category: "data",
    description:
      "Open-source AI layer for databases. Bring AI models directly to your data using SQL. Connect any database and create ML models using familiar SQL syntax without moving data.",
    pricing: "Open source (free) / Cloud free tier / Pro $50/mo / Enterprise custom",
    rating: 4.1,
    pros: [
      "Open source and self-hostable",
      "Use SQL to create ML models",
      "No data movement needed",
      "Supports major databases",
    ],
    cons: [
      "Requires SQL knowledge",
      "Self-hosting needs DevOps skills",
      "Documentation could be improved",
    ],
    url: "https://mindsdb.com",
    affiliateUrl: "https://mindsdb.com?ref=aitoolsradar",
    features: [
      "SQL-based ML",
      "Database integrations",
      "AutoML",
      "Time series forecasting",
      "NLP models",
      "Real-time predictions",
      "Open source",
      "Cloud deployment",
    ],
    bestFor: "Developers and DBAs who want ML using familiar SQL",
  },

  // === AUTOMATION (6 tools) ===
  {
    slug: "zapier-ai",
    name: "Zapier AI",
    category: "automation",
    description:
      "The most popular automation platform, now with AI features. Connect 6,000+ apps with natural language workflow creation, AI-powered actions, and intelligent automation suggestions.",
    pricing: "Free tier (100 tasks/mo) / Starter $29/mo / Professional $73/mo / Team $103/mo",
    rating: 4.5,
    pros: [
      "Largest app integration library (6,000+)",
      "Natural language workflow creation",
      "Reliable and well-established",
      "Excellent documentation",
    ],
    cons: [
      "Expensive at scale",
      "Complex workflows can be hard to debug",
      "AI features are still evolving",
    ],
    url: "https://zapier.com",
    affiliateUrl: "https://zapier.com?ref=aitoolsradar",
    features: [
      "6,000+ app integrations",
      "AI workflow builder",
      "Multi-step zaps",
      "Conditional logic",
      "Scheduled triggers",
      "Webhooks",
      "Data formatting",
      "Team management",
    ],
    bestFor: "Businesses wanting the widest app integration ecosystem",
  },
  {
    slug: "make",
    name: "Make (Integromat)",
    category: "automation",
    description:
      "Visual automation platform with a powerful flowchart-style builder. More complex logic and data manipulation than Zapier, with AI-enhanced scenario creation and monitoring.",
    pricing: "Free tier (1,000 ops/mo) / Core $10.59/mo / Pro $18.82/mo / Teams $34.12/mo",
    rating: 4.4,
    pros: [
      "Visual flowchart builder is powerful",
      "More affordable than Zapier at scale",
      "Better data manipulation capabilities",
      "Complex branching and error handling",
    ],
    cons: [
      "Steeper learning curve than Zapier",
      "Fewer integrations than Zapier",
      "Documentation less comprehensive",
    ],
    url: "https://make.com",
    affiliateUrl: "https://make.com?ref=aitoolsradar",
    features: [
      "Visual scenario builder",
      "1,500+ integrations",
      "Data manipulation",
      "Error handling",
      "Scheduling",
      "Webhooks",
      "HTTP module",
      "Template library",
    ],
    bestFor: "Power users who need complex visual automation workflows",
  },
  {
    slug: "n8n",
    name: "n8n",
    category: "automation",
    description:
      "Open-source workflow automation platform with AI capabilities. Self-hostable with a fair-code license. Offers AI agent nodes, code nodes for custom logic, and strong developer experience.",
    pricing: "Self-hosted (free) / Cloud Starter $24/mo / Pro $60/mo / Enterprise custom",
    rating: 4.3,
    pros: [
      "Self-hostable and open-source",
      "AI agent nodes",
      "Custom code nodes (JS/Python)",
      "No vendor lock-in",
    ],
    cons: [
      "Self-hosting requires technical setup",
      "Smaller integration library",
      "Community support only on free tier",
    ],
    url: "https://n8n.io",
    affiliateUrl: "https://n8n.io?ref=aitoolsradar",
    features: [
      "Open source",
      "AI agent nodes",
      "400+ integrations",
      "Custom code nodes",
      "Self-hosting",
      "Credential sharing",
      "Version control",
      "Webhook triggers",
    ],
    bestFor: "Developers who want full control over their automation stack",
  },
  {
    slug: "activepieces",
    name: "Activepieces",
    category: "automation",
    description:
      "Open-source automation platform built as a modern Zapier alternative. Clean interface with AI-powered flow creation, strong TypeScript SDK for custom pieces, and self-hosting support.",
    pricing: "Self-hosted (free) / Cloud free tier / Pro $10/mo / Enterprise custom",
    rating: 4.0,
    pros: [
      "Open source with clean modern UI",
      "Very affordable cloud option",
      "TypeScript SDK for custom integrations",
      "Active development and community",
    ],
    cons: [
      "Fewer integrations than established platforms",
      "Newer product, less battle-tested",
      "Enterprise features still developing",
    ],
    url: "https://activepieces.com",
    affiliateUrl: "https://activepieces.com?ref=aitoolsradar",
    features: [
      "Visual flow builder",
      "100+ integrations",
      "TypeScript SDK",
      "Self-hosting",
      "Webhook triggers",
      "Code steps",
      "Branching logic",
      "Team collaboration",
    ],
    bestFor: "Startups wanting affordable open-source automation",
  },
  {
    slug: "bardeen",
    name: "Bardeen",
    category: "automation",
    description:
      "AI-powered browser automation tool. Automates repetitive browser tasks like scraping, data entry, and app interactions without code. Uses AI to understand and replicate workflows.",
    pricing: "Free tier / Professional $10/mo / Business $15/mo",
    rating: 3.9,
    pros: [
      "Browser-native automation",
      "AI-powered workflow recording",
      "No-code web scraping",
      "Affordable pricing",
    ],
    cons: [
      "Limited to browser-based tasks",
      "Complex automations can be fragile",
      "Fewer integrations than Zapier/Make",
    ],
    url: "https://bardeen.ai",
    affiliateUrl: "https://bardeen.ai?ref=aitoolsradar",
    features: [
      "Browser automation",
      "AI workflow recording",
      "Web scraping",
      "App integrations",
      "Scheduled runs",
      "Data extraction",
      "Form filling",
      "Chrome extension",
    ],
    bestFor: "Users who need to automate repetitive browser tasks",
  },
  {
    slug: "tray-io",
    name: "Tray.io",
    category: "automation",
    description:
      "Enterprise-grade automation platform with AI-powered workflow building. Handles complex API integrations, data transformations, and multi-step processes for large organizations.",
    pricing: "Custom pricing (typically $600+/mo for teams)",
    rating: 4.1,
    pros: [
      "Enterprise-grade reliability",
      "Powerful API integration capabilities",
      "Complex data transformation",
      "Strong security and compliance",
    ],
    cons: [
      "Very expensive",
      "Overkill for small teams",
      "Requires technical knowledge",
    ],
    url: "https://tray.io",
    affiliateUrl: "https://tray.io?ref=aitoolsradar",
    features: [
      "Visual workflow builder",
      "Universal API connector",
      "Data mapping",
      "Error handling",
      "Webhook management",
      "Role-based access",
      "Audit logging",
      "SSO and compliance",
    ],
    bestFor: "Enterprises needing reliable complex API integrations",
  },
];

export function getToolsByCategory(category: CategorySlug): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getTopPicks(): Tool[] {
  return [...tools].sort((a, b) => b.rating - a.rating).slice(0, 3);
}

export function getAlternatives(tool: Tool, limit = 4): Tool[] {
  return tools
    .filter((t) => t.category === tool.category && t.slug !== tool.slug)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export const SITE_URL = "https://aitoolsradar.com";
export const SITE_NAME = "AIToolsRadar";
export const SITE_TAGLINE = "Find the right AI tool. Stop wasting money on the wrong one.";
export const WALLET_ADDRESS = "0xCc97e4579eeE0281947F15B027f8Cad022933d7e";
