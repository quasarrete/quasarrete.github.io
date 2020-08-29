var dt1 = new Date();
var date2 = new Date("28/11/2020");
var date_diff_indays = function() {
    //dt1 = new Date(date1);
    dt2 = new Date(date2);
    diff =  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    if(diff<1){
    diff = "Wohoo"
    }
    return diff;
    }
