(function() {
  'use strict';

  const images = [
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/0iOfLIevPMpQ5_FG6MKDcOvPHY4SciP2/3v8wcPhlNjoUHJY_x1F9BPd62xOsM5O1/85ZWb6dYFgT9b33H3IG1ng.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/oW4qj-mLSxOGJLfDmbSDDabhpNW8neK8/4lVnMM8ZnCzCyEbgXInHzCvCprPGqrJ6/H9ubT0H9IFACbbOPxenF7Q.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/_RBsaMhG0jGMM7_6sloyEPsdV-ZOV3iw/5tyOH96-2RuOU-p_IKBwO00Dz5XI9rtT/AcoLr6tDhBA_1sV3oitCrQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/p9k0OFYVt8ft9S7D4spCn-e7Mj-Q_32c/i6yPhdY4V8YuVfDh_Sx9WTmviXD6xmSh/UP3EHnxTJa58KgbFMMfn7Q.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/sHkE8HlvUs9lQStR-rFmgeT-kK0u79yG/vLdtHTzXMoaIPBA2LHn-ZzoGQ30BcXkg/eMREeP4-a1GFRVIN7nYH6g.jpg",
    "https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/JiPJQ3-5OAC3PwAOJOFkuGH-HN8zc-qP/USUB4yOk6zJ7nI43pN_nHOb0E7yhmcLp/MyPuXrbMQbD5qKx3QRRTaA.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/vdayo_0FkLNseO1BVUcJImoNYpVvMjNr/v3Shl07qm3urQ_dOO6xeM4pjJ3A0QsIb/cZ8TtDhYBk1wd1cM4wHFiQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/lYigZyf6zhb9YeNcY-At-VJ3Yuc-c8RP/LBs7biUHPvgWaMKEb6MxMG9rGGb_w2IB/a_Kg7nPEN5gjqZWpmaBFqw.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/USQx6j-3vu9-CKN02ygf2R1jzGr-HyFz/kk7tjKRrsOjXzZdBRybXsbLOx0dqMr_e/Wonhy2Xii9ZOrisFnOXeWw.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/PrOhuj4v9JkczxpOv1q8JNFWNyc2wEvy/PZEDZImmQ08rpGNdfHXC_8UqvFl-sFoT/JUk_J4GvlyfNGL_TSQ3Bbw.jpg",
    "https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/HURNZnKNUTQ4ozjAsp9Jf8cSrnbYmrV1/wk1hwnAGuEl2-grt0YcGiwbRk6XoOuKA/8FhgdilPjdnSyAKsnZGHzQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/g8v3wExnWmWtXERGJwNIeDjlC6nsIAaf/YtgYK0CMVZIwDR4pzON4BfyEQC4vS1O8/7rZUsHI45Yqv7AExKnMV7Q.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/5pEV9yrKj_5LLT27c8EHFz0i6X-Eu8XG/tU2_bj0GYWxbcPJSDlgg7UPaV5FoUMyL/PPr5K0stKgn-8he_SoFtOQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/WUIxmeF3Kv8pHmcBnnl02uE5KoXrYCx5/O_SusFDK2saJrTdSQLj3bhYA1R7NxbfT/xkkWlCNUwT2aufloGObjxw.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/uOR2HAyyUtWo4lGhFf0mlrw3NNP3VBoe/tJ2bZJU_4xg3lfTipzNfIyE4zO7Lr-98/_9dUSy7EY2o6mZDAugBz2A.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/GezevQr8qB_tetYhkuthCNxONSz74jSi/Io8PqlUm9PDqt8Suel4NDADxMiFDIWym/TXYMsj0Nd1BjGZsbXhd91A.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/GJ0m88gS4CJBSIWedUKxorGZW-L0elFm/fhFYJ-QllcC42NBwcPwIQSNe-XifkOId/QFLAaHh4iMYe2kKodMrczg.jpg",
    "https://i.wfolio.ru/x/zRtfFZRdtTOs46O4TlAmB7Xb9GUzndU3/UgFgLXtG2pa88BYblMFvOtpucfGQYup9/hvw9Kudswqjw0i0ECMqW83i0VvnTAcMs/9z65ztAIeYG9JEhsoeifVj7vdwJkzYUT/9qLalzLFJtYtoo_FBj4M6A.jpg",
    "https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/wYEcg8mPMSFvDlZDrvC8BVWQni3kO0oS/vwpbRN4TGVmYACpNQfJaXy9FxoP9teGM/Qwrgd6Y72HzM1NWGmy_K6Q.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/DvU-0UfWB9E_iQ7zwPxwpW23cwANGIiB/Dys7JL6MSTwiY2Yax5tMyyFnBEEJCMVd/yy7FRUjx3qkbaGYqDq8toQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/FCfwSQIU596Ha2ADhUprPZMo3COHNI9d/g1MD5qVEPwtyZsmyQvXUZki5kX7ejtkT/gMSIiRHmLmarIQ98kQDfCQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/UOgCgHxEUdq2RPDBHB8NDJS3WCxn0IUW/-W0TiASk5RoHkpgyxDFIGil9HDlPvcM_/4x53OO4XVSKfXJGyYksupQ.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/q4KMe1jYZi_X-K5UscnGS63dE-BFedP5/ZK32FDlWs0vUp8otWrjtY9KBXR2aq9UL/3uYZD_4r1QQxFPzlPFDRDA.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/UeedvWLt5nGTSRAQrj4JKPy_kN4I6732/x1vOV8BKMSpM8deInWbnApY6h9s4bvnr/7seXh_PmlqQcZm-Qwh6KiA.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/NxACdOjKfuxwb3c8_-xCTFAqBN-W7lzC/8jV0qDPHe3piZyfnSl-c-dx0maSN-IdH/lL3tu3cc6la5tdeGz33GCg.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/wRARsX-blnVYTDCc0rUyxabe4AtM-Hhi/0ffVwIT4Qm605gxVZZG7yuzwpx4Hxih3/C9qm9_45Dvy2FF6kYtDAYw.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/mrlCnVgpeflkHaS0IGuFQRXPZZjMsWol/jZoyD-yt3seVIa91K-9f4-kbrGjndooz/ysKjZZbnrLcfsfEd9G0S8g.jpg",
    "https://i.wfolio.ru/x/D48ScH1DA6jxU_uSH-Or-C0cJClpP-QP/lEAL128xEMPGM2o_rKw_kMPHKR9vAJ80/Vi7Gt3JFwcX1aGZPmnghnbe_88ZSt3Qq/67rvuZ6-bCTZaxGoA2XCL1Ufe8-N59ls/kjOD1k_yDbDdr2lEUjIBQQ.jpg",
    "https://i.wfolio.ru/x/cXPZPmu9lCw5tkRNat7JtyHjrPiZiclN/VJgIrluFLtZWGwzaT5FJ07DuSK__bTQA/al3z2K7cv1CJAzQ_-EIEolqIEJSSWaqP/i3FqXwy7ko9sTuMRaYqltZeux6Icr_vO.jpg",
    "https://i.wfolio.ru/x/zfNWg0RActCaYvCdP8NS6h3QcKqIOO7I/oVCmpsR2A0_zCBuWQbm7dJYwNQ6ysoqE/oVgvR67Daa3Jr5ZKFDU8abagO-kNYVSS/rr9Kj2W75OYGHXLYlAEpmEKZUXD6PPfb/inWQoNMgBnrr7xe2Epc1ug.jpg"
  ];

  function initNativeCover() {
    const cover = document.querySelector(".cover");
    if (!cover) return false;
    if (cover.querySelector("#hero-breakout")) return true;

    const breakout = document.createElement("div");
    breakout.id = "hero-breakout";
    breakout.className = "hero-wrapper";
    breakout.innerHTML = `
      <div class="panel left">
        <div class="slide current"></div>
        <div class="slide next"></div>
      </div>
      <div class="panel right">
        <div class="slide current"></div>
        <div class="slide next"></div>
      </div>
      <div class="avz-swipe-hint">
        <span class="scroll-arrow"></span>
        листайте
      </div>
    `;

    cover.appendChild(breakout);
    document.body.classList.add("avz-split-active");

    const left  = breakout.querySelector('.left');
    const right = breakout.querySelector('.right');
    const lCur  = left.querySelector('.current');
    const lNxt  = left.querySelector('.next');
    const rCur  = right.querySelector('.current');
    const rNxt  = right.querySelector('.next');

    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    if (images.length % 2 !== 0) images.push(images[0]);

    let idx = 0;
    const speed = 4500;
    let sliderInterval = null;
    let isCycling = false;

    function preloadImg(url) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => resolve({ url, success: false }), 4000);
        const img = new Image();
        img.src = url;
        if (img.decode) {
          img.decode()
            .then(() => { clearTimeout(timer); resolve({ url, success: true }); })
            .catch(() => { clearTimeout(timer); resolve({ url, success: false }); });
        } else {
          img.onload  = () => { clearTimeout(timer); resolve({ url, success: true }); };
          img.onerror = () => { clearTimeout(timer); resolve({ url, success: false }); };
        }
      });
    }

    async function getFirstWorkingImage(startIdx, excludeUrl = null) {
      for (let i = 0; i < images.length; i++) {
        const j = (startIdx + i) % images.length;
        const url = images[j];
        if (excludeUrl && url === excludeUrl) continue;
        const result = await preloadImg(url);
        if (result.success) return url;
      }
      return null;
    }

    async function preloadImagesInChunks(array, chunkSize = 3) {
      for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        await Promise.all(chunk.map(url => preloadImg(url)));
      }
    }

    (async function initSlides() {
      let leftUrl = await getFirstWorkingImage(0);
      let rightUrl = leftUrl
        ? await getFirstWorkingImage(images.indexOf(leftUrl) + 1, leftUrl)
        : null;

      if (!leftUrl && !rightUrl) return;
      if (!rightUrl) rightUrl = leftUrl;

      lCur.style.backgroundImage = `url(${leftUrl})`;
      rCur.style.backgroundImage = `url(${rightUrl})`;

      breakout.classList.add('loaded');

      preloadImagesInChunks(images, 3);

      sliderInterval = setInterval(() => {
        if (!document.body.contains(breakout)) {
          clearInterval(sliderInterval);
          sliderInterval = null;
          return;
        }
        cycle();
      }, speed);
    })();

    async function cycle() {
      if (isCycling) return;
      isCycling = true;

      const nextLeftIdx  = ((idx + 1) * 2)     % images.length;
      const nextRightIdx = ((idx + 1) * 2 + 1) % images.length;

      const [leftResult, rightResult] = await Promise.all([
        preloadImg(images[nextLeftIdx]),
        preloadImg(images[nextRightIdx])
      ]);

      let finalLeftUrl  = leftResult.success  ? images[nextLeftIdx]  : null;
      let finalRightUrl = rightResult.success ? images[nextRightIdx] : null;

      if (!finalLeftUrl) {
        finalLeftUrl = await getFirstWorkingImage(nextLeftIdx, images[nextRightIdx]);
      }
      if (!finalRightUrl) {
        finalRightUrl = await getFirstWorkingImage(nextRightIdx, finalLeftUrl);
      }

      if (!finalLeftUrl || !finalRightUrl) {
        isCycling = false;
        return;
      }

      lNxt.style.backgroundImage = `url(${finalLeftUrl})`;
      rNxt.style.backgroundImage = `url(${finalRightUrl})`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lCur.style.transform = 'translateY(-100%)';
          rCur.style.transform = 'translateY(100%)';
          lNxt.style.transform = 'translateY(0)';
          rNxt.style.transform = 'translateY(0)';
        });
      });

      setTimeout(() => {
        [lCur, lNxt, rCur, rNxt].forEach(el => { el.style.transition = 'none'; });
        lCur.style.backgroundImage = `url(${finalLeftUrl})`;
        rCur.style.backgroundImage = `url(${finalRightUrl})`;
        lCur.style.transform = 'translateY(0)';
        rCur.style.transform = 'translateY(0)';
        lNxt.style.transform = 'translateY(100%)';
        rNxt.style.transform = 'translateY(-100%)';
        void lCur.offsetWidth;
        [lCur, lNxt, rCur, rNxt].forEach(el => {
          el.style.transition = 'transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)';
        });
        idx++;
        isCycling = false;
      }, 800);
    }

    return true;
  }

  let coverAttempts = 0;
  function bootCover() {
    coverAttempts++;
    if (initNativeCover()) return;
    if (coverAttempts < 30) setTimeout(bootCover, 200);
  }
  bootCover();

  const root = document.getElementById("avz-wfolio-home");
  if (!root) return;

  const ticker = root.querySelector("#avz-ticker");
  if (ticker) {
    const channels = [
      { label: "Telegram",   href: "https://t.me/avanzato" },
      { label: "Instagram",  href: "https://www.instagram.com/avanzato/" },
      { label: "Behance",    href: "https://www.behance.net/avanzato" },
      { label: "Email",      href: "mailto:antonioavanzato@gmail.com" },
      { label: "Казань",     href: "#" }
    ];
    [...channels, ...channels, ...channels, ...channels].forEach((c) => {
      const item = document.createElement("div");
      item.className = "avz-ticker-item";
      item.innerHTML = `<a href="${c.href}" class="avz-ticker-link" target="_blank" rel="noopener noreferrer">${c.label}</a><span class="avz-ticker-dot"></span>`;
      ticker.appendChild(item);
    });
    requestAnimationFrame(() => requestAnimationFrame(() => ticker.classList.add("running")));
  }

  const revealItems = root.querySelectorAll(".avz-reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -50px 0px" });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("visible"));
  }

  const counters = root.querySelectorAll(".avz-counter[data-target]");
  if (counters.length && "IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        counterObserver.unobserve(entry.target);
        const el      = entry.target;
        const target  = parseInt(el.getAttribute("data-target"), 10);
        const suffix  = el.getAttribute("data-suffix") || "";
        const duration = 1500;
        const start   = performance.now();
        function update(now) {
          const p    = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          el.innerText = Math.floor(target * ease) + (p >= 1 ? suffix : "");
          if (p < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
    }, { threshold: 0.45 });
    counters.forEach((el) => counterObserver.observe(el));
  }

  const galleryItems = root.querySelectorAll(".avz-gallery-item");
  if (galleryItems.length && "IntersectionObserver" in window) {
    const galleryObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = parseInt(entry.target.dataset.delay || "0", 10);
        window.setTimeout(() => entry.target.classList.add("visible"), delay);
        galleryObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    galleryItems.forEach((item) => galleryObserver.observe(item));
  } else {
    galleryItems.forEach((item) => item.classList.add("visible"));
  }

  const galleryImages = root.querySelectorAll(".avz-gallery-item img");
  galleryImages.forEach((img) => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
    }
  });

})();
