var init_contact = new XMLHttpRequest();
var token;
var current_user;
var csv_file;
var username =  atob("Z2Vla3dpc2Vy");
var gist_list;
var gist_read;
var gist;
var csv_content;




function log(message) {

	console.log(message);

}
//init contact to gist raw file to get token
init_contact.open('GET',atob('aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9nZWVrd2lzZXIvNDUxZWE0ZDFhMDYyYTRmMWEwZGEvcmF3LzBhYjk1ZmRmMzIzMDE4ZTYzYzk1ZDYxOGNhMjI2ODhjOTgxOTUyOWMvbmV3dGV4dC50eHQ='),false);
	init_contact.send();

token = init_contact.responseText;
	token =atob(token);
//init contact with github for access
github = new Github({
	token: token,
	auth: 'oauth'
});

//retrieve the current user

current_user = github.getUser();

//locates gist file in git account
current_user.userGists(username,function(err,res){

	gist_list = res;
		gist =  github.getGist(gist_list[0].id);
		gist.read(function(err,res){
			gist_read = res;
				csv_file = Object.keys(gist_read.files);
				csv_content = gist_read.files[csv_file].content;
					log(csv_content);

					//calling csv to json function so that content appears as object
							csvJSON(csv_content);
							log(csvJSON(csv_content));

							//function
						function csvJSON(csv){

                          var lines=csv.split("\n");

                          var result = [];

                          var headers=lines[0].split(",");

                          for(var i=1;i<lines.length;i++){

                        	  var obj = {};
                        	  var currentline=lines[i].split(",");

                        	  for(var j=0;j<headers.length;j++){
                        		  obj[headers[j]] = currentline[j];
                        	  }

                        	  result.push(obj);

                          }

                          //return result; //JavaScript object
                          return JSON.stringify(result); //JSON
                        }





		});

});
