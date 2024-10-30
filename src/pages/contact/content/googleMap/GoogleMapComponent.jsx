import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import pin from "../../../../assets/pin.png";

const AnyReactComponent = () => (
  <div
    style={{
      color: "white",
      //   background: "grey", // Commented out background color
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <img src={pin} alt="Icon" style={{ width: "100%", height: "auto" }} />
  </div>
);

class GoogleMapComponent extends React.Component {
  static defaultProps = {
    center: { lat: 6.53, lng: 3.36 },
    zoom: 11,
  };

  render() {
    return (
      <div style={{ width: "100%", height: "400px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD4MTAl6UAFSx2gGCMRPwDy8UWsCbveIY8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={6.535830253006408} lng={3.366019494729256} />
        </GoogleMapReact>
      </div>
    );
  }
}

GoogleMapComponent.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }),
  zoom: PropTypes.number.isRequired,
};

export default GoogleMapComponent;

{
  /* <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyD4MTAl6UAFSx2gGCMRPwDy8UWsCbveIY8", // Add your API key here
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
            
          <AnyReactComponent lat={6.535830253006408} lng={3.366019494729256} />
        </GoogleMapReact> */
}
