<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<WebUI.Models.RegisterViewModel>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Register Your charity
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <script src="<%: Url.Content("~/Scripts/jquery.validate.min.js") %>" type="text/javascript"></script>
    <script src="<%: Url.Content("~/Scripts/jquery.validate.unobtrusive.min.js") %>"
        type="text/javascript"></script>
    <body>
        <div id="main_container">
            <!-- HEADER /-->
            <div id="header">
                <div id="logo">
                <img src="../../Content/images/ChromeExtensionLogo.png" alt="" title="" width ="80"/>
                    <h1>
                        Charity <span>Click</span><sup>1.0</sup></h1>
                </div>
                <div id="topmenu">
                    <ul>
                        <%--<li id="current"><a href="index.html" title="main page">home</a></li>--%>
                        <li>
                            <%: Html.ActionLink("Home", "Index", "Home")%>
                        </li>
                        <%--<li><a href="index.html" title="">Register your charity</a></li>--%>
                        <li>
                            <%: Html.ActionLink("Register your charity", "Edit", "Home")%>
                        </li>
                    </ul>
                </div>
            </div>
            <% using (Html.BeginForm())
               { %>
            <%: Html.ValidationSummary(true) %>
            <h2>It is free to register your charity with us.</h2>
                Please complete the form below. Once we have verified that you are a registered charity, and you have a secure payment system, your organisation will be added to our site and you’ll be able to enjoy seamless donations.
            <div id="spotlite">
                <fieldset>
                    <legend>Account Information</legend>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.CharityName) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.CharityName, new { style = "width:100px" })%>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.CharityRegisterationNumber) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.CharityRegisterationNumber)%>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.CharityWebsite) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.CharityWebsite)%>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.DirectDonateLink) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.DirectDonateLink)%>
                    </div>
                    <div class="editor-label">
                    <i>
                        <%: Html.LabelFor(m => m.SearchText)%> 
                        </i>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.SearchText)%>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.CharityLogo)%>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.CharityLogo)%> <input type="submit" value="Upload" /> <input type="submit" value="Register" />
                    </div>
                    <p>
                        
                    </p>
                </fieldset>
            </div>
            <% } %>
            <div>
                <%--<%: Html.ActionLink("Home Page", "Index") %>--%>
            </div>
        </div>
    </body>
</asp:Content>
