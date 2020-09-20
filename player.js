$.ajax({
    url: "https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&amp;refresh=true&amp;env=dev&amp;type=startPanel&amp;vars%5Btype%5D=startPanel&amp;sid=none&amp;_=1582203987867",
    dataType: "jsonp",
    crossOrigin: true,
    // Work with the response
    success: function( response ) {
        var tooltip = response.data.tiplates.tip;
        var hoverTip = response.data.tiplates.hoverTip;
        var steps = response.data.structure.steps;
        var cssStyle = $('<style>' + response.data.css + '</style>');
        $('head').append(cssStyle);
        var nextButon=$('.next-btn');
        var arr = response.data.structure.steps;
        var mainDiv = $('<div></div>');

        
        mainDiv.addClass('sttip');
        mainDiv.attr('id', 'main-player');
        var arr = response.data.structure.steps.map((step) => {
            return step.id;
        })

         mainDiv.append(tooltip);
         //mainDiv.append(hoverTip);
        
         $('body').append(mainDiv);

         //append Google page to main div;
        var getGooglePage = document.getElementById('viewport');
        getGooglePage.parentNode.removeChild(getGooglePage);
        $('[data-iridize-id="content"]').append(getGooglePage);

        $('body').css('padding', '0');
         $('body').css('margin', '0');
         $('[aria-label="Steps"]').addClass('tooltip');
         $('[aria-label="Hover Tip"]').addClass('tooltip');  

        //add footer to end of page
        $('.stFooter').css('bottom', '0');
        $('.stFooter').css('position', 'absolute');
        $('.stFooter').css('width', '99%');
        $('.popover-content').css('padding', '0');
        $('.sttip').css('height', '100%');
        $('.tooltip').css('height', '100%');
              
    }
});


