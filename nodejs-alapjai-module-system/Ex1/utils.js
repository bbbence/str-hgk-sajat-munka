const increaseDate = (date, days=3) => {
    const result = new Date(date.getTime());
    result.setDate(date.getDate()+days);
    return result
}

// console.log(increaseDate(new Date()));

const increaseAndFormatDate = (dates) => {
    return dates.map((date)=>increaseDate(date).toLocaleString('hu-HU'))
}

// console.log(increaseAndFormatDate([new Date()]));

module.exports = increaseAndFormatDate