
const Reducer = (value, action) => {
    switch(action){
        case 'INCREAMENT':
            return ++value
        
        case 'DECREAMENT':
            return --value

        case 'RESET':
            return value = 0
    }
}

export default Reducer;