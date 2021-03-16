class DateParser{
    constructor() {
        
    }

    getDateFrom(dateInputId){
        let dateInput = document.getElementById(dateInputId);
        let rawDate = dateInput.value;

        let dateNumbers = rawDate.split("-");

        let year = dateNumbers[0];
        let month = dateNumbers[1];
        let day = dateNumbers[2];

        let newDate = day + "/" + month + "/" + year;

        return newDate;
    }

    setDateTo(dateInputId, date){
        let dateInput = document.getElementById(dateInputId);
        let dateNumbers = date.split("/");

        let year = dateNumbers[2];
        let month = dateNumbers[1];
        let day = dateNumbers[0];

        let newDate = year + "/" + month + "/" + day;

        dateInput.value = newDate;
    }

}

var dateParser = new DateParser();
