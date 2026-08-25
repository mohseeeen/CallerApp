/**
* App
* ابزار کمکی برای کار با DOM (کلاس، اتربیوت، ایونت، نمایش، دیتا)
*/
class App {

    /* ================== SELECT ================== */

    // انتخاب یک المنت
    static qs(selector, parent = document) {
        return parent.querySelector(selector);
    }

    // انتخاب چند المنت
    static qsa(selector, parent = document) {
        return [...parent.querySelectorAll(selector)];
    }

    /* ================== CLASS ================== */

    // چک کردن کلاس
    static hasClass(el, className) {
        return el.classList.contains(className);
    }

    // اضافه کردن کلاس
    static addClass(el, className) {
        el.classList.add(className);
    }

    // حذف کلاس
    static removeClass(el, className) {
        el.classList.remove(className);
    }

    // تغییر وضعیت کلاس
    static toggleClass(el, className) {
        el.classList.toggle(className);
    }

    /* ================== ATTRIBUTE ================== */

    // اضافه کردن attribute
    static addAttr(el, attr, value = '') {
        el.setAttribute(attr, value);
    }

    // حذف attribute
    static removeAttr(el, attr) {
        el.removeAttribute(attr);
    }

    // چک کردن attribute
    static hasAttr(el, attr) {
        return el.hasAttribute(attr);
    }

    /* ================== DISABLED ================== */

    // غیرفعال کردن
    static disable(el) {
        el.disabled = true;
    }

    // فعال کردن
    static enable(el) {
        el.disabled = false;
    }

    // تغییر وضعیت disabled
    static toggleDisabled(el) {
        el.disabled = !el.disabled;
    }

    // چک disabled بودن
    static isDisabled(el) {
        return el.disabled === true;
    }

    /* ================== EVENT ================== */

    // افزودن ایونت
    static on(el, event, handler) {
        el.addEventListener(event, handler);
    }

    // حذف ایونت
    static off(el, event, handler) {
        el.removeEventListener(event, handler);
    }

    /* ================== DATA ================== */

    // گرفتن data-*
    static getData(el, name) {
        return el.dataset[name];
    }

    // ست کردن data-*
    static setData(el, name, value) {
        el.dataset[name] = value;
    }

    /* ================== VISIBILITY ================== */

    // مخفی کردن
    static hide(el) {
        el.style.display = 'none';
    }

    // نمایش
    static show(el) {
        el.style.display = '';
    }

    /* ================== CONTENT ================== */

    // تغییر HTML
    static html(el, content) {
        el.innerHTML = content;
    }

    // تغییر متن
    static text(el, content) {
        el.textContent = content;
    }

    /* ================== UTILS ================== */

    // نزدیک‌ترین والد
    static closest(el, selector) {
        return el.closest(selector);
    }




    /* ================== AUDIO ================== */

    // نگه‌دارنده موزیک در حال پخش
    static currentAudio = null;

    /**
    * پخش موزیک
    * @param {string} folder - مسیر پوشه
    * @param {string} file - نام فایل (با پسوند)
    * @param {function} onPlay - اجرا هنگام شروع پخش
    * @param {function} onEnd - اجرا هنگام پایان پخش
    */
    static playAudio(
        folder,
        file,
        onPlay = () => {},
        onEnd = () => {}
    ) {

        // اگر موزیک در حال پخشه، اجازه نده
        if (App.currentAudio) return;

        const path = `${folder}/${file}`;
        const audio = new Audio(path);

        // اگر فایل وجود نداشت
        audio.addEventListener('error', () => {
            App.currentAudio = null;
            //onError();
            //console.log("notfound");
        });

        // شروع پخش
        audio.addEventListener('play', () => {
            App.currentAudio = audio;
            onPlay();
        });

        // پایان پخش
        audio.addEventListener('ended', () => {
            App.currentAudio = null;
            onEnd();
        });

        audio.play();
    }

    /**
    * توقف موزیک در حال پخش
    */
    static stopAudio() {
        if (!App.currentAudio) return;

        App.currentAudio.pause();
        App.currentAudio.currentTime = 0;
        App.currentAudio = null;
        // rainbow disabled
        // App.toggleClass( callRainbow, "grad" );
        //App.enable( buttonCall );
    }

    /**
    * چک اینکه موزیکی در حال پخشه یا نه
    */
    static isAudioPlaying() {
        return App.currentAudio !== null;
    }




}

/*
====================== مثال استفاده ======================

const btn = App.qs('#myBtn');
const box = App.qs('.box');

// کلاس
App.addClass(box, 'active');
App.toggleClass(box, 'active');

// attribute
App.addAttr(btn, 'disabled');
App.removeAttr(btn, 'disabled');

// disabled
App.disable(btn);
App.toggleDisabled(btn);

// event
App.on(btn, 'click', () => {
  App.toggleClass(box, 'active');
});

// data
App.setData(btn, 'id', 12);
App.getData(btn, 'id');

// نمایش
App.hide(box);
App.show(box);

// محتوا
App.text(box, 'Hello');
App.html(box, '<b>Hello</b>');

=========================================================
*/

/**
* Audio Controller (داخل App)
* پخش امن موزیک با کنترل همزمانی
*/


/*
====================== مثال استفاده ======================

App.playAudio(
  'assets/sounds',      // پوشه
  'click.mp3',          // فایل
  () => {
    console.log('🎵 پخش شروع شد');
  },
  () => {
    console.log('⏹️ پخش تموم شد');
  }
);

// توقف دستی
App.stopAudio();

// چک وضعیت
if (App.isAudioPlaying()) {
  console.log('در حال پخش');
}

=========================================================
*/








// global el
const callRainbow = App.qs('#callRainbow');
const LCD = App.qs('#LCD');
const ledRight = App.qs('.led-right');
const ledCenter = App.qs('.led-center');
const buttonCall = App.qs('#bcall');
const buttonAlert = App.qs('#balert');
const notIcon = App.qsa(".noticon");
















const AlertBox = () => {
    //  let balert = App.qs("#balert");
    let buttonsArrowAlert = App.qsa(".button-arrow_alert");
    let buttonsArrowNumber = App.qsa(".button-arrow_number");
    let buttonsNumber = App.qsa(".buttonsNumber");
    if (App.hasClass(ledCenter, "hidden")) {
        App.addClass(ledRight, "hidden");
        App.addClass(buttonCall, "hidden");
        App.addClass(LCD, "hidden");
        App.removeClass(ledCenter, "hidden");
        App.removeClass(buttonAlert, "hidden");
        buttonsArrowAlert.forEach (i => {
            App.enable(i);
        });
        buttonsArrowNumber.forEach (i => {
            App.disable(i);
        });
        buttonsNumber.forEach (i => {
            App.disable(i);
        });
    } else {
        App.addClass(ledCenter, "hidden");
        App.addClass(buttonAlert, "hidden");
        App.removeClass(ledRight, "hidden");
        App.removeClass(LCD, "hidden");
        App.removeClass(buttonCall, "hidden");
        buttonsArrowAlert.forEach (i => {
            App.disable(i);
        });
        buttonsArrowNumber.forEach (i => {
            App.enable(i);
        });
        buttonsNumber.forEach (i => {
            App.enable(i);
        });
    }

}




const theme_mode = (val) => {
    let el = document.documentElement;
    App.addAttr(el, "app-theme", val);
}

const rightLedPower = (L) => {
    let led = App.qs("#"+L);
    App.toggleClass(led, "active")
}


const OpenPanel = (p) => {
    let panel = App.qs(p);
    App.toggleClass(panel, "hidden");
}




const box = App.qs("#scrollBox");
const items = App.qsa('#scrollBox .item');
let index = 0;

const updateActive = () => {
    items.forEach(i => {
        i.classList.remove('active');
        // پاک کردن کلاس‌های عددی قبلی
        i.classList.forEach(c => {
            if (c.startsWith('step-')) i.classList.remove(c);
        });
    });

    const activeItem = items[index];
    //activeItem.classList.add('active');
    App.addClass(activeItem, "active");

    // اضافه کردن کلاس عددی
    activeItem.classList.add('alert-' + (index + 1));
    buttonAlert.value = "alert-" + (index + 1);
    // alert(index +1);
    const scrollX =
    activeItem.offsetLeft
    - box.clientWidth / 2
    + activeItem.clientWidth / 2;

    box.scrollTo({
        left: scrollX,
        behavior: 'smooth'
    });
}

const next = () => {
    if (index < items.length - 1) {
        index++;
        updateActive();
        //alert(index)
    }
}

const prev = () => {
    if (index > 0) {
        index--;
        updateActive();
    }
}












const SetNumber = (val = 0, type = "number") => {
    let bcallValue = Number(bcall.value);
    val = Number(val);

    switch (type) {
        case "number":
            if (isNaN(bcallValue) || bcallValue <= 0) {
                bcallValue = 0;
            }
            if (bcallValue <= 99) {
                // حداکثر 3 رقم
                bcallValue = bcallValue * 10 + val;
            } else {
                bcallValue = val;
            }
            bcall.value = bcallValue;
            App.text(LCD, bcallValue);
            break;

        case "plus":

            if (isNaN(bcallValue) || bcallValue <= 0) {
                bcallValue = 0;
            }
            if (bcallValue < 999) {
                bcallValue += 1;
            } else {
                bcallValue = 1;
            }
            bcall.value = bcallValue;
            App.text(LCD, bcallValue);
            break;

        case "minor":
            if (isNaN(bcallValue) || bcallValue <= 0) {
                bcallValue = 999;
            } else {
                bcallValue -= 1;
            }
            bcall.value = bcallValue;
            App.text(LCD, bcallValue);
            break;

        case "clean":
            bcall.value = 0;
            App.text(LCD, "- - -");
            // stop all
            App.stopAudio();
            App.removeClass(callRainbow, "grad");
            App.enable(bcall);
            App.enable(buttonAlert);
            notIcon.forEach (i => {
                        App.removeClass(i, "active");
                    });
            break;
    }
}


// app play sound
const SoundPlay = (sound, type = "number") => {
    switch (type) {

        // play number
        case "number":
            App.disable(bcall);
            sound = Number(sound);
            if (sound <= 9) {
                sound = "000" + sound;
            } else
                if (sound <= 99) {
                sound = "00" + sound;
            } else
                if (sound <= 999) {
                sound = "0" + sound;
            }
            App.playAudio(
                './sounds/', // پوشه
                sound +".mp3", // فایل
                () => {
                    App.toggleClass(callRainbow, "grad");
                    console.log('🎵 پخش شروع شد');
                    console.log(sound);
                },
                () => {
                    App.enable(bcall);
                    App.toggleClass(callRainbow, "grad");
                    console.log('⏹️ پخش تموم شد');
                }
            );
            break;

        // app custom alert
        case "alert":
            App.disable(buttonAlert);
            App.playAudio(
                './sounds/alerts/', // پوشه
                sound +".mp3", // فایل
                () => {
                    App.toggleClass(callRainbow, "grad");
                    console.log('🎵 پخش شروع شد');
                },
                () => {
                    App.enable(buttonAlert);
                    App.toggleClass(callRainbow, "grad");
                    console.log('⏹️ پخش تموم شد');
                }
            );
            break;

        case "notification":
            App.playAudio(
                './sounds/notification/', // پوشه
                sound +".mp3", // فایل
                () => {
                    App.toggleClass(callRainbow, "grad");
                    console.log('🎵 پخش شروع شد');
                },
                () => {
                    App.toggleClass(callRainbow, "grad");
                    console.log('⏹️ پخش تموم شد');
                    notIcon.forEach (i => {
                        App.removeClass(i, "active");
                    });
                }
            );
            break;
    }
}
// end SoundPlay