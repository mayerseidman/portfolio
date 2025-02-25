import React, { Component, useEffect, useRef, useState } from "react";
import {
  NavLink,
  Routes,
  Link,
  useParams,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { withLoadState } from "../contexts/LoadStateContext";

// IMAGES
import image from "../../assets/images/misc/new-profile.png";
import finalImg from "../../assets/images/my-career/final-img.png";
import finalVersionData from "../../assets/images/data-center/final-version.gif";
import finalVersionWRLite from "../../assets/images/wr-lite/teacher-exercises.gif";
import finalVersionSunsets from "../../assets/images/sunsets-are-awesome/final-version.gif";
import fpgGIF from "../../assets/images/fpg.gif";
import dqGIF from "../../assets/images/dq.gif";
import transactionsGIF from "../../assets/images/transactions.gif";


import WorkOne from "./WorkOne";
import WorkTwo from "./WorkTwo";
import WorkThree from "./WorkThree";
import WorkMyCareer from "./WorkMyCareer";
import WorkDQ from "./WorkDQ";
import WorkTransactions from "./WorkTransactions";

import "../../assets/sass/works/works.scss";
import withRouter from "../../utils/WithRouter";

class Works extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.iconRef = React.createRef();
        this.imageRef = React.createRef();
        this.mainRef = React.createRef();
        // animations
        this.rightContainer = React.createRef();
        this.leftContainer = React.createRef();
        this.nameWrapper = React.createRef();
        this.textWrapper = React.createRef();
        this.delayedText = React.createRef();
        this.textWrapper = React.createRef();
        this.profileRef = React.createRef();
        this.imageContainer = React.createRef();
        // this.props = props
        this.state = {
            works: {
                "data-experience": {
                    title: "Data Experience",
                    description_one:
                    "A more robust and easy to use data experience to help teachers understand student progression",
                    type: "Research, Structure, Interaction, Visual",
                },
                "reading-comprehension-tool": {
                    title: "Reading Comprehension Tool",
                    description_one:
                    "A more intuitive and easier way for teachers to assign work in their classrooms",
                    type: "Research, Structure, Interaction, Visual, User Feedback",
                },
                "sunsets-are-awesome": {
                    title: "Sunsets are Awesome",
                    description_one:
                    "A fun project to keep you informed of the daily sunset forecast in your area.",
                    type: "Research, Structure, Interaction, Visual",
                },
                "my-career": {
                    title: "My Career",
                    description_one:
                    "A more inclusive and user-centric occupational exploration experience for individuals seeking career guidance",
                },
                "transactions-tracker": {
                    title: "Transactions Tracker",
                    description_one:
                    "A platform for case managers and admins to track and manage obligations and expenses through various stages",
                },
                "dynamic-querying": {
                    title: "Dynamic Querying",
                    description_one:
                    "Improving case manager effectiveness through an enhanced user record retrieval experience",
                },
                "fresh-prince-generator": {
                    title: "Fresh Prince Generator",
                    description_one:
                    "A fun project to keep you ....",
                },
            },
        };
    }
    componentDidMount() {
        this.props.context.updateLoaded();
        if (
            this.props.context.state.lastLocation !== null &&
            this.props.location.pathname === "/about"
        ) {
            this.imageContainer.current.classList.toggle("set-up-profile");
        }
        var delay = 1000;
        setTimeout(() => {
          // animations
            let textWrapper = this.textWrapper.current;
            textWrapper.classList.toggle("slide-down-works");
            if (this.props.location && this.props.location.pathname === "/about") {
                this.imageContainer.current.classList.toggle("animate-from-about");
            }
            this.props.context.setLastLocation(this.props.location);
        }, delay);
    }
    handleMenuClick() {
        const wrapper = this.wrapperRef.current;
        const icon = this.iconRef.current;
        const mainRef = this.mainRef.current;
        wrapper.classList.toggle("is-nav-open");
        icon.classList.toggle("is-nav-open");
        mainRef.classList.toggle("is-nav-open");
    }

    handleWork() {
        const image = this.imageRef.current;
        image.classList.toggle("blurred");
    }

    renderLeftContainer() {
        return (
            <div ref={this.leftContainer} className="left-container-works">
                <div ref={this.nameWrapper} className="my-name-works">
                    <span className="name-mayer">
                        <Link className="plain-link" to="/">Mayer.</Link>
                    </span>
                </div>
                <div ref={this.iconRef} className="nav-icon"
                    onClick={() => this.handleMenuClick()}>
                    <div></div>
                </div>
                <div className="float-dark-box"></div>
                <div className="float-dark-light"></div>
                <div className="float-dark-primary"></div>
                <div className="float-white-box"></div>
            </div>
        );
    }
    renderNav() {
        return (
            <div ref={this.wrapperRef} className="navigation-works">
                <p><NavLink className="nav-link" to="/work">Work</NavLink></p>
                <p><NavLink className="nav-link" to="/about">About</NavLink></p>
                <p>
                    <a className="nav-link" href="https://medium.com/design-ideas-thoughts"
                        target="_blank" rel="noreferrer">Writing
                    </a>
                </p>
            </div>
        );
    }
    renderRightContainer() {
        var dataWork = (
            <Link
                onClick={() => this.handleWork()}
                className="no-dec"
                to={`/work/data-experience`}>
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">Data Experience</p>
                        <p className="secondary-work-text">
                            A more robust and easy to use data experience to help teachers understand student progression
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={finalVersionData} alt="final-version" />
                    </div>
                </div>
            </Link>
        )
        var activitiesToolWork = (
            <Link
                onClick={() => this.handleWork()}
                className="no-dec"
                to={ `/work/reading-comprehension-tool`}>
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">
                        Reading Comprehension Tool
                        </p>
                        <p className="secondary-work-text">
                        A more intuitive and easier way for teachers to assign work in their classrooms
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={finalVersionWRLite} alt="final-version" />
                    </div>
                </div>
            </Link>
        )
        var sunsetsWork = (
            <Link
                onClick={() => this.handleWork()}
                className="no-dec sunsets"
                to={`/works/sunsets-are-awesome`}>
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">Sunsets are Awesome</p>
                        <p className="secondary-work-text">
                            Research, Structure, Interaction, Visual{" "}
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={finalVersionSunsets} alt="final-version" />
                    </div>
                </div>
            </Link>
        )
        // var sunsetsWork = (
        //   <Link
        //     onClick={() => this.handleWork()}
        //     className="no-dec sunsets"
        //     to={`/works/sunsets-are-awesome`}
        //   >
        //     <div className="each-work">
        //       <div className="work-text">
        //         <p className="main-work-text">Sunsets are Awesome</p>
        //         <p className="secondary-work-text">
        //           Research, Structure, Interaction, Visual{" "}
        //         </p>
        //       </div>
        //       <div className="work-image-wrapper">
        //         <img src={finalVersionSunsets} alt="final-version" />
        //       </div>
        //     </div>
        //   </Link>
        // )
        // var sunsetsWork = (
        //   <Link
        //     onClick={() => this.handleWork()}
        //     className="no-dec sunsets"
        //     to={`/works/sunsets-are-awesome`}
        //   >
        //     <div className="each-work">
        //       <div className="work-text">
        //         <p className="main-work-text">Sunsets are Awesome</p>
        //         <p className="secondary-work-text">
        //           Research, Structure, Interaction, Visual{" "}
        //         </p>
        //       </div>
        //       <div className="work-image-wrapper">
        //         <img src={finalVersionSunsets} alt="final-version" />
        //       </div>
        //     </div>
        //   </Link>
        // )
        // var sunsetsWork = (
        //   <Link
        //     onClick={() => this.handleWork()}
        //     className="no-dec sunsets"
        //     to={`/works/sunsets-are-awesome`}
        //   >
        //     <div className="each-work">
        //       <div className="work-text">
        //         <p className="main-work-text">Sunsets are Awesome</p>
        //         <p className="secondary-work-text">
        //           Research, Structure, Interaction, Visual{" "}
        //         </p>
        //       </div>
        //       <div className="work-image-wrapper">
        //         <img src={finalVersionSunsets} alt="final-version" />
        //       </div>
        //     </div>
        //   </Link>
        // )
        var myCareerWork = (
            <Link
                onClick={() => this.handleWork()}
                className="no-dec"
                to={`/work/my-career`}>
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">My Career</p>
                        <p className="secondary-work-text">
                            A more inclusive and user-centric occupational exploration experience for individuals seeking career guidance
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={ finalImg } alt="final-version" />
                    </div>
                </div>
            </Link>
        )
        var transactionsWork = (
            <Link
                onClick={() => this.handleWork()}
                className="no-dec"
                to={`/work/transactions-tracker`}>
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">Transactions Tracker</p>
                        <p className="secondary-work-text">
                        A platform for case managers and admins to track and manage obligations and expenses through various stages
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={ transactionsGIF } alt="final-version" />
                    </div>
                </div>
            </Link>
        )
        var dqWork = (
            <Link
                onClick={() => this.handleWork()}
                className="no-dec"
                to={`/work/dynamic-querying`}>
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">Dynamic Querying</p>
                        <p className="secondary-work-text">
                            Improving case manager effectiveness through an enhanced user record retrieval experience
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={ dqGIF } alt="final-version" />
                    </div>
                </div>
            </Link>
        )
        var fpgWork = (
            <a href="https://fresh-prince.vercel.app/"
                target ="_blank"
                className="no-dec">
                <div className="each-work">
                    <div className="work-text">
                        <p className="main-work-text">Fresh Prince Generator</p>
                        <p className="secondary-work-text">
                            Step back into the '90s and relive iconic one-liners from the beloved show
                        </p>
                    </div>
                    <div className="work-image-wrapper">
                        <img src={ fpgGIF } alt="final-version" />
                    </div>
                </div>
            </a>
        )
        return (
            <div ref={this.rightContainer} className="right-container-works">
                <div ref={this.mainRef} className="main-content">
                    <div className="main-empty-"></div>
                    <div className="main-text">
                        <div className="text-top"></div>
                        <div ref={this.textWrapper} className="text-container-works">
                            <p className="my-work mobileShow">Work.</p>
                            <div className="scrollable-container">
                                <div className="all-works">
                                    { myCareerWork }
                                    <div className="worker-separator"></div>
                                    { transactionsWork }
                                    <div className="worker-separator"></div>
                                    { dqWork }
                                    <div className="worker-separator"></div>
                                    { activitiesToolWork }
                                    <div className="worker-separator"></div>
                                    { dataWork }
                                    <div className="worker-separator"></div>
                                    { fpgWork }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-empty-2"></div>
                </div>
                { this.renderNav() }
            </div>
        );
    }
    renderImageContainer() {
        return (
            <div ref={this.profileRef} className="floating-profile-work">
                <div ref={this.imageContainer} className="profile-image-container">
                    <img
                        ref={this.imageRef}
                        alt="profile"
                        className="image-prof-works"
                        src={image} />
                </div>
                <div className="profile-image-blank"></div>
            </div>
        );
    }
    renderRouter() {
        return (
            <Routes>
                <Route
                path={`:workId`}
                element={<Work works={this.state.works} imageRef={this.imageRef} />}
                />
            </Routes>
        );
    }
    render() {
        return (
            <div className="wrapper">
                <div className="wrapper-main">
                    {this.renderLeftContainer()}
                    {this.renderRightContainer()}
                </div>
                {this.renderImageContainer()}
                {this.renderRouter()}
            </div>
        );
    }
}
function Work({ works, imageRef }) {
    let { workId } = useParams();
    let modalRef = useRef(null);
    let workDetailRef = useRef(null);
    let topRef = useRef(null);
    let goTopRef = useRef(null);
    let work = works[workId];
    let [isClose, setClose] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        workDetailRef.current.addEventListener("scroll", ({ target }) => {
            if (target.scrollTop >= 250 &&
                !topRef.current.classList.contains("hide")
            ) {topRef.current.classList.toggle("hide");
                goTopRef.current.classList.toggle("hide");
            } else if (target.scrollTop < 250 &&
                topRef.current.classList.contains("hide")
            ) {topRef.current.classList.toggle("hide");
                goTopRef.current.classList.toggle("hide");
            }
        });
        setTimeout(() => {
            modalRef.current.classList.toggle("is-modal-open");
        }, 50);
        let image = imageRef.current;
        if (isClose) {
            if (image.classList.contains("blurred")) {
                image.classList.toggle("blurred");
            }
            setTimeout(() => {
                navigate(-1);
                // history.push(
                //   history.location.pathname.split("/").slice(0, -1).join("/")
                // );
            }, 500);
        }
        // return clearTimeout(timer);
    }, [isClose, imageRef, navigate]);
    const handleClick = () => {
        let image = imageRef.current;
        if (image.classList.contains("blurred")) {
            image.classList.toggle("blurred");
        }
        setClose(true);
    };
    const handleScrollUp = () => {
        workDetailRef.current.scrollTo({ top: 0, behavior: "smooth" });
    };
    const goBack = () => {
        setClose(true);
    };
    let path = location.pathname;
    var content;
    if (path === "/work/data-experience") {
        let finalVersionImg = <img src={finalVersionData} alt="final-version" />;
        content = (
            <div ref={modalRef} className="modal-main">
                <div ref={workDetailRef} className="work-details">
                    <div ref={topRef} className="top-content">
                        <span
                          onClick={() => handleClick()}
                          className="close-modal"
                          to="/works"
                        >X
                        </span>
                    </div>
                <div
                    ref={goTopRef}
                    className="go-to-top hide"
                    onClick={() => handleScrollUp()}>↑ Go Up</div>
                <div className="first-content">
                    <div>
                        <p className="main-work-text">{work.title}</p>
                        <p className="source">
                            <a
                              href="https://www.whooosreading.org/"
                              target="_blank"
                              rel="noreferrer">
                                Whooo's Reading - a K-12 reading comprehension company
                            </a>
                        </p>
                        <p className="secondary-work-text">{work.description_one}</p>
                          {/*<p className="works-type">
                            <span>MY ROLE:</span> {work.type}
                          </p>
                          <p className="source">
                            <span>
                              <b>SOURCE:</b>
                            </span>{" "}
                            <a
                              href="https://www.whooosreading.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              www.whooosreading.org
                            </a>
                          </p>*/}
                        </div>
                        <div className="modal-img-one">{finalVersionImg}</div>
                    </div>
                    <WorkTwo />
                </div>
            </div>
        );
    } else if (path === "/work/reading-comprehension-tool") {
        var finalVersionImg = <img src={finalVersionWRLite} alt="final-version" />;
    content = (
        <div ref={modalRef} className="modal-main">
            <div ref={workDetailRef} className="work-details">
                <div ref={topRef} className="top-content">
                    <span
                      onClick={() => handleClick()}
                      className="close-modal"
                      to="/works"
                    >
                      X
                    </span>
                </div>
                <div
                    ref={goTopRef}
                    className="go-to-top hide"
                    onClick={() => handleScrollUp()}
                  >↑ Go Up
                </div>
                <div className="first-content">
                    <div>
                        <p className="main-work-text">{work.title}</p>
                        <p className="source">
                            <a
                              href="https://whooosreading.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Whooo's Reading - a K-12 reading comprehension company
                            </a>
                        </p>
                        <p className="secondary-work-text">{work.description_one}</p>
                          {/*<p className="works-type">
                            <span>MY ROLE:</span> {work.type}
                          </p>
                          <p className="source">
                            <b>SOURCE:</b>{" "}
                            <a
                              href="https://www.whooosreading.org"
                              target="_blank"
                              rel="noreferrer"
                            >
                              www.whooosreading.org
                            </a>
                          </p>*/}
                    </div>
                    <div className="modal-img-one">{finalVersionImg}</div>
                </div>
                <WorkOne />
            </div>
        </div>
    );
    } else if (path === "/works/sunsets-are-awesome") {
        let finalVersionImg = <img src={finalVersionSunsets} alt="final-version" />;
        content = (
            <div ref={modalRef} className="modal-main">
                <div ref={workDetailRef} className="work-details">
                    <div ref={topRef} className="top-content">
                        <span
                        onClick={() => handleClick()}
                        className="close-modal"
                        to="/works"
                        >
                          X
                        </span>
                  </div>
                  <div
                    ref={goTopRef}
                    className="go-to-top hide"
                    onClick={() => handleScrollUp()}
                  >
                    ↑ Go Up
                </div>
                <div className="first-content">
                    <div>
                        <p className="main-work-text">{work.title}</p>
                        <p className="secondary-work-text">{work.description_one}</p>
                        <p className="works-type">
                            <span>MY ROLE:</span> {work.type}
                        </p>
                        <p className="source">
                            <b>SOURCE:</b>{" "}
                            <a
                              href="https://sunsets-are-awesome.herokuapp.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                                sunsets-are-awesome.herokuapp.com
                            </a>
                        </p>
                    </div>
                    <div className="modal-img-three">{finalVersionImg}</div>
                </div>
            <WorkThree />
        </div>
      </div>
    );
    } else if (path === "/work/my-career") {
        let finalVersionImg = <img src={ finalImg } alt="final-version" />;
        content = (
            <div ref={modalRef} className="modal-main">
                <div ref={workDetailRef} className="work-details">
                    <div ref={topRef} className="top-content">
                        <span
                          onClick={() => handleClick()}
                          className="close-modal"
                          to="/works"
                        >
                          X
                        </span>
                    </div>
                <div
                    ref={goTopRef}
                    className="go-to-top hide"
                    onClick={() => handleScrollUp()}>
                    ↑ Go Up
                </div>
                <div className="first-content">
                    <div>
                        <p className="main-work-text">{work.title}</p>
                        <p className="source">
                            <a
                              href="https://www.pairin.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              PAIRIN - a workforce development solutions company
                            </a>
                        </p>
                        <p className="secondary-work-text">{work.description_one}</p>
                    </div>
                    <div className="modal-img-three">{ finalVersionImg }</div>
                </div>
                <WorkMyCareer />
            </div>
        </div>
    );
    } else if (path === "/work/fresh-prince-generator") {
        let finalVersionImg = <img src={finalVersionSunsets} alt="final-version" />;
            content = (
                <div ref={modalRef} className="modal-main">
                    <div ref={workDetailRef} className="work-details">
                        <div ref={topRef} className="top-content">
                        <span
                          onClick={() => handleClick()}
                          className="close-modal"
                          to="/works"
                        >
                          X
                        </span>
                    </div>
                <div
                    ref={goTopRef}
                    className="go-to-top hide"
                    onClick={() => handleScrollUp()}>
                        ↑ Go Up
                </div>
            <div className="first-content">
                <div>
                    <p className="main-work-text">{work.title}</p>
                    <p className="secondary-work-text">{work.description_one}</p>
                    <p className="works-type">
                        <span>MY ROLE:</span> {work.type}
                    </p>
                    <p className="source">
                        <b>SOURCE:</b>{" "}
                        <a
                          href="https://sunsets-are-awesome.herokuapp.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          sunsets-are-awesome.herokuapp.com
                        </a>
                    </p>
                </div>
                <div className="modal-img-three">{finalVersionImg}</div>
              </div>
                <WorkThree />
            </div>
        </div>
    );
    } else if (path === "/work/dynamic-querying") {
        let finalVersionImg = <img src={ dqGIF } alt="final-version" />;
        content = (
            <div ref={modalRef} className="modal-main">
                <div ref={workDetailRef} className="work-details">
                    <div ref={topRef} className="top-content">
                        <span
                          onClick={() => handleClick()}
                          className="close-modal"
                          to="/works"
                        >
                          X
                        </span>
                    </div>
                <div
                    ref={goTopRef}
                    className="go-to-top hide"
                    onClick={() => handleScrollUp()}>
                        ↑ Go Up
                </div>
                <div className="first-content">
                    <div>
                        <p className="main-work-text">{work.title}</p>
                        <p className="source">
                            <a
                              href="https://www.pairin.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              PAIRIN - a workforce development solutions company
                            </a>
                        </p>
                        <p className="secondary-work-text">{work.description_one}</p>
                    </div>
                    <div className="modal-img-three">{ finalVersionImg }</div>
                </div>
                <WorkDQ />
            </div>
        </div>
    );
    } else if (path === "/work/transactions-tracker") {
        let finalVersionImg = <img src={ transactionsGIF } alt="final-version" />;
            content = (
                <div ref={ modalRef } className="modal-main">
                    <div ref={ workDetailRef } className="work-details">
                        <div ref={ topRef } className="top-content">
                            <span
                              onClick={ () => handleClick() }
                              className="close-modal"
                              to="/works"
                            >
                              X
                            </span>
                        </div>
                    <div
                        ref={ goTopRef }
                        className="go-to-top hide"
                        onClick={ () => handleScrollUp() }
                    >
                        ↑ Go Up
                    </div>
                        <div className="first-content">
                            <div>
                                <p className="main-work-text">{ work.title }</p>
                                <p className="source">
                                    <a
                                    href="https://www.pairin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    >
                                    PAIRIN - a workforce development solutions company
                                    </a>
                                </p>
                                <p className="secondary-work-text">{ work.description_one }</p>
                            </div>
                        <div className="modal-img-three">{ finalVersionImg }</div>
                    </div>
                    <WorkTransactions />
                </div>
            </div>
        );
    }

    return (
        <div className="work-modal">
            <div className="left-modal">
            <div className="blurred-modal" onClick={ () => goBack() }></div>
                { content }
            </div>
        </div>
    );
}

export default withLoadState(withRouter(Works));
