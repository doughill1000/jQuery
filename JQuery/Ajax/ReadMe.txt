.load()

$.get(url,data,callback,datatype)

$.get('HelpDetails.html', function (data) 
   {$('#OutputDiv').html(data);
});