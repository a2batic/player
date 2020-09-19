$.ajax({
    url: "https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&amp;refresh=true&amp;env=dev&amp;type=startPanel&amp;vars%5Btype%5D=startPanel&amp;sid=none&amp;_=1582203987867",
    dataType: "jsonp",
    crossOrigin: true,
    // Work with the response
    success: function( response ) {
        var tooltip = response.data.tiplates.tip;
        var hoverTip = response.data.tiplates.hoverTip;
        var nextButon=$('.next-btn');
        var arr = response.data.structure.steps;
        var mainDiv = $('<div></div>');
        mainDiv.addClass('sttip');
        mainDiv.attr('id', 'main-player');
        var arr = response.data.structure.steps.map((step) => {
            return step.id;
        })

         mainDiv.append(tooltip);
         mainDiv.append(hoverTip);
        
         $('body').append(mainDiv);
         $('[aria-label="Steps"]').addClass('tooltip');
         $('[aria-label="Hover Tip"]').addClass('tooltip');       
    }
});


