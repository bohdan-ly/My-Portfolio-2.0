const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const javascriptBar = document.querySelector('.bar-javascript');
const reactBar = document.querySelector('.bar-react');
const reduxBar = document.querySelector('.bar-redux');
debugger;

let statusBar = new TimelineLite();

statusBar
	.fromTo(htmlBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(75% - 6px)`, easy: Power4.easyOut })
	.fromTo(cssBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(50% - 6px)`, easy: Power4.easyOut })
	.fromTo(javascriptBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, easy: Power4.easyOut })
	.fromTo(reactBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(40% - 6px)`, easy: Power4.easyOut })
	.fromTo(reduxBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(30% - 6px)`, easy: Power4.easyOut });

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		hamburger.classList.add('open');
		nav.classList.add('open');
		menuNav.classList.add('open');
		navItems.forEach((i) => i.classList.add('open'));

		showMenu = true;
	} else {
		hamburger.classList.remove('open');
		nav.classList.remove('open');
		menuNav.classList.remove('open');
		navItems.forEach((i) => i.classList.remove('open'));
		showMenu = false;
	}
}
