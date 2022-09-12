$(function() {
    $("div#container").append("<h2>To Do List</h2>");
    $("div#container").append("<input>");
    $("input").attr({
        id: "inputField",
        placeholder: "write here something"
    });
    $("div#container").append("<button>Add to the list</button>");
    $("div#container button").attr("id", "btnAction");
    $("#btnAction").css({
        cursor: "pointer"
    })
    $("div#container").append("<ul class='list-container'></ul>")
    $("#btnAction").click(function() {
        let value = $("#inputField").val();
        if(value) {
            let id = Date.now()
            $("ul").append("<li id="+ id +">"+ value +"</li>")
            $("#inputField").val("");
            

        }
    })
    
        


})