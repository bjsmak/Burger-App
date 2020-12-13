$(function(){
    //Update PUT request, Devoured button
    $(".devoured-btn").on("click", function(){
        const id = $(this).data("id");

        $.ajax("/api/burgers" + id, {
            type: "PUT"
        }).then(function(){
            location.reload();
        });
    });

    //Create request, Add Burger button
    $(".add-burger").on("click", function(event) {
        event.preventDefault();
        const newBurger = {
            //takes burger name from client, text box
            burgerName: $("#burger").val().trim()
        };

        //POST request though AJAX
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                //reload page for the list with new burger
                location.reload();
            }
        );
    });
});