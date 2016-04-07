 UserInterface = React.createClass({

  render() {
    return (
        <div>
        <div className="navbar navbar-default navbar-static-top">
          <div className="container ">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Ihealth</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="dashboard">Dashboard</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about">About</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container container-customer">
          <div className="text-center">
            <p className="lead"></p>
                <div className="row">
                    <CreateTicket/>
                </div>
            </div>
        </div>
        </div>


    );
  }
});
Template.userinterface.helpers({
    UserInterface() {
      return UserInterface;
    }
})
