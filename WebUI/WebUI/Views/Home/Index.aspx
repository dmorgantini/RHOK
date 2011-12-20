<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<WebUI.Models.RegisterViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Charity Click
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <head>
        <!--

  Please do not remove this informations or keep link back to me on the bottom of the site



  Theme name: Universum

  Author's name: Martin 'duno' Polacik

  Author's web: www.fromhell.eu

  Date created: 02.08.2010

  Time spent: 4 hours



  Licence and additional:

    - Free for Non-commercial use

    - Icons created by Martin 'duno' Polacik ONLY for this theme

    - All example images used in theme are royalty free images



  Please do not remove this informations or keep link back to me on the bottom of the site

/-->
        <!-- ENCODING /-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Language" content="EN" />
        <!-- ENCODING end /-->
        <!-- CACHE /-->
        <meta http-equiv="Cache-Control" content="must-revalidate, post-check=0, pre-check=0" />
        <meta http-equiv="Pragma" content="public" />
        <meta http-equiv="Cache-Control" content="no-cache" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="-1" />
        <!-- CACHE - end /-->
        <!-- ROBOTS /-->
        <meta name="robots" content="all,follow" />
        <meta name="googlebot" content="all,follow,snippet,archive" />
        <!-- ROBOTS end /-->
        <!-- KEYWORDS & CATEGORIES - /-->
        <meta name="description" content="page description" />
        <meta name="keywords" content="key words" />
        <!-- KEYWORDS & CATEGORIES - end /-->
        <!-- BROWSER SPECIFIC FEATURES = ALL OFF /-->
        <meta http-equiv="imagetoolbar" content="no" />
        <meta http-equiv="MSThemeCompatible" content="no" />
        <meta content="TRUE" name="MSSmartTagsPreventParsing" />
        <meta content="off" name="autosize" />
        <!-- BROWSER SPECIFIC FEATURES = end /-->
        <!-- FAVICON, CASCADING STYLE SHEETS and JAVASCRIPT /-->
        <link rel="shortcut icon" href="../../Content/images/favicon.ico" />
        <%--<link type="text/css" rel="stylesheet" href="style.css" media="all" />--%>
        <!-- CASCADING STYLE SHEETS and JAVASCRIPT - END/-->
    </head>
    <body>
        <div id="main_container">
            <!-- HEADER /-->
            <div id="header">
                <div id="logo">
                    <img src="../../Content/images/ChromeExtensionLogo.png" alt="" title=""  width ="80"/>
                    <h1>
                        Charity <span>Click</span><sup>1.0</sup></h1>
                </div>
                <div id="topmenu">
                    <ul>
                        <li>
                            <%: Html.ActionLink("Home", "Index", "Home")%>
                        </li>
                        <li>
                            <%: Html.ActionLink("Register your charity", "Edit", "Home")%>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="spotlite">
                <h2>
                    See charities to donate to on the hover of your mouse</h2>
                <h2>
                    How it works</h2>
                <p>
                    Charity Click detects charities registered with us whenever their name is mentioned
                    on any website. If an article or video inspires you and you'd like to help the charity
                    mentioned, simply mouse over the icon
                    <img src="../../Content/images/flying-heart-icon_16.png" />
                    and click "donate now" to be taken straight to the charity's secure donation page
                    or click "view charity information" to find out more about them.
                </p>
            </div>
            <div id="main_content">
                <div id="main-block">
                    <h2>
                        How to get started</h2>
                    <p>
                        Just click the "install to chrome". And the next time you see (insert icon) just
                        mouse over the icon and click straight to the charity donation page. It's that simple.
                    </p>
                    <a href="http://www.chromeextensions.org/wp-content/uploads/2011/12/charityclicks3.crx">
                        <img src="../../Content/images/AddChrome.png" alt="Install Chrome Extension Now" />
                        </a>
                    <p>
                        Please install Chrome Extension and See how it works.. <a href="http://www.guardian.co.uk/society/2011/dec/04/charities-welcome-cash-for-homes?INTCMP=SRCH"
                            target="_blank">charities-welcome-cash-for-homes</a> <a href="http://www.ted.com/speakers/sunitha_krishnan.html"
                                target="_blank">sunitha_krishnan Profile on Ted</a>
                    </p>

                    <a href="https://twitter.com/share" class="twitter-share-button" data-count="none" Text = "Charity Click">Tweet</a>
                    <script type="text/javascript" src="//platform.twitter.com/widgets.js">
                    </script>
                    <div>
                        <h2>
                            See example below 
                        </h2>
                        <img src="../../Content/images/Example2.png" />
                    </div>
                </div>
                <div style="clear: both;">
                </div>
            </div>
            <!--end of main content-->
            <div id="footer">
                <div class="footer-left">
                    <a href="#logo">
                        <img src="../../Content/images/flying-heart-icon_48.png" alt="" title="" />
                        </a>
                </div>
            </div>
            <div class="footer-copyright">
                <p>
                    Copyright ? 2010 YourPage.com. All Rights Reserved.</p>
                <p>
                    This site is: <a href="http://validator.w3.org/check?uri=referer">XHTML</a> and
                    <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> valid</p>
                <p>
                    Charity <span>Theme</span> 1.0 by: <a href="http://fromhell.eu/">Martin "duno" Polacik</a></p>
            </div>
        </div>
        <!--end of main container-->
    </body>
</asp:Content>
