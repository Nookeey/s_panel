import React from "react";
import App from "../../Layouts/App";
import { Link } from "@inertiajs/react";

export default function Index(props) {
  console.log(props.code_verifier);
    return (
        <App>
            <h4>Allegro Authorization</h4>
            <div className="row">
              <div className="col">
                <a href={props.authorization_redirect_url}>
                  <button className="btn btn-primary">Authorization</button>
                </a>
              </div>
            </div>
        </App>
    );
}
