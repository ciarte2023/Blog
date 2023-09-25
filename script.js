document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a[href^='#']");
    
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var headerHeight = document.querySelector("header").offsetHeight; // Altura do cabeçalho
                var marginToHeader = 30;
                var targetOffset = targetElement.offsetTop - headerHeight - marginToHeader;
                var animationDuration = 1000;

                window.scrollTo({
                    top: targetOffset,
                    behavior: "smooth",
                    duration: animationDuration
                });
            }
        });
    });
});