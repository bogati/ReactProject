import React from "react";
class Footer extends React.Component {
  //create object to store styling information
  footerStyle = {
    height: "4%",
    width: "100%",
    color: "red",
    backgroundColor: "DodgerBlue",
    textAlign: "center",
    fontWeight: 800,
  };

  render() {
    return (
      <footer style={this.footerStyle}>
        <p>
          {" "}
          Thank you for shopping at FBI themed shop, we hope you will make our
          country proud !
        </p>
      </footer>
    );
  }
}

export default Footer;
