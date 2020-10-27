$(document).ready(function() {

// play vid && reveal form
    $("#vid").fadeIn(1000).fadeOut(18000, "swing", toggleForm);
    function toggleForm() {
        $("#fortune-survey").toggle();
    }
    

// form submission

    $("#fortune-survey").submit(function(e) {
        e.preventDefault();
    // collect user input
        let badLuckArr = [];
        let goodLuckArr = [];
        const fortunes = ["#fortune-one", "#fortune-two", "#fortune-three"];

        $("input:checkbox[name=bad-box]:checked").each(function() {
            let badLuckItem = $(this).val();
            badLuckArr.push(badLuckItem);
        });
        $("input:checkbox[name=good-box]:checked").each(function() {
            let goodLuckItem = $(this).val();
            goodLuckArr.push(goodLuckItem);
        });

    // analyze user input    
        const surveyScore = (function surveyScore() {
            return goodLuckArr.length - badLuckArr.length
        })();    

    // print fortune
        if (surveyScore <= -3) {
            $("#fortune-one").show();
            $("#fortune-survey").toggle();
        } 
        else if (surveyScore > -3 && surveyScore <= -1) {
            $("#fortune-two").show();
            $("#fortune-survey").toggle();
        } 
        else if  (surveyScore > -1 && surveyScore <= 1) {
            $("#fortune-three").show();
            $("#fortune-survey").toggle();
        } 
        else if (surveyScore > 1 && surveyScore <= 3) {
            $("#fortune-four").show();
            $("#fortune-survey").toggle();
        } 
        else if (surveyScore > 3) {
            $("#fortune-five").show();
            $("#fortune-survey").toggle();
        }


    // close form submission
    });
// close .ready
});