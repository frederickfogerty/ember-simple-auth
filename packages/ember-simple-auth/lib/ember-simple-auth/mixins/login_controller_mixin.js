var global = (typeof window !== 'undefined') ? window : {},
    Ember = global.Ember;

import { Configuration } from './../core';
import { AuthenticationControllerMixin } from './authentication_controller_mixin';

/**
  The mixin to use with the controller that handles the `authenticationRoute`
  specified in
  [Ember.SimpleAuth.setup](#Ember-SimpleAuth-setup) if the used authentication
  mechanism works with a login form that asks for user credentials. It provides
  the `authenticate` action that will authenticate the session with the
  configured authenticator when invoked. __This is a specialization of
  [Ember.SimpleAuth.AuthenticationControllerMixin](#Ember-SimpleAuth-AuthenticationControllerMixin).__

  Accompanying the controller that this mixin is mixed in the application needs
  to have a `login` template with the fields `identification` and `password` as
  well as an actionable button or link that triggers the `authenticate` action,
  e.g.:

  ```handlebars
  <form {{action 'authenticate' on='submit'}}>
    <label for="identification">Login</label>
    {{input id='identification' placeholder='Enter Login' value=identification}}
    <label for="password">Password</label>
    {{input id='password' placeholder='Enter Password' type='password' value=password}}
    <button type="submit">Login</button>
  </form>
  ```

  @class LoginControllerMixin
  @extends Ember.SimpleAuth.AuthenticationControllerMixin
*/
var LoginControllerMixin = Ember.Mixin.create(AuthenticationControllerMixin, {
  actions: {
    /**
      This action will authenticate the session with the configured
      authenticator (see
      [Ember.SimpleAuth.LoginControllerMixin#authenticatorFactory](#Ember-SimpleAuth-LoginControllerMixin-authenticatorFactory))
      if both `identification` and `password` are non-empty. It passes both
      values to the authenticator.

      __The action also resets the `password` property so sensitive data does
      not stay in memory for longer than necessary.__

      @method actions.authenticate
    */
    authenticate: function() {
      var data = this.getProperties('identification', 'password');
      this.set('password', null);
      this._super(data);
    }
  }
});

export { LoginControllerMixin };
