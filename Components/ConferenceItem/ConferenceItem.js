import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, Linking } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import s from "./ConferenceItemStyle";
import PropTypes from "prop-types";
import DateRange from "../DateRange/DateRange";
import Location from "../Location/Location";
import Topics from "../Topics/Topics";
import Twitter from "../Twitter/Twitter";
import { Divider } from "react-native-elements";

export default class ConferenceItem extends PureComponent {
  render() {
    const {
      name,
      country,
      city,
      topics,
      twitter,
      startDate,
      endDate,
      url
    } = this.props;
    return (
      <View>
        <View style={s.container}>
          <View style={s.innerContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Text style={s.title}>{name}</Text>
            </TouchableOpacity>
            <View style={s.iconedContainer}>
              <MaterialIcons name="location-on" color={"black"} size={20} />
              <Location country={country} city={city} />
            </View>
            <View style={s.iconedContainer}>
              <MaterialIcons
                name="lightbulb-outline"
                color={"black"}
                size={20}
              />
              <Topics topics={topics} />
              <Twitter twitter={twitter} />
            </View>
            <View style={s.iconedContainer}>
              <MaterialIcons name="event" color={"black"} size={20} />
              <DateRange startDate={startDate} endDate={endDate} />
            </View>
          </View>
        </View>
        <Divider />
      </View>
    );
  }
}

ConferenceItem.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
  twitter: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};
