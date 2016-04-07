var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

DashboardFinal = React.createClass({

  componentWillMount: function(){

  },

  componentDidMount: function(){

  },

  render: function() {
    return (
        <div>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Dashboard</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="tickets">tickets</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about">About</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            <h1>tickets list</h1>
            <p className="lead">Waiting</p>
            <Dashboard/>
          </div>
        </div>
        </div>
    );
  }
});

Template.dashboardIhealth.helpers({
    DashboardFinal() {
      return DashboardFinal;
    }
})
