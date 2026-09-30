/* =================================
   BIRTHDAY DATE
================================= */

const birthday =
    new Date("October 18, 2026 00:00:00").getTime();


/* =================================
   COUNTDOWN
================================= */

function updateCountdown() {

    const now = new Date().getTime();

    const difference = birthday - now;

    if (difference <= 0) {

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

        birthdayUnlocked();

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");
}


setInterval(updateCountdown, 1000);

updateCountdown();



/* =================================
   18 DAILY MESSAGES
================================= */

const messages = [

    "18 days to go! And this is only the beginning. ❤️",

    "Your smile has a way of making ordinary moments special. 😊",

    "Today is another little reminder of how special you are. 🌸",

    "Some people make life brighter simply by being themselves. ✨",

    "Another day, another memory worth keeping. ❤️",

    "I hope you always remember how special you are. 💕",

    "One week closer to your special day! 🎂",

    "Another day and another reason to celebrate you. 🌷",

    "Your happiness deserves to be celebrated every day. ❤️",

    "10 days down! We're getting closer! 🎉",

    "I hope this little countdown makes you smile today. 😊",

    "Here's to all the memories we've made and the ones still waiting. ✨",

    "Your 18th chapter is almost here. Make it beautiful. 🌸",

    "Only a few more days until your special day! ❤️",

    "Your birthday is almost here! 🎂",

    "Just two more days until the final countdown! 💖",

    "TOMORROW! Your 18th birthday is almost here! 🎉",

    "HAPPY 18TH BIRTHDAY! 🎂❤️ Today is your day!"
];



/* =================================
   GET CURRENT DAY
================================= */

function getCurrentDay() {

    const startDate =
        new Date("October 1, 2026 00:00:00");

    const today =
        new Date();

    const difference =
        today - startDate;

    let day =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        ) + 1;


    /*
       Before October 1
    */

    if (day < 1) {

        day = 1;

    }


    /*
       After October 18
    */

    if (day > 18) {

        day = 18;

    }


    return day;
}



/* =================================
   DAILY MESSAGE
================================= */

function showDailyMessage() {

    const day = getCurrentDay();

    document.getElementById("dayNumber").innerText =
        "✨ Day " + day + " of 18 ✨";

    document.getElementById("dailyMessage").innerText =
        messages[day - 1];
}


showDailyMessage();



/* =================================
   18 DAY CARDS
================================= */

function createDayCards() {

    const grid =
        document.getElementById("daysGrid");

    const currentDay =
        getCurrentDay();


    grid.innerHTML = "";


    for (let i = 1; i <= 18; i++) {

        const card =
            document.createElement("div");

        card.classList.add("day-card");


        if (i <= currentDay) {

            card.innerHTML = `

                <div class="number">
                    ${i}
                </div>

                <div class="icon">
                    ❤️
                </div>

                <p>
                    Day ${i} unlocked!
                </p>

            `;

        } else {

            card.classList.add("locked");

            card.innerHTML = `

                <div class="number">
                    ${i}
                </div>

                <div class="icon">
                    🔒
                </div>

                <p>
                    Waiting for you...
                </p>

            `;
        }


        grid.appendChild(card);
    }
}


createDayCards();



/* =================================
   36 MEMORY PHOTOS
================================= */

const memoryCaptions = [

    "A beautiful moment ❤️",
    "One of my favorite memories ✨",

    "A moment worth remembering 💕",
    "Your beautiful smile 😊",

    "Another special memory 🌸",
    "This one always makes me smile ❤️",

    "A memory I'll always cherish 💖",
    "A beautiful day to remember ✨",

    "One more reason to smile 😊",
    "A little moment that means a lot ❤️",

    "Another chapter of our memories 📖",
    "A moment frozen in time 📸",

    "This memory is special 💕",
    "One of those unforgettable moments ✨",

    "A memory close to my heart ❤️",
    "Another beautiful moment 🌷",

    "Something worth remembering forever 💖",
    "A smile worth remembering 😊",

    "Another little piece of our story 📖",
    "One more beautiful memory ❤️",

    "This moment deserves a place here ✨",
    "A memory that makes me happy 💕",

    "Another moment I'll never forget ❤️",
    "A beautiful memory from the journey 🌸",

    "Another reason to smile 😊",
    "One of my favorite moments 💖",

    "A memory worth keeping forever 📸",
    "Another special chapter ❤️",

    "This one means a lot to me ✨",
    "A moment filled with happiness 💕",

    "Another memory to treasure 🌷",
    "A beautiful moment in time ❤️",

    "One more memory before your birthday 🎂",
    "Almost at the final surprise! 💖",

    "One of the last memories before 18 🎉",
    "36 memories leading to your 18th birthday ❤️"
];



/* =================================
   DISPLAY MEMORIES
================================= */

function displayMemories() {

    const gallery =
        document.getElementById("memoryGallery");

    const memoryCount =
        document.getElementById("memoryCount");


    if (!gallery || !memoryCount) {

        return;

    }


    const currentDay =
        getCurrentDay();


    /*
       2 photos per day

       Day 1  = 2 photos
       Day 2  = 4 photos
       Day 3  = 6 photos
       ...
       Day 18 = 36 photos
    */

    const photosToShow =
        currentDay * 2;


    gallery.innerHTML = "";


    for (
        let i = 1;
        i <= photosToShow;
        i++
    ) {

        const photoCard =
            document.createElement("div");

        photoCard.classList.add("photo-card");


        const photoNumber =
            String(i).padStart(2, "0");


        photoCard.innerHTML = `

            <img
                src="photo${photoNumber}.jpg"
                alt="Memory ${i}"
                onerror="this.parentElement.style.display='none';"
            >

            <p>
                ${memoryCaptions[i - 1]}
            </p>

        `;


        gallery.appendChild(photoCard);
    }


    memoryCount.innerText =
        photosToShow;
}


displayMemories();



/* =================================
   BIRTHDAY SURPRISE
================================= */

function birthdayUnlocked() {

    document.getElementById("lock").innerText =
        "🎉";


    document.getElementById("finalTitle").innerText =
        "Happy 18th Birthday! 🎂❤️";


    document.getElementById("finalMessage").innerText =
        "Today is your day. May your 18th year be filled with happiness, beautiful memories, dreams coming true, and lots of reasons to smile. ❤️";


    document.getElementById("birthdayButton").innerText =
        "🎁 Open Your Birthday Surprise";
}



function birthdaySurprise() {

    const now =
        new Date().getTime();


    if (now < birthday) {

        alert(
            "Not yet! 😜 Come back on October 18th ❤️"
        );

        return;

    }


    document.getElementById("finalMessage").innerHTML = `

        🎂 HAPPY 18TH BIRTHDAY! 🎂

        <br><br>

        You made it to 18! ❤️

        <br><br>

        This little website was made especially
        for you because you deserve something
        as special as you are.

        <br><br>

        Keep smiling, keep dreaming,
        and make this new chapter amazing. ✨

    `;


    createConfetti();
}



/* =================================
   FLOATING HEARTS
================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    const heartTypes =
        ["❤️", "💕", "💖", "💗", "💓"];


    heart.innerHTML =
        heartTypes[
        Math.floor(
            Math.random() * heartTypes.length
        )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 6000);
}


setInterval(createHeart, 500);



/* =================================
   CONFETTI
================================= */

function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");


        piece.innerHTML = "🎉";


        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        piece.style.zIndex = "9999";

        piece.style.transition =
            "transform 3s linear, opacity 3s";


        document.body.appendChild(piece);


        setTimeout(() => {

            piece.style.transform =
                `translateY(110vh) rotate(720deg)`;

            piece.style.opacity = "0";

        }, 100);


        setTimeout(() => {

            piece.remove();

        }, 3500);
    }
}