// Init App
var myApp = new Framework7({
    modalTitle: 'Pepin',
    // Enable Material theme
    material: true,
    cache: true,
    materialRipple: true,
    scrollTopOnNavbarClick: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});


// GENERAL


$$('a').on('click', function (e) { //Close panel when you open a new page
    myApp.closePanel();
});

$$('a.home').on('click', function (e) { //Close popover when you open a new page
    myApp.closeModal('.popover-more-home');
});
$$('a.more').on('click', function (e) { //Close popover when you open a new page
    myApp.closeModal('.popover-more');
});


// ICONS TRANSITIONS


$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});

myApp.onPageInit('profile', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('photos', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('videos', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('musiques', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('index2', function (page) {
$$('i.material-icons.fav').on('click', function (e) {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('article', function (page) {
$$('i.material-icons.fav-article').on('click', function () {//Changing color icons onclick
  $$(this).toggleClass('color-change');
});
});

myApp.onPageInit('notifications', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});

myApp.onPageInit('followers', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});

myApp.onPageInit('following', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});

myApp.onPageInit('index2', function (page) { //Change icon when add or delete person
$$(document).on('click', 'i.material-icons.add', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons done">done</i></div>' );
});
$$(document).on('click', 'i.material-icons.done', function(){
  $( this ).replaceWith( '<div class="item-after"><i class="material-icons add">person_add</i></div>' );
});
});


// PAGES FUNCTION


myApp.onPageInit('article', function (page) {
$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: 'Facebook',
        },
        {
            text: 'Twitter'
        },
        {
            text: 'Google Plus'
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});
});
    
