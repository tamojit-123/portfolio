import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Fade } from "react-reveal";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [
            PullRequestData["open"],
            PullRequestData["merged"],
            PullRequestData["closed"],
          ],
          backgroundColor: ["#86e0a2", "#a887e3", "#d97f87"],
          hoverBackgroundColor: ["#86e0a2", "#a887e3", "#d97f87"],
        },
      ],
    };

    return (
      <div class="pr-chart">
        <Fade bottom duration={2000} distance="20px">
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </Fade>
        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;
