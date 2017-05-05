/*global console*/
/*
1- Go to http://www.omdbapi.com/?s=dog and change the word dog in the url to a different common word. You will get as a result, a list of movies with this word in the title. Make sure you get at least 5 results.
2- You can copy the JSON and put it in a string at the top of your js file. Print the title of the 3rd movie in the array to the console.
3- Make a ul with a li for each title (just like you did with the books in the previous assignment
4- Use CSS to divide the page in two columns. The left column will have a list of the titles for each movie. The right column will have all the information listed for each movie.
5- Replace the "Poster" property with the actual image of the poster. If you do this correctly, in the right column there will be a picture for each movie.
6- Use the imdbID to create an URL to the IMDB page for that movie (hint: IMDB urls always look like this http://www.imdb.com/title/[imdbId] where [imdbId] would be replaced by the actual Id. If you do this correctly, each movie will have a link to its own IMDB page. Make sure the link opens in a new tab
7- Make a Github Repository for your javascript homework. Store your solutions in this repo. Put the repo link in trello. NO MORE ZIP FILES :octocat:
*/
var objects = {"Search":
			  [
			{"Title": "The Big Bang Theory", "Year": "2007–", "imdbID": "tt0898266", "Type": "series", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNDMxNjQyN15BMl5BanBnXkFtZTgwNzA4NDQwMDI@._V1_SX300.jpg"},
				  
			{"Title": "The Theory of Everything", "Year": "2014", "imdbID": "tt2980516", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg"},
				  
			{"Title": "Conspiracy Theory", "Year": "1997", "imdbID": "tt0118883", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BODc2NjI2MDQxOF5BMl5BanBnXkFtZTcwNTEyNTgyMQ@@._V1_SX300.jpg"},
				  
			{"Title": "Chaos Theory", "Year": "2008", "imdbID": "tt0460745", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzMjA1NTExNzVeQTJeQWpwZ15BbWU3MDI4OTI1NjE@._V1_SX300.jpg"},
				  
			{"Title": "Kill Theory", "Year": "2009", "imdbID": "tt0893532", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0MTQ1MDM2MF5BMl5BanBnXkFtZTcwMTI1MjQxMw@@._V1_SX300.jpg"},
				  
			{"Title": "The Jerk Theory", "Year": "2009", "imdbID": "tt1145157", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMzg3NDI1MF5BMl5BanBnXkFtZTcwMTQ2NTk3Nw@@._V1_SX300.jpg"},
				  
			{"Title": "The Frankenstein Theory", "Year": "2013", "imdbID": "tt2646378", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NzcwMjIyOF5BMl5BanBnXkFtZTcwOTk0MDQwOQ@@._V1_SX300.jpg"},
				  
			{"Title": "The Theory of Flight", "Year": "1998", "imdbID": "tt0120861", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTk5MDk2OTMyM15BMl5BanBnXkFtZTcwMjg4MTkzMQ@@._V1_SX300.jpg"},
				  
			{"Title": "The Suicide Theory", "Year": "2014", "imdbID": "tt2517300", "Type": "movie", "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyODUyMTc4MDleQTJeQWpwZ15BbWU4MDI0OTQ3MDYx._V1_SX300.jpg"},
				  
			{"Title": "Splinter Cell Chaos Theory", "Year": "2005", "imdbID": "tt0427889", "Type": "game", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTI3ODY5MjkzMV5BMl5BanBnXkFtZTcwNjI5NTUzMQ@@._V1_SX300.jpg"}
		],
			  "totalResults": "273", "Response": "True"
			 };

console.log(objects.Search[2].Title);

(function addElement() {
	"use strict";
	var newDiv = document.createElement("div");
	document.body.appendChild(newDiv);
	var h1 = document.createElement('h1');
	newDiv.appendChild(h1);
	h1.textContent = "Movies and series";
	newDiv.setAttribute("id", "myDiv");
	var myUl = document.createElement('Ul');
	document.getElementById('myDiv').appendChild(myUl);
	myUl.setAttribute("id", "myList");
}());

function createListEle(titl) {
	"use strict";
    var listEle = document.createElement('li');

    return listEle;
}

(function createMovList() {
	"use strict";
    var mainList = document.getElementById('myList'), i;
	
    for (i = 0; i < objects.Search.length; i = i + 1) {
		var myMovId = objects.Search[i].Title;
		
		var movEle = createListEle(myMovId);
		mainList.appendChild(movEle);
		
		var h1 = document.createElement('h2');
		movEle.appendChild(h1);
		h1.textContent =  objects.Search[i].Title;
		
		var p = document.createElement('p');
		movEle.appendChild(p);
		p.innerHTML = "Year :  " +  objects.Search[i].Year + "<br>" + "imdbID :  " + objects.Search[i].imdbID
			+ "<br>" + "Type :  " + objects.Search[i].Type + "<br>";
		
		var movUrl = document.createElement('a');
		movEle.appendChild(movUrl);
		movUrl.textContent = "Click here for more";
		movUrl.setAttribute("href", "http://www.imdb.com/title/" + objects.Search[i].imdbID);
		movUrl.setAttribute("target", "_blank");
		
		var movImg = document.createElement('img');
		movImg.innerHTML = objects.Search[i].Poster;
		movImg.setAttribute("src", objects.Search[i].Poster);
		movEle.appendChild(movImg);
    }
	
}());


