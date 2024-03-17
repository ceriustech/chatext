import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne } from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';

const Home = () => {
	return (
		<>
			<Head>
				<title>ChatExt</title>
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="ChatExt is a a Chrome extension that allows you to upload files to ChatGPT."
				/>
				<meta name="title" content="Upload files to ChatGPT | chatext.app" />
				<meta property="og:url" content="https://chatext.app/" />
				<meta property="og:title" content="ChatExt" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="ChatExt ChatGPT file uploader. Upload files to ChatGPT, up to 10 at a time."
				/>
				<meta
					name="keywords"
					content="ChatExt ChatGPT file uploader, ChatGPT, ChatGPT file uploader, ChatGPT file upload, ChatGPT file uploader, ChatGPT file upload extension, ChatGPT file uploader"
				/>
				<meta
					name="description"
					content="Chatext is a Chrome extension that allows you to upload files to ChatGPT."
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/chatext-icon-180x180"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/chatext-icon-16x16"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link rel="icon" href="/chatext-icon.png" />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				pretitle="chatext Benefits"
				title=" Why should you use ChatExt"
			>
				Chatext provides a no hassle way to upload files into ChatGPT.
			</SectionTitle>
			<Benefits data={benefitOne} />
			<SectionTitle
				pretitle="Testimonials"
				title="Here's what our customers said"
			>
				ChatExt is currently helping many people streamline their workflow with
				ChatGPT.
			</SectionTitle>
			<Testimonials />
			<SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
				Here are a few answers to some general questions about ChatExt.
			</SectionTitle>
			<Faq />
			<Cta />
			<Footer />
		</>
	);
};

export default Home;
