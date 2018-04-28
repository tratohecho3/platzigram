var page = require('page');
var empty = require('empty-element');
var template = require('./template');
//var title = require('title');

page('/', function(ctx,next){
    //title('Platzigram - Signin');
    document.title = 'Platzigram';

    var main = document.getElementById('main-container');
    var pictures = [
        
        {user:
            {
            username: 'user1',
            avatar: 'http://materializecss.com/images/office.jpg'
            },
        url: 'http://materializecss.com/images/office.jpg',
        likes: 1024,
        liked: true
        },
        {user:
            {
            username: 'user2',
            avatar: 'http://materializecss.com/images/office.jpg'
            },
        url: 'http://materializecss.com/images/office.jpg',
        likes: 10,
        liked: true
        },
        {user:
            {
            username: 'user3',
            avatar: 'http://materializecss.com/images/office.jpg'
            },
        url: 'http://materializecss.com/images/office.jpg',
        likes: 10,
        liked: true
        }
        
    
    ];

    empty(main).appendChild(template(pictures));

})