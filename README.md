---

````markdown
# 🐦✨ Twitter Auto-Unfollower Helper

A tiny browser console script that helps you **unfollow accounts automatically** on Twitter/X.  
It carefully goes through the flow:

**Following → Unfollow → Confirm popup → Done ✅**

All hands-free, one account at a time. 🎀

---

## 🌸 Features
- ✅ **Fully hands-free** — hover, click, confirm, repeat  
- 🐢 **Safe pace** — adds delays between actions to avoid rate-limits  
- 🔄 **Auto-scroll** — loads more accounts as you scroll down  
- 🎛 **Controls** — stop anytime or set a max unfollow limit  

---

## 🛠 How to Use

1. Go to your **Following page** on Twitter/X:  
   👉 `https://twitter.com/YOURUSERNAME/following`

2. Open your browser’s **DevTools Console**  
   - Chrome/Edge → `Ctrl+Shift+J` (Win/Linux) or `Cmd+Opt+J` (Mac)  
   - Firefox → `Ctrl+Shift+K` (Win/Linux) or `Cmd+Opt+K` (Mac)

3. Copy–paste the script into the console and press **Enter**

4. Watch the magic happen 💫

---

## 🎛 Controls

While the script is running, you can type these into the console:

```js
stopAutoUnfollow()      // 🛑 Stops the script immediately
setUnfollowLimit(50)    // 📉 Stop automatically after 50 unfollows
````

---

## ⚙️ Configuration

Inside the script, you can tweak:

```js
const delayBetween = 3000;     // ms between each unfollow (default: 3s)
const hoverTime = 600;         // ms to hover before showing "Unfollow"
const popupWait = 900;         // ms to wait for popup to render
const postConfirmWait = 1200;  // ms after confirming before next
```

---

## ⚠️ Notes

* Default pace = **1 unfollow every 3 seconds**.
* Increase delay if you get rate-limited.
* Works only on the **Following page**.
* Please use responsibly 💖. Automating actions may be against Twitter/X terms of service.

---

## 🌼 Example Run

```log
[AutoUnfollow] Starting…
✅ Unfollowed 1
✅ Unfollowed 2
✅ Unfollowed 3
No more visible accounts. Scrolling…
✅ Unfollowed 4
...
```

---

## 💖 Credits

Made with ☕ and ✨ for anyone who wants a clutter-free Following list.
Enjoy your decluttered timeline 🎀

```
