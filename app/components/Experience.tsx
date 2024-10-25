"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
	experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	return (
		<div className="relative mb-10 p-5 bg-[#1d1836] text-white rounded-md shadow-md">
			<div className="flex items-center">
				<div
					className="flex justify-center items-center w-12 h-12 rounded-full"
					style={{ background: experience.iconBg }}
				>
					<Image
						src={experience.icon}
						width={48}
						height={48}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
				<div className="ml-4">
					<h3 className="text-[24px] font-bold">{experience.title}</h3>
					<p className="text-secondary text-[16px] font-semibold">
						{experience.company_name}
					</p>
				</div>
			</div>
			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</div>
	);
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="styles.sectionSubText text-center">
					What I have done so far
				</p>
				<h2 className="sectionHeadText text-center">Work Experience.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
