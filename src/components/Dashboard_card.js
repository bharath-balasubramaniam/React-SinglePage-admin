import React, { Component } from "react";
class Dashboardcard extends Component {
  render(props) {
    return (
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={this.props.place.card_class}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  {this.props.place.head}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {this.props.place.number}
                </div>
              </div>
              <div className="col-auto">
                <i className={this.props.place.i_class}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboardcard;
