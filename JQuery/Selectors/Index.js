/// <reference path="../jquery-2.1.3.js" />

$(function PageStart() {
   /*Iterates through all input controls*/
   $(':input').each(function AlertInputValues() {
      var $elem = $(this);
      alert($elem.val());
   });

   function AlertDoug() {
      alert("Doug");
   }
});