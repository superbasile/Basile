(function blockConsole() {
    setInterval(() => {
        debugger; // Bloque le script si la console est ouverte
    }, 100);
})();
