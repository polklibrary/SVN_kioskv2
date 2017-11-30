var Hours = {

    URL : "http://www.uwosh.edu/library/hours_feed?fmt=jsonp&callback=?",
    Data : [ ],
    ClosingDate : null,
    Thread : null,

    Construct : function() {
        Hours.Load();
        Hours.Recheck();
    },
    
    IsFinished : function(){
        return Hours.Data.length != 0;
    },

    Load : function(){
        $.getJSON(Hours.URL, function(response) {
            Hours.Data = response;
            Hours.Data.sort(function(a, b) {
                if (a < b) return -1;
                if (a > b) return 1;
                    return 0;
            });
            Hours.Setup();
        });
    },
    
    Setup : function() {
        
        for(var i in Hours.Data)
            for(var j in Hours.Data[i]) {
                var DateObject = new Date(j)
                DateObject.setDate(DateObject.getDate() + 1);

                var date = $('<div>').addClass('date');
                var day = $('<div>').addClass('day').html(Hours.GetDay(DateObject));
                var time = $('<div>').addClass('time').html(Hours.GetOpenHours(Hours.Data[i][j][0]));

                $(date).append(day);
                $(date).append(time);
                $('#hours .content-left').append(date);
            }
    },
    

    GetDay : function(date){
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    },
    
     GetOpenHours : function(hours){
        if (!hours.is_open)
            return "Closed";
        else {
            var startdate = new Date(hours.start * 1000);
            var enddate = new Date(hours.end * 1000);
            
                if (Hours.ClosingDate == null) {
                    Hours.ClosingDate = new Date(hours.end * 1000);
                    //Hours.ClosingDate.setMinutes(Hours.ClosingDate.getMinutes() - (60*11));
                    Hours.ClosingDate.setMinutes(Hours.ClosingDate.getMinutes() - 30);
                }
                
                
            
            
            return Hours.GetReadableHour(startdate, false) + " - " + Hours.GetReadableHour(enddate, false);
        }
        return "Error";
    },
    
    GetReadableHour : function(date, seconds){
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var ampm = "PM";
        
        if(hour < 12)
            ampm = "AM";
        if(hour == 0)
            hour = 12;
        if(hour > 12)
            hour = hour - 12;
            
        if(second < 10)
            second = "0" + second;
        if(minute < 10)
            minute = "0" + minute;
        
        
        var fulltime = hour + ":" + minute + " " + ampm;
        if(seconds)
            fulltime = hour + ":" + minute + ":" + second + " " + ampm;
        
        if (fulltime == "12:00 AM")
            return "Midnight";
        if (fulltime == "12:00 PM")
            return "Noon";
        return fulltime;
        
    },

    
    PatternCurrentHour : function(){
        setInterval(function(){
            var date = new Date();
            var hour = Hours.GetReadableHour(date, true);
            $('.pat-current-hour').html(hour);
            
            if (Hours.ClosingDate != null)
                if (Hours.ClosingDate < date)
                    $('.pat-closing-soon').show();
        }, 1000);
    },
    
    
    Recheck : function(){
        Hours.Thread = setInterval(function(){
            if (Hours.IsFinished()) {
                console.log("Hours Data Successful: Turning off retrieval service...");
                clearInterval(Hours.Thread);
            } else
                Hours.Load();
        }, 30000); // recheck every minute.
    },
    
    
}

$(document).ready(function(){
    Hours.Construct();
    Hours.PatternCurrentHour();
});