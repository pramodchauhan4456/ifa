$(document).ready(function () {
    $("#content-slider").lightSlider({
        loop: true,
        keyPress: true,
        pager: false,
        slideMargin: 25,
        enableDrag: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMove: 1,
                    auto: false,
                    pause: 2000,
                    slideMargin: 10,
                    pager: true
                }
            }
        ]
    });

    $("#ourTakeSlider").lightSlider({
        loop: true,
        item: 1,
        keyPress: true,
        pager: true,
        auto: true,
        pause: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    item: 1,
                    slideMove: 1,
                    auto: true,
                    pause: 3000,
                    slideMargin: 10,
                    pager: true
                }
            }
        ]
    });

    $("#charitable_slider").lightSlider({
        loop: true,
        item: 1,
        keyPress: true,
        pager: true,
        auto: true,
        pause: 3000,
    });

    $("#catherine_slider").lightSlider({
        loop: true,
        item: 1,
        keyPress: true,
        pager: true,
        auto: true,
        pause: 4000,
    });

    $("#health_camp_slider").lightSlider({
        loop: true,
        item: 1,
        keyPress: true,
        pager: true,
        auto: true,
        pause: 3000,
    });

    $("#testimonialSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,
    });


    $('.ifanavbar-nav li a').click(function () {
        $('.ifanavbar-nav li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.graphCal li a').click(function () {
        $('.graphCal li a').removeClass('chartActive');
        $(this).addClass('chartActive');
    });

});

$('.menu .mainList .mainListMenu').click(function () {
    $('.menu .mainList .mainListMenu').removeClass('megaactive');
    $(this).addClass('megaactive');
});


/*mega menu script */
$(document).ready(function () {

    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 768) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function () {
        if ($(window).width() <= 768) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

});


/*Graph Script*/
/*window.onload = function () {

    var options = {
        animationEnabled: true,
         title: {
             text: "Stock Price of BMW - September"
         },
        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
             title: "Closing Price (in USD)",
            includeZero: false,
            valueFormatString: "$##0.00",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function (e) {
                    return "$" + CanvasJS.formatNumber(e.value, "##0.00");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "$##0.00",
            dataPoints: [
                { x: new Date(2017, 08, 01), y: 85.83 },

                { x: new Date(2017, 08, 04), y: 84.42 },
                { x: new Date(2017, 08, 05), y: 84.97 },
                { x: new Date(2017, 08, 06), y: 84.89 },
                { x: new Date(2017, 08, 07), y: 84.78 },
                { x: new Date(2017, 08, 08), y: 85.09 },
                { x: new Date(2017, 08, 09), y: 85.14 },

                { x: new Date(2017, 08, 11), y: 84.46 },
                { x: new Date(2017, 08, 12), y: 84.71 },
                { x: new Date(2017, 08, 13), y: 84.62 },
                { x: new Date(2017, 08, 14), y: 84.83 },
                { x: new Date(2017, 08, 15), y: 84.37 },

                { x: new Date(2017, 08, 18), y: 84.07 },
                { x: new Date(2017, 08, 19), y: 83.60 },
                { x: new Date(2017, 08, 20), y: 82.85 },
                { x: new Date(2017, 08, 21), y: 82.52 },

                { x: new Date(2017, 08, 25), y: 82.65 },
                { x: new Date(2017, 08, 26), y: 81.76 },
                { x: new Date(2017, 08, 27), y: 80.50 },
                { x: new Date(2017, 08, 28), y: 79.13 },
                { x: new Date(2017, 08, 29), y: 79.00 }
            ]
        }]
    };

    $("#chartContainer").CanvasJSChart(options);

}
*/

var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
    min: 0,
    max: 400,
    count: 8,
    decimals: 2,
    continuity: 1
};
function generateData(config) {
    return utils.numbers(Chart.helpers.merge(inputs, config || {}));
}
function generateLabels(config) {
    return utils.months(Chart.helpers.merge({
        count: inputs.count,
        section: 3
    }, config || {}));
}
var options = {
    maintainAspectRatio: false,
    spanGaps: false,
    elements: {
        line: {
            tension: 0.000001
        }
    },
    plugins: {
        filler: {
            propagate: false
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                autoSkip: false,
                maxRotation: 0
            }
        }]
    }
};
[false, 'origin', 'start', 'end'].forEach(function (boundary, index) {
    // reset the random seed to generate the same data for all charts
    utils.srand(8);
    new Chart('chart-' + index, {
        type: 'line',
        data: {
            labels: generateLabels(),
            datasets: [{
                backgroundColor: utils.transparentize(presets.blue),
                borderColor: presets.blue,
                data: generateData(),
                label: 'Dataset',
                fill: boundary
            }]
        },
        options: Chart.helpers.merge(options, {
            title: {
                text: 'fill: ' + boundary,
                display: true,
            }
        })
    });
});
// eslint-disable-next-line no-unused-vars
function toggleSmooth(btn) {
    var value = btn.classList.toggle('btn-on');
    Chart.helpers.each(Chart.instances, function (chart) {
        chart.options.elements.line.tension = value ? 0.4 : 0.000001;
        chart.update();
    });
}
// eslint-disable-next-line no-unused-vars
function randomize() {
    var seed = utils.rand();
    Chart.helpers.each(Chart.instances, function (chart) {
        utils.srand(seed);
        chart.data.datasets.forEach(function (dataset) {
            dataset.data = generateData();
        });
        chart.update();
    });
}