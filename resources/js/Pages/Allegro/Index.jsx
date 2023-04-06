import React from "react";
import App from "../../Layouts/App";
import { Link } from "@inertiajs/react";

export default function Index(props) {
  console.log(props.code_verifier);
    return (
        <App>
            <h4>Allegro</h4>
            <div className="row">
              <div className="col">
                <Link href={route("allegro.main")}>
                  <button className="btn btn-primary">Zaloguj do Allegro</button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a href="/allegro/main">
                  <button className="btn btn-primary">Zaloguj do Allegro</button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a href="/main">
                  <button className="btn btn-primary">Zaloguj do Allegro</button>
                </a>
              </div>
            </div>
            {props.code_verifier && 
              <div className="row" >
                <div className="col">
                  <p>code_verifier:</p>
                  <p>{props.code_verifier}</p>
                </div>
              </div>
            }
            {props.access_token && 
              <div className="row" >
                <div className="col">
                  <p>access_token:</p>
                  <p>{props.access_token}</p>
                </div>
              </div>
            }
            {props.code && 
              <div className="row" >
                <div className="col">
                  <p>code:</p>
                  <p>{props.code}</p>
                </div>
              </div>
            }
        </App>
    );
}
