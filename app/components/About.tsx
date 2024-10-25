"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<div className="xs:w-[250px] w-full">
	<div className="w-full green-pink-gradient p-px rounded-[20px] shadow-card">
		<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
			<Image
				src={icon}
				width={64}
				height={64}
				alt={title}
				className="w-16 h-16 object-contain"
			/>
			<h3 className="text-white text-[20px] font-bold text-center">
				{title}
			</h3>
		</div>
	</div>
</div>

	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h2 className="styles.sectionHeadText">Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
			>
				As a second-year student in the Department of ICT at the University of Sri Jayewardenepura, I am passionate about Front-End Web Development and UI/UX Design. I have gained hands-on experience with a diverse range of technologies, including Flutter, Dart, Next.js, React, Tailwind, HTML, CSS, JavaScript, TypeScript, Python, and Java. My academic journey has allowed me to explore various programming paradigms and frameworks, enhancing my ability to create dynamic, responsive, and visually appealing web applications. I am a quick learner who thrives in challenging environments, consistently striving to develop user-friendly experiences that meet the specific needs of each project. With a strong attention to detail and a commitment to delivering high-quality work, I aim to make a positive impact through innovative design and effective problem-solving.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
