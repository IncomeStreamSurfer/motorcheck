# Figma MCP Installation Guide

## Prerequisites

1. **Figma Account**: You need a Figma account with access to the MotorCheck designs
2. **Figma Personal Access Token**: Required for API access
3. **Node.js**: Required for running the MCP server

## Step 1: Get Figma Personal Access Token

1. Log in to Figma
2. Go to Settings → Account → Personal access tokens
3. Click "Create new token"
4. Name it "MotorCheck MCP"
5. Copy the token (you'll need it in Step 3)

## Step 2: Install Figma MCP

The Figma MCP needs to be installed and configured in your Claude desktop app settings.

### Option A: Using Claude Desktop UI

1. Open Claude Desktop
2. Go to Settings → Developer → Model Context Protocol
3. Click "Add MCP Server"
4. Select "Figma" from the list
5. Enter your Figma access token when prompted

### Option B: Manual Configuration

1. Locate your Claude configuration file:
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Linux: `~/.config/claude/claude_desktop_config.json`

2. Add the Figma MCP configuration:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-figma"
      ],
      "env": {
        "FIGMA_PERSONAL_ACCESS_TOKEN": "YOUR_FIGMA_TOKEN_HERE"
      }
    }
  }
}
```

3. Replace `YOUR_FIGMA_TOKEN_HERE` with your actual Figma token

4. Save the file and restart Claude Desktop

## Step 3: Verify Installation

After restarting Claude, you should see the Figma MCP available. To verify:

1. In a new conversation, type: "Can you access Figma files?"
2. You should see Figma-related tools available

## Step 4: Using Figma MCP

Once installed, you can:

1. **List Figma files**: Get a list of files you have access to
2. **Get file details**: Retrieve information about a specific file
3. **Extract design tokens**: Pull colors, typography, spacing from designs
4. **Export assets**: Download images and icons

### Example Commands:

```
"Show me the MotorCheck Figma files"
"Extract design tokens from the MotorCheck UI Kit"
"Get all colors from the homepage design"
"Export the logo asset from Figma"
```

## Troubleshooting

### MCP Not Showing Up
- Ensure Claude Desktop is fully closed before editing config
- Check that the JSON syntax is valid
- Verify the Figma token is correct and active

### Permission Errors
- Make sure your Figma token has read access to the files
- Check if you're a member of the Figma team/project

### Connection Issues
- Verify internet connection
- Check if Figma API is accessible
- Try regenerating your Figma token

## Security Note

Your Figma token provides access to your Figma files. Keep it secure and:
- Don't commit it to version control
- Don't share it publicly
- Regenerate it if compromised

## Next Steps

Once the Figma MCP is installed and working:

1. Import the MotorCheck design files
2. Extract design tokens
3. Generate theme.css from the tokens
4. Apply styles to the demo pages

---

For more information about MCPs, see: https://docs.anthropic.com/en/docs/claude-code/mcp