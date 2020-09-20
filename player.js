let script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.crossOrigin = 'anonymous';
script.integrity = 'sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=';
document.head.appendChild(script);

$.ajax({
    url: "https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&amp;refresh=true&amp;env=dev&amp;type=startPanel&amp;vars%5Btype%5D=startPanel&amp;sid=none&amp;_=1582203987867",
    dataType: "jsonp",
    crossOrigin: true,
    // Work with the response
    success: function (response) {
        var tooltip = response.data.tiplates.tip;
        var hoverTip = response.data.tiplates.hoverTip;
        var steps = response.data.structure.steps;
        var cssStyle = $('<style>' + response.data.css + '</style>');
        $('head').append(cssStyle);
        
        var mainDiv = $('<div></div>');
        mainDiv.addClass('sttip');
        mainDiv.attr('id', 'main-player');
        mainDiv.append(tooltip);
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

        //add function to next button
        var nextButon = $('.next-btn');
        var contentDiv = $('<div class="step-content"></div>');
        var stepSpan = $('<span id="0" class="step-span"></span>');
        stepSpan.append(steps[0].action.contents['#content']);
        contentDiv.append(stepSpan);
        $('.popover-content').append(contentDiv);
        var stepCount = $('[data-iridize-role="stepCount"]');
        var stepsCount = $('[data-iridize-role="stepsCount"]');
        stepCount.html('1');
        stepsCount.html(steps.length);
        nextButon.click(function () {
            var current = Number(($('.step-span').attr('id').replace('#', '')));
            var newN = current + 1;
            if (steps[newN]) {
                var nextStep = steps[newN];
                contentDiv.empty();
                stepSpan = $('<span id="' + newN + '" class="step-span"></span>');
                if (nextStep.followers && nextStep.followers[0] && nextStep.followers[0].condition) {
                    stepSpan.append(nextStep.action.contents['#content']);
                } else {
                    stepSpan.append('');
                }
                stepCount.html(newN+1);
                contentDiv.append(stepSpan);
            } else {
                alert('Tour is completed');
            }

        });

        //add function to back button
        var prevButon = $('.default-prev-btn');
        prevButon.click(function () {
            var current = Number(($('.step-span').attr('id').replace('#', '')));
            var newC = current - 1;
            if (steps[newC]) {
                var prevStep = steps[newC];
                contentDiv.empty();
                stepSpan = $('<span id="' + newC + '" class="step-span"></span>');
                stepSpan.append(prevStep.action.contents['#content']);
                stepCount.html(newC+1);
                contentDiv.append(stepSpan);
            } else {
                alert('Start the tour');
            }
        });

        //add function for close button
        var close = $('[data-iridize-role="closeBt"]');
        close.click(function() {
            contentDiv.empty();
            $('.stFooter').remove();
            close.remove();
        })

        //add function for Remind button
        var remind = $('[data-iridize-role="laterBt"]');
        remind.click(function() {
            contentDiv.empty();
            $('.stFooter').remove();
            close.remove();
        })
    }
});