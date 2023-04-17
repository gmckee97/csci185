function showNext(selectorHide, selectorShow) {
    // hide the old screen:
    document.querySelector(selectorHide).classList.remove('show');

    // show the new screen:
    document.querySelector(selectorShow).classList.add('show');
}