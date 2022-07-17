//Functionality 



module.exports.get_date = () => {
    const today = new Date ();
    const options = {
        day: 'numeric',
        weekday: 'long',
        month: 'long'
    }
    return today.toLocaleString('en-US', options);
}

