function leapYear(year){
    if(year < 1582){
        throw new Error;
    } 
    const year100 = year%100 === 0;
    const year400 = year%400 === 0;
    const year4 = year%4 === 1;
    return year400 || (year4 && !year100);
}

export default leapYear;