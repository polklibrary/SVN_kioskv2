

var Computers = {

    DotOffset : {'X' : -12, 'Y' : -12},

    Mapping : {
        // Polk 101
        'UWO558500' : 'left: 111px; top:229px;', // TOP LEFT
        'UWO558400' : 'left: 137px; top:230px;',
        'UWO558600' : 'left: 123px; top:206px;',
        'UWO558300' : 'left: 163px; top:216px;',
        'UWO558900' : 'left: 149px; top:187px;',
        'UWO558800' : 'left: 175px; top:187px;',
        'UWO558100' : 'left: 214px; top:229px;',
        'UWO558200' : 'left: 188px; top:230px;',
        'UWO561210' : 'left: 202px; top:206px;', // MAC
        'UWO558700' : 'left: 263px; top:192px;', // TOP MIDDLE
        'UWO559000' : 'left: 289px; top:192px;',
        'UWO561310' : 'left: 276px; top:218px;', // MAC
        'UWO557600' : 'left: 111px; top:345px;', // CENTER LEFT
        'UWO557700' : 'left: 123px; top:322px;', 
        'UWO561110' : 'left: 137px; top:346px;', // MAC
        'UWO557400' : 'left: 163px; top:332px;', 
        'UWO557800' : 'left: 149px; top:300px;', 
        'UWO557900' : 'left: 175px; top:300px;', 
        'UWO558000' : 'left: 202px; top:322px;', 
        'UWO557300' : 'left: 214px; top:345px;', 
        'UWO557500' : 'left: 188px; top:346px;', 
        'UWO559200' : 'left: 263px; top:307px;', // CENTER MIDDLE
        'UWO559100' : 'left: 289px; top:307px;',
        'UWO559300' : 'left: 276px; top:333px;',
        'UWO559400' : 'left: 338px; top:334px;', // CENTER RIGHT
        'UWO559500' : 'left: 364px; top:330px;',
        'UWO560100' : 'left: 350px; top:358px;',
        'UWO560810' : 'left: 378px; top:376px;', // MAC
        'UWO560000' : 'left: 404px; top:376px;',
        'UWO559600' : 'left: 391px; top:347px;',
        'UWO559800' : 'left: 443px; top:333px;',
        'UWO559700' : 'left: 417px; top:330px;',
        'UWO559900' : 'left: 434px; top:358px;',
        'UWO557200' : 'left: 149px; top:421px;', // BOTTOM LEFT
        'UWO557100' : 'left: 175px; top:421px;',  
        'UWO561010' : 'left: 162px; top:446px;', // MAC
        'UWO560500' : 'left: 162px; top:389px;',
        'UWO560200' : 'left: 290px; top:421px;', // BOTTOM MIDDLE
        'UWO560910' : 'left: 264px; top:421px;', // MAC
        'UWO560300' : 'left: 277px; top:446px;', 
        'UWO560400' : 'left: 277px; top:389px;', 
        'UWO560600' : 'left: 264px; top:622px;', // BOTTOM QA
        'UWO560700' : 'left: 279px; top:641px;', // BOTTOM QA

        //Polk118
        'UWO434500' : 'left: 124px; top:714px;', // Top Wall
        'UWO434400' : 'left: 142px; top:714px;',
        'UWO434300' : 'left: 160px; top:714px;',
        'UWO434200' : 'left: 178px; top:714px;',
        'UWO434100' : 'left: 196px; top:714px;',
        'UWO434000' : 'left: 286px; top:714px;',
        'UWO436300' : 'left: 286px; top:754px;', // Middle Top
        'UWO436400' : 'left: 268px; top:754px;',
        'UWO436500' : 'left: 250px; top:754px;',
        'UWO436600' : 'left: 232px; top:754px;',
        'UWO436700' : 'left: 214px; top:754px;',
        'UWO436800' : 'left: 196px; top:754px;',
        'UWO436900' : 'left: 178px; top:754px;',
        'UWO437000' : 'left: 160px; top:754px;',
        'UWO437100' : 'left: 124px; top:754px;',
        'UWO436200' : 'left: 286px; top:781px;', // Middle Bottom
        'UWO436100' : 'left: 268px; top:781px;',
        'UWO436000' : 'left: 250px; top:781px;',
        'UWO435900' : 'left: 232px; top:781px;',
        'UWO435800' : 'left: 214px; top:781px;',
        'UWO435700' : 'left: 196px; top:781px;',
        'UWO435600' : 'left: 178px; top:781px;',
        'UWO435500' : 'left: 160px; top:781px;',
        'UWO435400' : 'left: 142px; top:781px;',
        'UWO435300' : 'left: 124px; top:781px;',
        'UWO434600' : 'left: 79px; top:711px;', // Side Wall
        'UWO434700' : 'left: 79px; top:728px;',
        'UWO434800' : 'left: 79px; top:745px;',
        'UWO434900' : 'left: 79px; top:762px;',
        'UWO435000' : 'left: 79px; top:779px;',
        'UWO435100' : 'left: 79px; top:795px;',
        'UWO435200' : 'left: 79px; top:811px;',
                
        // EMC
        'UWO627100' : 'left: 385px; top:397px', // Top Left Corner
        'UWO626800' : 'left: 403px; top:397px', 
        'UWO626900' : 'left: 421px; top:397px', 
        'UWO627000' : 'left: 385px; top:413px', // Bottom Left Corner
        'UWO617310' : 'left: 403px; top:413px', 
        'UWO617410' : 'left: 421px; top:413px', 
        
        
        //2nd floor North
        'UWO628300' : 'left: 555px; top:503px;', // Top Left
        'UWO628400' : 'left: 573px; top:503px;', // Top Right
        'UWO629800' : 'left: 555px; top:536px;', // Bottom Left
        'UWO629700' : 'left: 573px; top:536px;', // Bottom Right
        
        //2nd floor South
        'UWO629900' : 'left: 30px; top:532px;', // Left
        'UWO629600' : 'left: 49px; top:532px;', // Right
        
        //Govdocs
        
        //3rd floor
        'UWO628500' : 'left: 553px; top:537px;', // top
        'UWO628600' : 'left: 553px; top:557px;', // bot
        
        //circulation
        'UWO628100' : 'left: 123px; top:570px;', // Top Left
        'UWO627900' : 'left: 140px; top:570px;', // Top Right
        'UWO628200' : 'left: 123px; top:587px;', // Bottom Left
        'UWO628000' : 'left: 140px; top:587px;', // Bottom Right
    
    },


    Data : {
        'reference' : {},
        'circulation' : {},
        'emc' : {},
        'polk118' : {},
        'secondfloornorth' : {},
        'secondfloorsouth' : {},
        'thirdfloornorth' : {},
        'thirdfloorsouth' : {},
    },
    
    WS_URL : 'https://www.uwosh.edu/library/getComputers?alt=jsonp&callback=?',
    Thread : null,
    ThreadSeconds : 60,

    Construct : function(){
        
        Computers.Get();
    
        // Refresh Data
        Computers.Thread = setInterval(function(){
            Computers.Get();
        }, Computers.ThreadSeconds * 1000);
    
    },

    
    ShowClicks : function(){
    
        $('#computers .map').click(function(e){
            var offset = $(this).offset();
            console.log("--------------------");
            console.log("Left: " + (e.pageX - offset.left));
            console.log("Top: " + (e.pageY - offset.top));
            console.log("left: " + (e.pageX - offset.left + Computers.DotOffset.X) + "px; top:" + (e.pageY - offset.top + Computers.DotOffset.Y) + "px;");
        });
    
    },
    
    Setup : function() {
    
        Computers.CreateButton('firstsouth', Computers.Data.reference);
        Computers.CreateDots('firstsouth', Computers.Data.reference);
        
        Computers.CreateButton('firstnorth', $.extend(true, {}, Computers.Data.emc, Computers.Data.polk118) );
        Computers.CreateDots('firstnorth', $.extend(true, {}, Computers.Data.emc, Computers.Data.polk118), 'small');
        
        
        Computers.CreateButton('secondsouth', Computers.Data.secondfloorsouth);
        Computers.CreateDots('secondsouth', Computers.Data.secondfloorsouth, 'small');
        
        Computers.CreateButton('secondnorth', Computers.Data.secondfloornorth);
        Computers.CreateDots('secondnorth', Computers.Data.secondfloornorth, 'small');
        
        Computers.CreateButton('thirdsouth', Computers.Data.thirdfloorsouth );
        Computers.CreateDots('thirdsouth', Computers.Data.thirdfloorsouth, 'small');
        
        
        Computers.CreateButton('thirdnorth', Computers.Data.thirdfloornorth );
        Computers.CreateDots('thirdnorth', Computers.Data.thirdfloornorth, 'small');
        
    },
    
    CreateDots : function(location, data, cssClass) {
        $('#computers div.map[data-map="' + location + '"]').find('.computer').remove();
        
        for(var i in data){
            if(!Computers.Mapping.hasOwnProperty(i))
                continue;
                
            var placement = Computers.Mapping[i];
            var div = $('<div>').addClass('computer').attr('data-available', data[i]).attr('data-id', i).attr('style', placement);
            if (cssClass != null)
                $(div).addClass(cssClass);
            $('#computers div.map[data-map="' + location + '"]').append(div);
        }
    },
    
    CreateButton : function(location, data){
    
        var Count = Computers.Available(data);
        var Total = Computers.Total(data);
        $('#computers div[data-location="' + location + '"]').removeClass('plenty-available').removeClass('limited-available');
        var CSS = "plenty-available";
        if ((Total/3) > Count)
            CSS = "limited-available";
        $('#computers div[data-location="' + location + '"] > span.count').text(Count);
        $('#computers div[data-location="' + location + '"] > span.total').text("/ " + Total);
        
        $('#computers div[data-location="' + location + '"]').off('click');
        $('#computers div[data-location="' + location + '"]').addClass(CSS).on('click',function(){
            $('#computers div').removeClass("selected");
            $(this).addClass("selected");
            $('#computers div.map[data-map="' + location + '"]').addClass("selected");
        });
        
        
    },
    
    Get : function(){
        $.getJSON(Computers.WS_URL, function(response){
            if (!$.isEmptyObject(response)) {
                Computers.Data.reference = response.locations.reference;
                Computers.Data.circulation = response.locations.checkout;
                Computers.Data.polk118 = response.locations.polk118;
                Computers.Data.emc = response.locations.emc;
                Computers.Data.secondfloornorth = Computers.ParseOut(response.locations.catalog, ['UWO628300', 'UWO628400', 'UWO629800', 'UWO629700']);
                Computers.Data.secondfloorsouth = Computers.ParseOut(response.locations.catalog, ['UWO629900', 'UWO629600']);
                Computers.Data.thirdfloorsouth = Computers.ParseOut(response.locations.govdocs, ['UWO627900', 'UWO628000', 'UWO628100', 'UWO628200']);
                Computers.Data.thirdfloornorth = Computers.ParseOut(response.locations.catalog, ['UWO628500', 'UWO628600']);
                
                Computers.Setup();
            }
        });
    },
    
    ParseOut : function(list, popout){
        var data = {};
        for(var i in popout)
            for(var j in list)
                if (popout[i] == j)
                    data[j] = list[j];
        return data;
    },
    
    Total : function(list){
        var count = 0;
        for(var i in list)
            if (Computers.Mapping.hasOwnProperty(i)) // restrict to only show what is mapped out
                count++;
        return count;
    },
    
    Available : function(list){
        var count = 0;
        for(var i in list)
            if (list[i] == 1 && Computers.Mapping.hasOwnProperty(i)) // restrict to only show what is mapped out
                count++;
        return count;
    },
    
    Unavailable : function(list){
        var count = 0;
        for(var i in list)
            if (list[i] == 0 && Computers.Mapping.hasOwnProperty(i)) // restrict to only show what is mapped out
                count++;
        return count;
    },
}


$(document).ready(function(){

    Computers.Construct();
    //Computers.ShowClicks();
});