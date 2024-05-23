import React from "react";
import {
	AboutUs,
	Chef,
	Footer,
	Gallery,
	Header,
	Intro,
	Laurels,
	SpecialMenu,
} from "./container";


import { Navbar } from "./components";
import "./App.css";
import Contact from "./container/Contact/Contact";

const App = () => (
	<div>
		<Navbar />
		<Header />
		<AboutUs />
		<SpecialMenu />
		<Chef />
		<Intro />
		<Laurels />
		<Gallery />
		<Contact />
		<Footer />
	</div>
);

export default App;
