let newsItems = document.getElementById("newsItems")


function showNews() {
  newsItems.innerHTML = ''
  news.articles.forEach(function(newsStory){
    let newsList = `<li class="media">
                      <img class="mr-3" src="${newsStory.urlToImage}">
                      <div class="media-body">
                        <h5 class="mt-0 mb-1">${newsStory.title}</h5>
                        <h4 class="headingFont">By: ${newsStory.author}</h4>
                        <p class="newsDescription">${newsStory.description}</p>
                        <p class="newsPublished">Published ${newsStory.publishedAt} from <a href="${newsStory.url}">${newsStory.source.name}</a></p>
                      </div>
                    </li>`

    newsItems.innerHTML += newsList
  })
}

showNews()
