export const db = {
  conversations: [
    {
      id: 'main',
      title: 'Main',
      type: 'main',
      preview: 'Working through mobile app direction and product shape.',
      unreadCount: 0,
      updatedAt: '2026-03-22T19:20:00+08:00'
    },
    {
      id: 'research-android',
      title: 'Research — Android app landscape',
      type: 'subagent',
      preview: 'Comparing voice interaction patterns and reuse options.',
      unreadCount: 2,
      updatedAt: '2026-03-22T19:10:00+08:00'
    }
  ],
  messages: {
    main: [
      {
        id: 'm1',
        role: 'assistant',
        content: 'Morning. Want to stay in main, or switch to a specialist subagent for a focused thread?',
        createdAt: '2026-03-22T09:02:00+08:00'
      },
      {
        id: 'm2',
        role: 'user',
        content: 'Show me the Android app concept first.',
        createdAt: '2026-03-22T09:03:00+08:00'
      }
    ],
    'research-android': []
  },
  tasks: [
    {
      id: 'task-1',
      title: 'Fix mobile prototype layout',
      status: 'done',
      conversationId: 'main',
      owner: 'dev-build',
      summary: 'Header/menu alignment and overflow fixes completed.',
      updatedAt: '2026-03-22T19:11:00+08:00'
    },
    {
      id: 'task-2',
      title: 'Develop product pack',
      status: 'done',
      conversationId: 'main',
      owner: 'main',
      summary: 'User stories, lifecycle, notification, and QA docs added.',
      updatedAt: '2026-03-22T19:24:00+08:00'
    }
  ],
  notifications: [
    {
      id: 'n1',
      type: 'task_completed',
      title: 'Product pack completed',
      body: 'User stories and test cases are ready for review.',
      conversationId: 'main',
      taskId: 'task-2',
      read: false,
      priority: 'normal',
      createdAt: '2026-03-22T19:24:00+08:00'
    }
  ],
  subagents: [
    { id: 'research', name: 'Research', description: 'Deep dives, synthesis, and sourcing' },
    { id: 'coding', name: 'Coding', description: 'Build features and implementation help' },
    { id: 'ops', name: 'Ops', description: 'Workflows, automation, and systems' }
  ]
};

export function nextId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}
