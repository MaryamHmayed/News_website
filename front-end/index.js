$(document).ready(function(){
    $.ajax({
        url: "https://127.0.0.1/news_website/News_website/back-end/read.php",
        type: "GET",
        dataType: "json",
        success:function(data){
            
            $("#form").empty();

            $.each(data,function(index,item){
                let newsItem = "<li>"
                newsItem += "<h3>" + item.title + "</h3>";
                newsItem += "<p>" + item.content + "</p>";
                newsItem += "</li>";
                $("#form").append(newsItem);
                });
            },
            error: function(xhr, status, error) {
                console.error("Error getting news:", error);
            
    }})})
        
  

/*const addButton= $("#add");
const title = $("#title");
const content =$("#content");
const newsform = $("#form")

const getNews=()=>{
    fetch('https://127.0.0.1/news_website/News_website/back-end/read.php',
    {method:'GET'})
    .then ((response)=>{
        return response.json();
    }).then((data)=>{
        displayNews(data);
    }).catch((error)=>{
        console.error(error);
    })

}
const displayNews=(data)=>{

}
*/