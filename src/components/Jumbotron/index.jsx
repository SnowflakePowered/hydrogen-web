import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import './style.scss'

class Jumbotron extends React.Component {
  render() {

    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-home text-center">
          <div className="container centered">
          <div className="row align-items-center">
            <div className="col-6 mx-auto col-md-6 order-md-2">
              <img className="img-fluid mb-3 mb-md-0 jumbotron-logo" src="/svg/logo.svg" alt="" width="1024" height="1024"/>
            </div>
            <div className="col-md-6 order-md-1 text-center text-md-left pr-md-5">
              <h1 className="mb-3 masthead"><span class="hydrogen-text">hydrogen</span></h1>
              <p className="lead">
                A themeable and moddable frontend for modern emulators.
              </p>
              <p className="lead mb-4">
                <span class="hydrogen-text">hydrogen</span> is an open source emulator frontend currently in development
                based on the <a href="https://snowflakepowe.red">Snowflake</a> framework and 
                built using Web technologies with <a href="https://electronjs.org/">Electron</a>. 
                
                Transform the way you play classic and modern games through its emulator auto-configuration and easy to pickup theming system.
              </p>
              <div className="d-flex flex-column flex-md-row lead mb-3">
                <a href="https://github.com/SnowflakePowered/hydrogenfe" className="btn btn-lg btn-outline-primary gh-btn">Coming Soon to <i class="fab fa-windows"></i> and <i class="fab fa-linux"></i></a>
              </div>
              <p className="text-muted mb-0 powered-by">
                Powered by <a href="https://snowflakepowe.red"><img className="img-fluid snowflake-logo" src="/svg/snowflake.svg" alt="" width="16" height="16"/></a>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
