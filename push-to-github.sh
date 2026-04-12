#!/bin/bash
# Script to push changes to GitHub

cd "$(dirname "$0")"

echo "Switching remote to SSH..."
git remote set-url origin git@github.com:namiyyyy/gulsennamiduru.git

echo "Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://github.com/namiyyyy/gulsennamiduru"
    echo "2. Click Settings → Pages"
    echo "3. Set Source to: Branch 'main' / Folder '/' (root)"
    echo "4. Click Save"
    echo "5. Wait 2-5 minutes, then visit https://namiyyyy.github.io/gulsennamiduru/"
else
    echo ""
    echo "❌ Push failed. You may need to:"
    echo "1. Set up SSH keys with GitHub, or"
    echo "2. Use GitHub Desktop to push, or"
    echo "3. Run: git push origin main (and enter credentials when prompted)"
fi
