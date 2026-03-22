const agentInfo = {
  main: { title: 'Main', subtitle: 'Conversation with ZeeBot' },
  research: { title: 'Research', subtitle: 'Sources, summaries, and deep dives' },
  coding: { title: 'Coding', subtitle: 'Builds, reviews, and implementation help' },
  ops: { title: 'Ops', subtitle: 'Workflows, automation, and systems' }
};

const screenTitles = {
  chat: null,
  threads: 'Threads',
  attachments: 'Attachments',
  settings: 'Settings'
};

const agentButtons = document.querySelectorAll('.agent-pill');
const navButtons = document.querySelectorAll('.tab-btn');
const screens = document.querySelectorAll('.screen');
const titleEl = document.getElementById('screenTitle');
const subtitleEl = document.getElementById('screenSubtitle');
const sendBtn = document.getElementById('sendBtn');
const chatInput = document.getElementById('chatInput');
const messages = document.getElementById('messages');
const openSubagentBtn = document.getElementById('openSubagentBtn');
const openSubagentBtn2 = document.getElementById('openSubagentBtn2');
const closeSheetBtn = document.getElementById('closeSheetBtn');
const subagentSheet = document.getElementById('subagentSheet');
const sheetBackdrop = document.getElementById('sheetBackdrop');
const createAgentButtons = document.querySelectorAll('[data-create-agent]');
const heroCard = document.getElementById('chatHero');
const jumpButtons = document.querySelectorAll('[data-screen-jump]');
const threadButtons = document.querySelectorAll('[data-thread-agent]');
const navMicBtn = document.getElementById('navMicBtn');
const attachBtn = document.getElementById('attachBtn');
const attachmentBar = document.getElementById('attachmentBar');

let currentAgent = 'main';
let currentScreen = 'chat';
let pttActive = false;

function refreshHeader() {
  if (currentScreen === 'chat') {
    titleEl.textContent = agentInfo[currentAgent].title;
    subtitleEl.textContent = agentInfo[currentAgent].subtitle;
    heroCard.style.display = 'flex';
  } else if (currentScreen === 'threads') {
    titleEl.textContent = 'Threads';
    subtitleEl.textContent = `Current focus: ${agentInfo[currentAgent].title}`;
    heroCard.style.display = 'none';
  } else {
    titleEl.textContent = screenTitles[currentScreen];
    subtitleEl.textContent = `Selected agent: ${agentInfo[currentAgent].title}`;
    heroCard.style.display = 'none';
  }
}

function setAgent(agent) {
  currentAgent = agent;
  agentButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.agent === agent));
  threadButtons.forEach(btn => btn.classList.toggle('active-thread', btn.dataset.threadAgent === agent));
  refreshHeader();
}

function setScreen(screen) {
  currentScreen = screen;
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.screen === screen));
  screens.forEach(screenEl => screenEl.classList.remove('active'));
  document.getElementById(`screen-${screen}`).classList.add('active');
  refreshHeader();
}

function openSheet() {
  subagentSheet.classList.remove('hidden');
  sheetBackdrop.classList.remove('hidden');
}

function closeSheet() {
  subagentSheet.classList.add('hidden');
  sheetBackdrop.classList.add('hidden');
}

function setPttState(active) {
  pttActive = active;
  navMicBtn.classList.toggle('active', active);
  navMicBtn.innerHTML = `<span>${active ? '●' : '🎙'}</span>`;
  if (active) {
    setScreen('chat');
  }
}

function appendVoiceMessage() {
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.innerHTML = `<div class="msg-body"><div class="bubble">[Voice note sent]</div><div class="meta">You · just now</div></div>`;
  messages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.className = 'msg bot';
  botMsg.innerHTML = `<div class="avatar-mini">Z</div><div class="msg-body"><div class="bubble">Voice captured. In the real app, ZeeBot would transcribe and reply in this same chat thread.</div><div class="meta">ZeeBot · just now</div></div>`;
  messages.appendChild(botMsg);
  messages.scrollTop = messages.scrollHeight;
}

agentButtons.forEach(btn => btn.addEventListener('click', () => setAgent(btn.dataset.agent)));
navButtons.forEach(btn => btn.addEventListener('click', () => setScreen(btn.dataset.screen)));
jumpButtons.forEach(btn => btn.addEventListener('click', () => setScreen(btn.dataset.screenJump)));
threadButtons.forEach(btn => btn.addEventListener('click', () => { setAgent(btn.dataset.threadAgent); setScreen('chat'); }));

sendBtn.addEventListener('click', () => {
  const text = chatInput.value.trim();
  if (!text) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'msg user';
  userMsg.innerHTML = `<div class="msg-body"><div class="bubble"></div><div class="meta">You · just now</div></div>`;
  userMsg.querySelector('.bubble').textContent = text;
  messages.appendChild(userMsg);

  const botMsg = document.createElement('div');
  botMsg.className = 'msg bot';
  botMsg.innerHTML = `<div class="avatar-mini">Z</div><div class="msg-body"><div class="bubble">Got it. In the real app this would route to the <strong>${agentInfo[currentAgent].title}</strong> thread and stream the reply back here.</div><div class="meta">ZeeBot · just now</div></div>`;
  messages.appendChild(botMsg);
  chatInput.value = '';
  messages.scrollTop = messages.scrollHeight;
});

openSubagentBtn.addEventListener('click', openSheet);
openSubagentBtn2.addEventListener('click', openSheet);
closeSheetBtn.addEventListener('click', closeSheet);
sheetBackdrop.addEventListener('click', closeSheet);

createAgentButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const agent = btn.dataset.createAgent;
    closeSheet();
    setAgent(agent);
    setScreen('chat');
    const botMsg = document.createElement('div');
    botMsg.className = 'msg bot';
    botMsg.innerHTML = `<div class="avatar-mini">${agentInfo[agent].title[0]}</div><div class="msg-body"><div class="bubble">${agentInfo[agent].title} subagent created. In the real app, this would open a new focused thread while keeping Main available.</div><div class="meta">${agentInfo[agent].title} · just now</div></div>`;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  });
});

navMicBtn.addEventListener('mousedown', () => setPttState(true));
navMicBtn.addEventListener('mouseup', () => {
  if (pttActive) appendVoiceMessage();
  setPttState(false);
});
navMicBtn.addEventListener('mouseleave', () => setPttState(false));
navMicBtn.addEventListener('touchstart', (e) => { e.preventDefault(); setPttState(true); }, { passive: false });
navMicBtn.addEventListener('touchend', () => {
  if (pttActive) appendVoiceMessage();
  setPttState(false);
});
attachBtn.addEventListener('click', () => {
  attachmentBar.scrollLeft = attachmentBar.scrollWidth;
});

refreshHeader();
