(function () {
    const targetNode = document.getElementById('live-asr-target');
    const prevNode = document.getElementById('prev-asr-target');

    const config = {
        characterData: true,
        characterDataOldValue: true,
        childList: true,
    };

    const callback = function(mutationList) {
        for (let mutation of mutationList) {
            if (mutation.type === 'childList') {
                for (let node of mutation.removedNodes) {
                    prevNode.textContent = node.textContent;
                }
            }
        }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
})();
