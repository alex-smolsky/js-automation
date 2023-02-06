// First variant
function numberOfFriday13TillNowFrstVrnt() {
    let currentDate = new Date();
    let count = 0;
    for (let month = 0, year = 2000; month < 12; month = (month+1)%12, year = month===0?year+1:year) {
        let day = new Date(year, month, 13);
        if (day.getDay() === 5) {
            count++
        }
        if (year === currentDate.getFullYear() && month === currentDate.getMonth() && currentDate.getDate()){
            break
        }
    }
    return count;
}

// Second variant
function numberOfFriday13TillNowScndVrnt() {
    const currentDate = new Date();
    let count = 0;

    for (let dt = new Date(2000, 0, 13); dt <= currentDate; dt.setMonth(dt.getMonth()+1)){
        if (dt.getDay() === 5){
            count++
        }
    }
    return count;
}

// Third variant
function numberOfFridays13TillNowThrdVrnt() {
    let count = 0;
    let dateStart = new Date('January 1, 2000');
    let dateEnd = new Date();
    while (dateStart <= dateEnd) {
        if (dateStart.getDay() === 5 && dateStart.getDate() === 13) {
            count++;
        }
        dateStart.setDate(dateStart.getDate() + 1);
    }
    return count;
}