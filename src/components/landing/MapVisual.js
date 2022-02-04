import React from "react";
import { MAP_MARKERS } from "../../images/map-markers";
import MAP_IMAGE from "../../images/homepage/brooklyMap.png";
import "../../styles/landing/MapVisual.css";

const MapVisual = () => {
  const markerIcons = MAP_MARKERS.map((marker) => <img key={marker.id} src={marker.img} alt={marker.id} />);
  const mapIcons = MAP_MARKERS.map((marker) => (
    <img className={marker.id} key={marker.id} src={marker.img} alt={marker.id} />
  ));

  return (
    <section class="map-section">
      <div class="map-section-heading">
        <h3>Find hidden food resources in your local community</h3>
        <p>Use our customized map to navigate between local food resources</p>
      </div>
      <div class="map-section-fruit-markers">
        <div class="fruit-marker-container">{markerIcons}</div>
        <div class="map-container">
          <div class="map-markers">{mapIcons}</div>
          <img class="map-img" src={MAP_IMAGE} alt="map of brooklyn" />
        </div>
      </div>
    </section>
  );
};

export default MapVisual;
