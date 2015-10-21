/**
*
*
*
*
**/
var init_contact = new XMLHttpRequest();


function log(message) {

	console.log(message);

}

var gist_list;
var user_name = atob("Z2Vla3dpc2Vy");
var gist;
var gist_read;
var csv_file;
var csv_object;
var csv_content;
var user_database;

init_contact.open('GET',atob("aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9nZWVrd2lzZXIvNDUxZWE0ZDFhMDYyYTRmMWEwZGEvcmF3LzBhYjk1ZmRmMzIzMDE4ZTYzYzk1ZDYxOGNhMjI2ODhjOTgxOTUyOWMvbmV3dGV4dC50eHQ="),false);
init_contact.send(null);
var token;
token = init_contact.responseText;
token = atob(token);

github = new Github({
    token:token,
    auth: "basic"
});

// creates user object
user = github.getUser();

// create a list of gist
user.userGists(user_name,function(err,res) {
    gist_list = res;
    gist = github.getGist(gist_list[0].id);
    gist.read(function(err,res){
        gist_read = res;
        csv_file = Object.keys(gist_read.files);

        csv_content= gist_read.files[csv_file].content;


        csv_object = csvJSON(csv_content);
        console.log(csv_object);

//var csv is the CSV file with headers
        function csvJSON(csv){

            var lines=csv.split("\n");

            var result = [];
            user_database={};
            var headers=lines[0].split(",");

            for(var i=1;i<lines.length;i++){

                var obj = {};
                var currentline=lines[i].split(",");

                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                    if(j===0){
                        var cust_id = currentline[j];
                    }
                }

                result.push(obj);
                user_database[cust_id] = obj;
                console.log(user_database);

            }

            //return result; //JavaScript object
            return JSON.stringify(result); //JSON
        }


var button = document.getElementsByTagName('button');
        var login_button = button[0];
        input_username = document.getElementById('username');
        input_password = document.getElementById('password');
        login_button.addEventListener('click', function(){

                if(user_database.hasOwnProperty(input_username.value)){
                  var verified_user = input_username.value
                  verified_user = user_database[verified_user];
                  if(verified_user.password === input_password.value){
                        alert('login successful');
                  }else{
                    log('username and password do not match file');
                  }
                }else{
                    confirm('username not found');
                }

        });









    });
});



