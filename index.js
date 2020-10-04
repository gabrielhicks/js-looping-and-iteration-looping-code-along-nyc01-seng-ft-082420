function writeCards(array, string) {
    const thanks = []

    for (let i = 0; i < array.length; i++) {
        thanks.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
        // console.log(`Thank you ${array}`)
    }

    return thanks
}

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i)
    }
}

// writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise')