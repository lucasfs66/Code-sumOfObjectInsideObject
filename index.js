obj = {
    value: 6,
    next: {
        value: 5,
        next: {
            value: 0,
            next: {
                value: 7,
                next: null
            }
        }
    }
}




const sum = (object) => {
    let resulte = 0
    while(object !== null) {
        resulte = resulte + object.value
        object = object.next
    }

    return resulte
}

console.log(sum(obj))