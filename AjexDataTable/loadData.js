$(document).ready(function () {
$.ajax({
    type: "GET",
    url: "books.xml",
    dataType: "xml",
    success: xmlParser
   });
});

function xmlParser(xml) {


$(xml).find("book").each(function () {
	var result = "";
	var title =  $(this).find("title").text();
	// var author = $(this).find("author").each(function(){
	// 	console.log( $(this).text() +", ");
	// 	result = $(this).text();

	// });
	var author = getAuthors($(this).find("author"));
	var year = $(this).find("year").text();
	var price = $(this).find("price").text();
	var category = $(this).attr("category");
    $("tbody").append('<tr><td>' + title +   '</td><td>' + author +'</td><td>' +year + '</td><td>' + price + '</td><td>'+ category + '</td></tr>');
    //$(".book").fadeIn(1000);

 });
}

function getAuthors(authorTag){
	var resultVal="";
	var length = authorTag.length;
	console.log(length);
	authorTag.each(function(index) {
		if (index === (length - 1)) {
              resultVal = resultVal+ $(this).text()
        }
        else{
			resultVal = resultVal+ $(this).text() + ", ";
        }
    });
    return resultVal;
}