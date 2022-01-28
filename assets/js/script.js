// TODO: Declare any global variables we need
let numberOfHeads = 0
let numberOfTails = 0
let percentofHeads = 0
let percentofTails = 0
let totalFlips = numberOfHeads + numberOfTails
let images = [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "You Flipped Heads!",
        side: "heads"
    },
    {
        imagePath: "assets/images/penny-tails.jpg",
        message: "You Flipped Tails!",
        side: "tails"
    }
]
let clearImg = [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "Lets Get Rolling! ",
        side: "heads"
    }
]


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("flip").addEventListener('click', function () {
        let randomImage = images[Math.floor(Math.random() * images.length)]

        document.getElementById("penny").setAttribute("src", randomImage.imagePath)

        document.querySelector(".message-container").textContent = randomImage.message

        if (randomImage.side === "heads") {
            numberOfHeads++
            document.getElementById("heads").textContent = numberOfHeads
        } else {
            numberOfTails++
            document.getElementById("tails").textContent = numberOfTails

        }
        totalFlips++
        percentofHeads = (numberOfHeads / totalFlips) * 100 + "%"
        percentofTails = (numberOfTails / totalFlips) * 100 + "%"

        document.getElementById("heads-percent").textContent = percentofHeads
        document.getElementById("tails-percent").textContent = percentofTails;

        document.getElementById("clear").addEventListener('click', function () {
            let clearImage = clearImg
            document.querySelector(".message-container").textContent = clearImage.message
        numberOfHeads = 0
        document.getElementById("heads").textContent = numberOfHeads
        percentofHeads = 0
        document.getElementById("heads-percent").textContent = percentofHeads
        numberOfTails = 0
        document.getElementById("tails").textContent = numberOfHeads
        percentofTails = 0
        document.getElementById("tails-percent").textContent = percentofTails

        })
    })
})
 // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handle