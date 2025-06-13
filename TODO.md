### 🔍 Does “new user” mean login/register?

**No, it does not require full authentication.**
Here’s why:

- The line says:
  `“Every new user should be a new session so create a session identifier.”`

- The goal is **session isolation**, not account-level identity.
- Nowhere else in the assignment is there a mention of:
  - Sign-up/login functionality
  - JWTs or OAuth
  - Persistent user accounts

### 🟢 Conclusion:

Expected to **generate a new session ID per user (e.g., via UUID)** and store chat history in Redis against that ID.
This session ID can be:

- Generated on the client when the app loads
- Sent with each API call to identify the session

So, user **registration/authentication is not required.**

### ✅ What you do need:

- A system to **track each chat session** (per user/browser instance)
- Store and retrieve **session-specific** chat history from Redis
- Optionally allow the user to **reset the session**

### 🛠 Recommended Approach

- On frontend load (React):

  - Check localStorage for a session ID
  - If not present, generate one with uuid and store it

- Send this session ID with every request (/chat, /history, /reset)

- On backend (Node.js/Express):
  - Use Redis to store messages by sessionId
  - TTL (e.g., 1 hour) to auto-clear unused sessions
