import * as React from 'react'
import LeftSide from "./LeftSide"
import { Col } from "react-bootstrap"
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Homepage extends React.Component {
  render() {
    return (
      <>
      <LeftSide />
      <Col md={8} className="right-side" style={{textAlign: "justify"}}>
        <h2>Hello, I'm Ujjwal Bhardwaj and I am a Software Development Engineer</h2>
    <p>I have experience in AWS Solutions Architecture and hold the following certifications</p>
    <ul>
      <li>AWS Certified Solutions Architect - Associate</li>
      <li>AWS Certified SysOps Administrator - Associate</li>
      <li>AWS Certified Developer - Associate</li>
    </ul>
    <p>I have contributed to open source projects with varying technology stacks. Most notably, I have added new features and fixed bug in the Amazon
      SageMaker Python SDK. It is a high level open source library for training and deploying machine-learned models on Amazon SageMaker. I participated in and successfully cleared Google Summer of Code under the mentoring organization FOSSASIA.
      I contributed to the development of a CI/CD project that continuously generates and deploy documentation on every commit to Github repositories. You can find details around the project&nbsp;<a href="https://gist.github.com/imujjwal96/3c794cc86f7d5467dc2f41ccee8788f3"
                                                                                                                                                                                                       target="_blank">here</a>.</p>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="imujjwal96"
          options={{height: 400}}
        />
    <footer className="hidden-md-down">© 2022 Ujjwal Bhardwaj. All Rights Reserved. (Source&nbsp;<a href="https://github.com/imujjwal96/ujjwalbhardwaj.me" target="_blank">code</a>)</footer>
      </Col>
    </>

    );
  }
}

export default Homepage
