# Why changes don’t show on the website – checklist

## 1. Merge the PR (don’t just open it)
- A **pull request does not update the live site**. You must **merge** it.
- On GitHub: open your PR → click **“Merge pull request”** → **“Confirm merge”**.

## 2. Use the branch that GitHub Pages builds from
- Repo → **Settings** → **Pages**.
- Under **“Build and deployment”** → **“Source”** you’ll see something like **“Deploy from a branch”**.
- Note the **branch** (e.g. `main` or `gh-pages`). Only that branch is used for the site.
- Your changes must be **merged into that branch**. If you merged into `main` but Pages uses `gh-pages`, the site won’t update until that branch has the changes too.

## 3. Wait and force a redeploy
- After merging, wait **2–5 minutes**.
- In **Settings → Pages**, check **“Last deployed”**. If it’s old, click **“Save”** (e.g. change source and change it back) to trigger a new build.

## 4. Bypass cache when viewing
- Open the site in **Incognito/Private** window, or  
- Add a query string: `https://gulsennamiduru.com/?v=2`  
- Or hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac).

## 5. Confirm the file on GitHub
- On GitHub, open **index.html** (or the file you changed) in the **same branch** that Pages uses.
- Check the **last commit** and that the content is what you expect. If the file on GitHub is old, the merge didn’t include your changes or you’re on the wrong branch.

## 6. If the repo is a fork
- If you opened the PR **from a fork**, merging that PR updates the **fork**, not the original repo.
- **GitHub Pages** is usually set on **one** repo. If it’s on the original repo, you must push/merge your changes **into that original repo** (e.g. push your branch to the original repo and merge there, or make the PR against the original repo and merge there).

---

**Quick test:** After merging, open this URL (replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub username and repo name):

`https://YOUR_USERNAME.github.io/YOUR_REPO/`

If you use a custom domain (gulsennamiduru.com), that domain should show the same content after DNS and cache catch up.
