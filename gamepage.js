
$(document).ready(function () {

    const mottosList = [
        "Molon Labe!",
        "Never Retreat, Never Surrender.",
        "Eat well, for tonight we dine in Hades!",
        "With your shield, or on it."
    ];

    let currentIndex = 0;

    setInterval(function () {
        $('#mottos').fadeOut(function () {
            $(this).text(mottosList[currentIndex]).fadeIn();
        });
        currentIndex = (currentIndex + 1) % mottosList.length;
    }, 3000);

    
    $('a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
});
