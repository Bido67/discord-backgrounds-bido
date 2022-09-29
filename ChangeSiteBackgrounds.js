// ==UserScript==
// @name         Change website themes with javascript
// @namespace    http://tampermonkey.net/
// @version      0.8
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
    console.log(domain_name)
    switch (domain_name){
        case "edm.moodle.decclic.qc.ca":
        case "discord.com":
        case "google.com":
        case "bing.com":
        case "twitch.tv":
        case "facebook.com":
        case "twitter.com":
            element.style.opacity = 1;
            break;
        case "youtube.com":
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
        break;
        case "omnivox.ca":
            waitForKeyElements(".UlMobileTitre", () => {
                document.querySelectorAll(".UlMobileTitre").forEach((elem) => {
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

function SetBgColor(data, color, returnValue = true){
    waitForKeyElements(data, () => {
        document.querySelectorAll(data).forEach((elem) => {
            elem.style.backgroundColor = color
        })
        return true;
    })
}
function SetColor(data, color, returnValue = true){
    waitForKeyElements(data, () => {
        document.querySelectorAll(data).forEach((elem) => {
            elem.style.color = color
        })
        return true;
    })

}
function SetBgImage(data, image, returnValue = true){
    waitForKeyElements(data, () => {
        document.querySelectorAll(data).forEach((elem) => {
            elem.style.backgroundImage = image;
        })
        return true;
    })
}
async function RainbowColorVar(elem, root){
    let bodyy = document.querySelector('body');
    var r,g,b;
    var rTog, gTob, bTor;
    r = 255;
    g = 0
    b = 0
    rTog = true
    gTob = false;
    bTor = false;
    var increment = 1;
    var speed = 10;
    root.style.setProperty("--background-image", "linear-gradient(to bottom, var(--rgb2), var(--rgb3))")
    do {
        await new Promise((resolve, reject) => {
            if(rTog == true){
                r-=increment
                g+=increment
            }
            else if (gTob == true){
                g-=increment
                b+=increment
            }
            else if (bTor == true){
                b-=increment
                r+=increment
            }
            if (r >= 255){rTog = true; gTob = false; bTor = false; }
            if (g >= 255){rTog = false; gTob = true; bTor = false; }
            if (b >= 255){rTog = false; gTob = false; bTor = true; }
            root.style.setProperty("--rgb", "rgba("+r+","+g+","+b+", 255)")
            root.style.setProperty("--rgb2", "rgba("+g+","+b+","+r+", 255)")
            root.style.setProperty("--rgb3", "rgba("+b+","+r+","+g+", 255)")
            //elem.style.setProperty("--rgb", "rgba("+r+","+g+","+b+", 255)")
            setTimeout(resolve, speed);
        })
    } while(true);

}
