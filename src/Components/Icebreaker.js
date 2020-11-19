import React, { Component } from "react";
import IceNavbar from "./nav/IceNavbar";
import ApplicationViews from "./ApplicationViews";


class Icebreaker extends Component {

      render() {
        return (
          <>
            <IceNavbar />
              <ApplicationViews />
          </>
        );
      }
}

export default Icebreaker;
