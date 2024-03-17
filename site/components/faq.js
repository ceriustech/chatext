import React from 'react';
import Container from './container';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Faq = () => {
	return (
		<Container className="!p-0">
			<div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
				{faqdata.map((item) => (
					<div key={item.question} className="mb-5">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open ? 'transform rotate-180' : ''
											} w-5 h-5`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
};

const faqdata = [
	{
		question: 'Is this free to use?',
		answer:
			"Yes, you don't have to pay to use the service at this time. However, as the service expands and more features are added, payment options will become available for those who want to take advantage of additional benefits.",
	},
	{
		question: 'Will my data be kept private?',
		answer:
			"Yes, we don't collect any data from files that you upload or download.",
	},
	{
		question: 'Is ChatGPT the only AI Chatbot I can use this with? ',
		answer:
			"Yes, however we'll be expanding ChatExt so that it can be used with other AI platforms as well.",
	},
	{
		question: 'Do you accept feedback? ',
		answer:
			"Yes, of course! We value our users and their opinions and always welcome feedback. I'll create a way for you to provide feedback in the coming weeks so that you can help us continue to improve our service.",
	},
];

export default Faq;
