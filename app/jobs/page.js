import ItemJobs from "@/components/itemjobs";

export default function (props) {
	const jobs = [
		{
			id: 1,
			title: "Looking for front end Engineer",
			description:
				"We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
			salary: "fixed 30$",
		},
		{
			id: 2,
			title: "Looking for back end Engineer",
			description:
				"We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
			salary: "fixed 30$",
		},
		{
			id: 3,
			title: "Looking for front end Engineer",
			description:
				"We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
			salary: "fixed 30$",
		},
		{
			id: 4,
			title: "Looking for back end Engineer",
			description:
				"We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
			salary: "fixed 30$",
		},
		{
			id: 5,
			title: "Looking for front end Engineer",
			description:
				"We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
			salary: "fixed 30$",
		},
		{
			id: 6,
			title: "Looking for back end Engineer",
			description:
				"We are currently seeking a talented and passionate frontend developer to join our team. As a frontend developer, you will be responsible for creating visually appealing and user-friendly interfaces that enhance the overall user experience of our web applications.",
			salary: "fixed 30$",
		},
	];

	return (
		<div className="container mx-auto mb-6">
			<div className="bg-white p-3.5 rounded-xl mb-6 text-[14px] text-[#B3B3B3] flex items-center">
				<img src="/assets/icons/iconoir_home-simple-door.svg" alt="home" />
				<div className="px-3">Home</div>
				<img src="/assets/icons/ellipse.svg" alt="ellipse" />
				<div className="px-3">Hire</div>
				<img src="/assets/icons/ellipse.svg" alt="ellipse" />
				<div className="text-black px-3">My Jobs</div>
			</div>
			<div className="bg-white p-6 rounded-xl">
				<div className="flex mb-3 items-center justify-between">
					<div className="flex gap-3 items-center border-[#3B368D]">
						<img src="/assets/icons/iconoir_book.svg" alt="book" />
						<p className="text-nowrap overflow-hidden">My All Jobs</p>
					</div>
					<div className="flex gap-2.5">
						<div className="w-48 relative sm:block hidden">
							<input
								type="text"
								placeholder="Search"
								className="border-[#D8D7E8] border rounded-lg py-2 px-8 text-[14px] w-full"
							/>
							<div className="absolute top-0 left-2 bottom-0 grid place-items-center">
								<img src="/assets/icons/iconoir_search.svg" alt="search" />
							</div>
						</div>
						<div className="w-32 relative md:block hidden">
							<select className="border-[#D8D7E8] border rounded-lg py-2 px-6 text-[14px] w-32">
								<option value="1">Filter</option>
							</select>
							<div className="absolute top-0 left-2 bottom-0 grid place-items-center">
								<img src="/assets/icons/iconoir_filter.svg" alt="filter" />
							</div>
						</div>
						<button className="bg-[#3B368D] text-white px-6 py-2 rounded-lg text-[14px] flex items-center gap-2.5">
							<img src="/assets/icons/iconoir_edit.svg" alt="edit" />
							<p className="text-nowrap overflow-hidden">Post New Job</p>
						</button>
					</div>
				</div>
				{jobs.map((job) => (
					<ItemJobs key={job.id} title={job.title} salary={job.salary} description={job.description} />
				))}
			</div>
		</div>
	);
}
