import {
	FaceSmileIcon,
	ChartBarSquareIcon,
	CursorArrowRaysIcon,
	DevicePhoneMobileIcon,
	AdjustmentsHorizontalIcon,
	SunIcon,
} from '@heroicons/react/24/solid';

import benefitOneImg from '../public/img/benefit-one.png';
import benefitTwoImg from '../public/img/benefit-two.png';

const benefitOne = {
	title: 'Key Features',
	desc: 'Elevate your chat interactions with ChatExt. Designed for anyone who uses ChatGPT, ChatExt is the perfect tool for anyone looking to make working with their digital workspace more convenient.',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Upload Multiple Files at Once',
			desc: 'Upload up to 10 files at a time and download files directly within the chat interface.',
			icon: <FaceSmileIcon />,
		},
		{
			title: "File Size Isn't an Issue",
			desc: 'Intelligent file chunking enables you to upload files regardless of how large they are.',
			icon: <ChartBarSquareIcon />,
		},
		{
			title: 'Data Privacy',
			desc: "ChatExt doesn't collect or save any uploaded or downloaded file data.",
			icon: <CursorArrowRaysIcon />,
		},
	],
};

const benefitTwo = {
	title: 'Offer more benefits here',
	desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
	image: benefitTwoImg,
	bullets: [
		{
			title: 'Mobile Responsive Template',
			desc: 'chatext is designed as a mobile first responsive template.',
			icon: <DevicePhoneMobileIcon />,
		},
		{
			title: 'Powered by Next.js & TailwindCSS',
			desc: 'This template is powered by latest technologies and tools.',
			icon: <AdjustmentsHorizontalIcon />,
		},
		{
			title: 'Dark & Light Mode',
			desc: 'chatext comes with a zero-config light & dark mode. ',
			icon: <SunIcon />,
		},
	],
};

export { benefitOne, benefitTwo };
