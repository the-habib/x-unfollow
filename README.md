---

# 🐦✨ Twitter Auto-Unfollower Helper

Tired of manually unfollowing one account at a time?
This little helper script is like your **tiny assistant** that clicks through the “Following → Unfollow → Confirm Unfollow” flow for you — one account at a time, nice and gentle 💕

---

## 🌸 Features

* **Fully hands-free**: it hovers, clicks, confirms, and moves on
* **One-by-one unfollow**: respects the flow, doesn’t skip steps
* **Auto-scroll**: loads more accounts as it goes down your Following page
* **Safety first**: customizable delays so you don’t get rate-limited
* **Controls**: stop anytime or set a max limit per run

---

## 🛠 How to Use

1. Go to your **Following page** on Twitter/X:
   👉 `https://twitter.com/YOURUSERNAME/following`

2. Open your browser’s **DevTools Console**

   * Chrome/Edge: `Ctrl+Shift+J` (Win/Linux) or `Cmd+Opt+J` (Mac)
   * Firefox: `Ctrl+Shift+K` (Win/Linux) or `Cmd+Opt+K` (Mac)

3. Copy-paste the whole script into the console and hit **Enter**

4. Sit back and watch your tiny helper do the job 🐣

---

## 🎛 Controls

While the script is running, you can type into the console:

* `stopAutoUnfollow()` → 🛑 Stops the script immediately
* `setUnfollowLimit(50)` → 📉 Stop automatically after 50 unfollows

---

## ⚠️ Notes

* Default pace = **1 unfollow every 3 seconds**. You can increase this (e.g., 5 seconds) if you’re worried about limits.
* The script is polite — it only acts when a **“Following”** button is present, confirms the popup, then waits before moving on.
* Please remember: **use responsibly**! Bulk automation can trigger Twitter limits or break terms of service.

---

✨ That’s it! Enjoy your decluttered Following list with zero finger strain 💖

---

Would you like me to make this doc look like a **GitHub-style README** (with code blocks, headers, emojis, etc.), so you can just drop it into a repo?
