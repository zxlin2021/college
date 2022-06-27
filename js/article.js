
/*分頁*/
var items = $(".newPage");
var numItems = items.length;
var perPage = 1;

items.slice(perPage).hide();

$('.pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "<",
    nextText: ">",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
        $('html, body').animate({
            scrollTop: $('#main').offset().top
        }, 500, 'linear');
    }
});



/*浮動按鈕*/
$(document).ready(function () {
    $('.floatbtn--share').slideUp();
    $('.articleFloatbtn a').click(function () {
        $(this).toggleClass('active');
    })

    $('#icon--share').click(function () {
        $(this).parents().find('.floatbtn--share').slideToggle('100', 'linear')
    })

    $('#icon--textSize').click(function () {
        //取得當前字型大小 字尾px,pt,pc
        var currentFontSize = $(".articlePost-content").css("font-size");
        //取得當前字型大小,parseFloat()轉為float型別去除字尾
        var currentFontSizeNumber = parseFloat(currentFontSize);

        if (currentFontSizeNumber == 19.36) {
            $(".articlePost-content").css("font-size", 16);
            $(this).removeClass('active');
        } else {
            //新定義的字型大小
            var newFontSize = currentFontSizeNumber * 1.1;
            //重寫樣式表
            $(".articlePost-content").css("font-size", newFontSize);
            $(this).addClass('active');
        }
        return false;
    });

    $('#icon--copy').click(function () {
        console.log("copy");
        var $temp = $("<input>");
        var $url = $(location).attr('href');
        $("body").append($temp);
        $temp.val($url).select();
        document.execCommand("copy");
        $temp.remove();
    })
    
});
