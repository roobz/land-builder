'use strict';

//Start Builder Javascript Section
$(document).ready(function () {
    var logo = $.templates('#mainTemplate');
    var vars = [];
    var hash = void 0;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var market = getUrlVars()['market'];
    var view = getUrlVars()['view'];
    var source = getUrlVars()['source'];
    var campaignName = 'Sale';

    //Query string splicer
    function getUrlVars() {
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    //Read market JSON files
    if (market == 'bs') {
        $.getJSON('data/bs.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-bs').addClass('btn-underline');
        document.title = 'The Baltimore Sun special subscription offer';
        $('head').append('<meta name="description" content="The Baltimore Sun special subscription offer">');
    } else if (market == 'cc') {
        $.getJSON('data/cc.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-cc').addClass('btn-underline');
        document.title = 'Carroll County Times special subscription offer';
        $('head').append('<meta name="description" content="Carroll County Times special subscription offer">');
    } else if (market == 'cg') {
        $.getJSON('data/cg.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-cg').addClass('btn-underline');
        document.title = 'Capital Gazette special subscription offer';
        $('head').append('<meta name="description" content="Capital Gazette special subscription offer">');
    } else if (market == 'ct') {
        $.getJSON('data/ct.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-ct').addClass('btn-underline');
        document.title = 'Chicago Tribune special subscription offer';
        $('head').append('<meta name="description" content="Chicago Tribune special subscription offer">');
    } else if (market == 'dp') {
        $.getJSON('data/dp.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-dp').addClass('btn-underline');
        document.title = 'Daily Press special subscription offer';
        $('head').append('<meta name="description" content="Daily Press special subscription offer">');
    } else if (market == 'hc') {
        $.getJSON('data/hc.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-hc').addClass('btn-underline');
        document.title = 'Hartford Courant special subscription offer';
        $('head').append('<meta name="description" content="Hartford Courant special subscription offer">');
    } else if (market == 'la') {
        $.getJSON('data/la.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-la').addClass('btn-underline');
        document.title = 'Los Angeles Times special subscription offer';
        $('head').append('<meta name="description" content="Los Angeles Times special subscription offer">');
    } else if (market == 'mc') {
        $.getJSON('data/mc.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-mc').addClass('btn-underline');
        document.title = 'The Morning Call special subscription offer';
        $('head').append('<meta name="description" content="The Morning Call special subscription offer">');
    } else if (market == 'os') {
        $.getJSON('data/os.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-os').addClass('btn-underline');
        document.title = 'Orlando Sentinel special subscription offer';
        $('head').append('<meta name="description" content="Orlando Sentinel special subscription offer">');
    } else if (market == 'sd') {
        $.getJSON('data/sd.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-sd').addClass('btn-underline');
        document.title = 'The San Diego Union-Tribune special subscription offer';
        $('head').append('<meta name="description" content="The San Diego Union-Tribune special subscription offer">');
    } else if (market == 'ss') {
        $.getJSON('data/ss.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-ss').addClass('btn-underline');
        document.title = 'Sun Sentinel special subscription offer';
        $('head').append('<meta name="description" content="Sun Sentinel special subscription offer">');
    } else if (market == 'tw') {
        $.getJSON('data/tw.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-tw').addClass('btn-underline');
        document.title = 'Tidewater Review special subscription offer';
        $('head').append('<meta name="description" content="Tidewater Review special subscription offer">');
    } else if (market == 'vg') {
        $.getJSON('data/vg.json', function (data) {
            var logoField = logo.render(data, { idgroup: source });
            $('.mainContainer').html(logoField);
            return landingPageJs();
        });
        $('#btn-vg').addClass('btn-underline');
        document.title = 'Virginia Gazette special subscription offer';
        $('head').append('<meta name="description" content="Virginia Gazette special subscription offer">');
    } else {
        console.log('Market and Source undefined');
    }
});
//End Builder Javascript Section

//Start Landing Page Javascript Section
var landingPageJs = function landingPageJs() {

    $(window).bind('pageshow', function () {
        $('.cta-input').val('');
        $('.cta-btn-expand').show();
        $('.loader').hide();
    });

    //Head Date Countdown
    var current = new Date();
    var expiry = new Date('November 28, 2017 23:59:59');
    var expiry2 = new Date('November 29, 2017 23:59:59');
    var expiry3 = new Date('November 30, 2017 23:59:59');

    if (current.getTime() < expiry.getTime()) {
        $('#countdown1').show();
    } else if (current.getTime() > expiry.getTime() && current.getTime() < expiry2.getTime()) {
        $('#countdown2').show();
    } else if (current.getTime() > expiry2.getTime() && current.getTime() < expiry3.getTime()) {
        $('#countdown3').show();
    } else if (current.getTime() > expiry3.getTime()) {
        $('#countdown4').show();
    }

    // References for dynamic DOM elements
    var startBtn = $('.cta-btn-zip');

    // CTA click to reveal zip input
    $('.cta-btn-zip').click(function () {

        if ($(this).attr('href')) {
            window.location = $(this).attr('href');
        } else {
            $(this).hide();
            $(this).siblings('.cta-input-div').show();
            $(this).siblings('.cta-input-div2').show();
            $(this).siblings('.cta-input-div').find('input').focus();
            $(this).siblings('.cta-input-div2').find('input').focus();
        }
    });

    // Device image click to reveal zip input
    $('#device-print').click(function () {
        $('.mix-btn').hide();
        $('.mix-btn').siblings('.cta-input-div').show();
        $('.mix-btn').siblings('.cta-input-div').find('#mix-input').focus();
    });

    // Zip code validation
    $('.cta-input').keyup(function (e) {
        $(this).removeClass('error');
        $(this).siblings('.cta-error').find('span').text('');
        if (e.which == 13 || e.keyCode == 13) {
            var zip = $(this).val();
            var urls = $(this).siblings('.cta-btn-expand').attr('href');
            var validated = validate.zip(zip, urls);
            if (validated.result === true) {
                window.location = urls + zip;
            } else {
                $(this).siblings('.cta-error').find('span').text(validated.text);
                $(this).addClass('error');
            }
        }
    });

    $('.cta-btn-expand').on({
        click: function click(e) {
            e.preventDefault();
            $(this).siblings('.cta-input').removeClass('error');
            $(this).siblings('.cta-error').find('span').text('');
            var zip = $(this).siblings('.cta-input').val();
            var urls = $(this).attr('href');
            var validated = validate.zip(zip, urls);
            if (validated.result !== true) {
                $(this).siblings('.cta-error').find('span').text(validated.text);
                $(this).siblings('.cta-input').addClass('error');
            }
        }
    });

    $('.cta-btn-expand').click(function () {
        var zip = $(this).siblings('.cta-input').val();
        var urls = $(this).attr('href');
        var validated = validate.zip(zip, urls);
        if (validated.result === true) {
            $(this).hide();
            $(this).siblings('.loader').show();
        }
    });

    var validate = {
        zip: function zip(_zip, urls) {
            if (_zip === '') {
                return {
                    text: 'Please Enter a Zip Code',
                    result: false
                };
            }
            var test = /^\b\d{5}(-\d{4})?\b$/.test(_zip);

            if (test === true) {

                var _delay = function _delay(zip, urls) {
                    setTimeout(function () {
                        window.location = urls + zip;
                    }, 500);
                };
                _delay(_zip, urls);
                return {
                    result: true
                };
            } else {
                return {
                    text: 'Please Enter a Zip Code',
                    result: false
                };
            }
        }
    };
};