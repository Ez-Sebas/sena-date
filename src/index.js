function getTimeStamp() {
    return Date.now();
}

function getLongTime(locale = 'es-Es') {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    return new Date().toLocaleDateString(locale, options)
}

module.exports = {
    getTimeStamp,
    getLongTime
}