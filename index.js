"use strict";
var scrollbarWidth = window.innerWidth - document.body.clientWidth,
    root = document.querySelector(":root");
root.style.setProperty("--viewport", "calc(100vw - ".concat(scrollbarWidth, "px)"));
var observer = lozad(".lozad", {
        rootMargin: "0px 0px 500px 0px",
        load: function(e) {
            e.src = e.dataset.src, e.onload = function() {
                e.classList.add("fade")
            }
        }
    }).observe(),
    imagesToSwap = [{
        DomElement: ".js-anim_1_section_4",
        desktopImage: "/images/s4/anim_1_section_4.svg",
        mobileImage: "/images/s4/anim_1_section_4_mobile.svg"
    }, {
        DomElement: ".js-anim_1_section_4_ch",
        desktopImage: "/images/s4/anim_1_section_4_ch.svg",
        mobileImage: "/images/s4/anim_1_section_4_mobile_ch.svg"
    }, {
        DomElement: ".js-anim_1_section_4_kr",
        desktopImage: "/images/s4/anim_1_section_4_kr.svg",
        mobileImage: "/images/s4/anim_1_section_4_mobile_kr.svg"
    }, {
        DomElement: ".js-anim_1_section_4_vi",
        desktopImage: "/images/s4/anim_1_section_4_vi.svg",
        mobileImage: "/images/s4/anim_1_section_4_mobile_vi.svg"
    }, {
        DomElement: ".js-s6-table",
        desktopImage: "/images/s6/s6_table_desktop.svg",
        mobileImage: "/images/s6/s6_table_mobile.svg"
    }, {
        DomElement: ".js-s6-table_ch",
        desktopImage: "/images/s6/s6_table_desktop_ch.svg",
        mobileImage: "/images/s6/s6_table_mobile_ch.svg"
    }, {
        DomElement: ".js-s6-table_kr",
        desktopImage: "/images/s6/s6_table_desktop_kr.svg",
        mobileImage: "/images/s6/s6_table_mobile_kr.svg"
    }, {
        DomElement: ".js-s6-table_vi",
        desktopImage: "/images/s6/s6_table_desktop_vi.svg",
        mobileImage: "/images/s6/s6_table_mobile_vi.svg"
    }, {
        DomElement: ".js-s9-chart",
        desktopImage: "/images/s9/s9_roadmap_desktop.svg",
        mobileImage: "/images/s9/s9_roadmap_mobile.svg"
    }, {
        DomElement: ".js-s9-chart_ch",
        desktopImage: "/images/s9/s9_roadmap_desktop_ch.svg",
        mobileImage: "/images/s9/s9_roadmap_mobile_ch.svg"
    }, {
        DomElement: ".js-s9-chart_kr",
        desktopImage: "/images/s9/s9_roadmap_desktop_kr.svg",
        mobileImage: "/images/s9/s9_roadmap_mobile_kr.svg"
    }, {
        DomElement: ".js-s9-chart_vi",
        desktopImage: "/images/s9/s9_roadmap_desktop_vi.svg",
        mobileImage: "/images/s9/s9_roadmap_mobile_vi.svg"
    }];

function handleImageSwap() {
    imagesToSwap.forEach((function(e) {
        var s = document.querySelector(e.DomElement);
        s && (window.matchMedia("(max-width: 768px)").matches ? (s.setAttribute("data-src", e.mobileImage), s.setAttribute("src", e.mobileImage)) : (s.setAttribute("data-src", e.desktopImage), s.setAttribute("src", e.desktopImage)))
    }))
}
window.addEventListener("resize", handleImageSwap, !1), handleImageSwap();
var ANIMATIONS = [{
    container: ".js-animation-1--desktop",
    path: "/animations/s1/anim_main.json"
}, {
    container: ".js-animation-1--mobile",
    path: "/animations/s1/anim_main.json"
}, {
    container: ".js-anim_1_section_2",
    path: "/animations/s2/anim_1_section_2.json"
}, {
    container: ".js-anim_2_section_2",
    path: "/animations/s2/anim_2_section_2.json"
}, {
    container: ".js-anim_3_section_2",
    path: "/animations/s2/anim_3_section_2.json"
}, {
    container: ".js-anim_1_section_3",
    path: "/animations/s3/anim_1_section_3.json"
}, {
    container: ".js-anim_2_section_3",
    path: "/animations/s3/anim_2_section_3.json"
}, {
    container: ".js-anim_s5_stones",
    path: "/animations/s5/stones.json"
}, {
    container: ".js-anim_s5_boomerang",
    path: "/animations/s5/boomerang.json"
}, {
    container: ".js-anim_s5_satellite",
    path: "/animations/s5/satellite.json"
}, {
    container: ".js-anim_s5_radar",
    path: "/animations/s5/radar.json"
}, {
    container: ".js-anim_1_section_7",
    path: "/animations/s7/anim_1_section_7.json"
}, {
    container: ".js-anim_1_section_8",
    path: "/animations/s8/anim_1_section_8.json"
}];
ANIMATIONS.forEach((function(e) {
    var s = e.container,
        a = e.path;
    return lottie.loadAnimation({
        container: document.querySelector(s),
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        path: a
    })
}));
var backdrop = document.querySelector(".backdrop"),
    modal = document.querySelector(".modal"),
    toggleModalButtonDesktop = document.querySelector(".js-toggle-modal-button-desktop"),
    toggleModalButtonMobile = document.querySelector(".js-toggle-modal-button-mobile"),
    closeModalButton = document.querySelector(".js-close-modal-button");

function closeModal() {
    modal && modal.classList.remove("modal__open"), backdrop.classList.remove("modal__open")
}

function openModal() {
    backdrop.classList.add("modal__open"), modal.classList.add("modal__open")
}
toggleModalButtonDesktop.addEventListener("click", openModal), toggleModalButtonMobile.addEventListener("click", openModal), closeModalButton.addEventListener("click", closeModal), backdrop.addEventListener("click", closeModal);