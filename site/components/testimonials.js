import Image from 'next/image';
import React from 'react';
import Container from './container';

import userOneImg from '../public/img/user-1.jpg';
import userTwoImg from '../public/img/user-2.png';
import userThreeImg from '../public/img/user-3.jpg';

const Testimonials = () => {
	const styles = {
		gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
	};
	return (
		<Container>
			<div className="grid gap-10" style={styles}>
				<div className="lg:col-span-2 xl:col-auto">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
						<p className="text-2xl leading-normal ">
							Lets me upload files to ChatGPT, very <Mark>useful</Mark>.
						</p>

						<Avatar
							image={userOneImg}
							name="Alex a"
							title="Software Engineer"
						/>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
						<p className="text-2xl leading-normal ">
							Very <Mark>useful</Mark> when it comes to lot of files.
						</p>

						<Avatar
							image={userTwoImg}
							name="Younes Outerbah"
							title="Software Engineer"
						/>
					</div>
				</div>
				<div className="">
					<div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
						<p className="text-2xl leading-normal ">
							I'm able to upload files directly into ChatGPT with no issue. I{' '}
							<Mark>highly</Mark> recommend adding this extension.
						</p>

						<Avatar
							image={userThreeImg}
							name="CeriusGeek"
							title="Content Creator"
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

function Avatar(props) {
	return (
		<div className="flex items-center mt-8 space-x-3">
			<div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
				<Image
					src={props.image}
					width="40"
					height="40"
					alt="Avatar"
					placeholder="blur"
				/>
			</div>
			<div>
				<div className="text-lg font-medium">{props.name}</div>
				<div className="text-gray-600 dark:text-gray-400">{props.title}</div>
			</div>
		</div>
	);
}

function Mark(props) {
	return (
		<>
			{' '}
			<mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
				{props.children}
			</mark>{' '}
		</>
	);
}

export default Testimonials;
