// Your Code Here
function start(){
    let firstAnswer  = window.prompt('Do you head left, or right?')
    if(firstAnswer.toLowerCase() === 'left'){
       goLeft()
    } else if(firstAnswer.toLowerCase() === 'right') {
        goRight()
    } else{
        window.alert("That is not an option. Please choose 'left' or 'right'.")
        start()
    }
}

function goLeft(){
    let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`)
    if(secondAnswer.toLowerCase() === 'back'){
        start()
    }else if(secondAnswer.toLowerCase() === 'follow'){
        follow()
    }else if(secondAnswer.toLowerCase() === 'continue'){
        continueon()
    } else{
        window.alert("That is not an option. Please choose 'follow', 'continue', or 'back' to return to the previous question.")
        goLeft()
    }
}
    
    
function follow(){    
    let thirdAnswer = window.prompt('You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
    if(thirdAnswer.toLowerCase() === 'back'){
        goLeft()
    } else if(thirdAnswer.toLowerCase() === 'stay') {
        window.alert('You live happily amongst the cats for the rest of your days.')
        playAgain()
    } else if(thirdAnswer.toLowerCase() === 'spread the word'){
        window.alert('After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless.')
        playAgain()
    } else{
        window.alert("That is not an option. Please choose 'stay', 'spread the word', or 'back' to return to the previous question.")
        follow()
    }
}

function continueon(){    
    let thirdAnswer = window.prompt('You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?')
    if(thirdAnswer.toLowerCase() === 'back'){
        goLeft()
    } else if(thirdAnswer.toLowerCase() === 'ladder') {
        window.alert('After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home.')
        playAgain()
    } else if(thirdAnswer.toLowerCase() === 'staircase'){
        window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
        playAgain()
    } else{
        window.alert("That is not an option. Please choose 'ladder', 'staircase', or 'back' to return to the previous question.")
        continueon()
    }
}

function goRight(){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`)
    if(secondAnswer.toLowerCase() === 'back'){
        start()
    }else if(secondAnswer.toLowerCase() === 'past the dragon'){
        pastdragon()
    }else if(secondAnswer.toLowerCase() === 'away from the dragon'){
        away()
    } else{
        window.alert("That is not an option. Please choose 'past the dragon', 'away from the dragon', or 'back' to return to the previous question.")
        goRight()
    }
}

function pastdragon(){    
    let thirdAnswer = window.prompt('The dragon awakes and sits upright. You only have a moment to respond, to stay or to run:')
    if(thirdAnswer.toLowerCase() === 'back'){
        goRight()
    } else if(thirdAnswer.toLowerCase() === 'stay') {
        window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
        playAgain()
    } else if(thirdAnswer.toLowerCase() === 'run'){
        window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
        playAgain()
    } else{
        window.alert("That is not an option. Please choose 'stay', 'run', or 'back' to return to the previous question.")
        pastdragon()
    }
}

function away(){    
    let thirdAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
    if(thirdAnswer.toLowerCase() === 'back'){
        goRight()
    } else if(thirdAnswer.toLowerCase() === 'draw it') {
        window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time discover joy in sharing the drawing with your friends and family, recounting the story of your days as a sorcerer with the aide of the sketch.')
        playAgain()
    } else if(thirdAnswer.toLowerCase() === 'pick it'){
        window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
        playAgain()
    } else{
        window.alert("That is not an option. Please choose 'draw it', 'pick it', or 'back' to return to the previous question.")
        away()
    }
}

function playAgain(){
    let startOver = window.prompt("Would you like to play again?")
    if(startOver.toLowerCase() === 'yes'){
        start()
    } else if(startOver.toLowerCase() === 'no'){
        window.alert("Thank you for playing! We hope you join us again for another Quest!")
    } else{
        window.alert("That is not an option. Please choose 'yes' or 'no'.")
        playAgain()
    }
}
start()
