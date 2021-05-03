import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import ColorLensTwoToneIcon from '@material-ui/icons/ColorLensTwoTone';
import VerifiedUser from "@material-ui/icons/VerifiedUser";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>O que oferecemos?</h2>
          <h5 className={classes.description}>
            Uma maneira moderna e simples de divulgar o seu produto pela web.<br></br>
            Um serviço de qualidade e eficiente, para os mais diversos setores.<br></br>
            Desde um pequeno comercio até uma empresa grande, os benefícios
            de captar e manter clientes engajados com a plataforma são tem resultados surpreendentes.<br></br>
            Com muito pouco seu potencial de crescimento é exponencialmente maior.
            Confira alguns exemplos e alcance o seu sucesso!  
          
          </h5>       
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Design"
              description="Um elagante e customizado site para que seus clientes fiquem impressionados com o melhor."
              icon={ColorLensTwoToneIcon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Segurança"
              description="Serviço de segurança com HTTPS e todos as funções equivalentes para que tanto seu site e seus clientes fiquem tranuilos."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Preço"
              description="Economize, isso é importante, mesmo com um serviço de qualidade pode-se economizar bastante."
              icon={AttachMoneyTwoToneIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
