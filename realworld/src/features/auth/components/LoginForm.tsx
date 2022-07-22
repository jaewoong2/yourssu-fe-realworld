import React, { useCallback } from 'react';
import { useForm } from '../hooks/useForm';
import Input from './Input';

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
              <Input onChange={onChangeEmail} value={email} type="text" placeholder="email" />
              <Input
                onChange={onChangePassword}
                value={password}
                type="password"
                placeholder="password"
              />
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
