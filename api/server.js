import http from 'node:http';
import { URL } from 'node:url';
import { db, nextId } from './data.js';

function json(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(body, null, 2));
}

function notFound(res) {
  json(res, 404, { error: 'not_found' });
}

function collectBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', chunk => { raw += chunk; });
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function listMessages(conversationId) {
  return db.messages[conversationId] ?? [];
}

const server = http.createServer(async (req, res) => {
  if (!req.url) return notFound(res);
  if (req.method === 'OPTIONS') return json(res, 204, {});

  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;

  try {
    if (req.method === 'GET' && path === '/api/health') {
      return json(res, 200, { ok: true, service: 'zeebot-mobile-prototype-api' });
    }

    if (req.method === 'GET' && path === '/api/conversations') {
      return json(res, 200, { conversations: db.conversations });
    }

    if (req.method === 'GET' && path.match(/^\/api\/conversations\/[^/]+\/messages$/)) {
      const conversationId = path.split('/')[3];
      return json(res, 200, { conversationId, messages: listMessages(conversationId) });
    }

    if (req.method === 'POST' && path.match(/^\/api\/conversations\/[^/]+\/messages$/)) {
      const conversationId = path.split('/')[3];
      const body = await collectBody(req);
      if (!body.content || !String(body.content).trim()) {
        return json(res, 400, { error: 'content_required' });
      }

      if (!db.messages[conversationId]) db.messages[conversationId] = [];
      const createdAt = new Date().toISOString();
      const userMessage = {
        id: nextId('msg'),
        role: body.role ?? 'user',
        content: String(body.content).trim(),
        createdAt
      };
      db.messages[conversationId].push(userMessage);

      const assistantReply = {
        id: nextId('msg'),
        role: 'assistant',
        content: `Acknowledged: ${userMessage.content}`,
        createdAt: new Date().toISOString()
      };
      db.messages[conversationId].push(assistantReply);

      return json(res, 201, { message: userMessage, reply: assistantReply });
    }

    if (req.method === 'GET' && path === '/api/tasks') {
      const status = url.searchParams.get('status');
      const tasks = status ? db.tasks.filter(task => task.status === status) : db.tasks;
      return json(res, 200, { tasks });
    }

    if (req.method === 'POST' && path === '/api/tasks') {
      const body = await collectBody(req);
      if (!body.title || !String(body.title).trim()) {
        return json(res, 400, { error: 'title_required' });
      }
      const task = {
        id: nextId('task'),
        title: String(body.title).trim(),
        status: body.status ?? 'queued',
        conversationId: body.conversationId ?? 'main',
        owner: body.owner ?? 'main',
        summary: body.summary ?? '',
        updatedAt: new Date().toISOString()
      };
      db.tasks.unshift(task);
      return json(res, 201, { task });
    }

    if (req.method === 'PATCH' && path.match(/^\/api\/tasks\/[^/]+$/)) {
      const taskId = path.split('/')[3];
      const task = db.tasks.find(item => item.id === taskId);
      if (!task) return notFound(res);
      const body = await collectBody(req);
      if (body.status) task.status = body.status;
      if (body.summary !== undefined) task.summary = body.summary;
      task.updatedAt = new Date().toISOString();
      return json(res, 200, { task });
    }

    if (req.method === 'GET' && path === '/api/notifications') {
      return json(res, 200, { notifications: db.notifications });
    }

    if (req.method === 'POST' && path === '/api/notifications') {
      const body = await collectBody(req);
      if (!body.title || !String(body.title).trim()) {
        return json(res, 400, { error: 'title_required' });
      }
      const notification = {
        id: nextId('notif'),
        type: body.type ?? 'info',
        title: String(body.title).trim(),
        body: body.body ?? '',
        conversationId: body.conversationId ?? 'main',
        taskId: body.taskId ?? null,
        read: false,
        priority: body.priority ?? 'normal',
        createdAt: new Date().toISOString()
      };
      db.notifications.unshift(notification);
      return json(res, 201, { notification });
    }

    if (req.method === 'PATCH' && path.match(/^\/api\/notifications\/[^/]+$/)) {
      const notificationId = path.split('/')[3];
      const notification = db.notifications.find(item => item.id === notificationId);
      if (!notification) return notFound(res);
      const body = await collectBody(req);
      if (typeof body.read === 'boolean') notification.read = body.read;
      return json(res, 200, { notification });
    }

    if (req.method === 'GET' && path === '/api/subagents') {
      return json(res, 200, { subagents: db.subagents });
    }

    return notFound(res);
  } catch (error) {
    return json(res, 500, { error: 'internal_error', detail: error.message });
  }
});

const port = Number(process.env.PORT || 3000);
const isDirectRun = process.argv[1] && new URL(import.meta.url).pathname === process.argv[1];
if (isDirectRun) {
  server.listen(port, () => {
    console.log(`API listening on http://127.0.0.1:${port}`);
  });
}

export default server;
