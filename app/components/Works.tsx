"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";
import githubIcon from '../../public/tech/github.webp'

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link: string;
};
const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}: ProjectCardProps) => {
	return (
		<div
			className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform transform hover:scale-105"
			style={{
				transition: "transform 0.45s",
			}}
		>
			<div className="relative w-full h-[230px]">
				<Image
					src={image}
					width={1000}
					height={1000}
					alt="project_image"
					className="w-full h-full object-cover rounded-2xl"
				/>

				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
					<Link
						href={source_code_link}
						target="_blank"
						className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
					>
						<Image
							src={githubIcon}
							width={24}
							height={24}
							alt="source-code"
							className="object-contain"
						/>
					</Link>
				</div>
			</div>

			<div className="mt-5">
				<h3 className="text-white font-bold text-[24px]">{name}</h3>
				<p className="mt-2 text-secondary text-[14px]">{description}</p>
			</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>
		</div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">My work</p>
				<h2 className="sectionHeadText">Projects.</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					The following projects demonstrate my skills and experience as I explore various technologies and strive to improve my development capabilities. Each project is briefly described and includes links to code repositories. These projects showcase my commitment to solving complex problems, experimenting with diverse tools, and continually enhancing my project management skills.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");
