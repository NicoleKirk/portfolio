# Deploying Your TouchTiles Game

## Quick Guide: Railway.app (Recommended)

### Step 1: Sign up and install CLI
1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Install Railway CLI: `npm i -g @railway/cli`
4. Login: `railway login`

### Step 2: Deploy your game
In your game's directory (the one with the Node.js server):

```bash
# Initialize Railway
railway init

# Deploy
railway up

# Set a custom domain (optional)
railway domain
# Enter: touchtiles-game
```

Your game will be available at: `https://touchtiles-game.up.railway.app`

### Step 3: Update the button link
The button is already set to point to your game! Just make sure to update the URL in `src/app/projects/page.tsx` once you have your actual deployment URL.

---

## Alternative: Render.com (Free tier available)

### Step 1: Setup
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your game's GitHub repo

### Step 2: Configure
- **Build Command**: `npm install` (or whatever builds your game)
- **Start Command**: `node server.js` (or whatever runs your game)
- **Environment**: `Node`

### Step 3: Deploy
Click "Create Web Service" - it will automatically deploy!

---

## Alternative: Fly.io (Great performance)

### Step 1: Install and setup
```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login
fly auth login
```

### Step 2: Launch
In your game directory:
```bash
fly launch
```

This will create a `fly.toml` config file automatically.

### Step 3: Deploy
```bash
fly deploy
```

---

## After Deployment

Once you have your game deployed, update the URL in:

**File**: `src/app/projects/page.tsx` (line ~235)

Change:
```tsx
href="https://touchtiles-game.railway.app"
```

To your actual deployed URL!

---

## Troubleshooting

### "Port not found" error
Make sure your Node.js server listens on the port provided by the environment variable:

```javascript
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

### CORS issues
If your game has a frontend, make sure CORS is configured:

```javascript
const cors = require('cors');
app.use(cors({
  origin: '*', // Or your specific domain
  credentials: true
}));
```

---

## Environment Variables

If your game needs API keys or config:

**Railway**: Add in the web dashboard under "Variables"
**Render**: Add in Settings → Environment Variables
**Fly.io**: Use `fly secrets set KEY=value`


