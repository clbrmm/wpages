import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import RestaurantIcon from '@material-ui/icons/Restaurant';
import BuildIcon from '@material-ui/icons/Build';
import BusinessIcon from '@material-ui/icons/Business';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/avatar.jpg";

import studio1 from "assets/img/examples/code01.jpg";
import studio2 from "assets/img/examples/code02.png";
import studio3 from "assets/img/examples/code03.png";
import studio4 from "assets/img/examples/code04.png";
import negocio01 from "assets/img/examples/negocios01.png";
import negocio02 from "assets/img/examples/negocios02.jpg";
import negocio03 from "assets/img/examples/negocios03.jpg";
import negocio04 from "assets/img/examples/negocios04.png";
import negocio05 from "assets/img/examples/negocios05.jpg";
import work1 from "assets/img/examples/eletricidade01.jpg";
import work2 from "assets/img/examples/eletricidade02.jpg";
import work3 from "assets/img/examples/eletricidade03.jpg";
import work4 from "assets/img/examples/eletricidade04.png";
import work5 from "assets/img/examples/eletricidade05.png";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="CLBRMMWEWB"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"  
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>CLEBER MENDES</h3>
                    <h6>ELETRICISTA</h6>
                    <Button justIcon link className={classes.margin5}
                    href="https://twitter.com/clbrmm"
                    target="_blank"
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Bem-vindo! 
                Essa é uma página de apresentação feita por min para divulgação dos principais trabalhos
                que tenho executado. <br></br>
                Com experiencia em serviços elétricos e de planejamento, no momento estou terminando as
                certificações importantes. <br></br>
                Com experiencia com códigos e páginas web e posso efetuar tarefas diversas relacionados a
                tecnologia da informação. <br></br>

              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Web Dev",
                      tabIcon: RestaurantIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Eletricidade",
                      tabIcon: BuildIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Negocios",
                      tabIcon: BusinessIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={negocio01}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={negocio02}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={negocio03}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={negocio05}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={negocio04}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
