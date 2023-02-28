
let newsitem = document.getElementById('target')
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=a7724c139c903150d8e1e80ec9abd460`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)

            let news = `<div class="card text-white bg-dark mb-3" style="width: 19%;margin: 3%;">
              <img src="${element["image"]}" class="card-img-top" alt="..."  style="height: 162px;>
              <div class="card-body">
                <h5 class="card-title" style="font-size: 13px;">${element["title"]}</h5>
                <p class="card-text" style="font-size: 13px;">${element["description"]}</p>
                <a href="${element["url"]}" class="btn btn-primary"style="font-size: 10px;position: absolute; bottom: 3%;left: 3%;">Read more..</a>
              </div>
            </div>
           `;
            newsHtml += news;
        });
        newsitem.innerHTML = newsHtml;
        //console.log(json)
        //let articles = json.articles;
        }
        else {
            console.log("Some error occured")
        }
       
        
        
    }

xhr.send();
