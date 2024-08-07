
day = 20; month = 5 - 1; year = 2022;
hour = 18; minute = 0;
var d = new Date(year, month, day, hour, minute, 0, 0);

// default example
simplyCountdown('.simply-countdown-wedding', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    hour: d.getHours(),
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    countUp: true
    // enableUtc: true
});

//jQuery example
// $('#simply-countdown-losange').simplyCountdown({
// 	year: d.getFullYear(),
// 	month: d.getMonth() + 1,
// 	day: d.getDate(),
// 	enableUtc: false
// });

$('#open-invitation').click(function () {
    $('#overlay').addClass('hide-overlay');
    playAudio1();
    /*yang bagian floating button ada animasinya tapi karena ketutup dulu sama overlay jadinya gak nampak*/
    /*pengen pas di klik buka undangan baru jalan animasinya*/
    /*var c = document.getElementsByClassName('right-sidebar');
    for (var i = 0; i < c.length; i++) {
        c[i].classList.add('animate');
    }*/
});



function scrollToElement(el) {
    $("html, body").animate({ scrollTop: $(`#${el}`).offset().top }, 1000);
}










const lgContainer = document.getElementById('inline-gallery-container');
const inlineGallery = lightGallery(lgContainer, {
    container: lgContainer,
    dynamic: true,
    thumbnail: true,
    // Turn off hash plugin in case if you are using it
    // as we don't want to change the url on slide change
    hash: false,
    // Do not allow users to close the gallery
    closable: false,
    // Add maximize icon to enlarge the gallery
    showMaximizeIcon: true,
    download: false,
    // Append caption inside the slide item
    // to apply some animation for the captions (Optional)
    appendSubHtmlTo: '.lg-item',
    // Delay slide transition to complete captions animations
    // before navigating to different slides (Optional)
    // You can find caption animation demo on the captions demo page
    slideDelay: 400,
    dynamicEl: [
        {
            src: 'img/projek/2.png',
            thumb: 'img/projek/2.png-1.png',
            /*subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,*/
        },
        {
            src: 'img/projek1/1.png',
            thumb: 'img/projek1/1.png-1.png',
            /*subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,*/
        }, {
            src: 'img/projek1/2.png',
            thumb: 'img/projek1/2.png-2.png',/*subHtml: `<div class="lightGallery-captions">
					<h4>Caption 1</h4>
					<p>Description of the slide 1</p>
				</div>`,*/
        }, {
            src: 'img/projek1/3.png', 
            thumb: 'img/projek1/3.png-3.png',
            /*subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,*/
        }, {
            src: 'img/projek1/4.png',
            thumb: 'img/projek1/4.png-4.png',
            /*subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,*/
        },
        {
            src: 'img/projek1/5.png',
            thumb: 'img/projek1/5.png-5.png',
            /*subHtml: `<div class="lightGallery-captions">
                <h4>Caption 1</h4>
                <p>Description of the slide 1</p>
            </div>`,*/
        },
    ],
});

// Since we are using dynamic mode, we need to programmatically open lightGallery
inlineGallery.openGallery();

