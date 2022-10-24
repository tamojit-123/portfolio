import React, { Component } from "react";
import devops from "../../assets/lottie/devops.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default class DevOpsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <DisplayLottie animationData={devops} />;
  }
}
