// ==UserScript==
// @name         Change website themes with javascript
// @namespace    http://tampermonkey.net/
// @version      0.6
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
// @require file:///C:/EdgeBackgroundImage/image.js
// @grant    GM_addStyle
// @grant    GM.getValue
//- The @grant directives are needed to restore the proper sandbox.
/* global $, waitForKeyElements, imageBase64Func */
// ==/UserScript==


(async function() {
    'use strict';

    let backColor = 'var(--backColorLight, #000000AA)';
    //'var(--backColorTransparent, #00000000)'
    let domain_name_array = window.location.href.replace("https://","").split("/")[0].split(".");
    let domain_name = domain_name_array[domain_name_array.length-2] + "." + domain_name_array[domain_name_array.length-1];

    /*if (window.location.href.toLowerCase().includes("mio")){
            domain_name = "mio"
}*/

    let element = document.querySelector('body');
    element.style.setProperty('--backColorLight', '#000000AA');
    element.style.setProperty('--backColorUltraLight', '#00000015');
    element.style.setProperty('--backColorTransparent', '#00000000');

    element.style.setProperty('--backgroundImageString', imageBase64Func());

    element.style.setProperty('--omivoxColorLightBlue', "#04AAF7")
    element.style.setProperty('--omivoxColorDarkBlue', "#284eb2")
    element.style.setProperty('--omivoxCardTransparencyColor', "#ffffff7f")
    //"#284eb2"
    //element.style.opacity = .75;
    let image = 'var(--backgroundImageString)';
    element.style.backgroundImage = image;
    element.style.backgroundSize= "cover";
    element.style.backgroundAttachment= "fixed";
    element.style.backgroundPosition= "center";
    console.log(domain_name)
    switch (domain_name){
        case "discord.com":
            element.style.opacity = .95;
            break;
        case "google.com":
             element.style.opacity = 1;
            //gAEtUb EIlDfe VfPpkd-Sx9Kwc-XuHpsb-pGuBYc
            SetBgImage(".gAEtUb", image, true)
            SetBgImage(".SSPGKf, .UFjXSc, .EIlDfe, .uOat3d", "none", false);
            SetBgColor(".aajZCb, .RNNXgb, .gNO89b, .RNmpXc", 'var(--backColorLight, #000000AA)', true)
            SetBgColor(".aRDKUe, .Lvwayc", 'var(--backColorLight, #000000AA)', true)
            SetBgColor(".EHzcec, .nz9sqb", 'var(--backColorLight, #000000AA)', true)
            SetBgColor("#gb", 'var(--backColorLight, #000000AA)', true)
            SetBgColor(".o3j99", 'var(--backColorLight, #000000AA)', true)
//
            break;
        case "youtube.com":
            var root = document.querySelector(":root");

            element.style.setProperty('--main-color', '#0000ff');
            element.style.setProperty('--main-text', '#adfaff');
            element.style.setProperty('--dimmer-text', '#ade7ff');

            element.style.setProperty('--main-background', 'var(--backgroundColorTransparent, #00000000)');
            element.style.setProperty('--second-background', 'var(--backColorLight, #000000AA)');
            element.style.setProperty('--hover-background', 'var(--backColorLight, #000000AA)');
            element.style.setProperty('--app-drawer-content-container-background-color', '#00000010');
            element.style.setProperty('--yt-spec-base-background', '#0000000f');
            element.style.setProperty('--yt-spec-brand-background-solid', '#00000020');
            element.style.setProperty('--yt-spec-brand-background-primary', 'var(--yt-spec-base-background, #00000020)');
            element.style.setProperty('--yt-spec-brand-background-secondary', 'var(--yt-spec-base-background, #00000020)');
            element.style.setProperty('--yt-spec-general-background-a', 'var(--yt-spec-base-background, #00000020)');
            element.style.setProperty('--yt-spec-general-background-b', 'var(--yt-spec-base-background, #00000020)');
            element.style.setProperty('--yt-spec-general-background-c', 'var(--yt-spec-base-background, #00000020)');

            //var rootDocument = document.querySelector('body');
            //rootDocument.style.setProperty('--blue', 'lightblue');

            waitForKeyElements("#efyt-background", () => {
                document.querySelectorAll("#efyt-background").forEach((elem) => {
                    elem.style.backgroundColor = 'var(--backgroundColorTransparent, #00000000)'
                })
            })
            waitForKeyElements("ytd-app", () => {
                document.querySelectorAll("ytd-app").forEach((elem) => {
                    elem.style.backgroundImage = image;
                    elem.style.backgroundSize= "cover";
                    elem.style.backgroundAttachment= "fixed";
                    elem.style.backgroundPosition= "center";
                })
            })
            break;
        case "bing.com":
            element.style.opacity = 1;
            waitForKeyElements("#id_n", () => {
                document.querySelectorAll("#id_n").forEach((elem) => {
                    elem.style.opacity = 0;
                });
            })

            SetBgColor(".b_algo", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_rrsr", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_ans", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".dcont", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".WordContainer", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_expDesk", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".dc_topSection", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_deeplinks_block_container",'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_footer", 'var(--backColorLight, #000000AA)', true);
            SetBgColor("#b_results>li", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_vList>li>a", 'var(--backColorLight, #000000AA)', true)
            waitForKeyElements("#b_results>li", () => {
                document.querySelectorAll("#b_results>li").forEach((elem) => {
                    elem.style.borderRadius = "6px"
                });
            })
            //.b_caption .captionMediaCard .b_imagePair.wide_wideAlgo
            SetBgColor(".b_caption, .captionMediaCard, .b_imagePair, .wide_wideAlgo", 'var(--backColorTransparent, #00000000)', true);
            SetBgColor(".b_searchboxForm", 'var(--backColorLight, #000000AA)', true);
            SetBgColor(".b_super_task_pane", 'var(--backColorLight, #000000AA)', true);
            break;
        case "twitch.tv":
            //simplebar-content
            waitForKeyElements(".simplebar-content", () => {
                document.querySelectorAll(".simplebar-content").forEach((elem) => {
                    elem.style.backgroundColor= 'var(--backColorTransparent, #00000000)';
                });
                //simplebar-scroll-content
                document.querySelectorAll(".simplebar-scroll-content").forEach((elem) => {
                    elem.style.backgroundColor= 'var(--backColorTransparent, #00000000)'
                });
            });
            element.style.opacity = 1;
            break;
        case "github.com":
            let githubbody = document.querySelector('body');
            githubbody.style.setProperty('--backColorLight', '#000000AA');
            githubbody.style.setProperty('--backColorTransparent', '#00000000');
            githubbody.style.setProperty('--backgroundImageString', imageBase64Func());
            githubbody.style.backgroundImage = image;
            githubbody.style.backgroundSize= "cover";
            githubbody.style.backgroundAttachment= "fixed";
            githubbody.style.backgroundPosition= "center";
            githubbody.style.opacity = 1;
            break;
        case "twitter.com":
            SetBgColor(".css-1dbjc4n",'var(--backColorUltraLight, #00000015)',true)
            element.style.opacity = 1;
            break;
        case "facebook.com":
            element.style.opacity = 1;
            break;
        case "omnivox.ca":
            console.log("sheesh")
            waitForKeyElements(".carousel-identification-sso", () => {
                document.querySelectorAll(".carousel-identification-sso").forEach((elem) => {
                    elem.style.opacity = 0;
                })
            })
            SetBgImage(".slider-portail-btn, .slider-portail-zone, .slider-portail-zone-next, .slider-portail-zone-previous", "none", false);
            /*waitForKeyElements(".slider-portail-btn", () => {
                document.querySelectorAll(".slider-portail-btn").forEach((btn) => {
                    btn.addEventListener('click', function() {
                        document.querySelectorAll(".slider-portail-zone").forEach((elem) => {
                            elem.style.backgroundImage = "none";
                        });
                        document.querySelectorAll(".slider-portail-zone-next").forEach((elem) => {
                            elem.style.backgroundImage = "none";
                        });
                        document.querySelectorAll(".slider-portail-zone-previous").forEach((elem) => {
                            elem.style.backgroundImage = "none";
                        });
                    }, false); // called on click
                });
            });*/
            SetBgImage(".wrapperFixed, #headerImage", "none", false);
            waitForKeyElements(".wrapperFixed", () => {
                document.querySelectorAll(".wrapperFixed").forEach((elem) => {
                    elem.style.backgroundColor= 'var(--backColorTransparent, #00000000)'
                });
                document.querySelectorAll("#headerImage").forEach((elem) => {
                    elem.style.backgroundImage = "none";
                });
                document.querySelectorAll("#spRightSize").forEach((elem) => {
                    elem.style.backgroundColor= 'var(--backColorTransparent, #00000000)'
                });
                document.querySelectorAll("#QuoiDeNeufsWrapper").forEach((elem) => {
                    elem.style.backgroundColor= 'var(--backColorTransparent, #00000000)'
                });
                document.querySelectorAll(".carte-portail").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxCardTransparencyColor, #ffffff7f)'
                })
            });
            waitForKeyElements(".card-panel", () => {
                document.querySelectorAll(".card-panel").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxCardTransparencyColor, #ffffff7f)';
                })
                return true;
            });
            waitForKeyElements("#headerNavbarProfileUserName", () => {
                document.querySelectorAll("#headerNavbarProfileUserName").forEach((elem) =>{
                    elem.style.opacity = 0;
                })
                return true;
            });
            waitForKeyElements("#headerImage", () => {
                document.querySelectorAll("#headerImage").forEach((elem) =>{
                    elem.style.backgroundImage = "none";
                    elem.style.background = "none";
                })
                return true;
            });
            waitForKeyElements(".carte-portail", () => {
                document.querySelectorAll(".carte-portail").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxCardTransparencyColor, #ffffff7f)'
                })
                document.querySelectorAll(".carte-evenement").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxCardTransparencyColor, #ffffff7f)'
                })
                document.querySelectorAll(".evenement-passe").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxCardTransparencyColor, #ffffff7f)'
                })

                document.querySelectorAll(".carte-portail-contenu").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxCardTransparencyColor, #ffffff7f)'
                })
                return true;
            });
            waitForKeyElements(".bgcouleur_ZZCR", () => {
                document.querySelectorAll(".bgcouleur_ZZCR").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxColorLightBlue, #04AAF7)'
                })
                document.querySelectorAll(".couleur_ZZCR").forEach((elem) =>{
                    elem.style.color = 'var(--omivoxColorLightBlue, #04AAF7)'
                })
                document.querySelectorAll(".bgcouleur_EVAL").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxColorDarkBlue, #284eb2)'
                })
                document.querySelectorAll(".couleur_EVAL").forEach((elem) =>{
                    elem.style.color = 'var(--omivoxColorDarkBlue, #284eb2)'
                })
                document.querySelectorAll(".ovx10_headerPart").forEach((elem) => {
                    elem.style.color = 'var(--omivoxColorDarkBlue, #284eb2)'
                })
                document.querySelectorAll(".aNavigationTab").forEach((elem) => {
                    elem.style.color = 'var(--omivoxColorDarkBlue, #284eb2)'
                })
                document.querySelectorAll(".ovx_sepClass").forEach((elem) => {
                    elem.style.color = 'var(--omivoxColorDarkBlue, #284eb2)'
                })
                //aNavigationTab ovx10_headerPart

            })
            waitForKeyElements(".selected", () => {
                document.querySelectorAll(".role").forEach((elem) =>{
                    elem.style.backgroundColor = "#ffffff"
                    elem.style.color = 'var(--omivoxColorLightBlue, #04AAF7)'
                })
                document.querySelectorAll(".selected").forEach((elem) =>{
                    elem.style.backgroundColor = 'var(--omivoxColorLightBlue, #04AAF7)'
                    elem.style.color = "#ffffff"
                })
                document.querySelectorAll(".role-2").forEach((elem) =>{
                    elem.style.borderRightColor = 'var(--omivoxColorLightBlue, #04AAF7)'
                })
                document.querySelectorAll(".role-3").forEach((elem) =>{
                    elem.style.borderLeftColor = 'var(--omivoxColorLightBlue, #04AAF7)'
                })
                document.querySelectorAll(".container-roles").forEach((elem) =>{
                    elem.style.borderColor = 'var(--omivoxColorLightBlue, #04AAF7)'
                })

                return true;

            })
            waitForKeyElements("#ovx10_wrap_actualites", () => {
                document.querySelectorAll("#ovx10_wrap_actualites").forEach((elem) => {
                    elem.style.opacity = 0;
                    elem.style.pointerEvents = "none";
                    elem.style.width = "0px";
                    elem.style.marginRight = "0px"
                })
            })
            //cntFormulaire_leaInfoTile
            waitForKeyElements("#cntFormulaire_mioInfoTile", () => {
                document.querySelectorAll("#cntFormulaire_mioInfoTile").forEach((elem) => {
                    elem.style.opacity = 0;
                    elem.style.pointerEvents = "none";
                    elem.style.width = "0px";
                    elem.style.height = "0px";
                    elem.style.marginRight = "0px"
                })
            })
            waitForKeyElements("#cntFormulaire_leaInfoTile", () => {
                document.querySelectorAll("#cntFormulaire_leaInfoTile").forEach((elem) => {
                    elem.style.opacity = 0;
                    elem.style.pointerEvents = "none";
                    elem.style.width = "0px";
                    elem.style.height = "0px";
                    elem.style.marginRight = "0px"
                })
            })
            //cntFormulaire_mioInfoTile
            waitForKeyElements(".UlMobileTitre", () => {
                document.querySelectorAll(".UlMobileTitre").forEach((elem) => {
                    elem.remove();
                })
            })
            //servInactif
            waitForKeyElements(".servInactif", () => {
                document.querySelectorAll(".servInactif").forEach((elem) => {
                    elem.style.opacity = 0;
                    elem.style.height = "0px";
                    elem.style.marginBottom = "0px";
                })
            })
            //selected
            waitForKeyElements(".slider-portail-zone-previous", () => {
                document.querySelectorAll(".slider-portail-zone-previous").forEach((elem) => {
                    elem.style.backgroundImage = "none";
                });
                return true;
            });
            waitForKeyElements("slider-portail-zone", () => {
                document.querySelectorAll(".slider-portail-zone").forEach((elem) => {
                    elem.style.backgroundImage = "none";
                });
                return true;
            });
            waitForKeyElements(".slider-portail-zone-next", () => {
                document.querySelectorAll(".slider-portail-zone-next").forEach((elem) => {
                    elem.style.backgroundImage = "none";
                });
                return true;
            });
            element.style.opacity = 1;
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
