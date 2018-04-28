var yo = require('yo-yo');
var landing = require('../landing');
var signinForm = 
yo`       
<div class="col s12 m7">
    <div class="row">
        <div class="signup-box">
            <h1 class="platzigram">Platzigram</h1>
            <form class="signup-form">
                <div class="section">
                    <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesion con Facebook</a>
                    <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fab fa-facebook-square"></i> Iniciar Sesion</a>
                </div>
                <div class="divider"></div>
                <div class="section">
                    <input type="text" name="username"  placeholder="Nombre de usuario">
                    <input type="password" name="password" placeholder="Password">
                    <button class="btn waves-effect waves-light btn-signup" type="submit" name="action">Iniciar Sesion</button>
                </div>
            </form>
        </div>
    </div>
    <div class="row">
        <div class="login-box">
           No tienes una cuenta? <a href="/signup">Registrate</a>
        </div>
    </div>
</div>`;

module.exports = landing(signinForm);