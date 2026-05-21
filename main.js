(function initPreloader() {
    const loader = document.getElementById("avz-preloader");
    if (!loader) return;

    const FIXED_DELAY = 2000; // 2 секунды на логотип
    const started = Date.now();
    let hidden = false;

    function hide() {
      if (hidden) return;
      hidden = true;
      
      const elapsed = Date.now() - started;
      const wait = Math.max(0, FIXED_DELAY - elapsed);
      
      setTimeout(() => {
        // КРИТИЧНО: Сначала разблокируем скролл, потом скрываем визуально
        document.documentElement.classList.remove("avz-loading");
        document.body.style.overflow = ""; // Принудительный сброс inline-стилей
        
        // Запускаем визуальное скрытие
        loader.classList.add("avz-hide");
        
        // Удаляем из DOM
        setTimeout(() => {
          if (loader && loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        }, 800);
      }, wait);
    }

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide);
    }
    
    // Жесткая страховка: через 5 секунд убираем ВСЁ принудительно
    setTimeout(() => {
        if (!hidden) {
            document.documentElement.classList.remove("avz-loading");
            document.body.style.overflow = "";
            if (loader) loader.classList.add("avz-hide");
            hidden = true;
        }
    }, 5000);
})();

