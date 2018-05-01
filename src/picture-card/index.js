var yo = require('yo-yo');
var translate = require('../translate');
module.exports = function (pic){
    var el;
    function render(pic){
        return yo `
        <div class="card ${pic.liked ? 'liked': ''}">
            <div class="card-image">
                <img class="activator" src="${pic.url}">
            </div>
            <div class="card-content">
                <a href="/user/${pic.user.username}" class="card-title">
                    <img src="${pic.user.avatar}" class="avatar">
                    <span class="username">${pic.user.username}</span>        
                </a>
                <small class="right time">${translate.date(pic.createdAt)}</small>
                <p>
                <a class="left" href="#" onclick=${like.bind(null,true)}> <i class="far fa-heart"></i></a>
                <a class="left" href="#" onclick=${like.bind(null,false)}> <i class="fas fa-heart"></i></a>

                <span class="left likes">translate.message(picture.likes)</span>
            </div>
        </div>
    `;

    }

    function like(liked){
        pic.liked = liked;
        pic.likes = liked ? pic.likes + 1 : pic.likes-1;
        var newEl =  render(pic);
        yo.update(el,newEl);
        return false
    }

    el = render(pic);
    return el;
} 
