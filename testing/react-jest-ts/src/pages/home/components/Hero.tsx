import React from "react";

import {
	Carousel
} from "../../../components/";
import styles from "./Hero.module.css";


export const Hero = () => {
	return (
		<div className={styles.container}>
			<Carousel />
		</div>
	)
}
