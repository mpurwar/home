/** Copyright 2022 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","jquery-idle-timer","jquery-cookie","purl","bootstrap","jquery-timepicker","jqueryHelper","knockoutjs","bootstrapGrid","bootstrap-markdown","customTextbox","windowHelper","bootstrapMarkdownHelper","languageCodes","misc","argumentNullError","browserHelper","resourceManager","navigationHighlighter","stringHelper"],function($,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t={};return t.textInputsDefaultMaxLength=500,t.sessionTimerCookieName=null,t.sessionTimedOutPageRelativePath="/Account/SessionTimedOut",t.loginPageRelativePath="/Account/LogOnOptions",t.getDOMRefs=function(){var a;t.goToTopButton=f.select(".kiku-go-to-top"),t.divMainBody=$("#divMainBody"),t.mainFooter=$("#kiku-main-footer"),t.divBrowserInstructions=$("#divBrowserInstructions"),t.hiddenAntiForgeryToken=$("#hiddenAntiForgeryToken"),a=$("#KIKU_SESSION_TIMER_COOKIE_NAME"),a&&!s.isStringNullOrWhiteSpace(a.val())&&(t.sessionTimerCookieName=a.val()),a=$("#KIKU_SESSIONTIMEOUT_PAGE_URL"),a&&!s.isStringNullOrWhiteSpace(a.val())&&(t.sessionTimedOutPageRelativePath=a.val()),(a=$("#KIKU_LOGIN_PAGE_URL"))&&!s.isStringNullOrWhiteSpace(a.val())&&(t.loginPageRelativePath=a.val())},t.initialize=function(a){if(!a)throw o.createInstance("languageOptions");$.ajaxSetup({cache:!1,headers:{RequestVerificationToken:this.hiddenAntiForgeryToken.val(),contentType:"application/json; charset=utf-8"}}),window.addEventListener("popstate",function(a){window.history.length>1&&window.location.reload(!0)}),$.fn.button&&$.fn.button.noConflict&&$.fn.button.noConflict(),q.getResourceStrings(a.getCurrentLanguageCode()),a.initialize(a.lblSelectedLanguage,a.divSelectedLanguage,a.divLanguageOptions),a.setDefaultLanguage(a.lblSelectedLanguage,a.divLanguageOptions),!1===p.areCookiesEnabledInBrowser()?this.divBrowserInstructions.show():this.divMainBody.show(),t.enableSmoothScrolling(),t.setWindowScroll(),t.initializeGoToTopButton(),t.initializeNavBar(),t.initializePreventBubbleBinding(),t.initializeAllMarkdownEditors(),t.initializeTimepickers(),t.initializeTextInputs(),t.hookLinkClicks(),j.initializeAll(),h.initializeAll(),t.adjustFooter(),t.initializeIdleTimer(),$(window).resize(t.adjustFooter)},t.adjustFooter=function(){t.mainFooter&&(t.mainFooter.show(),$("body").css("margin-bottom",t.mainFooter.height()+10))},t.enableSmoothScrolling=function(){f.select("a[href^=#]:not([href=#]):not([role='presentation'])").click(function(){t.onLinkClicked(this)})},t.onLinkClicked=function(a){var b,c;if(n.validateObjectParameter(a,"targetElement"),b=k.getLocationObject(),b.pathname.replace(/^\//,"")===a.pathname.replace(/^\//,"")&&b.hostname===a.hostname&&(c=$(a.hash),c=c.length?c:$("[name="+a.hash.slice(1)+"]"),c.hasClass("collapsed")&&c.click(),a.hash.slice(1)))return $("html,body").animate({scrollTop:c.offset().top},1e3),!0},t.hookLinkClicks=function(){$(document).on("click",".ko-markdown a, #divDialogBoxHtmlContent a",function(a){var b,c;b=$(a.currentTarget),b.attr("target")||(c=$.url(b.prop("href")),c.attr("host").toLowerCase()===window.location.hostname.toLowerCase()?b.removeAttr("target"):b.attr("target","_blank"))})},t.setWindowScroll=function(){f.getWindow().scroll(function(){t.onWindowScroll($(this))})},t.onWindowScroll=function(a){var b;n.validateObjectParameter(a),b=a.scrollTop(),b>30?t.goToTopButton.show():t.goToTopButton.hide()},t.initializeGoToTopButton=function(){t.goToTopButton.click(function(){f.scrollToTop()})},t.initializeNavBar=function(){$(".navbar .dropdown > a").click(function(){k.getLocationObject().href=this.href})},t.initializePreventBubbleBinding=function(){g.bindingHandlers.preventBubble={init:function(a,b){var c=g.utils.unwrapObservable(b());g.utils.registerEventHandler(a,c,function(a){a.cancelBubble=!0,a.stopPropagation&&a.stopPropagation()})}}},t.initializeAllMarkdownEditors=function(){f.select("textarea[data-provide='markdown']").each(function(){t.initializeMarkdownEditor($(this))})},t.initializeMarkdownEditor=function(a){var b=f.getCurrentCultureCode();a.markdown({language:m.getjQueryLanguageCode(b)}),l.initialize(a.closest(".md-editor"))},t.initializeTimepickers=function(){f.select("input.timepicker").timepicker({timeFormat:"H:i"})},t.initializeTextInputs=function(){f.select("input[type='text']").each(function(){this.getAttribute("maxlength")||(this.maxLength=+t.textInputsDefaultMaxLength)})},t.initializeIdleTimer=function(){t.sessionTimedOutPageRelativePath.toLowerCase()!==k.getLocationObject().pathname.toLowerCase()&&t.loginPageRelativePath.toLowerCase()!==k.getLocationObject().pathname.toLowerCase()&&f.isAuthenticatedUser()&&($.idleTimer(6e4),$(document).bind("idle.idleTimer",function(){if(f.isAuthenticatedUser()){var a=k.getLocationObject();if(t.sessionTimedOutPageRelativePath.toLowerCase()===a.pathname.toLowerCase()||t.loginPageRelativePath.toLowerCase()===a.pathname.toLowerCase())return void $.idleTimer("destroy");$.cookie(t.sessionTimerCookieName)||k.open(t.sessionTimedOutPageRelativePath+"?returnUrl="+encodeURIComponent(a.href)),$(document).idleTimer("reset")}}))},t});