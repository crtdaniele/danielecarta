import React from 'react';
import {
  Row,
  Col,
  ExternalLink,
  Avatar,
  Img,
} from '../_shared/theme/components';
import { Div, Title, Text } from '../_shared/components';
import { Styles } from './styles';
import DanieleCarta from '../assets/img/daniele-carta.jpg';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Div style={Styles.positionAbosluteCenter}>
      <Row
        width="100%"
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Col width="600px" maxWidth="100%" alignSelf="center">
          <Row alignItems="center" justifyContent="center" collapse="xs">
            <Col size={4}>
              <Avatar>
                <Img fullWidth={true} src={DanieleCarta} />
              </Avatar>
            </Col>
            <Col size={8}>
              <Title variant="h1">{t('home.title')}</Title>
              <Text>{t('home.role')}</Text>
              <ExternalLink
                target="_blank"
                href="https://www.linkedin.com/in/daniele-carta-lugano/"
              >
                {t('social.linkedin')}
              </ExternalLink>
              <ExternalLink
                target="_blank"
                href="https://github.com/crtdaniele"
              >
                {t('social.github')}
              </ExternalLink>
              <ExternalLink
                target="_blank"
                marginBottom="0px"
                href="https://www.linkedin.com/groups/8959815/"
              >
                {t('social.communityJs')}
              </ExternalLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Div>
  );
};

export default HomePage;
