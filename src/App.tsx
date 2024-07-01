import Section from "./components/Section"
import TitlePage from "./components/TitlePage"
import Tagline from "./components/Tagline"
import PastryPerfection from "./components/PastryPerfection"
import Testimonials from "./components/Testimonials"
import Items from "./components/Items"
import Contact from "./components/Contact"

function App() {

	return (
		<div className="h-svh overflow-y-scroll scrollbar-thin">
			<Section background={true}>
				<TitlePage />
			</Section>
			<Section>
				<Tagline />
			</Section>
			<Section>
				<PastryPerfection />
			</Section>
			<Section>
				<Testimonials />
			</Section>
			<Section>
				<Items />
			</Section>
			<Section>
				<Contact/>
			</Section>
		</div>
	)
}

export default App
