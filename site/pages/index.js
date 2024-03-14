import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
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
				<meta
					name="description"
					content="Chatext is a free landing page template built with next.js & Tailwind CSS"
				/>
				<link rel="icon" href="/favicon.ico" />
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
