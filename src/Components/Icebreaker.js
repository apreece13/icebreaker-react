import React, { Component } from "react";
import Nav from "./nav/Nav";
import ApplicationViews from "./ApplicationViews";


class Icebreaker extends Component {

      render() {
        return (
          <>
            <Nav />
              <ApplicationViews />
          </>
        );
      }
}

export default Icebreaker;
