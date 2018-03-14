// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Rhyme or Reason",
	"artist":"Eminem",
	"mp3-url":"https://open.spotify.com/track/45JxylFwaThjLsRBuzcfoL",
	"image-url":"https://i.scdn.co/image/85083088a097332a0a49676e9c0f63b0099fac10",
	"duration": "5:02"
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
$("#start").click(function(){
	clearList();
	displayList();
})	
$("#close").click(function(){
	closeModal();
})
displayList();
});

function displayList(){
for(var i = 0; i < myPlayList.length; i++){
	$(".list-group-item").append("<h3>" + myPlayList[i].title + "</h3>");
	$(".list-group-item").append("<p>" + myPlayList[i].artist + "</p>");
	$(".list-group-item").append("<a href ="+ myPlayList[i]["mp3-url"]+ "> click me </a>");
	$(".list-group-item").append("<img src=" + myPlayList[i]["image-url"] + ">" + "</img>");
}

  
}

function clearList(){
  myPlayList.empty();
  
  
}

function addSong(){
	$("#newSongs").click(function(){
		var title = $("#titleInput").val();
		var artist = $("#artistInput").val();
		var songLink = $("#songLink").val();
		var image = $("#albumInput").val();
		myPlayList.push({
			title:title,
			artist:artist,
			"mp3-url":songLink,
			"image-url":image
		})
	});
	
}
/*Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
        {size++;}
    }
    return size;
};


var size = Object.size(myPlayList);

var keys = Object.keys(myPlayList);
*/


function closeModal() {
		// $("#customModal").modal('hide');
		var modalDiv = $("#custoModal");
		console.log(modalDiv.toString());
		modalDiv.modal("hide");
	
}