const observer = new MutationObserver((_mutations, obs) => {
    const select = document.querySelector("#video-privacy");
    if (select) {
        select.value = "PRIVATE";
        select.dispatchEvent(new Event("change"));
        obs.disconnect();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});