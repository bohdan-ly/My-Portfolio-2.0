const htmlBar = document.querySelector('.bar-html');
const cssBar = document.querySelector('.bar-css');
const javascriptBar = document.querySelector('.bar-javascript');
const reactBar = document.querySelector('.bar-react');
const reduxBar = document.querySelector('.bar-redux');

let statusBar = new TimelineLite();

statusBar
	.fromTo(htmlBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(75% - 6px)`, easy: Power4.easyOut })
	.fromTo(cssBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(50% - 6px)`, easy: Power4.easyOut })
	.fromTo(javascriptBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(80% - 6px)`, easy: Power4.easyOut })
	.fromTo(reactBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(40% - 6px)`, easy: Power4.easyOut })
	.fromTo(reduxBar, 0.75, { width: `calc(0% - 6px)` }, { width: `calc(30% - 6px)`, easy: Power4.easyOut });
