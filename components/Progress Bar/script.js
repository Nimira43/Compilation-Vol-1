const progress = document.querySelector('.progress-done')

setTimeout(() => {
    progress.computedStyleMap.width = progress.getAttribute('data-done') + '%'
    progress.computedStyleMap.opaacity = 1
}, 500)