window.addEventListener('load', function() {
    const scrollDownButton = document.querySelector('.banner__content-scrollbar');
    const sectionList = document.querySelectorAll('.shopify-section:not(.shopify-section-group-header-group)');
    scrollDownButton.addEventListener('click', function(e){
        e.preventDefault();
        // const currentPosition = window.scrollY;
        // var stopLoop = false;
        // sectionList.forEach(section => {
        //     if (!stopLoop) {
        //         const sectionBottom = section.getBoundingClientRect().bottom;
        //         const sectionTop = section.getBoundingClientRect().top;
        //         if (currentPosition < sectionBottom && currentPosition >= sectionTop) {
        //             stopLoop = true;
        //             window.scroll({
        //                 top: sectionBottom,
        //                 left: 0,
        //                 behavior: 'smooth'
        //             });
        //         }
        //     }
        // });
        window.scroll({
            top: document.body.getBoundingClientRect().bottom,
            left: 0,
            behavior: 'smooth'
        });
    });
})