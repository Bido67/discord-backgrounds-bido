// ==UserScript==
// @name         Change website themes with javascript
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  This thing changes themes of sites with javascript.
// @author       Bido67
// @match        https://www.tampermonkey.net/index.php?version=4.16.1&ext=dhdg&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @updateURL  https://bido67.github.io/discord-backgrounds-bido/ChangeSiteBackgrounds.js
// @downloadURL  https://bido67.github.io/discord-backgrounds-bido/ChangeSiteBackgrounds.js
// @run-at   document-body
// @include  *
// @require  https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// @grant    GM.getValue
// @grant    GM.addElement
//- The @grant directives are needed to restore the proper sandbox.
/* global $, waitForKeyElements*/
// ==/UserScript==


(async function() {
    'use strict';
    let element = document.querySelector('body');
waitForKeyElements("body", () => {
//RainbowColorVar(element, document.querySelector(':root'));
     })
    let domain_name_array = window.location.href.replace("https://","").split("/")[0].split(".");
    let domain_name = document.domain;
    if(domain_name.includes("www.")){
    domain_name = domain_name.replace("www.","")
    }
    if(domain_name.includes("cegepmontpetit.")){
    domain_name = domain_name.replace("cegepmontpetit.","")
    }
    console.log(domain_name)
    switch (domain_name){
        case "discord.com":
            element.style.opacity = 1;
            var styleElement = document.createElement("link")
            styleElement.rel = "stylesheet"
            styleElement.href = "https://clearvision.github.io/ClearVision-v6/main.css"

            styleElement.type = "text/css"
            document.head.appendChild(styleElement)
            console.log("fuck")
            break;
        case "youtube.com":
        case "cdn.discordapp.com":
        case "studio.youtube.com":
        case "edm.moodle.decclic.qc.ca":
        case "google.com":
        case "bing.com":
        case "twitch.tv":
        case "facebook.com":
        case "twitter.com":
            element.style.opacity = 1;
            break;
        case "omnivox.ca":
            waitForKeyElements(".UlMobileTitre", () => {
                document.querySelectorAll(".UlMobileTitre").forEach((elem) => {
                    window.addEventListener("resize", ()=>{window.maxWidth = 0;})
                    elem.remove();
                })

            })
            waitForKeyElements("frameset", () => {
                console.log("Frameset LOADED")
                document.querySelectorAll("frameset").forEach((elem) => {
                    if (elem.parentElement.querySelector("body") == null && elem.rows == "140, *") { elem.parentElement.append(document.createElement("body"))}
                    if (elem.parentElement.querySelector("body") != null && elem.rows == "140, *") {
                        elem.parentElement.setAttribute("class", "FirstHTML")
                        elem.parentElement.querySelector("body").setAttribute("class", "backgroundBody")
                    }
                })
                waitForKeyElements("frame", () => {
                    document.querySelectorAll("frame#frGauche").forEach((elem) => {
                        if(elem.contentDocument.body.querySelector("div#header")!=null){
                            document.querySelector("frame#frGauche").contentDocument.querySelector("div#header>img").setAttribute("class","hidden")
                                waitForKeyElements("frame>frameset>frameset>frame#frGauche", () => {
                                    document.querySelector("frame#frGauche").contentDocument.activeElement.children.header.querySelector("img")
                                    /*elem.contentDocument.body.querySelectorAll("frame>frameset>frameset>frame#frGauche>div#header>img").forEach((subelem)=>{
                                    console.log("SUB ELEM",subelem)
                                    if(subelem.src.includes("/WebApplication/Module.MIOE/UI/Layout/Themes/Mio_equinox/images/MenuPrincipal_top1.jpg")){
                                        subelem
                                    }
                                })*/
                            })
                        }
                    })
                    return true;
                //document.querySelectorAll("img").forEach((elem)=>{if(elem.src.includes("/WebApplication/Module.MIOE/UI/Layout/Themes/Mio_equinox/images/MenuPrincipal_top1.jpg")){elem.setAttribute("class","hidden")}})
                })
            })
            //element.style.opacity = 1;
            break;
        default:
            element.style.opacity = .75;
            break;
    }


})();


