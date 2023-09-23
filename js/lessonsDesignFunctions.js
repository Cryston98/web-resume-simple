//declare variable

let text1;
let arrayList;
let tableList;


String.fromHtmlEntities = function(string) {
    return (string+"").replace(/&#\d+;/gm,function(s) {
        return String.fromCharCode(s.match(/\d+/gm)[0]);
    })
};


//declare function of creation
function create_title(titleLesson) {
	return '<h4 id="titleLesson"><i class="fa-solid fa-file-lines"></i>'+titleLesson+'</h4>';
}

function create_subtitle(subtitleLesson) {
	return '<p class="subtitleInLesson">'+subtitleLesson+'</p>';
}

function create_textWithIcon(textContent,icon) {
	return '<p id="shortDescriptionLesson">'+ icon + textContent+'</p>';
}


function create_listOfElem(arrayListContent) {
	let myList="";
	myList="<ul class='listElementsCourse'>";
	for(var i=0;i<arrayListContent.length;i++){
		myList+="<li>"+arrayListContent[i]+"</li>";
	}
	myList+="</ul>";

	return myList;
}



function create_example(titleExample,contentExample,nr_example) {
	return '<div class="examapleInLesson"><div class="exampleTitle">'+titleExample+
				'<p id="notification-message'+nr_example+'" class="notification-message">Copied!</p><i onclick="copyText('+nr_example+')"class="fa-solid fa-copy"></i></div>'+
				'<div class="exampleContent">'+
					'<textarea id="exampleCode'+nr_example+'" readonly rows="2" cols="50">'+contentExample+'</textarea>'+
				'</div>'+
			'</div>';
}

function create_textWithoutInterpretHTML(textContent) {

	return '<textarea id="textareaNoInterpret" class="textNoInterpretHTML" readonly rows="2" cols="50">'+textContent+'</textarea>';
	
			
}

function create_table_2x(name_col1,name_col2,listElem){
	let myTable="<table cellspacing='0' class='myTableLesson'><tbody>";
	myTable+="<tr><th>"+name_col1+"</th><th>"+name_col2+"</th></tr>";

	for(var i=0;i<listElem.length;i++){
		myTable+="<tr><td>"+listElem[i][0]+"</td><td>"+listElem[i][1]+"</td></tr>";
	}
	myTable+="</tbody></table>";
	return myTable;
}

function create_table_3x(name_col1,name_col2,name_col3,listElem){
	let myTable="<table cellspacing='0' class='myTableLesson'><tbody>";
	myTable+="<tr><th>"+name_col1+"</th><th>"+name_col2+"</th><th>"+name_col3+"</th></tr>";

	for(var i=0;i<listElem.length;i++){
		myTable+="<tr><td><textarea class='textNoInterpretHTML2'>"+listElem[i][0]+"</textarea></td><td><textarea class='textNoInterpretHTML2'>"+listElem[i][1]+"</textarea></td><td><textarea class='textNoInterpretHTML2'>"+listElem[i][2]+"</textarea></td></tr>";
	}
	myTable+="</tbody></table>";
	return myTable;
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function converHTML_TXT(stri){
   var encodedStr = stri.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
   		return '&#'+i.charCodeAt(0)+';';
	});
   return encodedStr;
}
