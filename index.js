(() => {
  // --- Tunables ---
  const delayBetween = 3000;     // ms to wait between each account (rate-limit friendly)
  const hoverTime = 600;         // ms to let the button switch "Following" -> "Unfollow"
  const popupWait = 900;         // ms to wait for confirm popup to render
  const postConfirmWait = 1200;  // ms to let DOM update after confirm
  let maxToUnfollow = Infinity;  // use setUnfollowLimit(n) to cap in this session
  // -----------------

  let running = true;
  let processed = 0;

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const log = (...a) => console.log("[AutoUnfollow]", ...a);

  function visible(el) {
    return !!(el && el.offsetParent !== null);
  }

  // Grab only FOLlowing-state buttons (Twitter uses ...-unfollow testid for that state)
  function getFollowingButtons() {
    return Array.from(document.querySelectorAll('button[data-testid$="-unfollow"]'))
      .filter(btn => !btn.dataset.autoUnfollowProcessed && visible(btn));
  }

  // Click the confirm "Unfollow" in the popup (try robust selectors)
  async function clickConfirmInPopup() {
    // 1) Preferred: data-testid used by X
    let confirm = document.querySelector('[data-testid="confirmationSheetConfirm"]');
    if (!confirm) {
      // 2) Fallback: any dialog button whose text is exactly "Unfollow"
      confirm = Array.from(document.querySelectorAll(
        'div[role="dialog"] button, div[role="dialog"] div[role="button"]'
      )).find(el => el.innerText.trim().toLowerCase() === "unfollow");
    }
    if (confirm) {
      confirm.click();
      return true;
    }
    return false;
  }

  async function processOne(btn) {
    btn.dataset.autoUnfollowProcessed = "1";

    // Must be in "Following" state before we start
    if (!/following/i.test(btn.innerText) && !/following/i.test(btn.getAttribute("aria-label") || "")) {
      return false; // skip if already not following
    }

    // Step 1: hover to flip label to "Unfollow"
    btn.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
    btn.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
    await sleep(hoverTime);

    // Step 2: click the hovered button (now showing "Unfollow")
    btn.click();

    // Step 3: wait for the confirmation popup, then click its "Unfollow"
    await sleep(popupWait);
    let ok = await clickConfirmInPopup();
    if (!ok) {
      // sometimes popup lags; retry once
      await sleep(700);
      ok = await clickConfirmInPopup();
      if (!ok) {
        log("⚠️ Couldn't find the confirm popup button. Skipping this account.");
        return false;
      }
    }

    // Step 4: give the UI time to update (button becomes "Follow" or row disappears)
    await sleep(postConfirmWait);

    processed++;
    log(`✅ Unfollowed ${processed}`);
    return true;
  }

  async function loop() {
    log("Starting… Call stopAutoUnfollow() to stop, setUnfollowLimit(n) to cap this session.");
    while (running && processed < maxToUnfollow) {
      let buttons = getFollowingButtons();

      if (buttons.length === 0) {
        // No visible ones—scroll to load more
        window.scrollBy(0, window.innerHeight * 0.9);
        await sleep(1200);
        buttons = getFollowingButtons();
        if (buttons.length === 0) {
          // Still none; small pause and try again
          await sleep(1500);
          continue;
        }
      }

      const btn = buttons[0];
      try {
        await processOne(btn);
      } catch (e) {
        log("Error processing a button:", e);
      }

      // Safety delay between accounts
      await sleep(delayBetween);
    }
    log("✅ Done or stopped.");
  }

  // Expose simple controls
  window.stopAutoUnfollow = () => { running = false; log("🛑 Stopping…"); };
  window.setUnfollowLimit = n => { maxToUnfollow = +n || Infinity; log("Limit set to", maxToUnfollow); };

  loop();
})();
