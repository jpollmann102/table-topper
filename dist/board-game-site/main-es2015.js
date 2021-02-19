(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Josh\Documents\Programming\board-game-site\board-game-site\src\main.ts */"zUnb");


/***/ }),

/***/ "2OMI":
/*!********************************************************!*\
  !*** ./src/app/game-details/game-details.component.ts ***!
  \********************************************************/
/*! exports provided: GameDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailsComponent", function() { return GameDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_overview_game_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-overview/game-overview.component */ "LA+k");
/* harmony import */ var _game_images_game_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-images/game-images.component */ "piqb");
/* harmony import */ var _game_listings_game_listings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game-listings/game-listings.component */ "ZrZm");
/* harmony import */ var _game_reviews_game_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game-reviews/game-reviews.component */ "bkkz");
/* harmony import */ var _game_related_game_related_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-related/game-related.component */ "4eN6");
/* harmony import */ var _game_credits_game_credits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./game-credits/game-credits.component */ "DF0w");











function GameDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Players:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Playtime:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Learning Curve:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Strategy Weight:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.activeTab = "nav-overview"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "User Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Amazon Rank:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Board Game Atlas Rank:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.activeTab = "nav-overview"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.activeTab = "nav-gallery"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Gallery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.activeTab = "nav-listings"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Listings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.activeTab = "nav-reviews"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.activeTab = "nav-related"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Related ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameDetailsComponent_div_1_Template_a_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.activeTab = "nav-credits"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Credits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "app-game-overview", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "app-game-images", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "app-game-listings", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "app-game-reviews", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "app-game-related", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "app-game-credits", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.game.images.medium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.game.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r1.game.year_published, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.game.primary_designer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.game.min_players, " - ", ctx_r1.game.max_players, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.game.min_playtime, " - ", ctx_r1.game.max_playtime, " minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 63, ctx_r1.game.average_learning_complexity, "1.2-2"), " / 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](29, 66, ctx_r1.game.average_strategy_complexity, "1.2-2"), " / 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.game.formattedDescription, ".. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](39, 69, ctx_r1.game.average_user_rating, "1.2-2"), " / 5 (", ctx_r1.game.num_user_ratings, " Ratings)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.game == null ? null : ctx_r1.game.amazon_rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.game.rank, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r1.activeTab == "nav-overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r1.activeTab == "nav-gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-listings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r1.activeTab == "nav-listings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r1.activeTab == "nav-reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-related");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r1.activeTab == "nav-related");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-selected", ctx_r1.activeTab == "nav-credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-overview")("show", ctx_r1.activeTab == "nav-overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", ctx_r1.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-gallery")("show", ctx_r1.activeTab == "nav-gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", ctx_r1.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-listings")("show", ctx_r1.activeTab == "nav-listings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", ctx_r1.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-reviews")("show", ctx_r1.activeTab == "nav-reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", ctx_r1.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-related")("show", ctx_r1.activeTab == "nav-related");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", ctx_r1.game);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.activeTab == "nav-credits")("show", ctx_r1.activeTab == "nav-credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", ctx_r1.game);
} }
class GameDetailsComponent {
    constructor(bgService, route) {
        this.bgService = bgService;
        this.route = route;
        this.activeTab = 'nav-overview';
        this.loading = true;
        this.somethingWentWrong = false;
        this.designers = [];
        this.first = true;
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.init();
            this.first = false;
        });
    }
    ngOnInit() {
    }
    init() {
        if (!history.state || !history.state.data || !this.first) {
            // have to get game by id
            this.getBoardgame();
        }
        else {
            // fix this for changing games url when history is there
            if (this.id == history.state.data.id) {
                this.game = history.state.data;
                console.log(this.game);
                this.formatDescription();
                this.loading = false;
            }
            else
                this.getBoardgame();
        }
    }
    getBoardgame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const game = yield this.bgService.getBoardgamesById([this.id]).toPromise();
            if (!game.games || game.games.length == 0) {
                this.somethingWentWrong = true;
                return;
            }
            else
                this.game = game.games[0];
            this.loading = false;
            this.formatDescription();
            console.log(this.game);
        });
    }
    formatDescription() {
        this.game.formattedDescription = this.game.description_preview.substring(0, 280);
    }
}
GameDetailsComponent.ɵfac = function GameDetailsComponent_Factory(t) { return new (t || GameDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
GameDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameDetailsComponent, selectors: [["app-game-details"]], decls: 2, vars: 2, consts: [["class", "d-flex justify-content-center", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "d-flex", "justify-content-left", "material-div"], [3, "src"], [1, "game-header"], [1, "d-flex", "align-items-baseline"], [1, "d-flex"], [1, "divider", "detail-cell", "top-border"], [1, "detail-cell", "top-border"], [3, "click"], [1, "detail-cell"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "tab", "data-toggle", "tab", "id", "nav-overview-tab", "aria-controls", "nav-overview", 1, "nav-item", "nav-link", 3, "click"], ["role", "tab", "data-toggle", "tab", "id", "nav-gallery-tab", "aria-controls", "nav-gallery", 1, "nav-item", "nav-link", 3, "click"], ["role", "tab", "data-toggle", "tab", "id", "nav-listings-tab", "aria-controls", "nav-listings", 1, "nav-item", "nav-link", 3, "click"], ["role", "tab", "data-toggle", "tab", "id", "nav-reviews-tab", "aria-controls", "nav-reviews", 1, "nav-item", "nav-link", 3, "click"], ["role", "tab", "data-toggle", "tab", "id", "nav-related-tab", "aria-controls", "nav-related", 1, "nav-item", "nav-link", 3, "click"], ["role", "tab", "data-toggle", "tab", "id", "nav-credits-tab", "aria-controls", "nav-credits", 1, "nav-item", "nav-link", 3, "click"], ["id", "nav-tabContent", 1, "tab-content"], ["role", "tabpanel", "id", "overview", "aria-labelledby", "nav-overview-tab", 1, "tab-pane", "material-div", "fade", "in", "show"], [1, "tab-content"], [3, "game"], ["role", "tabpanel", "id", "gallery", "aria-labelledby", "nav-gallery-tab", 1, "tab-pane", "material-div", "fade", "in", "show"], ["role", "tabpanel", "id", "listings", "aria-labelledby", "nav-listings-tab", 1, "tab-pane", "material-div", "fade", "in", "show"], ["role", "tabpanel", "id", "reviews", "aria-labelledby", "nav-reviews-tab", 1, "tab-pane", "material-div", "fade", "in", "show"], ["role", "tabpanel", "id", "related", "aria-labelledby", "nav-related-tab", 1, "tab-pane", "material-div", "fade", "in", "show"], ["role", "tabpanel", "id", "credits", "aria-labelledby", "nav-credits-tab", 1, "tab-pane", "material-div", "fade", "in", "show"]], template: function GameDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GameDetailsComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameDetailsComponent_div_1_Template, 81, 72, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _game_overview_game_overview_component__WEBPACK_IMPORTED_MODULE_5__["GameOverviewComponent"], _game_images_game_images_component__WEBPACK_IMPORTED_MODULE_6__["GameImagesComponent"], _game_listings_game_listings_component__WEBPACK_IMPORTED_MODULE_7__["GameListingsComponent"], _game_reviews_game_reviews_component__WEBPACK_IMPORTED_MODULE_8__["GameReviewsComponent"], _game_related_game_related_component__WEBPACK_IMPORTED_MODULE_9__["GameRelatedComponent"], _game_credits_game_credits_component__WEBPACK_IMPORTED_MODULE_10__["GameCreditsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 370px;\n  max-height: 370px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.game-header[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.material-div[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-right: 1px solid black;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  border-top: 1px solid black;\n}\n\n.detail-cell[_ngcontent-%COMP%] {\n  padding: 0px 5px 0px 5px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n.nav-item.nav-link[_ngcontent-%COMP%] {\n  border: none;\n  margin-bottom: -4px;\n  color: var(--text-color);\n  background-color: var(--primary-light);\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.19), 0px -3px 3px 0px rgba(0, 0, 0, 0.23) inset;\n}\n\n.nav-item.nav-link[_ngcontent-%COMP%]:hover {\n  border-bottom: 4px solid var(--text-color);\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.nav-item.nav-link.active[_ngcontent-%COMP%] {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-radius: 2px;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  border-bottom: 4px solid var(--primary);\n  color: var(--text-color);\n}\n\n.nav-item.nav-link.active[_ngcontent-%COMP%]:hover {\n  border-bottom: 4px solid var(--primary-dark);\n}\n\n.nav-item.nav-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n\n#nav-tab[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n#nav-tab.nav.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 4px solid var(--primary-light);\n}\n\n.tab-pane[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding: 15px 15px 25px 15px;\n}\n\np[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n\np[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--primary-light);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFBSyxrQkFBQTtBQUVMOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQUFBO0VBQWdCLGdCQUFBO0FBSWhCOztBQUZBO0VBQVcsNkJBQUE7QUFNWDs7QUFKQTtFQUFjLDJCQUFBO0FBUWQ7O0FBTkE7RUFBZSx3QkFBQTtBQVVmOztBQVJBO0VBQVksbUJBQUE7QUFZWjs7QUFWQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7RUFDQSwyRkFBQTtBQWFGOztBQVhFO0VBQ0UsMENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFWRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEVBQUE7RUFDQSx1Q0FBQTtFQUNBLHdCQUFBO0FBWUo7O0FBVkk7RUFDRSw0Q0FBQTtBQVlOOztBQVJFO0VBQUksbUJBQUE7QUFXTjs7QUFSQTtFQUNFLGdCQUFBO0FBV0Y7O0FBUkE7RUFDRSw2Q0FBQTtBQVdGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBV0Y7O0FBUkE7RUFDRSwyQkFBQTtBQVdGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7QUFXRiIsImZpbGUiOiJnYW1lLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWF4LXdpZHRoOiAzNzBweDtcclxuICBtYXgtaGVpZ2h0OiAzNzBweDtcclxufVxyXG5cclxuaDEgeyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxuXHJcbi5nYW1lLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWRpdiB7IG1hcmdpbi1sZWZ0OiAwcHg7IH1cclxuXHJcbi5kaXZpZGVyIHsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7IH1cclxuXHJcbi50b3AtYm9yZGVyIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XHJcblxyXG4uZGV0YWlsLWNlbGwgeyBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7IH1cclxuXHJcbi5uYXYtbGluayB7IHBhZGRpbmctYm90dG9tOiA1cHg7IH1cclxuXHJcbi5uYXYtaXRlbS5uYXYtbGluayB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IC00cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktbGlnaHQpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMTkpLCAwcHggLTNweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4yMykgaW5zZXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGEgeyBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XHJcbn1cclxuXHJcbiNuYXYtdGFiIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4jbmF2LXRhYi5uYXYubmF2LXRhYnMge1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxufVxyXG5cclxuLnRhYi1wYW5lIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDI1cHggMTVweDtcclxufVxyXG5cclxucCA+IGEge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxufVxyXG5cclxucCA+IGE6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "4eN6":
/*!*********************************************************************!*\
  !*** ./src/app/game-details/game-related/game-related.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameRelatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRelatedComponent", function() { return GameRelatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GameRelatedComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameRelatedComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "None found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameRelatedComponent_ng_container_5_p_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alikeGame_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", alikeGame_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", alikeGame_r4.images.small, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("title", alikeGame_r4.name);
} }
function GameRelatedComponent_ng_container_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameRelatedComponent_ng_container_5_p_1_a_1_Template, 3, 3, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alikeGame_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", alikeGame_r4.id != ctx_r3.game.id);
} }
function GameRelatedComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameRelatedComponent_ng_container_5_p_1_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.alikeGames);
} }
class GameRelatedComponent {
    constructor(bgService) {
        this.bgService = bgService;
        this.loading = true;
        this.alikeGames = [];
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes.game && changes.game.currentValue) {
            this.getAlikeBoardGames();
        }
    }
    getAlikeBoardGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.alikeGames = yield this.bgService.fuzzySearchBoardGame(this.game.name).toPromise();
            this.alikeGames = this.alikeGames.games;
            this.loading = false;
        });
    }
}
GameRelatedComponent.ɵfac = function GameRelatedComponent_Factory(t) { return new (t || GameRelatedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"])); };
GameRelatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameRelatedComponent, selectors: [["app-game-related"]], inputs: { game: "game" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [["class", "spinner-border", "role", "status", 4, "ngIf"], [4, "ngIf"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [4, "ngFor", "ngForOf"], [3, "src", "title"]], template: function GameRelatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Related Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameRelatedComponent_div_3_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameRelatedComponent_p_4_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GameRelatedComponent_ng_container_5_Template, 2, 1, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alikeGames.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.alikeGames.length > 0 && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: var(--primary);\n}\np[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLXJlbGF0ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQUVKIiwiZmlsZSI6ImdhbWUtcmVsYXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "5hVl":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return [""]; };
const _c3 = function () { return ["/discover"]; };
const _c4 = function () { return ["/about"]; };
class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 11, vars: 18, consts: [["id", "navbar"], [1, "navbar-heading"], [1, "list-group", "list-group-flush"], [3, "routerLinkActive", "routerLinkActiveOptions", "routerLink"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Table Topper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  width: 250px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  z-index: 999;\n  background: var(--primary-light);\n  color: #fff;\n  transition: all 0.3s;\n  font-size: 1.1em;\n}\n\n#navbar.toggled[_ngcontent-%COMP%] {\n  margin-left: -250px;\n}\n\n#navbar[_ngcontent-%COMP%]   .navbar-heading[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: var(--primary-dark);\n}\n\na[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-bottom: 1px solid var(--primary-dark);\n}\n\na[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFBRTtFQUNFLHFDQUFBO0FBRUoiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXIge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxufVxyXG5cclxuI25hdmJhci50b2dnbGVkIHtcclxuICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG59XHJcblxyXG4jbmF2YmFyIC5uYXZiYXItaGVhZGluZyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG59XHJcblxyXG5hIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbi8vICNuYXZiYXIge1xyXG4vLyAgIG1pbi13aWR0aDogMjUwcHg7XHJcbi8vICAgbWF4LXdpZHRoOiAyNTBweDtcclxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgdG9wOiAwO1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vICAgbWluLWhlaWdodDogMTAwdmg7XHJcbi8vICAgei1pbmRleDogOTk5O1xyXG4vLyAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4vLyAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDVweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbi8vICAgYm94LXNoYWRvdzogMXB4IDVweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbi8vICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgICNzaWRlYmFyIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbi8vICAgfVxyXG4vLyAgICNzaWRlYmFyLmFjdGl2ZSB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMDtcclxuLy8gICB9XHJcbi8vIH1cclxuLy9cclxuLy8gI25hdmJhci5hY3RpdmUge1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAtMjUwcHg7XHJcbi8vIH1cclxuLy9cclxuLy8gI25hdmJhciAubmF2YmFyLWhlYWRlciB7XHJcbi8vICAgcGFkZGluZzogMjBweDtcclxuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4vLyB9XHJcbi8vXHJcbi8vICNuYXZiYXIgdWwuY29tcG9uZW50cyB7XHJcbi8vICAgcGFkZGluZzogMTBweCAwO1xyXG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4vLyB9XHJcbi8vXHJcbi8vICNuYXZiYXIgdWwgcCB7XHJcbi8vICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vIH1cclxuLy9cclxuLy8gI25hdmJhciB1bCBsaSBhIHtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH1cclxuLy9cclxuLy8gI25hdmJhciB1bCBsaSBhOmhvdmVyIHtcclxuLy8gICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuLy8gICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuLy8gfVxyXG4vL1xyXG4vLyAjbmF2YmFyIHVsIGxpLmFjdGl2ZT5hIHtcclxuLy8gICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbi8vICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuLy8gfVxyXG4iXX0= */"] });


/***/ }),

/***/ "6Lwo":
/*!**************************************!*\
  !*** ./src/app/boardgame.service.ts ***!
  \**************************************/
/*! exports provided: BoardgameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardgameService", function() { return BoardgameService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class BoardgameService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
        this.responseCache = new Map();
        this.checkLocalStorage();
        window.onbeforeunload = () => this.cacheToStorage();
    }
    checkLocalStorage() {
        const responses = localStorage.getItem('ttr-responses');
        const now = new Date();
        if (responses) {
            this.responseCache = new Map(JSON.parse(responses));
            const dateCreated = new Date(this.responseCache.get('dateCreated'));
            const dayDiff = this.getDifferenceInDays(now, dateCreated);
            if (dayDiff < -1) {
                this.responseCache.set('dateCreated', now.toString());
                this.responseCache = new Map();
            }
        }
        else
            this.responseCache.set('dateCreated', now.toString());
    }
    getDifferenceInDays(d1, d2) {
        const timeDiff = d2.getTime() - d1.getTime();
        const dayDiff = timeDiff / (1000 * 3600 * 24);
        return dayDiff;
    }
    cacheToStorage() {
        const serialized = JSON.stringify(Array.from(this.responseCache.entries()));
        localStorage.setItem('ttr-responses', serialized);
    }
    getResponse(url) {
        const fromCache = this.responseCache.get(url);
        if (fromCache)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(fromCache);
        const response = this.http.get(url, { responseType: 'json' });
        response.subscribe(res => this.responseCache.set(url, res));
        return response;
    }
    getCuratedList() {
        const ids = ['i5Oqu5VZgP', 'on5IaANEQh', 'oGVgRSAKwX', 'VCoAcOrQX6', 'AuBvbISHR6', 'eh0GTvESIX', '9iBOPn3lES', 'j8LdPFmePE', 'XAI0dayGSY', 'guHWuXdRxQ', 'dgZDurgbuY'];
        const url = `${this.baseURL}/api/search?ids=${ids.join()}`;
        return this.getResponse(url);
    }
    getBoardgamesById(ids) {
        const url = `${this.baseURL}/api/search?ids=${ids.join()}`;
        return this.getResponse(url);
    }
    getBoardGameReviews(id, n = 8) {
        const url = `${this.baseURL}/api/reviews?game_id=${id}&include_game=false&include_summary=true&description_required=true&limit=${n}`;
        return this.getResponse(url);
    }
    getBoardGameImages(id, n = 30) {
        const url = `${this.baseURL}/api/game/images?game_id=${id}&include_game=false&limit=${n}`;
        return this.getResponse(url);
    }
    getBoardGamePrices(id) {
        const url = `${this.baseURL}/api/game/prices?game_id=${id}`;
        return this.getResponse(url);
    }
    getBoardGameVideos(id, n = 5) {
        const url = `${this.baseURL}/api/game/videos?game_id=${id}&include_game=false&limit=${n}`;
        return this.getResponse(url);
    }
    getHotBoardgames(n = 9) {
        const url = `${this.baseURL}/api/search?limit=${n}&order_by=reddit_week_count`;
        return this.getResponse(url);
    }
    getRandomBoardgame() {
        const url = `${this.baseURL}/api/search?&random=true`;
        return this.http.get(url, { responseType: 'json' });
        ;
    }
    getTopBoardgames(n = 9) {
        const url = `${this.baseURL}/api/search?limit=${n}&order_by=popularity`;
        return this.getResponse(url);
    }
    fuzzySearchBoardGame(name) {
        const url = `${this.baseURL}/api/search?name=${name}&fuzzy_match=true`;
        return this.getResponse(url);
    }
    getBoardgameImage(id) {
        const url = `${this.baseURL}/api/game/images?limit=5&include_game=false&game_id=${id}`;
        return this.getResponse(url);
    }
}
BoardgameService.ɵfac = function BoardgameService_Factory(t) { return new (t || BoardgameService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
BoardgameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BoardgameService, factory: BoardgameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 28, vars: 0, consts: [[1, "material-div"], ["href", "https://www.boardgameatlas.com/"], ["href", "https://github.com/jpollmann102/table-topper"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What is this site?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This site is a side project I made to work on showcasing my Angular skills and to develop its design and style over time. The site uses the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Board Game Atlas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " API to populate everything.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In the future, I am hoping to add some sort of machine learning for suggesting games based on browsing history and a user's discover queue, but not sure if/when that may come.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The source code for the frontend can be found on my Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "What does this site feature?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "The home page features three carousels, one for random games to hopefully help you discover new games, one for hot games based on discussions on Reddit, and one for the games with the highest vote counts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Every game has its own page where you can find more details on the game, an image and video gallery (if there are any available), current listings for the game, and related games and expansions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Limitations and Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "As of right now the site is not entirely optimized for smaller screens, which is my next priority. The discover queue is also on the short list, but there is no timetable for when that may come, along with game recommendation systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "If there is a feature you'd like to request, please reach out at joshpollmann102@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".material-div[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-left: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  color: blue;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFFSiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1kaXYge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "9N+/":
/*!*************************************************!*\
  !*** ./src/app/response-interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: ResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseInterceptor", function() { return ResponseInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ResponseInterceptor {
    constructor() { }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(evt => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"])
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(evt.body);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                console.log(error);
                $('#errorToast.toast').addClass('visible');
                $('#errorToast.toast').toast('show');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
        }));
    }
}
ResponseInterceptor.ɵfac = function ResponseInterceptor_Factory(t) { return new (t || ResponseInterceptor)(); };
ResponseInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ResponseInterceptor, factory: ResponseInterceptor.ɵfac });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseURL: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DF0w":
/*!*********************************************************************!*\
  !*** ./src/app/game-details/game-credits/game-credits.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameCreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCreditsComponent", function() { return GameCreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function GameCreditsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Publisher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.game.primary_publisher.name);
} }
function GameCreditsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.game.artists.join(", "));
} }
function GameCreditsComponent_div_2_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.game.names.join(", "));
} }
function GameCreditsComponent_div_2_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.game.tags.join(", "));
} }
function GameCreditsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Additional Names or Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameCreditsComponent_div_2_p_4_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameCreditsComponent_div_2_p_5_Template, 2, 1, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.game.names.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.game.tags.length > 0);
} }
class GameCreditsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameCreditsComponent.ɵfac = function GameCreditsComponent_Factory(t) { return new (t || GameCreditsComponent)(); };
GameCreditsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameCreditsComponent, selectors: [["app-game-credits"]], inputs: { game: "game" }, decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function GameCreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameCreditsComponent_div_0_Template, 6, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameCreditsComponent_div_1_Template, 6, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameCreditsComponent_div_2_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.primary_publisher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.artists.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.tags.length > 0 || ctx.game.names.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWNyZWRpdHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "LA+k":
/*!***********************************************************************!*\
  !*** ./src/app/game-details/game-overview/game-overview.component.ts ***!
  \***********************************************************************/
/*! exports provided: GameOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverviewComponent", function() { return GameOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mechanic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mechanic.service */ "QCtE");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category.service */ "rx/G");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GameOverviewComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.game.categories.join(", "));
} }
function GameOverviewComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "None listed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameOverviewComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.game.mechanics.join(", "));
} }
function GameOverviewComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "None listed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameOverviewComponent_h1_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Official Links");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameOverviewComponent_hr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function GameOverviewComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Publisher");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.game.official_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameOverviewComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r7.game.rules_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameOverviewComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Board Game Geek");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r8.bggLink(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GameOverviewComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Board Game Atlas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r9.game.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class GameOverviewComponent {
    constructor(mechanicService, catService) {
        this.mechanicService = mechanicService;
        this.catService = catService;
        this.catFilled = false;
        this.mechFilled = false;
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        if (changes.game && changes.game.currentValue)
            this.init();
    }
    init() {
        this.catFilled = false;
        this.mechFilled = false;
        this.catService.categoriesChange.subscribe(value => this.fillCategories(value));
        this.mechanicService.mechanicsChange.subscribe(value => this.fillMechanics(value));
        if (!this.catFilled)
            this.fillCategories(this.catService.categories);
        if (!this.mechFilled)
            this.fillMechanics(this.mechanicService.mechanics);
    }
    fillCategories(value) {
        this.catFilled = true;
        if (!this.game || !this.catService.categories)
            return;
        else if (this.game.categories[0] && typeof this.game.categories[0] === 'string')
            return;
        else {
            this.game.categories = this.game.categories.filter(x => x != null);
            this.game.categories = this.game.categories.map(x => x.name = value[x.id]);
        }
    }
    fillMechanics(value) {
        this.mechFilled = true;
        if (!this.game || !this.mechanicService.mechanics)
            return;
        else if (this.game.mechanics[0] && typeof this.game.mechanics[0] === 'string')
            return;
        else {
            this.game.mechanics = this.game.mechanics.filter(x => x != null);
            this.game.mechanics = this.game.mechanics.map(x => x.name = value[x.id]);
        }
    }
    bggLink() {
        if (!this.game)
            return '';
        return `https://boardgamegeek.com/boardgame/${this.game.bgg_id}`;
    }
}
GameOverviewComponent.ɵfac = function GameOverviewComponent_Factory(t) { return new (t || GameOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mechanic_service__WEBPACK_IMPORTED_MODULE_1__["MechanicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
GameOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameOverviewComponent, selectors: [["app-game-overview"]], inputs: { game: "game" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 24, vars: 11, consts: [[1, "row"], [1, "col-6"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function GameOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameOverviewComponent_p_10_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameOverviewComponent_p_11_Template, 3, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mechanics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GameOverviewComponent_p_16_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GameOverviewComponent_p_17_Template, 3, 0, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GameOverviewComponent_h1_18_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameOverviewComponent_hr_19_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GameOverviewComponent_a_20_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GameOverviewComponent_a_21_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GameOverviewComponent_a_22_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GameOverviewComponent_a_23_Template, 2, 1, "a", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.description_preview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.categories.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.categories.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.mechanics.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.mechanics.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.official_url || ctx.game.rules_url || ctx.game.bgg_id || ctx.game.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.official_url || ctx.game.rules_url || ctx.game.bgg_id || ctx.game.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.official_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.rules_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.bgg_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.game.url);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["a[_ngcontent-%COMP%] {\n  color: blue;\n  padding-right: 10px;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUFVLDBCQUFBO0FBR1oiLCJmaWxlIjoiZ2FtZS1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiBibHVlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Lp3I":
/*!**********************************************************************!*\
  !*** ./src/app/main-view/discover-games/discover-games.component.ts ***!
  \**********************************************************************/
/*! exports provided: DiscoverGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverGamesComponent", function() { return DiscoverGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-slideshow/game-slideshow.component */ "tJWg");





class DiscoverGamesComponent {
    constructor(bgService) {
        this.bgService = bgService;
        this.discoverGames = {};
    }
    ngOnInit() {
        this.getDiscoverGames();
    }
    getDiscoverGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let randomGames = [];
            for (let i = 0; i < 9; i++) {
                const thisRandomGame = yield this.bgService.getRandomBoardgame().toPromise();
                randomGames.push(thisRandomGame);
            }
            this.discoverGames.games = [];
            randomGames.forEach(x => {
                this.discoverGames.games.push(x.games[0]);
            });
        });
    }
}
DiscoverGamesComponent.ɵfac = function DiscoverGamesComponent_Factory(t) { return new (t || DiscoverGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"])); };
DiscoverGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DiscoverGamesComponent, selectors: [["app-discover-games"]], decls: 6, vars: 1, consts: [[1, "d-flex", "justify-content-start", "align-items-center"], ["routerLink", "/discover"], [3, "games"]], template: function DiscoverGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Discover");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "(Go to discover queue)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-game-slideshow", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("games", ctx.discoverGames);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["GameSlideshowComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\nh1[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkaXNjb3Zlci1nYW1lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtBQUVKO0FBRUE7RUFBSyxrQkFBQTtBQUVMIiwiZmlsZSI6ImRpc2NvdmVyLWdhbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbmgxIHsgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "OC0u":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _discover_games_discover_games_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover-games/discover-games.component */ "Lp3I");
/* harmony import */ var _top_games_top_games_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-games/top-games.component */ "xdZP");
/* harmony import */ var _hot_games_hot_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hot-games/hot-games.component */ "rBlP");




class MainViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainViewComponent.ɵfac = function MainViewComponent_Factory(t) { return new (t || MainViewComponent)(); };
MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainViewComponent, selectors: [["app-main-view"]], decls: 8, vars: 0, consts: [[1, "carousel"]], template: function MainViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-discover-games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-top-games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-hot-games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_discover_games_discover_games_component__WEBPACK_IMPORTED_MODULE_1__["DiscoverGamesComponent"], _top_games_top_games_component__WEBPACK_IMPORTED_MODULE_2__["TopGamesComponent"], _hot_games_hot_games_component__WEBPACK_IMPORTED_MODULE_3__["HotGamesComponent"]], styles: [".carousel[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJtYWluLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "QCtE":
/*!*************************************!*\
  !*** ./src/app/mechanic.service.ts ***!
  \*************************************/
/*! exports provided: MechanicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MechanicService", function() { return MechanicService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class MechanicService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
        this.responseCache = new Map();
        this.mechanicsChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mechanicsChange.subscribe((value) => {
            this.mechanics = value;
        });
        this.checkLocalStorage();
    }
    checkLocalStorage() {
        const mechanics = JSON.parse(localStorage.getItem('ttr-mechanics'));
        if (mechanics)
            this.createMechanics(mechanics);
        else
            this.getMechanics();
    }
    getResponse(url) {
        const fromCache = this.responseCache.get(url);
        if (fromCache)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fromCache);
        const response = this.http.get(url, { responseType: 'json' });
        response.subscribe(res => this.responseCache.set(url, res));
        return response;
    }
    convertToObject(arr) {
        return arr.reduce((obj, item) => (obj[item.id] = item.name, obj), {});
    }
    createMechanics(mechanics) {
        const asObj = this.convertToObject(mechanics.mechanics);
        this.mechanicsChange.next(asObj);
    }
    getMechanics() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/api/game/mechanics`;
            const mechanics = yield this.getResponse(url).toPromise();
            localStorage.setItem('ttr-mechanics', JSON.stringify(mechanics));
            this.createMechanics(mechanics);
        });
    }
}
MechanicService.ɵfac = function MechanicService_Factory(t) { return new (t || MechanicService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
MechanicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MechanicService, factory: MechanicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "oDk3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'board-game-site';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 0, consts: [[1, "wrapper"], ["id", "content"], [1, "d-flex", "justify-content-center"], ["href", "https://jpollmann102.github.io"], ["id", "errorToast", "role", "alert", "aria-live", "assertive", "aria-atomic", "true", 1, "toast"], [1, "toast-header"], [1, "mr-auto"], [1, "toast-body"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Site developed by Joshua Pollmann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "joshpollmann102@gmail.com - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "jpollmann102.github.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data provided by Board Game Atlas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "An Error Occurred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " An error occurred, and some data on the page may not load correctly. Try refreshing the page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n}\n\n#content[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n  padding: 10px 40px 40px 40px;\n  min-height: 100vh;\n  transition: all 0.3s;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#content.toggled[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  #navbar[_ngcontent-%COMP%] {\n    margin-left: -250px;\n  }\n\n  #navbar.toggled[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  #content.toggled[_ngcontent-%COMP%] {\n    width: calc(100% - 250px);\n  }\n}\n\n.toast[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  right: 0;\n  margin-top: 5px;\n  margin-right: 5px;\n  color: var(--text-color);\n}\n\n.toast.visible[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n\n.toast-header[_ngcontent-%COMP%] {\n  background-color: var(--primary-dark);\n  color: var(--text-color);\n}\n\n.toast-body[_ngcontent-%COMP%] {\n  background-color: var(--primary-light);\n}\n\nfooter[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  bottom: 0;\n  height: 135px;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  color: blue;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBQTtFQUNGOztFQUNBO0lBQ0UsY0FBQTtFQUVGOztFQUFBO0lBQ0UsV0FBQTtFQUdGOztFQURBO0lBQ0UseUJBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQUdGOztBQUZFO0VBQ0UsWUFBQTtBQUlKOztBQUFBO0VBQ0UscUNBQUE7RUFDQSx3QkFBQTtBQUdGOztBQUFBO0VBQ0Usc0NBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUFJSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgcGFkZGluZzogMTBweCA0MHB4IDQwcHggNDBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jY29udGVudC50b2dnbGVkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgI25hdmJhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xyXG4gIH1cclxuICAjbmF2YmFyLnRvZ2dsZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gICNjb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjY29udGVudC50b2dnbGVkIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNTBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4udG9hc3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAmLnZpc2libGUge1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG5cclxuLnRvYXN0LWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi50b2FzdC1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMzVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "UwgA":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _result_row_result_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result-row/result-row.component */ "eKq5");






function SearchResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SearchResultsComponent_div_3_app_result_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-result-row", 6);
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("game", game_r3);
} }
function SearchResultsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchResultsComponent_div_3_app_result_row_1_Template, 1, 1, "app-result-row", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.results);
} }
class SearchResultsComponent {
    constructor(bgService, route) {
        this.bgService = bgService;
        this.route = route;
        this.loading = true;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            let orderObj = Object.assign(Object.assign({}, params.keys), params);
            this.q = orderObj.params.q;
            this.searchGame();
        });
    }
    searchGame() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.results = yield this.bgService.fuzzySearchBoardGame(this.q).toPromise();
            this.results = this.results.games;
            this.loading = false;
        });
    }
}
SearchResultsComponent.ɵfac = function SearchResultsComponent_Factory(t) { return new (t || SearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchResultsComponent, selectors: [["app-search-results"]], decls: 4, vars: 3, consts: [["class", "d-flex justify-content-center", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [3, "game", 4, "ngFor", "ngForOf"], [3, "game"]], template: function SearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchResultsComponent_div_2_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchResultsComponent_div_3_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Results for \"", ctx.q, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _result_row_result_row_component__WEBPACK_IMPORTED_MODULE_5__["ResultRowComponent"]], styles: ["h3[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUssbUJBQUE7QUFFTCIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHsgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "5hVl");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-view/main-view.component */ "OC0u");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _main_view_hot_games_hot_games_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-view/hot-games/hot-games.component */ "rBlP");
/* harmony import */ var _main_view_top_games_top_games_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-view/top-games/top-games.component */ "xdZP");
/* harmony import */ var _main_view_discover_games_discover_games_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-view/discover-games/discover-games.component */ "Lp3I");
/* harmony import */ var _main_view_game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-view/game-slideshow/game-slideshow.component */ "tJWg");
/* harmony import */ var _main_view_game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-view/game-tile/game-tile.component */ "l9Am");
/* harmony import */ var _game_details_game_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./game-details/game-details.component */ "2OMI");
/* harmony import */ var _game_details_game_listings_game_listings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./game-details/game-listings/game-listings.component */ "ZrZm");
/* harmony import */ var _game_details_game_images_game_images_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game-details/game-images/game-images.component */ "piqb");
/* harmony import */ var _game_details_game_credits_game_credits_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./game-details/game-credits/game-credits.component */ "DF0w");
/* harmony import */ var _game_details_game_overview_game_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./game-details/game-overview/game-overview.component */ "LA+k");
/* harmony import */ var _game_details_game_images_media_slideshow_media_slideshow_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./game-details/game-images/media-slideshow/media-slideshow.component */ "yQEl");
/* harmony import */ var _game_details_game_listings_sortable_table_sortable_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./game-details/game-listings/sortable-table/sortable-table.component */ "boqf");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-results/search-results.component */ "UwgA");
/* harmony import */ var _search_results_result_row_result_row_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search-results/result-row/result-row.component */ "eKq5");
/* harmony import */ var _game_details_game_reviews_game_reviews_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./game-details/game-reviews/game-reviews.component */ "bkkz");
/* harmony import */ var _game_details_game_reviews_game_review_game_review_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./game-details/game-reviews/game-review/game-review.component */ "pe3g");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "oDk3");
/* harmony import */ var _game_details_game_related_game_related_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./game-details/game-related/game-related.component */ "4eN6");
/* harmony import */ var _discover_queue_discover_queue_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./discover-queue/discover-queue.component */ "jv+M");
/* harmony import */ var _response_interceptor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./response-interceptor.service */ "9N+/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _response_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["ResponseInterceptor"], multi: true }
    ], imports: [[
            angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_7__["MainViewComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        _main_view_hot_games_hot_games_component__WEBPACK_IMPORTED_MODULE_9__["HotGamesComponent"],
        _main_view_top_games_top_games_component__WEBPACK_IMPORTED_MODULE_10__["TopGamesComponent"],
        _main_view_discover_games_discover_games_component__WEBPACK_IMPORTED_MODULE_11__["DiscoverGamesComponent"],
        _main_view_game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_12__["GameSlideshowComponent"],
        _main_view_game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_13__["GameTileComponent"],
        _game_details_game_details_component__WEBPACK_IMPORTED_MODULE_14__["GameDetailsComponent"],
        _game_details_game_listings_game_listings_component__WEBPACK_IMPORTED_MODULE_15__["GameListingsComponent"],
        _game_details_game_images_game_images_component__WEBPACK_IMPORTED_MODULE_16__["GameImagesComponent"],
        _game_details_game_credits_game_credits_component__WEBPACK_IMPORTED_MODULE_17__["GameCreditsComponent"],
        _game_details_game_overview_game_overview_component__WEBPACK_IMPORTED_MODULE_18__["GameOverviewComponent"],
        _game_details_game_images_media_slideshow_media_slideshow_component__WEBPACK_IMPORTED_MODULE_19__["MediaSlideshowComponent"],
        _game_details_game_listings_sortable_table_sortable_table_component__WEBPACK_IMPORTED_MODULE_20__["SortableTableComponent"],
        _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_21__["SearchResultsComponent"],
        _search_results_result_row_result_row_component__WEBPACK_IMPORTED_MODULE_22__["ResultRowComponent"],
        _game_details_game_reviews_game_reviews_component__WEBPACK_IMPORTED_MODULE_23__["GameReviewsComponent"],
        _game_details_game_reviews_game_review_game_review_component__WEBPACK_IMPORTED_MODULE_24__["GameReviewComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"],
        _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_26__["TopBarComponent"],
        _game_details_game_related_game_related_component__WEBPACK_IMPORTED_MODULE_27__["GameRelatedComponent"],
        _discover_queue_discover_queue_component__WEBPACK_IMPORTED_MODULE_28__["DiscoverQueueComponent"]], imports: [angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "ZrZm":
/*!***********************************************************************!*\
  !*** ./src/app/game-details/game-listings/game-listings.component.ts ***!
  \***********************************************************************/
/*! exports provided: GameListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListingsComponent", function() { return GameListingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sortable_table_sortable_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable-table/sortable-table.component */ "boqf");





function GameListingsComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Historical Low: $", ctx_r0.historicalLow[0] == null ? null : ctx_r0.historicalLow[0].price, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r0.historicalLow[0] == null ? null : ctx_r0.historicalLow[0].date, "longDate"), "");
} }
class GameListingsComponent {
    constructor(bgService) {
        this.bgService = bgService;
        this.pricesMap = {
            'Store': 'store_name',
            'Price': 'price_text'
        };
        this.usPrices = [];
        this.ukPrices = [];
        this.caPrices = [];
        this.usedPrices = [];
        this.pricesTable = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.game && changes.game.currentValue) {
            this.getPrices(changes.game.currentValue.id);
        }
    }
    getPrices(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.prices = yield this.bgService.getBoardGamePrices(id).toPromise();
            this.prices = this.prices.gameWithPrices;
            this.usPrices = this.prices.us;
            this.ukPrices = this.prices.uk;
            this.caPrices = this.prices.canada;
            this.usedPrices = this.prices.used;
            if (this.game.historical_low_prices) {
                this.historicalLow = this.game.historical_low_prices.filter(x => x.country == 'US');
                if (this.historicalLow.length == 0)
                    this.historicalLow = null;
            }
            this.formatPrices();
        });
    }
    formatPrices() {
        this.usPrices.forEach(x => {
            x.low_price = this.game.price_text;
            x.used = false;
        });
        this.ukPrices.forEach(x => {
            x.low_price = this.game.price_uk;
            x.used = false;
        });
        this.caPrices.forEach(x => {
            x.low_price = this.game.price_ca;
            x.used = false;
        });
        this.usedPrices.forEach(x => {
            x.low_price = this.game.price_text;
            x.used = true;
        });
        this.pricesTable = this.usPrices.concat(this.ukPrices, this.caPrices, this.usedPrices);
    }
    onRowClick(event) {
        window.open(event[0].url, "_blank");
    }
}
GameListingsComponent.ɵfac = function GameListingsComponent_Factory(t) { return new (t || GameListingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"])); };
GameListingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameListingsComponent, selectors: [["app-game-listings"]], inputs: { game: "game" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "dataMap", "rows", "onRowClick"]], template: function GameListingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameListingsComponent_h4_2_Template, 3, 5, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-sortable-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onRowClick", function GameListingsComponent_Template_app_sortable_table_onRowClick_3_listener($event) { return ctx.onRowClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("MSRP: ", ctx.game.msrp_text, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.historicalLow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataMap", ctx.pricesMap)("rows", ctx.pricesTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sortable_table_sortable_table_component__WEBPACK_IMPORTED_MODULE_4__["SortableTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWxpc3RpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "bkkz":
/*!*********************************************************************!*\
  !*** ./src/app/game-details/game-reviews/game-reviews.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameReviewsComponent", function() { return GameReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "a0Xn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_review_game_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-review/game-review.component */ "pe3g");







function GameReviewsComponent_app_game_review_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-game-review", 2);
} if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("review", review_r1);
} }
class GameReviewsComponent {
    constructor(bgService) {
        this.bgService = bgService;
        this.ratings = [];
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Number of votes'
            },
            xAxis: {
                title: {
                    text: 'Rating'
                },
                categories: ['1', '2', '3', '4', '5']
            },
            yAxis: {
                title: {
                    text: 'Rating'
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [
                {
                    name: 'Number of votes',
                    type: 'bar',
                    color: '#1a237e',
                    dataLabels: {
                        enabled: true,
                        color: '#000000'
                    },
                    data: []
                }
            ]
        });
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.game && changes.game.currentValue) {
            this.getReviews(changes.game.currentValue.id);
        }
    }
    getReviews(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.reviews = yield this.bgService.getBoardGameReviews(id).toPromise();
            this.chart.addPoint(this.reviews.summary.one_star_count);
            this.chart.addPoint(this.reviews.summary.two_star_count);
            this.chart.addPoint(this.reviews.summary.three_star_count);
            this.chart.addPoint(this.reviews.summary.four_star_count);
            this.chart.addPoint(this.reviews.summary.five_star_count);
        });
    }
}
GameReviewsComponent.ɵfac = function GameReviewsComponent_Factory(t) { return new (t || GameReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_3__["BoardgameService"])); };
GameReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GameReviewsComponent, selectors: [["app-game-reviews"]], inputs: { game: "game" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "d-flex", "justify-content-middle", 3, "chart"], [3, "review", 4, "ngFor", "ngForOf"], [3, "review"]], template: function GameReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, GameReviewsComponent_app_game_review_1_Template, 1, 1, "app-game-review", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chart", ctx.chart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews == null ? null : ctx.reviews.reviews);
    } }, directives: [angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["ChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _game_review_game_review_component__WEBPACK_IMPORTED_MODULE_5__["GameReviewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLXJldmlld3MuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "boqf":
/*!***************************************************************************************!*\
  !*** ./src/app/game-details/game-listings/sortable-table/sortable-table.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SortableTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableTableComponent", function() { return SortableTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SortableTableComponent_th_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
} if (rf & 2) {
    const col_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.getColumnSorted(col_r2.name));
} }
function SortableTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableTableComponent_th_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const col_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.colClick(col_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SortableTableComponent_th_3_span_3_Template, 1, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", col_r2.sorted);
} }
function SortableTableComponent_tbody_4_tr_1_td_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Used)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SortableTableComponent_tbody_4_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortableTableComponent_tbody_4_tr_1_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const row_r8 = ctx_r14.$implicit; const i_r9 = ctx_r14.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.handleRowClicked(row_r8, i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SortableTableComponent_tbody_4_tr_1_td_1_span_3_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r8[ctx_r10.dataMap[col_r11]], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r8["used"] && col_r11 == "Price");
} }
function SortableTableComponent_tbody_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortableTableComponent_tbody_4_tr_1_td_1_Template, 4, 2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.colNames);
} }
function SortableTableComponent_tbody_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SortableTableComponent_tbody_4_tr_1_Template, 2, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.rowsToShow);
} }
class SortableTableComponent {
    constructor() {
        this.rows = [];
        this.dataMap = {};
        this.onRowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColSorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.colNames = Object.keys(this.dataMap);
        this.loading = false;
        this.sortedCol = -1;
        this.columns = [];
        this.sortedRows = [];
        this.rowsToShow = [];
    }
    ngOnInit() {
        this.setupData();
    }
    ngOnChanges(changes) {
        if ('rows' in changes)
            this.setupData();
    }
    setupData() {
        this.sortedRows = [...this.rows];
        this.rowsToShow = [...this.rows];
        this.colNames = Object.keys(this.dataMap);
        this.columns = this.colNames.map(x => {
            let newObj = { sorted: false, asc: false };
            newObj['name'] = x;
            return newObj;
        });
    }
    colClick(col) {
        const index = this.columns.map(function (e) { return e.name; }).indexOf(col);
        if (this.sortedCol === index) {
            // flip sort
            if (this.columns[index].asc) {
                this.columns[index].asc = false;
                this.sortColumn(index, false);
                this.rowsToShow = [...this.sortedRows];
                this.onColSorted.emit(true);
            }
            else
                this.undoSort();
        }
        else {
            // new sort
            if (this.sortedCol != -1)
                this.undoSort();
            this.columns[index].sorted = true;
            this.columns[index].asc = true;
            this.sortedCol = index;
            this.sortColumn(index, true);
            this.rowsToShow = [...this.sortedRows];
            this.onColSorted.emit(true);
        }
    }
    getColumnSorted(col) {
        const index = this.columns.map(function (e) { return e.name; }).indexOf(col);
        if (this.columns[index].asc)
            return 'bi bi-arrow-up';
        else
            return 'bi bi-arrow-down';
    }
    undoSort() {
        if (this.sortedCol > -1)
            this.columns[this.sortedCol].sorted = false;
        if (this.sortedCol > -1)
            this.columns[this.sortedCol].asc = false;
        this.sortedCol = -1;
        this.sortedRows = [...this.rows];
        this.onColSorted.emit(false);
    }
    sortColumn(index, asc) {
        const colName = this.columns[index].name;
        const mapName = this.dataMap[colName];
        if (asc)
            this.sortedRows.sort((a, b) => (a[mapName] > b[mapName]) ? 1 : -1);
        else
            this.sortedRows.sort((a, b) => (a[mapName] < b[mapName]) ? 1 : -1);
    }
    sortByDate(propName, asc) {
        let asDates;
        asDates = this.sortedRows.map(x => {
            x[propName] = new Date(x[propName]);
            return x;
        });
        if (asc)
            asDates.sort((a, b) => b[propName] - a[propName]);
        else
            asDates.sort((a, b) => a[propName] - b[propName]);
        this.sortedRows = asDates;
    }
    handleRowClicked(row, index) {
        this.onRowClick.emit([row, index]);
    }
}
SortableTableComponent.ɵfac = function SortableTableComponent_Factory(t) { return new (t || SortableTableComponent)(); };
SortableTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortableTableComponent, selectors: [["app-sortable-table"]], inputs: { rows: "rows", dataMap: "dataMap" }, outputs: { onRowClick: "onRowClick", onColSorted: "onColSorted" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [[1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "click"], [3, "class", 4, "ngIf"], [3, "click", 4, "ngFor", "ngForOf"]], template: function SortableTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SortableTableComponent_th_3_Template, 4, 2, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SortableTableComponent_tbody_4_Template, 2, 1, "tbody", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["th[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ntr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc29ydGFibGUtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxlQUFBO0FBRVo7O0FBREE7RUFBSyxlQUFBO0FBS0wiLCJmaWxlIjoic29ydGFibGUtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCA+IHNwYW4geyBjdXJzb3I6IHBvaW50ZXI7IH1cclxudHIgeyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuIl19 */"] });


/***/ }),

/***/ "eKq5":
/*!*******************************************************************!*\
  !*** ./src/app/search-results/result-row/result-row.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResultRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultRowComponent", function() { return ResultRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mechanic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mechanic.service */ "QCtE");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category.service */ "rx/G");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class ResultRowComponent {
    constructor(mechanicService, catService, router) {
        this.mechanicService = mechanicService;
        this.catService = catService;
        this.router = router;
        this.catFilled = false;
        this.mechFilled = false;
    }
    ngOnInit() {
        this.catService.categoriesChange.subscribe(value => this.fillCategories(value));
        this.mechanicService.mechanicsChange.subscribe(value => this.fillMechanics(value));
        if (!this.catFilled)
            this.fillCategories(this.catService.categories);
        if (!this.mechFilled)
            this.fillMechanics(this.mechanicService.mechanics);
    }
    fillCategories(value) {
        this.catFilled = true;
        if (!this.game || !this.catService.categories)
            return;
        else if (this.game.categories[0] && typeof this.game.categories[0] === 'string')
            return;
        else {
            this.game.categories = this.game.categories.filter(x => x != null);
            this.game.categories = this.game.categories.map(x => x.name = value[x.id]);
        }
    }
    fillMechanics(value) {
        this.mechFilled = true;
        if (!this.game || !this.mechanicService.mechanics)
            return;
        else if (this.game.mechanics[0] && typeof this.game.mechanics[0] === 'string')
            return;
        else {
            this.game.mechanics = this.game.mechanics.filter(x => x != null);
            this.game.mechanics = this.game.mechanics.map(x => x.name = value[x.id]);
        }
    }
    goToGame() {
        this.router.navigate(['/game', this.game.id], { state: { data: this.game } });
    }
}
ResultRowComponent.ɵfac = function ResultRowComponent_Factory(t) { return new (t || ResultRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mechanic_service__WEBPACK_IMPORTED_MODULE_1__["MechanicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ResultRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultRowComponent, selectors: [["app-result-row"]], inputs: { game: "game" }, decls: 36, vars: 15, consts: [[1, "row", 3, "click"], [1, "col-2"], [3, "src"], [1, "col-4"], [1, "span-row"], [1, "col-3"]], template: function ResultRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultRowComponent_Template_div_click_0_listener() { return ctx.goToGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mechanics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.game.images.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.game.year_published ? ctx.game.year_published : "No Year Listed", ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.primary_designer == null ? null : ctx.game.primary_designer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.game.min_players ? ctx.game.min_players : "Unknown", " - ", ctx.game.max_players ? ctx.game.max_players : "Unknown", " players");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.game.min_playtime ? ctx.game.min_playtime : "Unknown", " - ", ctx.game.max_playtime ? ctx.game.max_playtime : "Unknown", " minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 12, ctx.game.average_user_rating, "1.2-2"), " / 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Board Game Atlas Rank: ", ctx.game.rank, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.categories.join(", "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.game.mechanics.join(", "));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".span-row[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n\n.row[_ngcontent-%COMP%] {\n  padding: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.row[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  cursor: pointer;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 150px;\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXN1bHQtcm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVksa0JBQUE7QUFFWjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBSEU7RUFDRSwwRUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFLRiIsImZpbGUiOiJyZXN1bHQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYW4tcm93IHsgbWFyZ2luLXJpZ2h0OiAxNXB4OyB9XHJcbi5yb3cge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLDAsMCwwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbmltZyB7XHJcbiAgbWF4LWhlaWdodDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "jv+M":
/*!************************************************************!*\
  !*** ./src/app/discover-queue/discover-queue.component.ts ***!
  \************************************************************/
/*! exports provided: DiscoverQueueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverQueueComponent", function() { return DiscoverQueueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DiscoverQueueComponent {
    constructor() { }
    ngOnInit() {
    }
}
DiscoverQueueComponent.ɵfac = function DiscoverQueueComponent_Factory(t) { return new (t || DiscoverQueueComponent)(); };
DiscoverQueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscoverQueueComponent, selectors: [["app-discover-queue"]], decls: 2, vars: 0, template: function DiscoverQueueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3Zlci1xdWV1ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "l9Am":
/*!************************************************************!*\
  !*** ./src/app/main-view/game-tile/game-tile.component.ts ***!
  \************************************************************/
/*! exports provided: GameTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameTileComponent", function() { return GameTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class GameTileComponent {
    constructor(bgService, router) {
        this.bgService = bgService;
        this.router = router;
    }
    ngOnInit() {
    }
    goToGame() {
        this.router.navigate(['/game', this.game.id], { state: { data: this.game } });
    }
}
GameTileComponent.ɵfac = function GameTileComponent_Factory(t) { return new (t || GameTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_1__["BoardgameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GameTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameTileComponent, selectors: [["app-game-tile"]], inputs: { game: "game" }, decls: 3, vars: 2, consts: [[1, "card", 3, "click"], [1, "card-image", "d-flex", "justify-content-center", "align-items-middle"], [3, "src", "title"]], template: function GameTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameTileComponent_Template_div_click_0_listener() { return ctx.goToGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.game.images.large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx.game.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLXRpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "oDk3":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TopBarComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopBarComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_ng_container_12_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const game_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.goToGame(game_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", game_r3.images.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.formatGameName(game_r3.name), " ");
} }
function TopBarComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopBarComponent_ng_container_12_div_1_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.curated);
} }
class TopBarComponent {
    constructor(bgService, router) {
        this.bgService = bgService;
        this.router = router;
        this.searchText = '';
        this.curated = [];
        this.loading = true;
    }
    ngOnInit() {
        this.getCuratedList();
    }
    getCuratedList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.curated = yield this.bgService.getCuratedList().toPromise();
            this.curated = this.curated.games;
            this.loading = false;
        });
    }
    goToGame(game) {
        this.router.navigate(['/game', game.id], { state: { data: game } });
    }
    searchGame() {
        if (this.searchText === "")
            return;
        this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
    }
    collapse() {
        $('#navbar').toggleClass('toggled');
        $('#content').toggleClass('toggled');
    }
    formatGameName(name) {
        if (name.length > 17)
            return name.substring(0, 18).trim() + '...';
        else
            return name;
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 13, vars: 3, consts: [[1, "top-bar"], [1, "d-flex", "justify-content-between"], ["type", "button", "id", "sidebarCollapse", 1, "btn", 3, "click"], [1, "fas", "fa-align-left"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Search games", "aria-label", "Search games", "aria-describedby", "searchButton", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "searchButton", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "d-flex", "flex-wrap", "justify-content-start"], [4, "ngIf"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "click"], [3, "src"], [1, "nav-link"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_2_listener() { return ctx.collapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TopBarComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopBarComponent_Template_button_click_6_listener() { return ctx.searchGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Creator's Favorites");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TopBarComponent_div_11_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TopBarComponent_ng_container_12_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".top-bar[_ngcontent-%COMP%] {\n  padding: 0px 15px 0px 15px;\n  background: #fff;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding: 10px 5px 0px 5px;\n  margin-right: 20px;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n  color: var(--text-color);\n  cursor: pointer;\n}\n\n#sidebarCollapse[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 50px;\n  margin-top: 10px;\n}\n\n#searchButton[_ngcontent-%COMP%] {\n  border-color: var(--primary-dark);\n  color: var(--primary-dark);\n}\n\n#searchButton[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-dark);\n  color: var(--text-color);\n}\n\nimg[_ngcontent-%COMP%] {\n  max-height: 40px;\n  max-width: 40px;\n  min-height: 40px;\n  min-width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UscUNBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUFtQixrQkFBQTtBQUNuQjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGlDQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHFDQUFBO0VBQ0Esd0JBQUE7QUFHSjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVGIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWJhciB7XHJcbiAgcGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4IDVweCAwcHggNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuI3NpZGViYXJDb2xsYXBzZSB7IG1hcmdpbi1yaWdodDogMjBweDsgfVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNzZWFyY2hCdXR0b24ge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWluLXdpZHRoOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "pe3g":
/*!********************************************************************************!*\
  !*** ./src/app/game-details/game-reviews/game-review/game-review.component.ts ***!
  \********************************************************************************/
/*! exports provided: GameReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameReviewComponent", function() { return GameReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GameReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameReviewComponent.ɵfac = function GameReviewComponent_Factory(t) { return new (t || GameReviewComponent)(); };
GameReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameReviewComponent, selectors: [["app-game-review"]], inputs: { review: "review" }, decls: 7, vars: 3, template: function GameReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rating: ", ctx.review.rating, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Review by: ", ctx.review.user.username, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLXJldmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "piqb":
/*!*******************************************************************!*\
  !*** ./src/app/game-details/game-images/game-images.component.ts ***!
  \*******************************************************************/
/*! exports provided: GameImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameImagesComponent", function() { return GameImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _media_slideshow_media_slideshow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media-slideshow/media-slideshow.component */ "yQEl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function GameImagesComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GameImagesComponent_hr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "hr");
} }
function GameImagesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "iframe", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", url_r3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
} }
class GameImagesComponent {
    constructor(bgService, sanitizer) {
        this.bgService = bgService;
        this.sanitizer = sanitizer;
        this.images = [];
        this.videos = [];
        this.safeUrls = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.game && changes.game.currentValue) {
            this.getImages(changes.game.currentValue.id);
            this.getVideos(changes.game.currentValue.id);
        }
    }
    getImages(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.images = yield this.bgService.getBoardGameImages(id).toPromise();
            this.images = this.images.images;
        });
    }
    getVideos(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.videos = yield this.bgService.getBoardGameVideos(id).toPromise();
            this.videos = this.videos.videos;
            this.videos.forEach(x => {
                this.safeUrls.push(this.sanitizer.bypassSecurityTrustResourceUrl(this.embedLink(x.url)));
            });
        });
    }
    embedLink(url) {
        return `https://www.youtube.com/embed/${url.split("=")[1]}`;
    }
}
GameImagesComponent.ɵfac = function GameImagesComponent_Factory(t) { return new (t || GameImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
GameImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameImagesComponent, selectors: [["app-game-images"]], inputs: { game: "game" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 4, consts: [[3, "items"], [4, "ngIf"], ["class", "video", 4, "ngFor", "ngForOf"], [1, "video"], ["width", "560", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function GameImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-media-slideshow", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameImagesComponent_h1_4_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GameImagesComponent_hr_5_Template, 1, 0, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GameImagesComponent_div_6_Template, 2, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeUrls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.safeUrls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.safeUrls);
    } }, directives: [_media_slideshow_media_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["MediaSlideshowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLWltYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "rBlP":
/*!************************************************************!*\
  !*** ./src/app/main-view/hot-games/hot-games.component.ts ***!
  \************************************************************/
/*! exports provided: HotGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotGamesComponent", function() { return HotGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-slideshow/game-slideshow.component */ "tJWg");




class HotGamesComponent {
    constructor(bgService) {
        this.bgService = bgService;
        this.hotGames = {};
    }
    ngOnInit() {
        this.getHotGames();
    }
    getHotGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hotGames = yield this.bgService.getHotBoardgames().toPromise();
        });
    }
}
HotGamesComponent.ɵfac = function HotGamesComponent_Factory(t) { return new (t || HotGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"])); };
HotGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HotGamesComponent, selectors: [["app-hot-games"]], decls: 3, vars: 1, consts: [[3, "games"]], template: function HotGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Top Rated Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-game-slideshow", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("games", ctx.hotGames);
    } }, directives: [_game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_3__["GameSlideshowComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3QtZ2FtZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "rx/G":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CategoryService {
    constructor(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
        this.responseCache = new Map();
        this.categoriesChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.categoriesChange.subscribe((value) => {
            this.categories = value;
        });
        this.checkLocalStorage();
    }
    checkLocalStorage() {
        const categories = JSON.parse(localStorage.getItem('ttr-categories'));
        if (categories)
            this.createCategories(categories);
        else
            this.getCategories();
    }
    getResponse(url) {
        const fromCache = this.responseCache.get(url);
        if (fromCache)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fromCache);
        const response = this.http.get(url, { responseType: 'json' });
        response.subscribe(res => this.responseCache.set(url, res));
        return response;
    }
    convertToObject(arr) {
        return arr.reduce((obj, item) => (obj[item.id] = item.name, obj), {});
    }
    createCategories(categories) {
        const asObj = this.convertToObject(categories.categories);
        this.categoriesChange.next(asObj);
    }
    getCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = `${this.baseURL}/api/game/categories`;
            const categories = yield this.getResponse(url).toPromise();
            localStorage.setItem('ttr-categories', JSON.stringify(categories));
            this.createCategories(categories);
        });
    }
}
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tJWg":
/*!**********************************************************************!*\
  !*** ./src/app/main-view/game-slideshow/game-slideshow.component.ts ***!
  \**********************************************************************/
/*! exports provided: GameSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSlideshowComponent", function() { return GameSlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-tile/game-tile.component */ "l9Am");



function GameSlideshowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameSlideshowComponent_div_5_app_game_tile_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-game-tile", 11);
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("game", ctx_r3.games.games[i_r4]);
} }
function GameSlideshowComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameSlideshowComponent_div_5_app_game_tile_1_Template, 1, 1, "app-game-tile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.toShow);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function GameSlideshowComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.toShow[0] == i_r5));
} }
const _c1 = function (a0) { return { "cursor": a0 }; };
const _c2 = function () { return [0, 3, 6]; };
class GameSlideshowComponent {
    constructor() {
        this.toShow = [0, 1, 2];
    }
    ngOnInit() {
    }
    goUp() {
        if (this.toShow[2] == 8)
            return;
        this.toShow = this.toShow.map(x => x += 3);
    }
    goDown() {
        if (this.toShow[0] == 0)
            return;
        this.toShow = this.toShow.map(x => x -= 3);
    }
}
GameSlideshowComponent.ɵfac = function GameSlideshowComponent_Factory(t) { return new (t || GameSlideshowComponent)(); };
GameSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameSlideshowComponent, selectors: [["app-game-slideshow"]], inputs: { games: "games" }, decls: 11, vars: 10, consts: [[1, "d-flex", "justify-content-between", "align-items-center"], [1, "nav-button", 3, "click"], [3, "ngStyle"], [1, "left"], [4, "ngIf"], [1, "right"], [1, "d-flex", "justify-content-center"], ["class", "progress", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [3, "game", 4, "ngFor", "ngForOf"], [3, "game"], [1, "progress", 3, "ngClass"]], template: function GameSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSlideshowComponent_Template_div_click_1_listener() { return ctx.goDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameSlideshowComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameSlideshowComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSlideshowComponent_Template_div_click_6_listener() { return ctx.goUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameSlideshowComponent_div_10_Template, 1, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.toShow[0] === 0 ? "not-allowed" : "pointer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.games.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.games.games);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.toShow[2] === 8 ? "not-allowed" : "pointer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _game_tile_game_tile_component__WEBPACK_IMPORTED_MODULE_2__["GameTileComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".progress[_ngcontent-%COMP%] {\n  background-color: #cacaca;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 5px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n\na[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 50%;\n}\n\na[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  margin-top: 1.5em;\n  margin-left: 1.1em;\n  margin-top: 1.3em;\n  width: 1.4em;\n  height: 1.4em;\n  border-top: 0.5em solid #333;\n  border-right: 0.5em solid #333;\n  transform: rotate(45deg);\n}\n\n.right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: white;\n}\n\n.left[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  margin-right: 1.5em;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: white;\n}\n\n.left[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  margin-top: 1.5em;\n  margin-left: 1.4em;\n  margin-top: 1.3em;\n  width: 1.4em;\n  height: 1.4em;\n  border-top: 0.5em solid #333;\n  border-right: 0.5em solid #333;\n  transform: rotate(-135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLXNsaWRlc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0QscUJBQUE7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFHQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQUE7RUFDQSxxREFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdFQUFBO0VBQ0EscURBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNELHFCQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBR0EsMEJBQUE7QUFDRiIsImZpbGUiOiJnYW1lLXNsaWRlc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XHJcbn1cclxuXHJcbi5uYXYtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuYTpob3ZlciAubGVmdCwgYTpob3ZlciAucmlnaHR7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxufVxyXG5cclxuLnJpZ2h0OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEuMWVtO1xyXG4gIG1hcmdpbi10b3A6IDEuM2VtO1xyXG4gIHdpZHRoOiAxLjRlbTtcclxuICBoZWlnaHQ6IDEuNGVtO1xyXG4gIGJvcmRlci10b3A6IDAuNWVtIHNvbGlkICMzMzM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwLjVlbSBzb2xpZCAjMzMzO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDRlbTtcclxuICBoZWlnaHQ6IDRlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0ZW07XHJcbiAgaGVpZ2h0OiA0ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41ZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4ubGVmdDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjRlbTtcclxuICBtYXJnaW4tdG9wOiAxLjNlbTtcclxuICB3aWR0aDogMS40ZW07XHJcbiAgaGVpZ2h0OiAxLjRlbTtcclxuICBib3JkZXItdG9wOiAwLjVlbSBzb2xpZCAjMzMzO1xyXG4gIGJvcmRlci1yaWdodDogMC41ZW0gc29saWQgIzMzMztcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-view/main-view.component */ "OC0u");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _game_details_game_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-details/game-details.component */ "2OMI");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results/search-results.component */ "UwgA");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _discover_queue_discover_queue_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discover-queue/discover-queue.component */ "jv+M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: 'game/:id', component: _game_details_game_details_component__WEBPACK_IMPORTED_MODULE_3__["GameDetailsComponent"] },
    { path: 'search', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'discover', component: _discover_queue_discover_queue_component__WEBPACK_IMPORTED_MODULE_6__["DiscoverQueueComponent"] },
    { path: '', component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_1__["MainViewComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xdZP":
/*!************************************************************!*\
  !*** ./src/app/main-view/top-games/top-games.component.ts ***!
  \************************************************************/
/*! exports provided: TopGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopGamesComponent", function() { return TopGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _boardgame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../boardgame.service */ "6Lwo");
/* harmony import */ var _game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game-slideshow/game-slideshow.component */ "tJWg");




class TopGamesComponent {
    constructor(bgService) {
        this.bgService = bgService;
        this.topGames = {};
    }
    ngOnInit() {
        this.getTopGames();
    }
    getTopGames() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.topGames = yield this.bgService.getTopBoardgames().toPromise();
        });
    }
}
TopGamesComponent.ɵfac = function TopGamesComponent_Factory(t) { return new (t || TopGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_boardgame_service__WEBPACK_IMPORTED_MODULE_2__["BoardgameService"])); };
TopGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopGamesComponent, selectors: [["app-top-games"]], decls: 3, vars: 1, consts: [[3, "games"]], template: function TopGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Most Voted Boardgames");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-game-slideshow", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("games", ctx.topGames);
    } }, directives: [_game_slideshow_game_slideshow_component__WEBPACK_IMPORTED_MODULE_3__["GameSlideshowComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtZ2FtZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "yQEl":
/*!***************************************************************************************!*\
  !*** ./src/app/game-details/game-images/media-slideshow/media-slideshow.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MediaSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSlideshowComponent", function() { return MediaSlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MediaSlideshowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MediaSlideshowComponent_div_5_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaSlideshowComponent_div_5_img_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.zoomImage(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.items[i_r4] == null ? null : ctx_r3.items[i_r4].medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MediaSlideshowComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MediaSlideshowComponent_div_5_img_1_Template, 1, 1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.toShow);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function MediaSlideshowComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r2.active == i_r7));
} }
const _c1 = function (a0) { return { "cursor": a0 }; };
class MediaSlideshowComponent {
    constructor() {
        this.toShow = [0, 1, 2, 3, 4];
        this.selected = 0;
        this.active = 0;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.items && changes.items.currentValue) {
            this.numPages = [...Array(Math.ceil(changes.items.currentValue.length / 5)).keys()];
            this.lastPageItems = changes.items.currentValue.length % 5;
            if (this.numPages.length == 1)
                this.toShow = [...Array(this.lastPageItems).keys()];
        }
    }
    goUp() {
        if (this.active == this.numPages.length - 1)
            return;
        this.active++;
        if (this.active == this.numPages.length - 1 && this.lastPageItems != 5) {
            this.toShow = [];
            for (let i = 1; i < this.lastPageItems + 1; i++)
                this.toShow.push(this.items.length - i);
        }
        else
            this.toShow = this.toShow.map(x => x += 5);
    }
    goDown() {
        if (this.active == 0)
            return;
        if (this.active == this.numPages.length - 1 && this.lastPageItems != 5) {
            this.toShow = [...Array(5).keys()].map(i => i + (this.toShow[0] - 5));
        }
        else
            this.toShow = this.toShow.map(x => x -= 5);
        this.active--;
    }
    zoomImage(index) {
        this.selected = index;
        this.showModal();
    }
    showModal() {
        $('#imageModal').modal('show');
    }
}
MediaSlideshowComponent.ɵfac = function MediaSlideshowComponent_Factory(t) { return new (t || MediaSlideshowComponent)(); };
MediaSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaSlideshowComponent, selectors: [["app-media-slideshow"]], inputs: { items: "items" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 19, vars: 11, consts: [[1, "d-flex", "justify-content-between", "align-items-center"], [1, "nav-button", 3, "click"], [3, "ngStyle"], [1, "left"], [4, "ngIf"], ["class", "carousel", 4, "ngIf"], [1, "right"], [1, "d-flex", "justify-content-center"], ["class", "progress", 3, "ngClass", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "role", "dialog", "id", "imageModal", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [3, "src"], [1, "modal-footer"], ["role", "status", 1, "spinner-border", "text-success"], [1, "sr-only"], [1, "carousel"], [3, "src", "click", 4, "ngFor", "ngForOf"], [3, "src", "click"], [1, "progress", 3, "ngClass"]], template: function MediaSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaSlideshowComponent_Template_div_click_1_listener() { return ctx.goDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MediaSlideshowComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MediaSlideshowComponent_div_5_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MediaSlideshowComponent_Template_div_click_6_listener() { return ctx.goUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MediaSlideshowComponent_div_10_Template, 1, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.active == 0 ? "not-allowed" : "pointer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.active == ctx.numPages.length - 1 ? "not-allowed" : "pointer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].large, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Credit: ", ctx.items[ctx.selected] == null ? null : ctx.items[ctx.selected].userName, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".modal-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  border-top: none;\n  justify-content: flex-start;\n}\n\n.modal-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 200px;\n  height: 200px;\n  margin: 15px;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.progress[_ngcontent-%COMP%] {\n  background-color: #cacaca;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 5px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n}\n\n.nav-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n\na[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 50%;\n}\n\na[_ngcontent-%COMP%]:hover   .left[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n\n.right[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  margin-top: 1.5em;\n  margin-left: 1.1em;\n  margin-top: 1.3em;\n  width: 1.4em;\n  height: 1.4em;\n  border-top: 0.5em solid #333;\n  border-right: 0.5em solid #333;\n  transform: rotate(45deg);\n}\n\n.right[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.left[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  margin-right: 1.5em;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.left[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: inline-block;\n  margin-top: 1.5em;\n  margin-left: 1.4em;\n  margin-top: 1.3em;\n  width: 1.4em;\n  height: 1.4em;\n  border-top: 0.5em solid #333;\n  border-right: 0.5em solid #333;\n  transform: rotate(-135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVkaWEtc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFBa0IsWUFBQTtBQUVsQjs7QUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsMEVBQUE7RUFDQSxxREFBQTtBQUlKOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsNEVBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDRCxxQkFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUdBLHdCQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtFQUNBLHFEQUFBO0FBR0Y7O0FBQUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdFQUFBO0VBQ0EscURBQUE7QUFHRjs7QUFBQTtFQUNFLFdBQUE7RUFDRCxxQkFBQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUdBLDBCQUFBO0FBR0YiLCJmaWxlIjoibWVkaWEtc2xpZGVzaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIgcCB7IGNvbG9yOiB3aGl0ZTsgfVxyXG5cclxuLmNhcm91c2VsIGltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwwLDAsMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xyXG59XHJcblxyXG4ubmF2LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmE6aG92ZXIgLmxlZnQsIGE6aG92ZXIgLnJpZ2h0e1xyXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XHJcbn1cclxuXHJcbi5yaWdodDphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjFlbTtcclxuICBtYXJnaW4tdG9wOiAxLjNlbTtcclxuICB3aWR0aDogMS40ZW07XHJcbiAgaGVpZ2h0OiAxLjRlbTtcclxuICBib3JkZXItdG9wOiAwLjVlbSBzb2xpZCAjMzMzO1xyXG4gIGJvcmRlci1yaWdodDogMC41ZW0gc29saWQgIzMzMztcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0ZW07XHJcbiAgaGVpZ2h0OiA0ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNGVtO1xyXG4gIGhlaWdodDogNGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNWVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcclxufVxyXG5cclxuLmxlZnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICBtYXJnaW4tbGVmdDogMS40ZW07XHJcbiAgbWFyZ2luLXRvcDogMS4zZW07XHJcbiAgd2lkdGg6IDEuNGVtO1xyXG4gIGhlaWdodDogMS40ZW07XHJcbiAgYm9yZGVyLXRvcDogMC41ZW0gc29saWQgIzMzMztcclxuICBib3JkZXItcmlnaHQ6IDAuNWVtIHNvbGlkICMzMzM7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map