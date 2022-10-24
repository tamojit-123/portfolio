import "./Skills.css";

import React, {Component} from "react";
import {Fade} from "react-reveal";

import landingPerson from "../../assets/lottie/landingPerson";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skills} from "../../portfolio";

import CloudInfraImg from "./CloudInfraImg";
import DataScienceImg from "./DataScienceImg";
import DesignImg from "./DesignImg";
import DevOpsImg from "./DevOpsImg";
import FullStackImg from "./FullStackImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme = {
      props.theme
    } />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "DevOpsImg")
    return <DevOpsImg theme = {
      props.theme
    } />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <
      DesignImg theme =
      { props.theme
      } />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
      </div>
              </Fade>

      <div className = "skills-text-div"><Fade right duration = {1000}>
      <h1 className = "skills-heading" style = {{ color: theme.text }}>{
          skill.title}</h1>
                </Fade>
      <Fade right duration = {1500}>
      <SoftwareSkill logos =
       { skill.softwareSkills } />
                </Fade>
      <Fade right duration = {2000}><div> {skill.skills.map((skillSentence) => {
                      return (
                        <p
                      className = "subTitle skills-text"
                          style={{
        color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  }

  export default SkillSection;
