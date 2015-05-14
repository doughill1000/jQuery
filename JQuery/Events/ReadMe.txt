api.jquery.com/category/events

click()
blur()
focus()
dblclick()
mousedown()
mouseup()
mouseover()
keydown()
keypress()

//Works with textareas and selects
.change()

//
.on()

$("#MyTable tbody").on("click"), "tr", function(event){
   alert('Row was clicked and bubbled up');
});

$("#MyTable tr").on({
      mouseenter: function(){
      $(this).addClass("over");
   },
      mouseleave: function(){
      $(this).removeClass("out");
   }
 });

 .hover(handlerIn, handlerOut)

 /******************************************
 $('#target').hover(
   function HoverIn(){
      $(this).css('background-color', 'black');
      },
   function HoverOut(){
      $(this).css('background-color', 'white');
   }     
};

OR

$('#target').hover(function ChangeClass(){
   $(this).toggleClass('over');
});
*******************************************/