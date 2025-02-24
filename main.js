$(document).ready(function(){
    $(".fir").hover(
        function(){
            $(this).css("filter", "grayscale(0%)"); $(this).css("transform", "scale(1.2)");
        }, 
        function(){
            $(this).css("filter", "grayscale(100%)");$(this).css("transform", "scale(1)");
        }
    );
});

$(document).ready(function(){
    $(".sec").hover(
        function(){
            $(this).css("filter", "grayscale(0%)"); $(this).css("transform", "scale(1.2)");
        }, 
        function(){
            $(this).css("filter", "grayscale(100%)");$(this).css("transform", "scale(1)");
        }
    );
});

$(document).ready(function(){
    $(".thi").hover(
        function(){
            $(this).css("filter", "grayscale(0%)"); $(this).css("transform", "scale(1.2)");
        }, 
        function(){
            $(this).css("filter", "grayscale(100%)");$(this).css("transform", "scale(1)");
        }
    );
});
