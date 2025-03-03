$(document).ready(function () {
    $(".container").hover(
        function () {

            $(this).css({
                "width": "40%",
                "height": "55vh",
                "transition": "all 0.3s ease-in-out"
            });
            $(this).find(".down, .bottom , .circle").fadeOut(100);
            $(this).find(".middle").fadeIn(700);

        },
        function () {
            $(this).css({
                "width": "18%",
                "height": "55vh",
                "transition": "all 0.3s ease-in-out"
            });
            $(this).find(".down, .bottom, .circle").fadeIn(100);
            $(this).find(".middle").fadeOut(100);

        }
    );
});
