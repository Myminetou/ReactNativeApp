import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function PeopleMarkers(props) {

  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.name}
      key={item.id.toString()}
      description={item.address}
    >
        <FontAwesome name="user" size={20} color="tomato" />
    </Marker>
  ));
}


