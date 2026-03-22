import test from 'node:test';
import assert from 'node:assert/strict';
import server from './server.js';

let listener;
let baseUrl;

test.before(async () => {
  listener = server.listen(0);
  await new Promise(resolve => listener.once('listening', resolve));
  const { port } = listener.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

test.after(async () => {
  await new Promise((resolve, reject) => listener.close(err => err ? reject(err) : resolve()));
});

test('GET /api/health', async () => {
  const res = await fetch(`${baseUrl}/api/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.ok, true);
});

test('GET /api/conversations returns seeded conversations', async () => {
  const res = await fetch(`${baseUrl}/api/conversations`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(body.conversations));
  assert.ok(body.conversations.length >= 1);
});

test('POST /api/conversations/:id/messages creates message and reply', async () => {
  const res = await fetch(`${baseUrl}/api/conversations/main/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: 'Hello API' })
  });
  const body = await res.json();
  assert.equal(res.status, 201);
  assert.equal(body.message.content, 'Hello API');
  assert.match(body.reply.content, /Acknowledged:/);
});

test('POST /api/tasks creates a task', async () => {
  const res = await fetch(`${baseUrl}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Test task', owner: 'dev-build' })
  });
  const body = await res.json();
  assert.equal(res.status, 201);
  assert.equal(body.task.title, 'Test task');
  assert.equal(body.task.owner, 'dev-build');
});

test('PATCH /api/tasks/:id updates task status', async () => {
  const create = await fetch(`${baseUrl}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Patch me' })
  });
  const created = await create.json();
  const res = await fetch(`${baseUrl}/api/tasks/${created.task.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status: 'done' })
  });
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.equal(body.task.status, 'done');
});

test('Notifications can be created and marked read', async () => {
  const create = await fetch(`${baseUrl}/api/notifications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Task done', type: 'task_completed' })
  });
  const created = await create.json();
  assert.equal(create.status, 201);

  const patch = await fetch(`${baseUrl}/api/notifications/${created.notification.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ read: true })
  });
  const body = await patch.json();
  assert.equal(patch.status, 200);
  assert.equal(body.notification.read, true);
});

test('GET /api/subagents returns available subagents', async () => {
  const res = await fetch(`${baseUrl}/api/subagents`);
  const body = await res.json();
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(body.subagents));
  assert.ok(body.subagents.some(item => item.id === 'research'));
});
