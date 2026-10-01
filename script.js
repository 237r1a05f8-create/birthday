/* =====================================
   IMPORTANT DATES
===================================== */

const birthday =
    new Date(
        "October 18, 2026 00:00:00"
    ).getTime();


const startDate =
    new Date(
        "October 1, 2026 00:00:00"
    );



/* =====================================
   COUNTDOWN
===================================== */

function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        birthday - now;


    if (difference <= 0) {

        document.getElementById("days")
            .innerText = "00";

        document.getElementById("hours")
            .innerText = "00";

        document.getElementById("minutes")
            .innerText = "00";

        document.getElementById("seconds")
            .innerText = "00";


        birthdayUnlocked();

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    document.getElementById("days")
        .innerText =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerText =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText =
        String(seconds).padStart(2, "0");

}


setInterval(
    updateCountdown,
    1000
);


updateCountdown();



/* =====================================
   FIND CURRENT BIRTHDAY YEAR
===================================== */

function getCurrentDay() {

    const today =
        new Date();


    const difference =
        today - startDate;


    let day =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        ) + 1;


    if (day < 1) {

        day = 1;

    }


    if (day > 18) {

        day = 18;

    }


    return day;

}



/* =====================================
   18 BIRTHDAY MESSAGES
===================================== */

const birthdayMessages = [

    "Happy 1st Birthday, Srinidhi! 🎂❤️ Today we're celebrating the very beginning of your beautiful journey.",


    "Happy 2nd Birthday, Srinidhi! 🎈❤️ Another little year of your story, another chapter worth celebrating.",


    "Happy 3rd Birthday, Srinidhi! 🧸🎂 Three years of smiles, laughter, and memories beginning to fill your story.",


    "Happy 4th Birthday, Srinidhi! 🌸❤️ Four years already! Every year adds another little piece to the person you are today.",


    "Happy 5th Birthday, Srinidhi! 🎂✨ Five years of growing, learning, laughing, and making memories.",


    "Happy 6th Birthday, Srinidhi! 🌷❤️ Six years into your journey, and there are still so many beautiful chapters ahead.",


    "Happy 7th Birthday, Srinidhi! 🎉😊 Seven years of memories, smiles, and moments that became part of your story.",


    "Happy 8th Birthday, Srinidhi! 🎂💖 Eight years of becoming the amazing person you are today.",


    "Happy 9th Birthday, Srinidhi! 🌸✨ Nine years down, and your story is only getting more beautiful.",


    "Happy 10th Birthday, Srinidhi! 🎉🎂 Welcome to double digits! A whole decade of your beautiful journey.",


    "Happy 11th Birthday, Srinidhi! ❤️✨ Another year, another chapter, another collection of memories.",


    "Happy 12th Birthday, Srinidhi! 🎂🌷 Twelve years of life, laughter, learning, and growing.",


    "Happy 13th Birthday, Srinidhi! 🎉❤️ A new chapter begins, bringing new dreams and new memories.",


    "Happy 14th Birthday, Srinidhi! 🌸✨ Fourteen years of your story, and so many more chapters waiting ahead.",


    "Happy 15th Birthday, Srinidhi! 🎂💖 Fifteen years of becoming the person you are today.",


    "Happy 16th Birthday, Srinidhi! 🎉❤️ Sixteen years, countless memories, and so many moments to treasure.",


    "Happy 17th Birthday, Srinidhi! 🌷❤️ One year away from 18. One last chapter before the big milestone.",


    "HAPPY 18TH BIRTHDAY, Srinidhi! 🎂🎉❤️ Today we celebrate 18 years, 18 birthdays, countless memories, and the beginning of a brand-new chapter."

];



/* =====================================
   SHOW TODAY'S BIRTHDAY
===================================== */

function showDailyMessage() {

    const day =
        getCurrentDay();


    document.getElementById(
        "dayNumber"
    ).innerText =
        "✨ Chapter " +
        day +
        " of 18 ✨";


    document.getElementById(
        "birthdayYear"
    ).innerText =
        "🎂 Happy " +
        day +
        getOrdinal(day) +
        " Birthday, Srinidhi!";


    document.getElementById(
        "dailyMessage"
    ).innerText =
        birthdayMessages[day - 1];

}


function getOrdinal(number) {

    if (
        number >= 11 &&
        number <= 13
    ) {

        return "th";

    }


    switch (number % 10) {

        case 1:
            return "st";

        case 2:
            return "nd";

        case 3:
            return "rd";

        default:
            return "th";

    }

}


showDailyMessage();



/* =====================================
   CREATE 18 BIRTHDAY CARDS
===================================== */

function createDayCards() {

    const grid =
        document.getElementById(
            "daysGrid"
        );


    const currentDay =
        getCurrentDay();


    grid.innerHTML = "";


    for (
        let i = 1;
        i <= 18;
        i++
    ) {


        const card =
            document.createElement(
                "div"
            );


        card.classList.add(
            "day-card"
        );


        const ordinal =
            getOrdinal(i);


        if (i <= currentDay) {

            card.innerHTML = `

                <div class="number">
                    ${i}
                </div>

                <div class="icon">
                    🎂
                </div>

                <div class="birthday-name">
                    ${i}${ordinal} Birthday
                </div>

                <p class="status">
                    Happy ${i}${ordinal} Birthday,
                    Srinidhi! ❤️
                </p>

            `;

        } else {

            card.classList.add(
                "locked"
            );


            card.innerHTML = `

                <div class="number">
                    ${i}
                </div>

                <div class="icon">
                    🔒
                </div>

                <div class="birthday-name">
                    ${i}${ordinal} Birthday
                </div>

                <p class="status">
                    Waiting for this chapter...
                </p>

            `;

        }


        grid.appendChild(card);

    }

}


createDayCards();



/* =====================================
   PHOTO CAPTIONS
===================================== */

const memoryCaptions = [

    "A beautiful beginning ❤️",

    "One of the earliest memories ✨",

    "A little moment worth remembering 💕",

    "A beautiful little soul, long before I ever knew her. ❤️",

    "A beautiful chapter 📖",

    "Another little piece of the story ❤️",

    "A memory to treasure 💖",

    "A moment frozen in time 📸",

    "Another reason to smile 😊",

    "A beautiful memory ✨",

    "One more chapter of the journey ❤️",

    "A moment worth keeping 💕",

    "Another beautiful memory 🌷",

    "A chapter I'll always remember ❤️",

    "One of those special moments ✨",

    "A memory close to the heart 💖",

    "Another little piece of the journey 📖",

    "A smile worth remembering 😊",

    "Another chapter begins ❤️",

    "One more beautiful memory ✨",

    "A moment that deserves to be remembered 💕",

    "Another reason to smile ❤️",

    "A memory worth keeping forever 🌸",

    "Another beautiful moment 📸",

    "A chapter filled with memories ❤️",

    "One of the special moments 💖",

    "Another memory to treasure ✨",

    "A beautiful part of the journey 🌷",

    "One more chapter ❤️",

    "A moment filled with happiness 💕",

    "Another memory worth keeping 📖",

    "A beautiful moment in time ❤️",

    "One more memory before the big 18 🎂",

    "Almost at the final chapter 💖",

    "One of the last memories before 18 🎉",

    "36 memories leading to 18 ❤️"

];



/* =====================================
   DISPLAY MEMORIES
===================================== */

function displayMemories() {

    const gallery =
        document.getElementById(
            "memoryGallery"
        );


    const memoryCount =
        document.getElementById(
            "memoryCount"
        );


    if (
        !gallery ||
        !memoryCount
    ) {

        return;

    }


    const currentDay =
        getCurrentDay();


    const photosToShow =
        currentDay * 2;


    gallery.innerHTML = "";


    for (
        let i = 1;
        i <= photosToShow;
        i++
    ) {


        const photoCard =
            document.createElement(
                "div"
            );


        photoCard.classList.add(
            "photo-card"
        );


        const photoNumber =
            String(i)
                .padStart(2, "0");


        photoCard.innerHTML = `

            <img
                src="photo${photoNumber}.JPG"
                alt="Memory ${i}"
                onerror="
                    this.parentElement.style.display='none';
                "
            >

            <p>
                ${memoryCaptions[i - 1]}
            </p>

        `;


        gallery.appendChild(
            photoCard
        );

    }


    memoryCount.innerText =
        photosToShow;

}


displayMemories();



/* =====================================
   FINAL BIRTHDAY UNLOCK
===================================== */

function birthdayUnlocked() {

    document.getElementById(
        "lock"
    ).innerText = "🎉";


    document.getElementById(
        "finalTitle"
    ).innerText =
        "Happy 18th Birthday, Srinidhi! 🎂❤️";


    document.getElementById(
        "finalMessage"
    ).innerText =

        "Today marks the beginning of a brand-new chapter. " +
        "18 years, 18 birthdays, countless memories, " +
        "and so many more beautiful moments ahead. " +
        "Happy 18th Birthday, Srinidhi! ❤️";


    document.getElementById(
        "birthdayButton"
    ).innerText =
        "🎁 Open Your Birthday Surprise";

}



/* =====================================
   FINAL SURPRISE BUTTON
===================================== */

function birthdaySurprise() {

    const now =
        new Date().getTime();


    if (now < birthday) {

        alert(
            "Not yet! 😜 Come back on October 18th ❤️"
        );

        return;

    }


    document.getElementById(
        "finalMessage"
    ).innerHTML = `

        🎂 HAPPY 18TH BIRTHDAY, Srinidhi! 🎂

        <br><br>

        18 years.

        <br>

        18 birthdays.

        <br>

        Countless memories.

        <br><br>

        And today begins
        a brand-new chapter. ❤️

        <br><br>

        I hope your 18th year brings
        you happiness, beautiful memories,
        exciting dreams, and many reasons
        to smile.

        <br><br>

        ✨ HAPPY 18TH! ✨

    `;


    createConfetti();

}



/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    const heartTypes = [

        "❤️",
        "💕",
        "💖",
        "💗",
        "💓"

    ];


    heart.innerHTML =
        heartTypes[
        Math.floor(
            Math.random() *
            heartTypes.length
        )
        ];


    heart.style.left =
        Math.random() * 100 +
        "vw";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 25
        ) +
        "px";


    document.body.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        6000
    );

}


setInterval(
    createHeart,
    500
);



/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {


        const piece =
            document.createElement(
                "div"
            );


        piece.innerHTML =
            "🎉";


        piece.style.position =
            "fixed";


        piece.style.left =
            Math.random() * 100 +
            "vw";


        piece.style.top =
            "-20px";


        piece.style.fontSize =
            (
                15 +
                Math.random() * 20
            ) +
            "px";


        piece.style.zIndex =
            "9999";


        piece.style.transition =
            "transform 3s linear, opacity 3s";


        document.body.appendChild(
            piece
        );


        setTimeout(
            () => {

                piece.style.transform =
                    `translateY(110vh)
                     rotate(720deg)`;


                piece.style.opacity =
                    "0";

            },
            100
        );


        setTimeout(
            () => {

                piece.remove();

            },
            3500
        );

    }

}
