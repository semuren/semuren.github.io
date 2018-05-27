// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//fade out and delete items by clicking X
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //get new todo text
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>')
    }
});

$("#plusIcon").click(function(){
    $("input[type='text']").fadeToggle();
})