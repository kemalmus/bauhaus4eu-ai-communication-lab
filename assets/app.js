"use strict";

// Edit all external destinations in this one table before the workshop.
const tools = {
  v0: "https://v0.app/",
  gemini: "https://gemini.google.com/",
  chatgpt: "https://chatgpt.com/",
  claude: "https://claude.ai/",
  elevenlabs: "https://elevenlabs.io/",
  craftwork: "https://craftwork.design/curated/websites",
  huggingface: "https://huggingface.co/",
  hfImage1: "https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell",
  hfImage2: "https://huggingface.co/spaces/not-lain/background-removal",
  hfTTS1: "https://huggingface.co/spaces/hexgrad/Kokoro-TTS",
  aiStudio: "https://aistudio.google.com/"
};

const toolLabels = {
  v0: "v0",
  gemini: "Gemini",
  chatgpt: "ChatGPT",
  claude: "Claude",
  elevenlabs: "ElevenLabs",
  craftwork: "Craftwork — curated website designs",
  huggingface: "Hugging Face",
  hfImage1: "FLUX.1 Schnell — image generation",
  hfImage2: "Background Removal — image editing",
  hfTTS1: "Kokoro TTS — text to speech",
  aiStudio: "Google AI Studio (optional)"
};

const caseFacts = [
  ["Purpose", "Students from partner universities collaborate on improving the future university campus."],
  ["Audience", "Students across partner institutions."],
  ["Format", "International teams of 3–5 students."],
  ["Programme", "Online kickoff, six-week challenge, mentoring, final showcase."],
  ["Application deadline", "15 October"],
  ["Key benefit", "Work with international peers and experts."]
];

function prompt(title, content) {
  return { title: title, text: content.join("\n") };
}

const pages = {
  concept: {
    number: "01",
    name: "CONCEPT",
    title: "FROM BRIEF TO COMMUNICATION CONCEPT",
    intro: "Turn a confirmed project brief into a clear reason for students to care.",
    context: "The BAUHAUS4EU Future Campus Challenge invites students from partner universities to work together on improving the future university campus. Keep the confirmed facts intact as you explore different ways to frame the opportunity.",
    mission: "Develop three genuinely different communication concepts for the Future Campus Challenge. Do not create three variations of the same slogan. Each direction should offer a different way of framing why a student should care. Then choose ONE concept to develop.",
    facts: caseFacts,
    prompts: [
      prompt("Develop three concepts", [
        "I am developing communication for the initiative described below.",
        "",
        "Generate three genuinely different communication concepts for it.",
        "",
        "The concepts must differ in the central communication idea, not merely wording or tone.",
        "",
        "For each concept provide:",
        "",
        "1. Central idea",
        "2. What aspect of the initiative it emphasizes",
        "3. Why the target audience might care",
        "4. Potential headline direction",
        "5. Message hierarchy",
        "6. Visual direction",
        "7. Suggested visitor journey for a landing page",
        "",
        "Do not invent programme facts.",
        "",
        "PROJECT BRIEF:",
        "",
        "Purpose: students from partner universities collaborate on improving the future university campus.",
        "Audience: students across partner institutions.",
        "Format: international teams of 3–5 students.",
        "Programme: online kickoff, six-week challenge, mentoring, final showcase.",
        "Application deadline: 15 October.",
        "Key benefit: work with international peers and experts.",
        "Communication objective: generate qualified applications.",
        "Constraint: do not claim travel funding or academic credits unless explicitly confirmed."
      ]),
      prompt("Map the visitor journey", [
        "Using the communication concept I selected, design the information architecture for a landing page.",
        "",
        "Think in terms of the visitor journey, not generic website sections.",
        "",
        "Determine:",
        "- what the visitor needs to understand first,",
        "- what should come next,",
        "- what objections or questions need answering,",
        "- where evidence or explanation is required,",
        "- where the call to action belongs.",
        "",
        "Return an ordered page structure with the purpose of each section.",
        "",
        "Do not write all page copy yet."
      ])
    ],
    done: ["One chosen concept", "A central proposition", "Page architecture", "A primary CTA"],
    toolKeys: ["chatgpt", "gemini", "claude"],
    trainer: "Allow 25–30 minutes. Expected output: one distinct concept, a visitor journey, and a primary CTA."
  },
  inspiration: {
    number: "02",
    name: "INSPIRE",
    title: "FIND YOUR DESIGN LANGUAGE",
    intro: "Use a visual reference to extract a design grammar for a different project.",
    context: "Choose any existing webpage whose visual design you genuinely like. It does not need to be a university site, education-related, or connected to BAUHAUS4EU. Architecture, culture, technology, museums, editorial sites, events, fashion, design studios, and public institutions are all useful sources.",
    mission: "Take a screenshot of the page or section you like. Upload the screenshot to your AI tool, then ask it to describe the design decisions behind the reference. Carry the extracted grammar into a completely different website.",
    prompts: [
      prompt("Extract the design language", [
        "Analyse this webpage purely as a visual design reference.",
        "",
        "Do not copy its brand, logos, text, proprietary imagery or content.",
        "",
        "Extract the design language behind it.",
        "",
        "Analyse:",
        "",
        "- typography",
        "- type scale",
        "- spacing",
        "- visual density",
        "- overall composition",
        "- section layout",
        "- alignment",
        "- navigation",
        "- buttons and controls",
        "- image treatment",
        "- borders",
        "- corner treatment",
        "- shadows",
        "- colour usage",
        "- visual hierarchy",
        "- use of whitespace",
        "- motion or interaction patterns if visible",
        "",
        "Distinguish structural design decisions from superficial decoration.",
        "",
        "Then convert your analysis into a concise DESIGN SPECIFICATION that could be given to an AI website builder to create a completely different website with different content."
      ])
    ],
    extra: "reference-rule",
    done: ["One visual reference", "One screenshot", "One extracted design specification"],
    toolKeys: ["chatgpt", "gemini", "claude"],
    trainer: "Allow 15–20 minutes. Expected output: a screenshot and a concise, transferable design specification."
  },
  build: {
    number: "03",
    name: "BUILD",
    title: "BUILD PAGE V1",
    intro: "Combine the message, visitor journey, visual grammar, and confirmed facts in one build brief.",
    context: "Before opening v0, combine your selected concept, page architecture, extracted design specification, and confirmed project facts. The page is a first working version of the communication experience.",
    mission: "Build a responsive landing page for the Future Campus Challenge. Keep the main message, CTA, factual accuracy, and selected design language visible in the result.",
    facts: caseFacts,
    prompts: [
      prompt("Build the first page", [
        "Build a responsive landing page for the BAUHAUS4EU Future Campus Challenge.",
        "",
        "COMMUNICATION OBJECTIVE:",
        "Generate qualified applications from students across BAUHAUS4EU partner universities.",
        "",
        "SELECTED COMMUNICATION CONCEPT:",
        "[PASTE YOUR SELECTED CONCEPT]",
        "",
        "VISITOR JOURNEY / PAGE ARCHITECTURE:",
        "[PASTE YOUR PAGE STRUCTURE]",
        "",
        "DESIGN LANGUAGE:",
        "[PASTE YOUR EXTRACTED DESIGN SPECIFICATION]",
        "",
        "CONFIRMED PROJECT INFORMATION:",
        "",
        "Purpose:",
        "Students from partner universities collaborate on improving the future university campus.",
        "",
        "Audience:",
        "Students across partner institutions.",
        "",
        "Format:",
        "International teams of 3–5 students.",
        "",
        "Programme:",
        "Online kickoff, six-week challenge, mentoring, final showcase.",
        "",
        "Application deadline:",
        "15 October.",
        "",
        "Key benefit:",
        "Work with international peers and experts.",
        "",
        "CONSTRAINTS:",
        "",
        "Do not invent:",
        "- programme dates other than those provided",
        "- prizes",
        "- testimonials",
        "- funding",
        "- travel support",
        "- academic credits",
        "- eligibility rules",
        "- application links",
        "- partner names",
        "- mentor names",
        "",
        "If information is unavailable, design around the missing information rather than inventing it.",
        "",
        "The page should feel intentionally designed, not like a generic SaaS landing page.",
        "",
        "Prioritise:",
        "- communication hierarchy",
        "- clarity",
        "- visual consistency",
        "- strong first screen",
        "- clear CTA",
        "- responsive behaviour."
      ])
    ],
    extra: "quota",
    done: ["The page works", "It reflects the selected concept", "It reflects the extracted design language", "It contains no unsupported programme facts", "The CTA is obvious"],
    toolKeys: ["v0", "gemini", "chatgpt", "claude"],
    trainer: "Allow 35–45 minutes. Expected output: a working, responsive first version with a clear CTA and no invented facts."
  },
  media: {
    number: "04",
    name: "ENRICH",
    title: "ENRICH THE EXPERIENCE",
    intro: "Choose one specialist AI capability to solve a real communication problem.",
    context: "Do not generate media just because AI can generate media. Look at your page first and ask: “What currently looks generic, fake, placeholder-like or incomplete?”",
    mission: "Improve at least ONE meaningful part of the page using a specialist AI capability. The asset must support the selected communication concept and improve the visitor’s experience.",
    prompts: [
      prompt("Prepare a short spoken teaser", [
        "Rewrite the following website content for spoken delivery.",
        "",
        "Do not simply shorten it.",
        "",
        "Make it sound natural when spoken aloud.",
        "",
        "Target duration:",
        "approximately 20–30 seconds.",
        "",
        "Preserve only confirmed information.",
        "",
        "Keep one clear central message and one call to action.",
        "",
        "Avoid:",
        "- long sentences",
        "- corporate language",
        "- lists",
        "- wording that only works visually",
        "",
        "TEXT:",
        "[PASTE WEBSITE COPY]"
      ])
    ],
    extra: "media-options",
    done: ["At least one placeholder or generic element is replaced with something intentionally created for the selected concept."],
    toolKeys: ["gemini", "elevenlabs", "huggingface", "hfImage1", "hfImage2", "hfTTS1"],
    trainer: "Allow 20–30 minutes. Expected output: one purposeful asset integrated into the page, not left as a separate experiment."
  },
  update: {
    number: "05",
    name: "ADAPT",
    title: "PROJECT UPDATE / NEW INFORMATION RECEIVED",
    intro: "The communication already exists. First work out what the new information changes.",
    context: "New confirmed information has arrived after the first page was built. Compare it against the current communication before changing the page.",
    mission: "Your communication already exists. Do NOT immediately rewrite the whole page. First identify which statements changed, which remain accurate, and what new opportunity the update creates.",
    prompts: [
      prompt("Analyse the impact before rewriting", [
        "Below I will provide:",
        "",
        "A. my current website content",
        "B. new confirmed project information",
        "",
        "Perform an impact analysis before rewriting anything.",
        "",
        "Identify all affected communication.",
        "",
        "Classify findings as:",
        "",
        "1. FACTUALLY INCORRECT",
        "2. INCOMPLETE",
        "3. POTENTIALLY MISLEADING",
        "4. STILL CORRECT",
        "5. NEW COMMUNICATION OPPORTUNITY",
        "",
        "For every affected item explain why it is affected.",
        "",
        "Do not invent additional programme details.",
        "",
        "CURRENT COMMUNICATION:",
        "[PASTE]",
        "",
        "NEW INFORMATION:",
        "",
        "Application deadline: 8 October.",
        "",
        "Individuals may apply without an existing team.",
        "",
        "Teams must eventually include students from at least two partner universities.",
        "",
        "The final showcase will be online.",
        "",
        "Travel funding is not confirmed and must not be advertised.",
        "",
        "BAUHAUS4EU particularly wants to reach students who have never participated in an international university programme."
      ])
    ],
    done: ["Affected communication is identified", "Incorrect information is removed", "New information is incorporated", "The page still works as one coherent experience"],
    toolKeys: ["chatgpt", "gemini", "claude"],
    trainer: "Allow 20–25 minutes. Expected output: an impact analysis first, followed by a targeted page update."
  },
  interaction: {
    number: "06",
    name: "INTERACT",
    title: "MAKE THE PAGE DO SOMETHING",
    intro: "Find one point where an interaction can help the visitor understand or decide.",
    context: "A communication page does not have to be static. Ask: “What does the visitor currently have to figure out for themselves?”",
    mission: "Choose ONE interaction that solves a real visitor or communication-team problem. Start with the problem, then choose the simplest useful tool.",
    done: ["One interaction is chosen", "Its purpose is clear to the visitor", "It handles missing information without inventing answers", "It works on a phone"],
    toolKeys: ["v0", "aiStudio"],
    trainer: "Allow 30–40 minutes. Expected output: one useful interaction concept or working interaction, with limitations made clear."
  },
  qa: {
    number: "07",
    name: "CHECK",
    title: "FINAL QA",
    intro: "Review facts, message, design, media, function, and the human decision to publish.",
    context: "Run a final human review of the complete communication experience. Use evidence from the page and the confirmed brief; do not treat a confident AI answer as proof.",
    mission: "Check every part of the page, interaction, and media against the confirmed information and the selected communication concept. Fix or clearly flag anything that is unsupported, confusing, or broken.",
    prompts: [
      prompt("Ask for a final evidence-based review", [
        "Review the website content and interaction against the QA checklist below.",
        "",
        "For each item:",
        "- quote or identify the relevant page content,",
        "- say PASS, NEEDS REVIEW, or FAIL,",
        "- explain the evidence for that assessment,",
        "- suggest the smallest useful correction.",
        "",
        "Do not invent project facts or claim that you tested behavior you cannot inspect.",
        "If information is missing, flag it for a human to confirm.",
        "",
        "CONFIRMED PROJECT INFORMATION:",
        "[PASTE THE LATEST CONFIRMED INFORMATION]",
        "",
        "CURRENT PAGE:",
        "[PASTE PAGE CONTENT OR SHARE A PREVIEW]",
        "",
        "QA CHECKLIST:",
        "Check factual support, message clarity, audience fit, CTA visibility, design reference, generic layouts, media purpose, interaction usefulness, missing-information behavior, and mobile behavior."
      ])
    ],
    done: ["Every failed check is corrected or flagged for a human decision", "The page is reviewed on a phone-sized viewport", "The responsible human decides the page is ready to publish"],
    toolKeys: ["chatgpt", "gemini", "claude"],
    trainer: "Allow 15–20 minutes. Expected output: a completed checklist and a human decision about what is ready to publish."
  }
};

const interactionOptions = [
  {
    id: "eligibility",
    letter: "A",
    title: "Eligibility checker",
    purpose: "Help someone understand what is known about whether they can participate.",
    behavior: "Ask study level, partner-university affiliation, and whether they are applying alone or with a team. Never invent eligibility rules; clearly label unknown rules and direct the visitor to confirm them.",
    builder: "v0 for a simple branching UI. Use Google AI Studio Build only if an AI-driven mini-app solves a specific need.",
    prompt: [
      "Build a simple, accessible eligibility-checking interaction for the BAUHAUS4EU Future Campus Challenge.",
      "Ask the visitor their study level, whether they belong to a partner university, and whether they are applying alone or with a team.",
      "Do not invent eligibility rules. If the available information does not establish eligibility, say that it needs confirmation and show the next step without presenting a guess as a decision.",
      "Use clear, mobile-friendly controls and explain what each answer means."
    ].join("\n")
  },
  {
    id: "readiness",
    letter: "B",
    title: "Application readiness checker",
    purpose: "Help a visitor see what they have prepared and what they still need.",
    behavior: "Use a simple checklist, show missing information, and give a next step. Do not imply that unconfirmed items are required.",
    builder: "v0 for a relatively simple checklist and status UI.",
    prompt: [
      "Build a simple mobile-friendly application readiness checklist for the BAUHAUS4EU Future Campus Challenge.",
      "Let a visitor mark items complete, show which information is still missing, and give a clear next step.",
      "Only include application requirements supplied in the confirmed information below. Do not invent required documents, eligibility rules, or an application link.",
      "If requirements are not confirmed, label them as questions to check rather than required checklist items.",
      "CONFIRMED INFORMATION:",
      "[PASTE THE LATEST CONFIRMED PROJECT INFORMATION]"
    ].join("\n")
  },
  {
    id: "journey",
    letter: "C",
    title: "Interactive programme journey",
    purpose: "Make the six-week programme sequence easier to understand.",
    behavior: "Show the online kickoff, challenge period, mentoring, and final showcase. Do not invent dates or additional milestones.",
    builder: "v0 for a simple timeline or step-by-step interaction.",
    prompt: [
      "Build an accessible, responsive interactive programme journey for the BAUHAUS4EU Future Campus Challenge.",
      "Show these confirmed programme elements in a clear sequence: online kickoff, six-week challenge, mentoring, final showcase.",
      "Do not invent dates, extra milestones, or details about how often mentoring happens.",
      "Make the journey understandable without interaction as well as when a visitor selects a step."
    ].join("\n")
  },
  {
    id: "faq",
    letter: "D",
    title: "FAQ explorer",
    purpose: "Help visitors find answers to the questions that matter to them.",
    behavior: "Use expandable or filtered questions. Only answer from confirmed facts; make missing answers visible instead of guessing.",
    builder: "v0 for expandable or filtered questions.",
    prompt: [
      "Build a lightweight, mobile-friendly FAQ explorer for the BAUHAUS4EU Future Campus Challenge.",
      "Use expandable or filterable questions so visitors can find relevant information quickly.",
      "Answer only with the confirmed information provided below. Do not fill gaps with assumptions. For unanswered questions, say that the information is not confirmed and provide a neutral next step.",
      "CONFIRMED INFORMATION:",
      "[PASTE THE LATEST CONFIRMED PROJECT INFORMATION]"
    ].join("\n")
  },
  {
    id: "pathways",
    letter: "E",
    title: "Applying alone / with a team",
    purpose: "Show that a student can begin alone or apply with an existing team.",
    behavior: "Present two clear pathways. Individuals may apply without an existing team and can be matched later. Teams must eventually include students from at least two partner universities.",
    builder: "v0 for a two-pathway choice with a clear next step.",
    prompt: [
      "Build an accessible two-pathway explainer for students considering the BAUHAUS4EU Future Campus Challenge.",
      "Pathway one: applying alone. State that individuals may apply without an existing team and can be matched later.",
      "Pathway two: applying with a team. State that teams must eventually include students from at least two partner universities.",
      "Do not invent application steps, deadlines, matching procedures, or eligibility rules beyond these confirmed facts.",
      "Make both routes feel clear and welcoming, especially to someone new to international university programmes."
    ].join("\n")
  },
  {
    id: "impact",
    letter: "F",
    title: "Update impact checker",
    purpose: "Help the internal communication team assess new information before editing a page.",
    behavior: "Take current communication and new information as inputs. Identify affected statements, the risk, and a required update. Do not rewrite the whole page first.",
    builder: "v0 for a structured internal tool. Google AI Studio Build is an optional route for an AI-driven mini-app.",
    prompt: [
      "Build an internal communication-team tool that compares current website communication with new confirmed project information.",
      "Inputs: current communication and new information.",
      "Outputs: affected statements, risk, and required update.",
      "Classify each statement as factually incorrect, incomplete, potentially misleading, still correct, or a new communication opportunity.",
      "Explain why each item is affected. Do not rewrite the entire page before showing the impact analysis, and do not invent facts.",
      "CURRENT COMMUNICATION:",
      "[PASTE]",
      "NEW CONFIRMED INFORMATION:",
      "[PASTE]"
    ].join("\n")
  }
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function rootPath() {
  return document.body.getAttribute("data-root") || "./";
}

function hrefFor(slug) {
  return rootPath() + (slug ? slug + "/" : "");
}

function header(number, name) {
  return '<a class="skip-link" href="#main-content">Skip to content</a>' +
    '<header class="topbar">' +
    '<a class="brand-lockup" href="' + hrefFor("") + '" aria-label="BAUHAUS4EU AI Communication Lab home">' +
    '<span class="brand-mark" aria-hidden="true">B</span><span class="brand-name"><strong>BAUHAUS4EU</strong><span>AI Communication Lab</span></span></a>' +
    '<div class="bar-stage"><b>' + esc(number) + '</b> / ' + esc(name) + '</div>' +
    '<a class="home-link" href="' + hrefFor("") + '">Home ↗</a></header>';
}

function footer() {
  return '<footer class="footer"><div class="footer-inner"><small>BAUHAUS4EU · AI COMMUNICATION LAB</small><a href="' + hrefFor("") + '">Return home ↗</a></div></footer>';
}

function stepNavigation(slug) {
  // Adapt stays out of participant navigation; it remains reachable by its trainer URL.
  const trainerQuery = new URLSearchParams(window.location.search).get("trainer") === "1" ? "?trainer=1" : "";
  const stepHref = function (step) { return hrefFor(step) + trainerQuery; };
  const participantSteps = ["concept", "inspiration", "build", "media", "interaction", "qa", "survey"];
  const steps = slug === "update"
    ? ["media", "update", "interaction"]
    : participantSteps;
  const index = steps.indexOf(slug);
  const labels = {
    concept: "Concept",
    inspiration: "Inspiration",
    build: "Build",
    media: "Media Lab",
    update: "Adapt",
    interaction: "Interaction",
    qa: "Final QA",
    survey: "Thank You & Survey"
  };
  const previous = index > 0
    ? '<a class="step-nav-link step-nav-previous" href="' + stepHref(steps[index - 1]) + '"><small>← PREVIOUS</small><strong>' + esc(labels[steps[index - 1]]) + '</strong></a>'
    : '<a class="step-nav-link step-nav-previous" href="' + hrefFor("") + '"><small>← PREVIOUS</small><strong>Home</strong></a>';
  const next = index < steps.length - 1
    ? '<a class="step-nav-link step-nav-next" href="' + stepHref(steps[index + 1]) + '"><small>NEXT →</small><strong>' + esc(labels[steps[index + 1]]) + '</strong></a>'
    : '<a class="step-nav-link step-nav-next" href="' + hrefFor("") + '"><small>NEXT →</small><strong>Home</strong></a>';
  return '<nav class="step-navigation" aria-label="Workshop step navigation">' + previous + next + '</nav>';
}

function hero(number, label, title, intro, home) {
  const art = '<div class="hero-art" aria-hidden="true">' +
    '<div class="art-topline"><span>Campus / future system</span><span>Signal // ' + esc(number) + '</span></div>' +
    '<svg viewBox="0 0 520 330" role="presentation">' +
    '<g fill="none" stroke="#090c14" stroke-opacity=".25" stroke-width="1">' +
    '<path d="M30 70H490M30 115H490M30 160H490M30 205H490M30 250H490M75 40V290M120 40V290M165 40V290M210 40V290M255 40V290M300 40V290M345 40V290M390 40V290M435 40V290"/>' +
    '<path d="M65 220 170 152 245 202 355 124 457 190M65 238 171 171 247 219 355 143 457 209" stroke="#f1204c" stroke-width="2"/>' +
    '</g>' +
    '<g fill="#f1f0f5" stroke="#090c14" stroke-width="2">' +
    '<path d="m70 122 60-38 63 38v74h-123z"/><path d="m232 80 52-34 52 34v78h-104z"/><path d="m353 190 47-30 54 30v62H353z"/>' +
    '</g>' +
    '<g fill="#cfeff3" stroke="#090c14" stroke-width="1.5"><path d="M85 141h20v20H85zM119 141h20v20h-20zM85 170h20v16H85zM119 170h20v16h-20z"/><path d="M250 99h16v17h-16zM276 99h16v17h-16zM250 126h16v17h-16zM276 126h16v17h-16z"/></g>' +
    '<g fill="#090c14" font-family="monospace" font-size="10" font-weight="700"><text x="68" y="215">CAMPUS NODE 01</text><text x="228" y="174">COLLABORATION</text><text x="346" y="270">FUTURE / SHARED</text></g>' +
    '<g fill="#f1204c"><circle cx="171" cy="161" r="5"/><circle cx="355" cy="134" r="5"/><circle cx="457" cy="199" r="5"/></g>' +
    '<g fill="none" stroke="#7c5cff" stroke-width="1.5" stroke-dasharray="5 5"><path d="M85 65h110v36M284 63h100v87M307 223h43"/></g>' +
    '</svg></div>';
  const titleMarkup = home
    ? '<h1 class="page-title">BAUHAUS4EU<span>AI COMMUNICATION LAB</span></h1>'
    : '<h1 class="page-title">' + esc(title) + '</h1>';
  return '<section class="page-hero ' + (home ? "home-hero" : "") + '"><div class="hero-inner">' +
    '<div class="hero-copy"><p class="eyebrow">' + esc(number) + ' / ' + esc(label) + '</p>' + titleMarkup +
    '<p class="hero-deck">' + esc(intro) + '</p>' +
    (home ? '<a class="start-link" href="' + hrefFor("concept") + '">Start / Concept <span>↗</span></a>' : "") +
    '</div>' + art + '<div class="hero-stamp" aria-hidden="true">' + esc(number) + '</div></div></section>';
}

function factsMarkup(facts, className) {
  return '<dl class="' + (className || "facts-list") + '">' + facts.map(function (fact) {
    return '<div class="fact"><dt>' + esc(fact[0]) + '</dt><dd>' + esc(fact[1]) + '</dd></div>';
  }).join("") + '</dl>';
}

function section(code, title, content, className) {
  return '<section class="exercise-section ' + (className || "") + '">' +
    '<h2 class="section-heading"><span class="section-code">' + esc(code) + '</span>' + esc(title) + '</h2>' + content + '</section>';
}

let promptNumber = 0;

function promptPanel(item) {
  const id = "prompt-" + (++promptNumber);
  return '<div class="prompt-panel"><div class="prompt-head"><span>' + esc(item.title) + '</span>' +
    '<button type="button" class="copy-button" data-copy="' + id + '" aria-label="Copy ' + esc(item.title) + ' prompt">COPY</button></div>' +
    '<pre class="prompt-text" id="' + id + '" tabindex="0">' + esc(item.text) + '</pre><div class="copy-help" aria-live="polite"></div></div>';
}

function promptSections(items) {
  return section("C /", "COPY TO AI", '<div class="prompt-group">' + items.map(promptPanel).join("") + '</div>');
}

function doneMarkup(items) {
  return '<ul class="done-list">' + items.map(function (item, index) {
    const id = "done-" + index + "-" + (++promptNumber);
    return '<li><input type="checkbox" id="' + id + '"><label for="' + id + '">' + esc(item) + '</label></li>';
  }).join("") + '</ul>';
}

function toolLinks(keys) {
  return '<div class="tool-list">' + keys.map(function (key) {
    return '<a class="tool-link" href="' + esc(tools[key]) + '" target="_blank" rel="noopener noreferrer">' + esc(toolLabels[key] || key) + '</a>';
  }).join("") + '</div>';
}

function sidePanel(page) {
  const rule = page.number === "05"
    ? "Travel funding is not confirmed. Do not advertise it."
    : "Use confirmed information. If a fact is missing, leave it open for confirmation.";
  let result = '<aside class="aside-stack"><section class="aside-block"><p class="aside-title">CASE / 01</p><h2 class="case-title">Future Campus Challenge</h2><p class="case-deck">One continuous case. One evolving communication experience.</p></section>';
  result += '<section class="aside-block"><p class="aside-title">SOURCE RULE</p><p class="case-deck">' + esc(rule) + '</p></section>';
  result += '<aside class="trainer-note" data-trainer hidden><strong>Trainer note</strong>' + esc(page.trainer || "") + '</aside></aside>';
  return result;
}

function referenceRule() {
  return '<div class="reference-rule"><div><span>DO NOT DO THIS</span><p>“Make my website look like [brand].”</p></div><div><span>DO THIS</span><p>“Apply this extracted design grammar.”</p></div></div>';
}

function quotaBox() {
  return '<div class="quota-box"><p class="quota-label">V0 MESSAGE BUDGET</p><h3>Free quota: treat each generation as expensive.</h3><ol class="quota-list">' +
    ["Build Page v1", "Apply or fix the design language", "Fix major structural problems", "Add media", "Add interaction", "Apply the project update", "Final QA"].map(function (item) {
      return '<li>' + esc(item) + '</li>';
    }).join("") + '</ol><p class="quota-note">Do not spend generations on tiny cosmetic adjustments.</p></div>';
}

function mediaOptions() {
  const rows = [
    ["A", "Hero visual", "Generate a campaign visual aligned with your selected communication concept."],
    ["B", "Supporting illustration", "Create an illustration or graphic that explains or reinforces the programme."],
    ["C", "Image editing", "Remove a background, extend an image, modify composition, or adapt an existing asset."],
    ["D", "Voice / narration", "Create a short spoken teaser or accessible spoken summary."],
    ["E", "Other specialist tool", "Use a useful free creative AI tool if it solves a real communication problem."]
  ];
  return '<div class="options-list">' + rows.map(function (row) {
    return '<div class="option-row"><b>' + row[0] + '</b><p><strong>' + row[1] + '</strong><br>' + row[2] + '</p></div>';
  }).join("") + '</div><div class="principle-box"><strong>Generating the asset is not the finish line.</strong><span>The asset must improve the communication experience.</span></div>';
}

function mediaToolCards() {
  const cards = [
    ["IMAGE / IDEAS", "gemini", "Explore image concepts and creative variations."],
    ["VOICE / NARRATION", "elevenlabs", "Create a short spoken teaser or narration."],
    ["SPECIALIST DEMOS", "huggingface", "Browse image, editing, and audio demos."],
    ["IMAGE GENERATION", "hfImage1", "Generate images from text prompts with FLUX.1 Schnell."],
    ["IMAGE EDITING", "hfImage2", "Remove an image background in a focused demo."],
    ["TEXT TO SPEECH", "hfTTS1", "Turn written text into spoken audio with Kokoro."]
  ];
  return '<div class="media-tool-grid">' + cards.map(function (card) {
    return '<a class="media-tool" href="' + esc(tools[card[1]]) + '" target="_blank" rel="noopener noreferrer">' +
      '<small>' + esc(card[0]) + '</small><strong>' + esc(toolLabels[card[1]]) + '</strong><span class="tool-note">' + esc(card[2]) + ' ↗</span></a>';
  }).join("") + '</div>';
}

function updateInfo() {
  const items = [
    "Individuals may apply without an existing team.",
    "Teams must eventually include students from at least two partner universities.",
    "The final showcase will be online.",
    "Travel funding is not confirmed and must not be advertised.",
    "BAUHAUS4EU particularly wants to reach students who have never participated in an international university programme."
  ];
  return '<div class="deadline-hero"><span>APPLICATION DEADLINE</span><strong>8 October</strong></div>' +
    '<h3 class="subhead">New confirmed information</h3><ul class="update-facts">' +
    items.map(function (item) { return '<li class="update-fact">' + esc(item) + '</li>'; }).join("") + '</ul>';
}

function interactionMarkup() {
  const cards = interactionOptions.map(function (option, index) {
    const checked = index === 0 ? " checked" : "";
    return '<input type="radio" name="interaction" id="interaction-' + option.id + '" value="' + option.id + '"' + checked + '>' +
      '<label class="interaction-choice" for="interaction-' + option.id + '"><span class="choice-letter">' + option.letter + '</span><strong>' + esc(option.title) + '</strong></label>';
  }).join("");
  const panels = interactionOptions.map(function (option, index) {
    return '<div class="interaction-panel" data-interaction="' + option.id + '"' + (index ? " hidden" : "") + '><h3>' + esc(option.title) + '</h3>' +
      '<dl><dt>Purpose</dt><dd>' + esc(option.purpose) + '</dd><dt>Minimum behaviour</dt><dd>' + esc(option.behavior) + '</dd><dt>Suggested builder</dt><dd>' + esc(option.builder) + '</dd></dl>' +
      promptPanel(prompt("Copy the build instruction", option.prompt.split("\n"))).replace("COPY", "COPY TO AI") +
      '</div>';
  }).join("");
  return section("C /", "CHOOSE ONE INTERACTION", '<div class="interaction-principle"><strong>The problem comes first.</strong><span>The tool comes second.</span></div><div class="interaction-picker" role="radiogroup" aria-label="Choose an interaction">' + cards + '</div><div class="interaction-detail">' + panels + '</div>');
}

const qaGroups = [
  ["01 / SOURCE", [
    "Are all factual statements supported by confirmed information?",
    "Did AI invent any dates, benefits, funding, eligibility, partners, testimonials, or credits?"
  ]],
  ["02 / MESSAGE", [
    "Can a first-time visitor understand the initiative quickly?",
    "Is the main value proposition clear?",
    "Is the CTA obvious?",
    "Does the page speak to the intended audience rather than everyone?"
  ]],
  ["03 / DESIGN", [
    "Does the final page still reflect the chosen design reference?",
    "Has the builder fallen back to generic cards or a SaaS layout?",
    "Is there a clear visual hierarchy?",
    "Are media assets stylistically coherent?"
  ]],
  ["04 / MEDIA", [
    "Does every generated image or audio element improve communication?",
    "Is anything merely decorative noise?"
  ]],
  ["05 / FUNCTION", [
    "Does the interaction actually help the user?",
    "What happens when information is missing?",
    "Does it still work on mobile?"
  ]],
  ["06 / HUMAN CHECK", [
    "Has a human reviewed the content, interaction, and media?",
    "Has a human decided what is true, useful, and ready to publish?"
  ]]
];

function qaMarkup() {
  const groups = qaGroups.map(function (group, groupIndex) {
    const items = group[1].map(function (item, itemIndex) {
      const id = "qa-" + groupIndex + "-" + itemIndex;
      return '<li><input type="checkbox" id="' + id + '"><label for="' + id + '">' + esc(item) + '</label></li>';
    }).join("");
    return '<section class="qa-group"><h3>' + esc(group[0]) + '</h3><ul class="done-list">' + items + '</ul></section>';
  }).join("");
  return '<div class="qa-groups">' + groups + '</div>' +
    '<div class="human-check"><p>AI can generate.<br>AI can critique.<br>AI can build.</p><p>The human still decides what is true, useful and ready to publish.</p></div>';
}

function exercisePage(page, slug) {
  let main = "";
  if (slug === "update") main += section("!", "NEW INFORMATION RECEIVED", updateInfo(), "update-section");
  main += section("A /", "CONTEXT", '<p class="section-copy">' + esc(page.context) + '</p>' + (page.facts ? factsMarkup(page.facts) : ""));
  if (slug === "inspiration") {
    main += section("SOURCE /", "CURATED WEBPAGE EXAMPLES", '<p class="section-copy">Browse the gallery for a visual reference, then choose one page to analyse.</p>' + toolLinks(["craftwork"]));
  }
  main += section("B /", "YOUR MISSION", '<div class="mission-band"><p class="section-copy">' + esc(page.mission) + '</p></div>');
  if (slug === "interaction") main += interactionMarkup();
  else main += promptSections(page.prompts || []);
  if (page.extra === "reference-rule") main += section("REFERENCE /", "DESIGN GRAMMAR", referenceRule());
  if (page.extra === "quota") main += section("V0 /", "SPEND GENERATIONS WITH INTENT", quotaBox());
  if (page.extra === "media-options") {
    main += section("OPTIONS /", "CHOOSE A REAL NEED", mediaOptions());
    main += section("TOOLS /", "SPECIALIST CAPABILITIES", mediaToolCards());
  }
  if (slug === "qa") main += section("REVIEW /", "FINAL CHECKLIST", qaMarkup());
  main += section("D /", "DONE WHEN", doneMarkup(page.done));
  main += '<section class="exercise-section"><h2 class="section-heading"><span class="section-code">E /</span>TOOLS</h2>' + toolLinks(page.toolKeys) + '</section>';
  return header(page.number, page.name) +
    hero(page.number, page.name, page.title, page.intro, false) +
    '<main class="content-wrap" id="main-content"><div class="exercise-layout"><div class="exercise-main">' + main + '</div>' + sidePanel(page) + '</div>' + stepNavigation(slug) + '</main>' +
    footer();
}

function homePage() {
  const flow = [
    ["01", "CONCEPT", "concept"],
    ["02", "INSPIRE", "inspiration"],
    ["03", "BUILD", "build"],
    ["04", "ENRICH", "media"],
    ["05", "ADAPT", null],
    ["06", "INTERACT", "interaction"],
    ["07", "CHECK", "qa"],
    ["08", "FEEDBACK", "survey"]
  ];
  const flowHTML = '<div class="stage-flow" aria-label="Workshop stages">' + flow.map(function (item) {
    const content = '<b>' + item[0] + '</b><span>' + item[1] + '</span>';
    return item[2]
      ? '<a class="flow-step" href="' + hrefFor(item[2]) + '">' + content + '</a>'
      : '<div class="flow-step">' + content + '</div>';
  }).join("") + '</div>';
  const actions = [
    ["01", "Start / Concept", "concept"],
    ["02", "Inspiration", "inspiration"],
    ["03", "Build", "build"],
    ["04", "Media Lab", "media"],
    ["06", "Interaction", "interaction"],
    ["07", "Final QA", "qa"],
    ["08", "Feedback survey", "survey"]
  ];
  const actionHTML = '<div class="home-actions">' + actions.map(function (item) {
    return '<a class="action-link" href="' + hrefFor(item[2]) + '"><small>' + item[0] + '</small><span>' + esc(item[1]) + '</span><b aria-hidden="true">↗</b></a>';
  }).join("") + '</div>';
  const statement = '<p class="statement">One case. One evolving artifact. Different AI capabilities enter when the work requires them.</p>';
  const casePanel = '<section class="case-panel"><div><p class="eyebrow">CASE FILE / 01</p><h2>Future Campus Challenge</h2><p>One continuous case from first brief to final quality check.</p></div>' + factsMarkup(caseFacts) + '</section>';
  return header("00", "PORTAL") +
    hero("00", "PARTICIPANT PORTAL", "", "From a short project brief to a working digital communication experience.", true) +
    '<main class="content-wrap" id="main-content">' + statement + flowHTML + casePanel +
    '<section class="exercise-section"><p class="eyebrow">WORKSHOP ROUTES</p><h2 class="section-heading">Choose a stage</h2>' + actionHTML + '</section></main>' +
    footer();
}

function surveyPage() {
  return header("08", "THANK YOU") +
    hero("08", "THANK YOU", "THANK YOU FOR BUILDING WITH US", "Your ideas, questions, and creativity made this workshop what it was.", false) +
    '<main class="content-wrap" id="main-content"><section class="survey-invitation"><p class="eyebrow">ONE LAST THING / YOUR FEEDBACK</p>' +
    '<h2 class="section-heading">Help us make the next workshop better.</h2>' +
    '<p>When you have a few minutes, please fill in our short post-training survey. Your honest feedback helps us understand what worked for you and what we can improve. Thank you for sharing it.</p>' +
    '<p class="survey-code-instruction">Or go to <strong>menti.com</strong> and enter the code:</p>' +
    '<p class="survey-code">3465 4338</p>' +
    '<img class="survey-qr" src="' + rootPath() + 'assets/survey-qr.png" alt="QR code for the post-training evaluation survey">' +
    '</section>' + stepNavigation("survey") + '</main>' + footer();
}

function wireCopyButtons() {
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    button.addEventListener("click", async function () {
      const target = document.getElementById(button.getAttribute("data-copy"));
      const panel = button.closest(".prompt-panel");
      const help = panel.querySelector(".copy-help");
      const content = target.textContent;
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(content);
        button.textContent = "COPIED";
        button.classList.add("is-copied");
        help.textContent = "";
        window.setTimeout(function () {
          button.textContent = "COPY";
          button.classList.remove("is-copied");
        }, 1800);
      } catch (error) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(target);
        selection.removeAllRanges();
        selection.addRange(range);
        help.textContent = "Copy manually with Ctrl/Cmd+C.";
        button.textContent = "SELECTED";
        window.setTimeout(function () { button.textContent = "COPY"; }, 2600);
      }
    });
  });
}

function wireInteractions() {
  const radios = document.querySelectorAll('input[name="interaction"]');
  radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
      document.querySelectorAll("[data-interaction]").forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-interaction") !== radio.value;
      });
    });
  });
}

const pageKey = document.body.getAttribute("data-page") || "home";
const mount = document.getElementById("workshop-root");
  mount.innerHTML = pageKey === "home" ? homePage() : pageKey === "survey" ? surveyPage() : !pages[pageKey] ? homePage() : exercisePage(pages[pageKey], pageKey);
if (new URLSearchParams(window.location.search).get("trainer") === "1") {
  document.querySelectorAll("[data-trainer]").forEach(function (note) { note.hidden = false; });
}
wireCopyButtons();
wireInteractions();
