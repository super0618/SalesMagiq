import Header from "@/layout/header";
import SubHeader from "./subheader";
import Footer from "@/layout/footer";

export default function JobsLayout({ children }) {
	return (
		<>
			<Header />
			<SubHeader />
			<div className="p-6 bg-[#FAFAFA]">
				{children}
				<Footer />
			</div>
		</>
	);
}
