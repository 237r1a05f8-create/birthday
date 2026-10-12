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

    "A beautiful beginning ❤️",//1

    "One of the earliest memories ✨",//2

    "A little moment worth remembering 💕",//3

    "A beautiful little soul, long before I ever knew her. ❤️",//4

    "A beautiful chapter 📖",//5

    "Another little piece of the story ❤️",//6

    "A memory to treasure 💖",//7

    "A moment frozen in time 📸",//8

    "Another reason to smile 😊",//9

    "A beautiful memory ✨",//10

    "One more chapter of the journey ❤️",//11

    "A moment worth keeping 💕",//12

    "Another beautiful memory 🌷",//13

    "A chapter I'll always remember ❤️",//14

    "One of those special moments ✨",//15

    "A memory close to the heart 💖",//16

    "Another little piece of the journey 📖",//17

    "A smile worth remembering 😊",//18

    "Another chapter begins ❤️",//19

    "One more beautiful memory ✨",//20

    "A moment that deserves to be remembered 💕",//21

    "Another reason to smile ❤️",//22

    "A memory worth keeping forever 🌸",//23

    "Another beautiful moment 📸",//24

    "A chapter filled with memories ❤️",//25

    "One of the special moments 💖",//26

    "Another memory to treasure ✨",//27

    "A beautiful part of the journey 🌷",//28

    " My Angle ❤️",//29

    "A moment filled with happiness 💕",//30

    "Another memory worth keeping 📖",//31

    "A beautiful moment in time ❤️",//32

    "One more memory before the big 18 🎂",//33

    "Almost at the new chapter 💖",//34

    "One of the last memories before 18 🎉",//35

    "36 memories leading to 18 ❤️"//36

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
    document.getElementById("lock").innerText = "🎉";

    document.getElementById("finalTitle").innerText =
        "Happy 18th Birthday, Srinidhi! 🎂❤️";

    document.getElementById("finalMessage").innerText =
        "Today marks the beginning of a brand-new chapter. " +
        "18 birthdays, countless memories, and many more " +
        "beautiful moments ahead. Happy Birthday, Srinidhi! ❤️";

    document.getElementById("birthdayButton").innerText =
        "🎁 Open Your Birthday Surprise";
}

/* =====================================
   FINAL SURPRISE BUTTON
===================================== */

function birthdaySurprise() {
    const today = new Date();
    const isBirthday =
        today.getFullYear() === 2026 &&
        today.getMonth() === 9 && // October is month 9
        today.getDate() === 18;

    if (!isBirthday) {
        alert("Your birthday surprise unlocks on October 18! 🎂");
        return;
    }

    const surprise = document.getElementById("surpriseContent");

    if (surprise) {
        surprise.classList.remove("hidden");
    }

    document.getElementById("lock").innerText = "🎉";

    document.getElementById("finalTitle").innerText =
        "Happy 18th Birthday, Srinidhi! 🎂❤️";

    document.getElementById("finalMessage").innerHTML = `
        🎂 HAPPY 18TH BIRTHDAY, SRINIDHI! 🎂
        <br><br>
        18 birthdays. Countless memories.
        <br><br>
        May this new chapter bring you happiness,
        exciting opportunities, beautiful memories,
        and many reasons to smile.
        <br><br>
        ✨ HAPPY BIRTHDAY! ✨
    `;

    document.getElementById("birthdayButton").innerText =
        "🎉 Your Surprise Is Open!";

    document.getElementById("birthdayButton").disabled = true;

    createThingsList();
    createConfetti();
}


/* =====================================
   18 POSITIVE THINGS ABOUT SRINIDHI
===================================== */

function createThingsList() {
    const list = document.getElementById("thingsList");

    if (!list || list.dataset.created === "true") {
        return;
    }

    const things = [
        "Your kindness",
        "Your smile",
        "Your laughter",
        "Your creativity",
        "Your unique personality",
        "Your courage",
        "Your curiosity",
        "Your positive spirit",
        "Your thoughtfulness",
        "Your determination",
        "Your sense of humor",
        "Your ability to learn",
        "Your helpful nature",
        "Your dreams",
        "Your enthusiasm",
        "Your individuality",
        "Your strength to keep growing",
        "The wonderful person you are"
    ];

    list.innerHTML = "";

    things.forEach((thing, index) => {
        const item = document.createElement("div");
        item.classList.add("thing-item");
        item.innerText = `${index + 1}. ${thing}`;
        list.appendChild(item);
    });

    list.dataset.created = "true";
}

/* =====================================
   INTERACTIVE BIRTHDAY CAKE
===================================== */

function celebrateCake() {
    const message = document.getElementById("cakeMessage");

    if (message) {
        message.innerText =
            "🎉 Make a wish, Srinidhi! Happy Birthday! 🎂✨";
    }

    const cake = document.getElementById("cake");

    if (cake) {
        cake.classList.add("cake-celebrating");
    }

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
   CONFETTI CELEBRATION
===================================== */

function createConfetti() {
    const container = document.getElementById("confettiContainer");

    if (!container) {
        return;
    }

    const colors = [
        "#ff4d6d",
        "#ffb703",
        "#fbc2eb",
        "#a8dadc",
        "#cdb4db",
        "#ffd166"
    ];

    for (let i = 0; i < 100; i++) {
        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay = Math.random() * 1.5 + "s";
        piece.style.animationDuration = 3 + Math.random() * 2 + "s";
        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 6500);
    }
}
