console.log('my js');
let newsitem = document.getElementById('list-example')
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=faea2d4b5e6f4eaa8145b64955d5b3dd`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)

            let news = `<div id="list-example${index}" class="list-group">
            <a class="list-group-item list-group-item-action" href="#list-item-${index}"><span class="badge bg-secondary">Headline</span>${element["title"]}</a>

            </div> `;
            newsHtml += news;
        });
        newsitem.innerHTML = newsHtml;

        articles.forEach(function(element, index) {
            // console.log(element, index)

            let news = `<div data-spy="scroll" data-target="#list-example${index}" data-offset="0" class="scrollspy-example" tabindex="0">
            <h4 id="list-item-${index}">Headline ${index+1}<span class="badge bg-secondary">Description</span></h4>
            <p>${element["description"]}<a href=${element["url"]}>Read more here</a></p>
            <hr>

            </div>`;
            newsHtml += news;
        });
        newsitem.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send()