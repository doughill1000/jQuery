
$(document).ready(function PageLoad() {
   var outputArray = [];
   var output;

   $('div').each(function (index) {
      output = $(this).attr('id');
      outputArray.push(output);
   });
   for (var index = 0; index < outputArray.length; ++index) {
      var value = outputArray[index];
       console.log(value);
   }
});