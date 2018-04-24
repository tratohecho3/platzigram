var page = require('page');
var yo = require('yo-yo');
var main = document.getElementById('main-container');
var empty = require('empty-element');

page('/', function(ctx,next){
    main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

page('/signup', function(ctx,next){
    var main = document.getElementById('main-container');
    var element = 
    yo`
    <div class="container">
    <div class="row">
        <div class="col s10 push-s1">
            <div class="row">
                <div class="col m5 hide-on-small-only">
                    <img src="iphone.png" alt="iphone" class="iphone">
                </div>
                <div class="col s12 m7">
                    <div class="row">
                        <div class="signup-box">
                            <h1 class="platzigram">Platzigram</h1>
                            <form class="signup-form">
                                <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                                <div class="section">
                                    <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesion con Facebook</a>
                                    <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar Sesion</a>
                                </div>
                                <div class="divider"></div>
                                <div class="section">
                                    <input type="email" name="email" placeholder="Correo Electronico">
                                    <input type="text" name="name"  placeholder="Nombre Completo">
                                    <input type="text" name="username"  placeholder="Nombre de usuario">
                                    <input type="password" name="password" placeholder="Password">
                                    <button class="btn waves-effect waves-light btn-signup" type="submit" name="action">Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row">
                        <div class="login-box">
                            Tienes una cuenta <a href="/signin">Entrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    empty(main).appendChild(element);

})

page();