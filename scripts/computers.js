

var Computers = {

    DotOffset : {'X' : -12, 'Y' : -12},

    Mapping : {
        // Polk 101
        'UWO5585W0' : 'left: 111px; top:229px;', // TOP LEFT
        'UWO5584W0' : 'left: 137px; top:230px;',
        'UWO5586W0' : 'left: 123px; top:206px;',
        'UWO5583W0' : 'left: 163px; top:216px;',
        'UWO5589W0' : 'left: 149px; top:187px;',
        'UWO5588W0' : 'left: 175px; top:187px;',
        'UWO5581W0' : 'left: 214px; top:229px;',
        'UWO5582W0' : 'left: 188px; top:230px;',
        'UWO561210' : 'left: 202px; top:206px;', // MAC
        'UWO5587W0' : 'left: 263px; top:192px;', // TOP MIDDLE
        'UWO5590W0' : 'left: 289px; top:192px;',
        'UWO561310' : 'left: 276px; top:218px;', // MAC
        'UWO5576W0' : 'left: 111px; top:345px;', // CENTER LEFT
        'UWO5577W0' : 'left: 123px; top:322px;', 
        'UWO561110' : 'left: 137px; top:346px;', // MAC
        'UWO5574W0' : 'left: 163px; top:332px;', 
        'UWO5578W0' : 'left: 149px; top:300px;', 
        'UWO5579W0' : 'left: 175px; top:300px;', 
        'UWO5580W0' : 'left: 202px; top:322px;', 
        'UWO5573W0' : 'left: 214px; top:345px;', 
        'UWO5575W0' : 'left: 188px; top:346px;', 
        'UWO5592W0' : 'left: 263px; top:307px;', // CENTER MIDDLE
        'UWO5591W0' : 'left: 289px; top:307px;',
        'UWO5593W0' : 'left: 276px; top:333px;',
        'UWO5594W0' : 'left: 338px; top:334px;', // CENTER RIGHT
        'UWO5595W0' : 'left: 364px; top:330px;',
        'UWO5601W0' : 'left: 350px; top:358px;',
        'UWO560810' : 'left: 378px; top:376px;', // MAC
        'UWO5600W0' : 'left: 404px; top:376px;',
        'UWO5596W0' : 'left: 391px; top:347px;',
        'UWO5598W0' : 'left: 443px; top:333px;',
        'UWO5597W0' : 'left: 417px; top:330px;',
        'UWO5599W0' : 'left: 434px; top:358px;',
        'UWO5572W0' : 'left: 149px; top:421px;', // BOTTOM LEFT
        'UWO5571W0' : 'left: 175px; top:421px;',  
        'UWO561010' : 'left: 162px; top:446px;', // MAC
        'UWO5605W0' : 'left: 162px; top:389px;',
        'UWO5602W0' : 'left: 290px; top:421px;', // BOTTOM MIDDLE
        'UWO560910' : 'left: 264px; top:421px;', // MAC
        'UWO5603W0' : 'left: 277px; top:446px;', 
        'UWO5604W0' : 'left: 277px; top:389px;', 
        'UWO5606W0' : 'left: 264px; top:622px;', // BOTTOM QA
        'UWO5607W0' : 'left: 279px; top:641px;', // BOTTOM QA

        //Polk118
        'UWO4345W0' : 'left: 124px; top:714px;', // Top Wall
        'UWO4344W0' : 'left: 142px; top:714px;',
        'UWO4343W0' : 'left: 160px; top:714px;',
        'UWO4342W0' : 'left: 178px; top:714px;',
        'UWO4341W0' : 'left: 196px; top:714px;',
        'UWO4340W0' : 'left: 286px; top:714px;',
        'UWO4363W0' : 'left: 286px; top:754px;', // Middle Top
        'UWO4364W0' : 'left: 268px; top:754px;',
        'UWO4365W0' : 'left: 250px; top:754px;',
        'UWO4366W0' : 'left: 232px; top:754px;',
        'UWO4367W0' : 'left: 214px; top:754px;',
        'UWO4368W0' : 'left: 196px; top:754px;',
        'UWO4369W0' : 'left: 178px; top:754px;',
        'UWO4370W0' : 'left: 160px; top:754px;',
        'UWO4371W0' : 'left: 124px; top:754px;',
        'UWO4362W0' : 'left: 286px; top:781px;', // Middle Bottom
        'UWO4361W0' : 'left: 268px; top:781px;',
        'UWO436W00' : 'left: 250px; top:781px;',
        'UWO4359W0' : 'left: 232px; top:781px;',
        'UWO4358W0' : 'left: 214px; top:781px;',
        'UWO4357W0' : 'left: 196px; top:781px;',
        'UWO4356W0' : 'left: 178px; top:781px;',
        'UWO4355W0' : 'left: 160px; top:781px;',
        'UWO4354W0' : 'left: 142px; top:781px;',
        'UWO4353W0' : 'left: 124px; top:781px;',
        'UWO4346W0' : 'left: 79px; top:711px;', // Side Wall
        'UWO4347W0' : 'left: 79px; top:728px;',
        'UWO4348W0' : 'left: 79px; top:745px;',
        'UWO4349W0' : 'left: 79px; top:762px;',
        'UWO4350W0' : 'left: 79px; top:779px;',
        'UWO4351W0' : 'left: 79px; top:795px;',
        'UWO4352W0' : 'left: 79px; top:811px;',
                
        // EMC
        'UWO6271W0' : 'left: 385px; top:397px', // Top Left Corner
        'UWO6268W0' : 'left: 403px; top:397px', 
        'UWO6269W0' : 'left: 421px; top:397px', 
        'UWO6270W0' : 'left: 385px; top:413px', // Bottom Left Corner
        'UWO617310' : 'left: 403px; top:413px', 
        'UWO617410' : 'left: 421px; top:413px', 
        
        
        //2nd floor North
        'UWO6283W0' : 'left: 555px; top:503px;', // Top Left
        'UWO6284W0' : 'left: 573px; top:503px;', // Top Right
        'UWO6298W0' : 'left: 555px; top:536px;', // Bottom Left
        'UWO6297W0' : 'left: 573px; top:536px;', // Bottom Right
        
        //2nd floor South
        'UWO6299W0' : 'left: 30px; top:532px;', // Left
        'UWO6296W0' : 'left: 49px; top:532px;', // Right
        
        //3rd floor
        'UWO6285W0' : 'left: 553px; top:537px;', // top
        'UWO6286W0' : 'left: 553px; top:557px;', // bot
        
        //Govdocs
        'UWO6281W0' : 'left: 123px; top:570px;', // Top Left
        'UWO6279W0' : 'left: 140px; top:570px;', // Top Right
        'UWO6282W0' : 'left: 123px; top:587px;', // Bottom Left
        'UWO6280W0' : 'left: 140px; top:587px;', // Bottom Right
    
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