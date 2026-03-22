# ZeeBot Mobile Prototype — API Surface

## Purpose
Lightweight API surface for the mobile prototype so the frontend can integrate against a stable backend contract.

## Endpoints

### Health
- `GET /api/health`

### Conversations
- `GET /api/conversations`
- `GET /api/conversations/:conversationId/messages`
- `POST /api/conversations/:conversationId/messages`

### Tasks
- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:taskId`

### Notifications
- `GET /api/notifications`
- `POST /api/notifications`
- `PATCH /api/notifications/:notificationId`

### Subagents
- `GET /api/subagents`

## Example Payloads

### POST /api/conversations/main/messages
```json
{
  "content": "Please summarize today’s work",
  "role": "user"
}
```

### POST /api/tasks
```json
{
  "title": "Review mobile prototype",
  "status": "queued",
  "conversationId": "main",
  "owner": "dev-qa",
  "summary": "Initial QA pass requested"
}
```

### PATCH /api/tasks/:taskId
```json
{
  "status": "done",
  "summary": "QA completed with no blocker"
}
```

### POST /api/notifications
```json
{
  "type": "task_completed",
  "title": "Prototype review complete",
  "body": "The latest UI build passed smoke validation.",
  "conversationId": "main",
  "taskId": "task-123",
  "priority": "normal"
}
```
