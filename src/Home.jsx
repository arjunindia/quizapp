import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

export default function Home() {
    const ref = useRef();
    const [toggle, setToggle] = useState(false);
    let a = false;
    useEffect(() => {
        document.querySelectorAll(".sub-toggle").forEach(element => {
            element.addEventListener("click", () => {
                if (a === false) {
                    element.parentElement.querySelector(".sub-menu").style.display = "block"
                    a = true;
                } else {
                    element.parentElement.querySelector(".sub-menu").style.display = "none";
                    a = false
                }
            })
        });
    }, [])
    return (<div>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="profile" href="https://gmpg.org/xfn/11"/>
        <title>About Vimukthi – vimukthi</title>
        <link rel="dns-prefetch" href="https://s.w.org/"/>
        <link rel="alternate" type="application/rss+xml" title="vimukthi » Feed"
              href="https://vimukthi.kerala.gov.in/feed/"/>
        <link rel="alternate" type="application/rss+xml" title="vimukthi » Comments Feed"
              href="https://vimukthi.kerala.gov.in/comments/feed/"/>
        <style type="text/css"
               dangerouslySetInnerHTML={{__html: "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 .07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n"}}/>
        <link rel="stylesheet" id="wp-block-library-css"
              href="../wp-includes/css/dist/block-library/style.min.css@ver=5.5.11.css" type="text/css" media="all"/>
        <link rel="stylesheet" id="wp-block-library-theme-css"
              href="../wp-includes/css/dist/block-library/theme.min.css@ver=5.5.11.css" type="text/css" media="all"/>
        <link rel="stylesheet" id="crellyslider.min-css"
              href="../wp-content/plugins/crelly-slider/css/crellyslider.min.css@ver=1.4.3.css" type="text/css"
              media="all"/>
        <link rel="stylesheet" id="ditty-news-ticker-font-css"
              href="../wp-content/plugins/ditty-news-ticker/inc/static/libs/fontastic/styles.css@ver=2.2.17.css"
              type="text/css" media="all"/>
        <link rel="stylesheet" id="ditty-news-ticker-css"
              href="../wp-content/plugins/ditty-news-ticker/inc/static/css/style.css@ver=1600670764.css" type="text/css"
              media="all"/>
        <link rel="stylesheet" id="Total_Soft_Gallery_Video-css"
              href="../wp-content/plugins/gallery-videos/CSS/Total-Soft-Gallery-Video-Widget.css@ver=5.5.11.css"
              type="text/css" media="all"/>
        <link rel="stylesheet" id="fontawesome-css-css"
              href="../wp-content/plugins/gallery-videos/CSS/totalsoft.css@ver=5.5.11.css" type="text/css" media="all"/>
        <link rel="stylesheet" id="bwg_fonts-css"
              href="../wp-content/plugins/photo-gallery/css/bwg-fonts/fonts.css@ver=0.0.1.css" type="text/css"
              media="all"/>
        <link rel="stylesheet" id="sumoselect-css"
              href="../wp-content/plugins/photo-gallery/css/sumoselect.min.css@ver=3.0.3.css" type="text/css"
              media="all"/>
        <link rel="stylesheet" id="mCustomScrollbar-css"
              href="../wp-content/plugins/photo-gallery/css/jquery.mCustomScrollbar.min.css@ver=1.5.62.css"
              type="text/css" media="all"/>
        <link rel="stylesheet" id="bwg_frontend-css"
              href="../wp-content/plugins/photo-gallery/css/styles.min.css@ver=1.5.62.css" type="text/css" media="all"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"/>
        <link rel="stylesheet" id="flash-style-css" href="../wp-content/themes/flash/style.css@ver=5.5.11.css"
              type="text/css" media="all"/>
        <style id="flash-style-inline-css" type="text/css"
               dangerouslySetInnerHTML={{__html: "\n\n\t\t/* Site Title */\n\t\t.site-branding {\n\t\t\tmargin: 0 auto 0 0;\n\t\t}\n\n\t\t.site-branding .site-title,\n\t\t.site-description {\n\t\t\tclip: rect(1px, 1px, 1px, 1px);\n\t\t\tposition: absolute !important;\n\t\t\theight: 1px;\n\t\t\twidth: 1px;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t.logo .logo-text{\n\t\t\tpadding: 0;\n\t\t}\n\t\t\n"}}/>
        <link rel="stylesheet" id="child-style-css" href="../wp-content/themes/flash-child/style.css@ver=1.0.0.css"
              type="text/css" media="all"/>
        <link rel="stylesheet" id="font-awesome-css"
              href="../wp-content/themes/flash/css/font-awesome.min.css@ver=5.5.11.css" type="text/css"/>
        <link rel="stylesheet" id="responsive-css"
              href="../wp-content/themes/flash/css/responsive.min.css@ver=5.5.11.css" type="text/css"/>
        <link rel="stylesheet" id="pojo-a11y-css"
              href="../wp-content/plugins/pojo-accessibility/assets/css/style.min.css@ver=1.0.0.css" type="text/css"
              media="all"/>
        <link rel="EditURI" type="application/rsd+xml" title="RSD"
              href="https://vimukthi.kerala.gov.in/xmlrpc.php?rsd"/>
        <link rel="wlwmanifest" type="application/wlwmanifest+xml"
              href="https://vimukthi.kerala.gov.in/wp-includes/wlwmanifest.xml"/>
        <meta name="generator" content="WordPress 5.5.11"/>
        <link rel="canonical" href="index.html"/>
        <link rel="shortlink" href="https://vimukthi.kerala.gov.in/?p=548"/>
        <link rel="alternate" type="application/json+oembed"
              href="https://vimukthi.kerala.gov.in/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fvimukthi.kerala.gov.in%2Fabout-vimukthi%2F"/>
        <link rel="alternate" type="text/xml+oembed"
              href="https://vimukthi.kerala.gov.in/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fvimukthi.kerala.gov.in%2Fabout-vimukthi%2F&format=xml"/>
        <style dangerouslySetInnerHTML={{__html: ""}}/>
        <link rel="alternate" href="index.html" hrefLang="en"/>
        <link rel="alternate"
              href="https://vimukthi.kerala.gov.in/ml/%e0%b4%b5%e0%b4%bf%e0%b4%ae%e0%b5%81%e0%b4%95%e0%b5%8d%e0%b4%a4%e0%b4%bf%e0%b4%af%e0%b5%86-%e0%b4%95%e0%b5%81%e0%b4%b1%e0%b4%bf%e0%b4%9a%e0%b5%8d%e0%b4%9a%e0%b5%8d/"
              hrefLang="ml"/>
        <style type="text/css"
               dangerouslySetInnerHTML={{__html: ".recentcomments a{display:inline !important;padding:0 !important;margin:0 !important;}"}}/>
        <style type="text/css"
               dangerouslySetInnerHTML={{__html: "\n#pojo-a11y-toolbar .pojo-a11y-toolbar-toggle a{ background-color: #00854a;\tcolor: #ffffff;}\n#pojo-a11y-toolbar .pojo-a11y-toolbar-overlay, #pojo-a11y-toolbar .pojo-a11y-toolbar-overlay ul.pojo-a11y-toolbar-items.pojo-a11y-links{ border-color: #00854a;}\nbody.pojo-a11y-focusable a:focus{ outline-style: solid !important;\toutline-width: 1px !important;\toutline-color: #FF0000 !important;}\n#pojo-a11y-toolbar{ top: 50px !important;}\n#pojo-a11y-toolbar .pojo-a11y-toolbar-overlay{ background-color: #ffffff;}\n#pojo-a11y-toolbar .pojo-a11y-toolbar-overlay ul.pojo-a11y-toolbar-items li.pojo-a11y-toolbar-item a, #pojo-a11y-toolbar .pojo-a11y-toolbar-overlay p.pojo-a11y-toolbar-title{ color: #333333;}\n#pojo-a11y-toolbar .pojo-a11y-toolbar-overlay ul.pojo-a11y-toolbar-items li.pojo-a11y-toolbar-item a.active{ background-color: #4054b2;\tcolor: #ffffff;}\n@media (max-width: 767px) { #pojo-a11y-toolbar { top: 10px !important; } }"}}/>
        <link rel="icon" href="../wp-content/uploads/2018/12/logo1-4.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="../wp-content/uploads/2018/12/logo1-4.png"/>
        <meta name="msapplication-TileImage" content="/wp-content/uploads/2018/12/logo1-4.png"/>
        <style id="kirki-inline-styles" dangerouslySetInnerHTML={{__html: ""}}/>
        <div id="page" className="site">
            <a className="skip-link screen-reader-text" href="index.html#content">Skip to content</a>
            <header id="masthead" className="site-header" role="banner">
                <div className="header-top">
                    <div className="tg-container">
                        <div className="tg-column-wrapper clearfix">
                            <div className="left-content">
                                <p><a href="https://kerala.gov.in/" target="_blank" rel="noopener"><img
                                    className="alignnone size-full wp-image-1281"
                                    src="../wp-content/uploads/2019/05/govlogo.png" width={138} height={46}/></a> <a
                                    href="https://excise.kerala.gov.in/" target="_blank" rel="noopener"><img
                                    className="alignnone size-full wp-image-1301"
                                    src="../wp-content/uploads/2019/05/excicr.png" width={171} height={46}/></a></p>
                            </div>
                            <div className="right-content">
                                <div className="menu-social-container">
                                    <ul id="menu-social" className="social-menu">
                                        <li id="menu-item-1287"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1287">
                                            <a href="https://www.facebook.com/vimukthikerala"><span
                                                className="screen-reader-text">Facebook</span></a></li>
                                        <li id="menu-item-1288"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1288">
                                            <a href="https://www.youtube.com/channel/UCHhqjjzjVIb-k7D7xA13utw"><span
                                                className="screen-reader-text">youtube</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="tg-container">
                        <div className="logo">
                            <figure className="logo-image">
                                <a href="https://vimukthi.kerala.gov.in/" className="custom-logo-link" rel="home"><img
                                    width={200} height={75} src="../wp-content/uploads/2020/09/logo1-4.png"
                                    className="custom-logo" alt="logo"/></a></figure>
                            <div className="logo-text site-branding">
                                <p className="site-title"><a href="https://vimukthi.kerala.gov.in/"
                                                             rel="home">vimukthi</a></p>
                            </div>
                        </div>
                        <div className="site-navigation-wrapper">
                            <nav id="site-navigation" className="main-navigation" role="navigation">
                                <div className="menu-toggle" onClick={() => {
                                    setToggle((val) => !val);
                                }}>
                                    <i className="fa fa-bars"/>
                                </div>
                                <div className={`menu-top-container ${toggle ? "wow" : ""}`} ref={ref}>
                                    <ul id="primary-menu" className="menu">
                                        <li id="menu-item-64"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-64">
                                            <a href="https://vimukthi.kerala.gov.in/">Home</a></li>
                                        <li id="menu-item-512"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-512">
                                            <a href="#">About Us</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-550"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-548 current_page_item menu-item-550">
                                                    <a href="#" aria-current="page">About Vimukthi</a></li>
                                                <li id="menu-item-431"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-431">
                                                    <a href="https://vimukthi.kerala.gov.in/vision-mission/">Vision</a>
                                                </li>
                                                <li id="menu-item-434"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-434">
                                                    <a href="https://vimukthi.kerala.gov.in/mission-structure/">Mission
                                                        Structure</a></li>
                                            </ul>
                                            <span className="sub-toggle"> <i className="fa fa-angle-down"></i> </span>
                                        </li>
                                        <li id="menu-item-600"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-600">
                                            <a href="https://vimukthi.kerala.gov.in/programmes/">Programmes</a></li>
                                        <li id="menu-item-314"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-314">
                                            <a href="#">Services</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-448"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-448">
                                                    <a href="https://vimukthi.kerala.gov.in/counselling-centres/">Counselling
                                                        centres</a></li>
                                                <li id="menu-item-454"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-454">
                                                    <a href="https://vimukthi.kerala.gov.in/de-addiction-centres/">De-addiction
                                                        centres</a></li>
                                                <li id="menu-item-394"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-394">
                                                    <a href="https://vimukthi.kerala.gov.in/anti-drug-clubs/">Anti Drug
                                                        Clubs</a></li>
                                                <li id="menu-item-458"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-458">
                                                    <a href="https://vimukthi.kerala.gov.in/service-desk/">Service
                                                        Desk</a></li>
                                                <li id="menu-item-427"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427">
                                                    <a href="https://vimukthi.kerala.gov.in/ngos/">NGO’s</a></li>
                                            </ul>
                                            <span className="sub-toggle"> <i className="fa fa-angle-down"></i> </span>
                                        </li>
                                        <li id="menu-item-315"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-315">
                                            <a href="#">Resource</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-78"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-78">
                                                    <a href="#">Circular</a></li>
                                                <li id="menu-item-674"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-674">
                                                    <a href="https://vimukthi.kerala.gov.in/searc/">Hand Books</a></li>
                                                <li id="menu-item-466"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-466">
                                                    <a href="https://vimukthi.kerala.gov.in/trainers-manual/">Trainers
                                                        manual</a></li>
                                                <li id="menu-item-546"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-546">
                                                    <a href="https://vimukthi.kerala.gov.in/ppts/">PPT’S</a></li>
                                            </ul>
                                            <span className="sub-toggle"> <i className="fa fa-angle-down"></i> </span>
                                        </li>
                                        <li id="menu-item-513"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-513">
                                            <a href="#">Gallery</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-1431"
                                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1431">
                                                    <a href="https://vimukthi.kerala.gov.in/category/photo-gallery/">photo
                                                        gallery</a></li>
                                                <li id="menu-item-1311"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1311">
                                                    <a href="https://vimukthi.kerala.gov.in/media-scan/">Awareness
                                                        Posters And Troll</a></li>
                                            </ul>
                                            <span className="sub-toggle"> <i className="fa fa-angle-down"></i> </span>
                                        </li>
                                        <li id="menu-item-79"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-79">
                                            <a href="#">Contact Us</a>
                                            <ul className="sub-menu">
                                                <li id="menu-item-423"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-423">
                                                    <a href="https://vimukthi.kerala.gov.in/ceo-jec/">CEO &amp; JEC</a>
                                                </li>
                                                <li id="menu-item-422"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-422">
                                                    <a href="https://vimukthi.kerala.gov.in/district-offices/">District
                                                        Offices</a></li>
                                            </ul>
                                            <span className="sub-toggle"> <i className="fa fa-angle-down"></i> </span>
                                        </li>
                                        <li id="menu-item-724-ml"
                                            className="lang-item lang-item-8 lang-item-ml lang-item-first menu-item menu-item-type-custom menu-item-object-custom menu-item-724-ml">
                                            <a href="https://vimukthi.kerala.gov.in/ml/%e0%b4%b5%e0%b4%bf%e0%b4%ae%e0%b5%81%e0%b4%95%e0%b5%8d%e0%b4%a4%e0%b4%bf%e0%b4%af%e0%b5%86-%e0%b4%95%e0%b5%81%e0%b4%b1%e0%b4%bf%e0%b4%9a%e0%b5%8d%e0%b4%9a%e0%b5%8d/"
                                               hrefLang="ml-IN" lang="ml-IN" role="link">മലയാളം</a></li>
                                    </ul>
                                </div>
                            </nav>
                            {/* #site-navigation */}
                        </div>
                    </div>
                </div>
            </header>
            {/* #masthead */}
            <nav id="flash-breadcrumbs" className="breadcrumb-trail breadcrumbs">
                <div className="tg-container">
                    <h1 className="trail-title">About Vimukthi</h1>
                    <ul className="trail-items">
                        <li className="trail-item trail-begin"><a className="trail-home"
                                                                  href="https://vimukthi.kerala.gov.in"
                                                                  title="Home"><span>Home</span></a></li>
                        <li className="trail-item"><span>About Vimukthi</span></li>
                    </ul>
                </div>
            </nav>
            <div id="content" className="site-content">
                <div className="tg-container">
                    <div id="primary" className="content-area">
                        <main id="main" className="site-main" role="main">
                            <article id="post-548" className="post-548 page type-page status-publish hentry">
                                <div className="entry-content">
                                    <p style={{
                                        "WebkitTextAlign": "justify",
                                        "textAlign": "justify"
                                    }}>Alcohol/drug/substance abuse is becoming an increasing menace in our society.
                                        Vimukthi is an anti-narcotics campaign launched by the Government of Kerala to
                                        highlight the seriousness of the situation and to create awareness among the
                                        people, especially the youth. It is a collective effort aims at eradicating all
                                        sorts of narcotic substances from Kerala.</p>
                                    <p style={{"WebkitTextAlign": "justify", "textAlign": "justify"}}>It is being
                                        implemented with the help of students Police Cadets, Vimukthi Anti Drug Clubs of
                                        School and Colleges, National Service Scheme , Kudumbasree, Residence
                                        Association, State Library Council, and anti alcoholic organization, Different
                                        student, youth and Women’s organizations and Vimukthi Committees formed in Ward,
                                        Panchayat and Block levels of Local Bodies.</p>
                                    <p style={{"WebkitTextAlign": "justify", "textAlign": "justify"}}>Addiction free
                                        Kerala is the aim of this campaign drive. State wide campaigns to make students,
                                        youth and general public to aware of the evils of drug addiction and alcoholism
                                        is being conducted as part of the mission under Excise Department. A governing
                                        body with the chief minister as chairman and Minister for Excise as Vice
                                        Chairman is constituted in the apex level. Additional Chief Secretary Taxes is
                                        the Convener of the mission. Minister of Health, Local Self Government, Finance,
                                        Education, Trade, SC/ST and Fisheries is the member of the body. The Chief
                                        Secretary, President of Sports Council, Advocate General, President of Kerala
                                        Panchayat association and representatives from the field of sports , arts,
                                        Culture and literature will also be the members. There will be committees formed
                                        in wards at the District, Local Self Government levels. Drug Free State is the
                                        motto of the mission.</p>
                                    <p style={{"WebkitTextAlign": "justify", "textAlign": "justify"}}>We have started
                                        de-addiction centres in 14 districts along with hospitals of health department
                                        and counseling centres at Thiruvananthapuram, Ernakulam and Kozhikode to render
                                        the service of Psychologist and Sociologist to general public for counseling in
                                        drug abuse and alcoholic consumption in three zonal level.</p>
                                    <p><span style={{"fontSize": "14pt"}}><strong><em><span
                                        style={{"color": "#ff0000"}}><a style={{"color": "#ff0000"}}
                                                                        href="https://vimukthi.kerala.gov.in/wp-content/uploads/2021/11/1.pdf"><span
                                        style={{"fontSize": "12pt"}}>Vimukthi Formation GO</span></a></span></em></strong></span>
                                    </p>
                                    <p><span style={{"fontSize": "14pt"}}><strong><em><span
                                        style={{"color": "#ff0000"}}><a style={{"color": "#ff0000"}}
                                                                        href="https://vimukthi.kerala.gov.in/wp-content/uploads/2022/10/Vimukthi-Pledge.pdf"><span
                                        style={{"fontSize": "12pt"}}>Vimukthi Pledge</span></a></span></em></strong></span>
                                    </p>
                                    <p><span style={{"fontSize": "14pt"}}><strong><em><span
                                        style={{"color": "#ff0000"}}><Link style={{"color": "#ff0000"}} to="start"><span
                                        style={{"fontSize": "12pt"}}>Vimukthi Quiz</span></Link></span></em></strong></span>
                                    </p>
                                    <p><span style={{"fontSize": "14pt"}}><strong><em><span
                                        style={{"color": "#ff0000"}}><Link style={{"color": "#ff0000"}} to="goal"><span
                                        style={{"fontSize": "12pt"}}>Vimukthi Goal Challenge</span></Link></span></em></strong></span>
                                    </p>
                                    <p><span style={{"fontSize": "14pt"}}><strong><em><span
                                        style={{"color": "#ff0000"}}><Link style={{"color": "#ff0000"}} to="loginform"><span
                                        style={{"fontSize": "12pt"}}>Database</span></Link></span></em></strong></span>
                                    </p>
                                </div>
                                {/* .entry-content */}
                            </article>
                            {/* #post-## */}
                        </main>
                        {/* #main */}
                    </div>
                    {/* #primary */}
                </div>
                {/* .tg-container */}
            </div>
            {/* #content */}
            <footer id="colophon" className="footer-layout site-footer" role="contentinfo">
                <div id="bottom-footer">
                    <div className="tg-container">
                        {/*<div style="border-top: 1px solid #5a5c60; padding: 30px  40px;">*/}
                        <span style={{"color": "#fff", "fontSize": "14px"}}> © 2023. &nbsp;  vimukthi. &nbsp; All rights reserved. &nbsp; Designed and Maintained by </span><a
                        href="http://www.cdit.org" target="_blank"><span style={{
                        "color": "#caccac",
                        "fontFamily": "Arial",
                        "fontSize": "14px",
                        "fontWeight": "bold"
                    }}>CDIT</span></a></div>
                </div>
            </footer>
        </div>
        {/* #colophon */}
        <a href="index.html#masthead" id="scroll-up"><i className="fa fa-chevron-up"/></a>
        {/* #page */}

    </div>);
}