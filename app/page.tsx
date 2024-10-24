import {
	About,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
} from "./components";

import styles from './page.module.css'

export default function Home() {
	return (
		
			<div className="relative z-0 bg-primary font-sans">
				<div className={styles.bgImage}>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks /> 
				
			</div>
		

	);
}
