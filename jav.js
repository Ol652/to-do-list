/*@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap');*/

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

.flex-row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.theme-dark {
  --bg-top-image: 0 0 url(./images/bg-desktop-dark.jpg) no-repeat;
  --main-bg: hsl(235, 21%, 11%);
  --todo-bg: hsl(235, 24%, 19%);
  --todo-shadow: hsl(235, 21%, 11%);
  --font-color: hsl(234, 39%, 85%);
  --font-color-hover: #fff;
}

.theme-light {
  --bg-top-image: 0 0 url(./images/bg-desktop-light.jpg) no-repeat;
  --main-bg: hsl(0, 0%, 98%);
  --todo-bg: hsl(0, 0%, 98%);
  --todo-shadow: hsl(235, 19%, 35%);
  --font-color: hsl(236, 9%, 61%);
  --font-color-hover: hsl(235, 21%, 11%);
}

body {
  font: 400 18px/1 'Josefin Sans', sans-serf;
  background: var(--bg-top-image);
  background-color: var(--main-bg);
  background-size: contain;
  color: var(--font-color);
}

header, main {
  max-width: 545px;
  margin: 0 auto;
}

header {
  justify-content: space-between;
  padding: 52px 0 11px;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: 1rem;
}

.theme-block {
  margin: -10px 0 0;
}

.theme-block #theme {
  display: none;
}

.theme-block #theme + label::before {
  content: '';
  background: url(./images/icon-sun.svg);
  display: block;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.theme-block #theme:checked + label::before {
  background: url(./images/icon-moon.svg);
}

.add-new-item {
  background: var(--todo-bg);
  height: 65px;
  border-radius: 5px;
  margin: 0 0 24px;
  padding: 0 26px;
  position: relative;
}

.add-new-item #addItem {
  background: transparent;
  color: var(--font-color);
  border: 0;
  outline: 0;
  width: 100%;
  height: 50px;
  font: 400 18px/1 'Josefin Sans', sans-serf;
  margin: 4px 0 0 47px;
  letter-spacing: -0.3px;
}

.add-new-item span {
  width: 25px;
  height: 25px;
  border: 1px solid var(--font-color);
  display: block;
  border-radius: 50%;
  position: absolute;
  left: 26px;
  top: 21px;
  cursor: pointer;
}

.add-new-item span:hover {
  background: center url(./images/icon-check.svg) no-repeat, linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

.content {
  background: var(--todo-bg);
  border-radius: 5px;
  box-shadow: 0 42px 30px -9px var(--todo-shadow);
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  padding: 0 10px 0 25px;
  min-height: 65px;
  border-bottom: 1px solid var(--font-color);
  position: relative;
}

ul li input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 0;
  height: 0;
}

ul li label {
  position: relative;
  cursor: pointer;
  padding: 2px 0 0 48px;
  font-size: 1.1rem;
}

.checkmark {
  position: absolute;
  top: -5px;
  left: 0;
  height: 25px;
  width: 25px;
}

ul li.hidden {
  display: none;
}

ul li input[type="checkbox"] ~ .checkmark {
  border: 1px solid var(--font-color);
  border-radius: 50px;
}

ul li input[type="checkbox"] ~ .checkmark:hover {
  border: 0;
  padding: 1px;
  background: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

ul li input[type="checkbox"] ~ .checkmark:hover::before {
  content: '';
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: var(--todo-bg);
  display: block;
}

ul li input[type="checkbox"]:checked ~ .checkmark {
  background: center url(./images/icon-check.svg) no-repeat, linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}

ul li input[type="checkbox"]:checked ~ .text {
  text-decoration: line-through;
}

.remove {
  background: url(./images/icon-cross.svg) no-repeat;
  width: 18px;
  height: 18px;
  display: none;
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 25px;
}

ul li:hover .remove {
  display: block;
}

.items-left {
  margin-right: 86px;
}

.bottom-items {
  padding: 20px 20px 20px 27px;
  font-size: .8rem;
  letter-spacing: .5px;
  align-items: baseline;
  border-radius: 5px;
  background: var(--todo-bg);
}

.filter {
  margin-right: 47px;
}

.filter input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.filter label {
  cursor: pointer;
  padding: 0 10px;
}

.filter label:hover {
  color: var(--font-color-hover);
}

.filter input[type="radio"]:checked ~ span {
  color: hsl(221, 62%, 52%);
}

.clear {
  color: var(--font-color);
  cursor: pointer;
}

.clear:hover {
  color: var(--font-color-hover);
}