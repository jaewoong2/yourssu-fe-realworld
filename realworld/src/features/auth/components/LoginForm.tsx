import React, { useCallback } from 'react';
import { useForm } from '../hooks/useForm';

function LoginForm() {
  const [email, , onChangeEmail] = useForm('');
  const [password, , onChangePassword] = useForm('');

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/">Need an account?</a>
            </p>
            <form onSubmit={handleLogin}>
              <fieldset className="form-group">
                <input
                  onChange={onChangeEmail}
                  value={email}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={onChangePassword}
                  value={password}
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button type="submit" className="btn btn-lg btn-primary pull-xs-right">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
