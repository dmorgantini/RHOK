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
                    <img src="../../Content/images/logo.png" alt="" title="" />
                    <h1>
                        <a href="index.html">Charity <span>Click</span><sup>1.0</sup></a></h1>
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
            <h2>
                Register your Charity Here</h2>
            <div id="spotlite">
                <fieldset>
                    <legend>Account Information</legend>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.UserName) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.UserName) %>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.RegisterationNumber) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.RegisterationNumber) %>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.CharityProfile) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.TextBoxFor(m => m.CharityProfile) %>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.TwitterID) %>
                    </div>
                    <div class="editor-field">
                        <%: Html.PasswordFor(m => m.TwitterID) %>
                    </div>
                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.DirectDonateLink)%>
                    </div>
                    <div class="editor-field">
                        <%: Html.PasswordFor(m => m.DirectDonateLink)%>
                    </div>
<%--                    <div class="editor-label">
                        <%: Html.LabelFor(m => m.CharityLogo)%>
                    </div>
                    <div class="editor-field">
                        <%: Html.PasswordFor(m => m.CharityLogo)%> <input type="submit" value="Upload" />
                    </div>
--%>                    <p>
                        <input type="submit" value="Register" />
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
