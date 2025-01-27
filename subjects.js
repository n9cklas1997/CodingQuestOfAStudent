function showContent(content) {
    const currentDisplay = window.getComputedStyle(content).display;
    content.style.display = (currentDisplay === "none" || currentDisplay === "") ? "block" : "none";
}
