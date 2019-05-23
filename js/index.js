const sectionPosts      = document.querySelector('.post-area')
const sectionAllPosts   = document.querySelector('.posts-area .row')
const sectionLastAuthor = document.querySelector('.protfolio-widget')

const getPosts      = (section) => {
  let html = ``
  fetch('http://localhost:3000/posts/limit/5')
    .then(response => response.json())
      .then(data => {
        data.forEach(elem => {
          html += `
            <div class="single-post-item">
              <figure>
                <img class="post-img img-fluid" src="${elem.image}" alt="">
              </figure>
              <h3>
                <a href="blog-details.html">${elem.title}</a>
              </h3>
              <p>${elem.content}</p>
              <a href="blog-details.html" class="primary-btn text-uppercase mt-15">continue Reading</a>
              <div class="post-box">
                <div class="d-flex">
                  <div>
                    <a href="#">
                      <img src="img/a1.png" alt="">
                    </a>
                  </div>
                  <div class="post-meta">
                    <div class="meta-head">
                      <a href="#">Thomaz</a>
                    </div>
                    <div class="meta-details">
                      <ul>
                        <li>
                          <a href="#">
                            <span class="lnr lnr-calendar-full"></span>
                            ${elem.createdAt.slice(0, 10).split('-').reverse().join('/')}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="lnr lnr-picture"></span>
                            Image Post
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="lnr lnr-coffee-cup"></span>
                            Food & Travel
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="lnr lnr-bubble"></span>
                            03 Comments
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        })
        section.innerHTML = html
      })
}

const getAllPosts   = (section) => {
  let html = ``
  fetch('http://localhost:3000/posts')
    .then(res => res.json())
      .then(data => {
        data.forEach(elem => {
          html += `
            <div class="col-lg-6 col-md-6">
              <div class="single-post-item short">
                <figure>
                  <img class="post-img img-fluid" src="${elem.image.replace(/(?:[330-680])+/gi, 335)}" alt="">
                </figure>
                <h3>
                  <a href="blog-details.html">${elem.title}</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="blog-details.html" class="primary-btn text-uppercase mt-15">continue Reading</a>
                <div class="post-box">
                  <div class="d-flex">
                    <div>
                      <a href="#">
                        <img src="img/a1.png" alt="">
                      </a>
                    </div>
                    <div class="post-meta">
                      <div class="meta-head">
                        <a href="#">Marvel Maison</a>
                      </div>
                      <div class="meta-details">
                        <ul>
                          <li>
                            <a href="#">
                              <span class="lnr lnr-calendar-full"></span>
                              ${elem.createdAt.slice(0, 10).split('-').reverse().join('/')}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span class="lnr lnr-bubble"></span>
                              03
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `
        })
        section.innerHTML = html
      })
}

const getLastAuthor = (section) => {
  let html = ``
  fetch('http://localhost:3000/last/author/')
    .then(res => res.json())
      .then(data => {
        data.forEach((elem, index) => {
          html += `
            <img class="img-fluid" src="${elem.avatar}" alt="">
            <a href="#">
              <h4>${elem.firstName} ${elem.lastName}</h4>
            </a>
            <div class="desigmation">
              <p>Senior blog writer</p>
            </div>
            <p>${elem.synopsis}</p>
            <ul>
              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i class="fa fa-behance"></i></a></li>
            </ul>
          `
        })
        section.innerHTML = html
      })
}

getPosts(sectionPosts)
getAllPosts(sectionAllPosts)
getLastAuthor(sectionLastAuthor)
