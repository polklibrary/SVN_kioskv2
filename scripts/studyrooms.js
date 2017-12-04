var TODAY_START = new Date();
TODAY_START.setHours(14);
TODAY_START.setMinutes(0);
TODAY_START.setSeconds(0);

var TODAY_END = new Date();
TODAY_END.setHours(15);
TODAY_END.setMinutes(0);
TODAY_END.setSeconds(0);

var GCAL = {

    APIKEY : '',
    CLIENTID : '',
    SCOPES : 'https://www.googleapis.com/auth/calendar',
    
    oauth : function(callback) {
        var self = this;
        this.ready(function(){
            gapi.client.setApiKey(self.APIKEY);            
            gapi.auth.authorize({client_id: self.CLIENTID, scope: self.SCOPES, immediate: false}, function(){
                gapi.client.load('calendar', 'v3', callback); // load calendar api
            });
        });
    }, 
    
    results : function(response) {
        try {
            return response['result']['items'];
        }
        catch(e) {
            console.log("ERROR:  " + e);
            return [];
        }
    },
    
    get_events : function(id, start, end, callback) {
        // No authentication required
        var self = this;
        this.ready(function(){
            gapi.client.setApiKey(self.APIKEY);
            gapi.client.request({
                'path': '/calendar/v3/calendars/'+ id +'/events',
                'params': {
                    'timeMin': start.toISOString(),
                    'timeMax': end.toISOString(),
                    'alwaysIncludeEmail': false,
                    'showDeleted': false,
                    'singleEvents': true,
                    'maxResults': 100,
                    'orderBy': 'startTime'
                }
            }).then(function(resp) {
                callback(resp);
            }, function(reason) {
                callback(reason);
            });
        });
    },
    
   
    ready : function(callback){
        var thread = setInterval(function(){
            if ( !(typeof gapi.client === 'undefined')) {
                clearInterval(thread);
                callback();
            }
        }, 100);
    },
    
}






var Groups = {

    Data : {},
    Thread : null,
    ROOMS_TOTAL : 4,
    RoomsLoaded : 0,

    Construct : function(){
        Groups.Load();
        Groups.Recheck();
    },
    
    Initializer : function() {
        Groups.SetPosition();
    },
    
    Load : function(){
        var process = function(id, callback){
            Groups.RoomsLoaded = 0;
            
            var start = new Date();
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);
            
            var end = new Date();
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            GCAL.APIKEY = 'AIzaSyCcsz_ZN1rNDYzF1ha84Fn_p8ZzgNEyXo4';
            GCAL.get_events(id, start, end, function(data){
                var contents = [];
                for (var i in data.result.items) {
                    var obj = data.result.items[i];
                    summary = obj.summary;
                    if (typeof summary === 'undefined')
                        summary = 'Private';
                    contents.push({
                        'start': new Date(obj.start.dateTime),
                        'end': new Date(obj.end.dateTime),
                        'summary': summary,
                    });
                }
                Groups.Data[data.result.summary] = contents;
                Groups.RoomsLoaded++;
                
                if (Groups.RoomsLoaded >= Groups.ROOMS_TOTAL)
                    Groups.DisplaySchedule(); // Once all done
            });
        }
        
        process('uwosh.edu_tkcbj196ms5d9jdnvnlrce2i90@group.calendar.google.com');
        process('uwosh.edu_h157e20v3tccouak2ougfncqa0@group.calendar.google.com');
        process('uwosh.edu_v2i8scsqfmn7hanabro28iurc4@group.calendar.google.com');
        process('uwosh.edu_43eh72k76gj9a6a79t3ss1vvn4@group.calendar.google.com');

    },
    
    IsFinished : function() {
        return !$.isEmptyObject(Groups.Data);
    },
    
    Recheck : function(){
        Groups.Thread = setInterval(function(){
            Groups.Load();
        }, 60000); // recheck every minute.
    },
    
    DisplaySchedule : function(){
        
        $('#studyrooms .rooms').empty();
    
        for (var h=0; h<4; h++) {
            var ul = $('<ul>');
        
            for (var i=0; i<24; i++) {
                for (var j=0; j<60; j+=15) {
                    var li = $('<li>').addClass('hour-'+i+'-'+j).html(Groups.ToTimeString(i,j));
                    $(ul).append(li);
                }
            }
            $('#studyrooms .rooms').append(ul);
            
        }

        var index = 1;
        for (var i in Groups.Data) {
            var room = Groups.Data[i];
            var label = $('<li>').addClass('room-label').html(i);
            $('#studyrooms .rooms').find('ul:nth-child(' + index +')').prepend(label);
            for (var j in room) {
                var event = room[j];
                
                var scls = 'li.hour-' + event.start.getHours() + '-' + event.start.getMinutes();
                $('#studyrooms .rooms').find('ul:nth-child(' + index +')').find(scls).addClass('group-event-start').html(event.summary);
                
                var ecls = 'li.hour-' + event.end.getHours() + '-' + event.end.getMinutes();
                $('#studyrooms .rooms').find('ul:nth-child(' + index +')').find(ecls).addClass('group-event-end');

            }
            index++;
        }
        
        $('#studyrooms .rooms ul li').each(function(){
            if ($(this).hasClass('group-event-start'))
                $(this).nextUntil('.group-event-end').andSelf().addClass('coverage');
        });
        
        Groups.SetPosition();
        
    },
    
    SetPosition : function(){
        var now = new Date();
        var min = 0;
        if (now.getMinutes() > 45)
            min = 45;
        if (now.getMinutes() > 30)
            min = 30;
        if (now.getMinutes() > 15)
            min = 15;
        var markercls = '.hour-' + now.getHours() + '-' + min;
        $('#studyrooms .rooms').find(markercls).addClass('timeline-current');
        
        setTimeout(function(){
            var Index = $('#studyrooms .rooms ul li.timeline-current').index() * 20; // CSS defined 20px height
            $('#studyrooms .rooms').scrollTop(Index - 200);
        }, 1000);
    },

    ToTimeString : function (h, m){
        var ampm = "AM";
        if(m == 0){
            m = "00";
        }
        if(h >= 12){
            ampm = "PM";
            h -= 12;
        }
        if(h == 0){
            h = 12;
        }
        return h + ":" + m + " " + ampm;
    },
    
    
    
}



$(document).ready(function(){
    Groups.Construct();
});
