import React, { PropsWithChildren } from 'react';

type PropsType = {
  authType: string;
  aMessage: string;
  aHref: string;
};

function FormLayout({ children, authType, aMessage, aHref }: PropsWithChildren<PropsType>) {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">{authType}</h1>
            <p className="text-xs-center">
              <a href={aHref}>{aMessage}</a>
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLayout;
