//ok
function log (message){
    console.log(message);
}

<<<<<<< HEAD


=======
var mandrill_client;
>>>>>>> origin/master
var init_contact = new XMLHttpRequest();
var gist_list;
var user_name = atob("Z2Vla3dpc2Vy");
var user_profile;
var gist_read;
<<<<<<< HEAD
=======
var user;
<<<<<<< HEAD
>>>>>>> origin/master
=======
var user_gist_read;
>>>>>>> origin/master
var csv_file;
var csv_object;
var csv_content;
var user_database;
var input_username;
<<<<<<< HEAD
var input_password;
init_contact.open('GET',atob("aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9nZWVrd2lzZXIvNDUxZWE0ZDFhMDYyYTRmMWEwZGEvcmF3LzBhYjk1ZmRmMzIzMDE4ZTYzYzk1ZDYxOGNhMjI2ODhjOTgxOTUyOWMvbmV3dGV4dC50eHQ="),false);
init_contact.send(null);
var token;
token = init_contact.responseText;
token = atob(token);
=======
var input_email;
var input_password;
var input_password_confirm;
var input;
var button;
var alert_all;
var alert_username;
var alert_email;
var alert_password;
var alert_password_match;
var alert_blank;
var github;
var result;
var token;
var user_gist;


//initial contact to github to grab token 
init_contact.open('GET',atob("aHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9nZWVrd2lzZXIvNDUxZWE0ZDFhMDYyYTRmMWEwZGEvcmF3LzBhYjk1ZmRmMzIzMDE4ZTYzYzk1ZDYxOGNhMjI2ODhjOTgxOTUyOWMvbmV3dGV4dC50eHQ="),false);

    init_contact.send(null);

token = init_contact.responseText;

    token = atob(token);

>>>>>>> origin/master
github = new Github({
    token:token,
    auth: "basic"
});
<<<<<<< HEAD
// creates user object
user = github.getUser();
// create a list of gist
user.userGists(user_name,function(err,res) {
    gist_list = res;
    gist = github.getGist(gist_list[0].id);
    gist.read(function(err,res){
        gist_read = res;
        //gist_read.files['user_database.csv'].content = gist_read.files['user_database.csv'].content + '\n' + 'newuser,newemail,newpassword';
        csv_file = Object.keys(gist_read.files);
        csv_content= gist_read.files[csv_file].content;
        csv_object = csvJSON(csv_content);
        gist.update(gist_read,function(){

        });
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
            }
            //return result; //JavaScript object
            return JSON.stringify(result); //JSON
        }
        var button = document.getElementsByTagName('button');
        var login_button = button[0];
        input_username = document.getElementById('username');
        input_password = document.getElementById('password');
        login_button.addEventListener('click',function(){
            if (user_database.hasOwnProperty(input_username.value)){
                var verified_user = input_username.value;
                verified_user = user_database[verified_user];
                if (verified_user.password === input_password.value){
                    alert('login successful');
                    window.location = "http://vinferno.github.io/oct05";

                }else{
                    alert('username and password do not match');
                }
            }else{
                alert('username not found');
            }
        });

    });

});
=======

// creates user object
user = github.getUser();

// create a list of gist
user.userGists(user_name,function(err,res) {
    
    gist_list = res;
    log(gist_list);
    user_gist = github.getGist(gist_list[0].id);
           
           user_gist.read(function(err,res) {
               
               user_gist_read = res
               
           });
           
    user_profile = github.getGist(gist_list[3].id);
    log(user_profile);
    debugger;
    
    user_profile.read(function(err,res){
        
        gist_read = res;
        
        csv_file = Object.keys(gist_read.files);
        log(csv_file);
        debugger;   
            csv_content= gist_read.files[csv_file].content;
            log(csv_content);
            debugger;   
                csv_object = csvJSON(csv_content);
                    log(csv_object);
                    debugger;
//var csv is the CSV file with headers and function csvJSON converts csv to json object
        function csvJSON(csv){
            
            var lines=csv.split("\n");
            
            result = [];
            
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
                
            }
            
            //return result; //JavaScript object
            return JSON.stringify(result); //JSON
            
        }
        


    });
});
    //---variables that create the form for sign up 
        input = document.getElementsByTagName('input');
        input_username = input[0];
        input_email = input[1]; 
        input_password = input[2];
        input_password_confirm = input[3];
        alert_all = document.getElementsByTagName('span');
        alert_username =alert_all[0];
        alert_email = alert_all[1];
        alert_password = alert_all[2];
        alert_password_match = alert_all[3];
        alert_blank = alert_all[4];

//----------Mandrill Email Client Access and Authentication

var email_client = new mandrill.Mandrill(atob("U1p1REpzYjJSSnRhM0NzWUJaVEJVUQ=="));

// create a variable for the API call parameters
var params;
// Send the email!
function send_the_email() {
    
    email_client.messages.send(params, function(res) {
        
            console.log(res);
        
    }, function(err) {
        
            console.log(err);
        
    });
}

        
        //--Sign up button operation check username and email values in current database to verify no duplicates are being used as well as password confirmation
        button = document.getElementsByTagName('button')[0];
        
        button.addEventListener('click',function(){
            
          //-----running a check to make sure there is no empty input fields 
            if(input_username.value === '' || input_email.value === ''|| input_password.value === ''){
                
                alert_blank.classList.toggle('alert_hidden');
                
                return;
            }
            
            //--makes sure that the password is the correct password that you want by referencing and checking both password values
            if (input_password.value != input_password_confirm.value){ 
                
                    alert_password_match.classList.toggle('alert_hidden'); 
                        
                return;
            }
            
            //--- verifying that the username is not already being used 
            if (user_database.hasOwnProperty(input_username.value)){
                
                    alert_username.classList.toggle('alert_hidden');
                    
                return;
            }
            
                //----Cross checking email address to verify that the same email is not being used more than once
               for (var prop in result){
                   
                   console.log(result[prop]);
                   
                   if (result[prop].email=== input_email.value){
                       
                       alert_email.classList.toggle('alert_hidden');
                       
                       return;
                   }
               }
               
           //----currently using the dynamic values in the form to assit with sending emails to users that have just signed up for service
params = {
    
    "message": {
        
        "from_email":"vinsonfernandez27@gmail.com",
        
        "to":[{"email":input_email.value}],
        
        "subject": "Thanks for signing up",
        
        "html": "Congradulations " + input_username.value + " you have finished the sign up process. thank you and have a nice day!"
        
    }
};
              
            //----------currently updates database with new users so stays upto date 
           csv_file.content = csv_file.content + '\n' + input_username.value +','+ input_email.value +","+ input_password.value;                                            
                
                gist.update(gist_read,function(){
            
                });
            
           //sending email to new user
          send_the_email();
        });
>>>>>>> origin/master
