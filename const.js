const ENV = false

function getServerUrl(){
    if(ENV){
        return 'http://127.0.0.1:8000'
    }else{
        return 'https://barber-backend-5ixt.onrender.com'
    }
}
