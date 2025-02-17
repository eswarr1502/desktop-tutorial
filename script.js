// Countdown Timer for the Next Protest
document.addEventListener("DOMContentLoaded", function () {
    function updateCountdown() {
        const eventDate = new Date("March 15, 2025 12:00:00").getTime();
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("countdown-timer").innerHTML =
                `<strong>${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds</strong>`;
        } else {
            document.getElementById("countdown-timer").innerHTML = "<strong>Event in Progress!</strong>";
        }
    }

    setInterval(updateCountdown, 1000);
});

// Interactive Donation Calculator
function calculateImpact() {
    let amount = document.getElementById("donationAmount").value;
    let impact = amount * 10; // Assuming $1 feeds 10 people
    document.getElementById("impactResult").innerHTML = `Your donation can feed ${impact} people!`;
}

// News Ticker Updates
const newsUpdates = ["🚨 Breaking: Protest in London this Friday!", "🕊️ UN reports increased civilian casualties.", "📢 Donate now to support Palestine relief efforts."];
let index = 0;
setInterval(() => {
    document.getElementById("news-text").innerText = newsUpdates[index];
    index = (index + 1) % newsUpdates.length;
}, 3000);
