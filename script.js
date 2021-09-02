var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);


let countries=data.filter((ele)=>{
    for(var i in ele.currencies){
        if(ele.currencies[i].code==='USD'){
            return true;
        }
    }
}).map(ele=>console.log(ele.name));
}    