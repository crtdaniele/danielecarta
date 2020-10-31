import React from 'react';
import {
  Title,
  Text,
  Row,
  Col,
  ExternalLink,
  Div,
  Avatar,
  Img,
} from '../../_shared/theme/components';
import { Styles } from './styles';
import DanieleCarta from '../../assets/img/daniele-carta.jpg';

const HomePage = () => {
  return (
    <Div style={Styles.positionAbosluteCenter}>
      <Row
        width="100%"
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Col width="600px" alignSelf="center">
          <Row alignItems="center" justifyContent="center">
            <Col size={4}>
              <Avatar>
                <Img fullWidth={true} src={DanieleCarta} />
              </Avatar>
            </Col>
            <Col size={8}>
              <Title variant="h1">Daniele Carta</Title>
              <Text>
                Software Engineer, React, React Native, Typescript and
                JavaScript
              </Text>
              <ExternalLink
                target="_blank"
                href="https://www.linkedin.com/in/daniele-carta-lugano/"
              >
                @LinkedIn
              </ExternalLink>
              <ExternalLink
                target="_blank"
                href="https://github.com/crtdaniele"
              >
                @Github
              </ExternalLink>
              <ExternalLink
                target="_blank"
                marginBottom="0px"
                href="https://www.linkedin.com/groups/8959815/"
              >
                @JavaScript Developers Italiani
              </ExternalLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Div>
  );
};

export default HomePage;
