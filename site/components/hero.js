import Image from 'next/image';
import Container from './container';
import heroImg from '../public/img/hero.png';
import { BACKGROUND_COLORS } from '../css/colors';
import { URL_DATA } from './data';

const Hero = () => {
	const logoMap = [
		{
			id: 'chatgpt',
			name: 'ChatGPT',
			logo: <ChatGPTLogo />,
		},
	];

	const { bgPurple01 } = BACKGROUND_COLORS;
	const { cta } = URL_DATA;

	const styles = {
		backgroundColor: bgPurple01,
	};

	return (
		<>
			<Container className="flex flex-wrap ">
				<div className="flex items-center w-full lg:w-1/2">
					<div className="max-w-2xl mb-8">
						<h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
							ChatExt - ChatGPT File Uploader
						</h1>
						<p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
							ChatExt allows you to Upload files to chatGPT, up to 10 at a time.
							Click or drag and drop files to upload. Download files for
							generated code.
						</p>

						<div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
							<a
								href={cta.url}
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-4 text-lg font-medium text-center text-white rounded-md "
								style={styles}
							>
								Download for Free
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center w-full lg:w-1/2">
					<div className="">
						<Image
							src={heroImg}
							width="616"
							height="617"
							className={'object-cover'}
							alt="Hero Illustration"
							loading="eager"
							placeholder="blur"
						/>
					</div>
				</div>
			</Container>
			<Container>
				<div className="flex flex-col justify-center">
					<div className="text-xl text-center text-gray-700 dark:text-white">
						AI platforms ChatExt is compatible with
					</div>

					<div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
						<div className="pt-2 text-gray-400 dark:text-gray-400">
							{logoMap.map((item) => (
								<div
									key={item.id}
									className="flex flex-row items-center gap-2 p-4"
								>
									{item.logo}{' '}
									<span className="block text-2xl">{item.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

function ChatGPTLogo() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0,0,256,256"
			width="50px"
			height="50px"
		>
			<g
				fill="none"
				fill-rule="nonzero"
				stroke="none"
				stroke-width="none"
				stroke-linecap="butt"
				stroke-linejoin="none"
				stroke-miterlimit="10"
				stroke-dasharray=""
				stroke-dashoffset="0"
				font-family="none"
				font-weight="none"
				font-size="none"
				text-anchor="none"
				style={{ mixBlendMode: 'normal' }}
			>
				<path
					transform="scale(5.33333,5.33333)"
					d="M21.633,6.008c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l3.47064,2.02289l0.05136,-11.79689c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c0.2695,-0.15559 0.54328,-0.29904 0.82063,-0.43049c-1.43898,-1.0341 -3.19527,-1.56728 -5.03263,-1.48551zM23.97845,29.23601l4.54452,-2.59878l0.02155,-5.237l-4.52297,-2.63625l-4.54452,2.59878l-0.02155,5.237zM29.727,13.213c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c0.26975,0.15573 0.53112,0.32127 0.78386,0.49591c0.17586,-1.76317 -0.24035,-3.55095 -1.22986,-5.10091c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.01652,4.01572zM42.985,33.102c-1.55664,2.49492 -4.00072,4.22769 -6.84282,4.88163c-1.71237,4.17827 -5.79931,7.17367 -10.53218,7.01037c-2.93861,-0.10217 -5.66196,-1.35204 -7.64968,-3.4869c-4.47442,0.60609 -9.11137,-1.43532 -11.33632,-5.6161c-1.38108,-2.59635 -1.66015,-5.57904 -0.80554,-8.36788c-2.76242,-3.57226 -3.31287,-8.6085 -0.80446,-12.62512c1.55751,-2.49488 4.00162,-4.22764 6.84368,-4.8816c1.71213,-4.17823 5.79869,-7.17346 10.53232,-7.0094c2.9386,0.10127 5.66196,1.35105 7.64968,3.4859c4.47442,-0.60609 9.11137,1.43532 11.33632,5.6161c1.3811,2.59639 1.66015,5.57914 0.8055,8.36801c2.76153,3.57184 3.31175,8.60787 0.8035,12.62499zM36.206,23.567c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,0.31099 -0.01264,0.61962 -0.03744,0.92535c1.61482,-0.72932 2.95477,-1.98359 3.80244,-3.61535c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-3.48659,1.9938zM30.478,34.354c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-0.2695,0.15559 -0.54328,0.29904 -0.82063,0.43049c1.43898,1.0341 3.19527,1.56728 5.03263,1.48551c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-3.47064,-2.02289zM18.273,34.787c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-0.26975,-0.15575 -0.53111,-0.32131 -0.78386,-0.49595c-0.17587,1.76319 0.24033,3.55098 1.22986,5.10095c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.01652,-4.01572zM11.794,24.433c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-0.31099 0.01264,-0.61962 0.03744,-0.92535c-1.61482,0.72933 -2.95476,1.98358 -3.80244,3.61535c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l3.48659,-1.9938z"
					id="strokeMainSVG"
					fill="#9ca3af"
					stroke="#9ca3af"
					stroke-width="9"
					stroke-linejoin="round"
				></path>
				<g
					transform="scale(5.33333,5.33333)"
					fill="#000000"
					stroke="none"
					stroke-width="1"
					stroke-linejoin="miter"
				>
					<path d="M30.7,7.27l-2.37,1.83c-1.605,-2.067 -4.068,-3.209 -6.697,-3.092c-4.32,0.192 -7.633,3.945 -7.633,8.269v9.143l10.5,6.12l-1,1.72l-11.706,-6.827c-0.492,-0.287 -0.794,-0.813 -0.794,-1.382v-8.687c0,-6.264 5.129,-11.574 11.39,-11.357c3.279,0.113 6.29,1.656 8.31,4.263z"></path>
					<path d="M12.861,9.833l0.4,2.967c-2.592,0.357 -4.813,1.919 -6.026,4.254c-1.994,3.837 -0.4,8.582 3.345,10.745l7.918,4.571l10.55,-6.033l0.99,1.726l-11.765,6.724c-0.494,0.282 -1.101,0.281 -1.594,-0.003l-7.523,-4.343c-5.426,-3.133 -7.46,-10.23 -4.142,-15.543c1.738,-2.784 4.58,-4.619 7.847,-5.065z"></path>
					<path d="M6.161,26.563l2.77,1.137c-0.987,2.423 -0.745,5.128 0.671,7.346c2.326,3.645 7.233,4.638 10.977,2.476l7.918,-4.572l0.05,-12.153l1.99,0.006l-0.059,13.551c-0.002,0.569 -0.307,1.094 -0.8,1.379l-7.523,4.343c-5.425,3.132 -12.588,1.345 -15.531,-4.185c-1.541,-2.897 -1.71,-6.275 -0.463,-9.328z"></path>
					<path d="M17.3,40.73l2.37,-1.83c1.605,2.067 4.068,3.209 6.697,3.092c4.32,-0.192 7.633,-3.945 7.633,-8.269v-9.143l-10.5,-6.12l1,-1.72l11.706,6.827c0.492,0.287 0.794,0.813 0.794,1.382v8.687c0,6.264 -5.13,11.574 -11.39,11.358c-3.279,-0.114 -6.29,-1.657 -8.31,-4.264z"></path>
					<path d="M35.139,38.167l-0.4,-2.967c2.592,-0.357 4.813,-1.919 6.026,-4.254c1.994,-3.837 0.4,-8.582 -3.345,-10.745l-7.918,-4.571l-10.55,6.033l-0.99,-1.726l11.765,-6.724c0.494,-0.282 1.101,-0.281 1.594,0.003l7.523,4.343c5.425,3.132 7.459,10.229 4.141,15.543c-1.737,2.784 -4.579,4.619 -7.846,5.065z"></path>
					<path d="M41.839,21.437l-2.77,-1.137c0.987,-2.423 0.745,-5.128 -0.671,-7.346c-2.326,-3.645 -7.233,-4.638 -10.977,-2.476l-7.918,4.572l-0.05,12.153l-1.99,-0.006l0.059,-13.551c0.002,-0.569 0.307,-1.094 0.8,-1.379l7.523,-4.343c5.425,-3.132 12.588,-1.345 15.531,4.185c1.541,2.897 1.71,6.275 0.463,9.328z"></path>
				</g>
			</g>
		</svg>
	);
}

export default Hero;
