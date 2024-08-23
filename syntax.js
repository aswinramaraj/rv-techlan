function btn()
{
    document.getElementById("popupBox1").style.transition = "opacity 0.5s";
    document.getElementById("popupBox1").style.opacity = "0";
    document.getElementById("main").style.filter="blur(0px)";
    setTimeout(() => {
        document.getElementById("popupBox1").style.display = "none";
    }, 500); // Waits for the transition to complete before setting display to none
    }

    function showPopup(event) {
        const popup = document.getElementById('popupBox');
        const tab = event.currentTarget;
        const tabRect = tab.getBoundingClientRect();

        popup.style.top = '${tabRect.bottom + window.scrollY}px';
        popup.style.left = '${tabRect.left + window.scrollX}px';
        popup.classList.add('show');
    }
    function keepPopup(event) {
        const popup = document.getElementById('popupBox');
        popup.classList.add('show');
    }
    function hidePopup(event) {
        const relatedTarget = event.relatedTarget || event.toElement;
        if (!relatedTarget || !popupBox.contains(relatedTarget)) {
            const popup = document.getElementById('popupBox');
            popup.classList.remove('show');
        }
    }
