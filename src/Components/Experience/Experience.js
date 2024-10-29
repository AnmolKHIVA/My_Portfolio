import "./Experience.css"
export default function Experience() {
  return (
    <>
      <div className="container" id="experience">
	
	<main className="row">
		

		<section className="col">
			
			<header className="title">
				<h2>Education</h2>
			</header>

			<div className="contents">
				
				<div className="box">
					<h4>2021 - 2025</h4>
					<h3>Punjab Engineering College, Chandigarh</h3>
					<p>B.Tech in Electronics and Communication Engineering (Minor degree in Computer Science).</p>
				</div>

				<div className="box">
					<h4>2019 - 2020</h4>
					<h3>Dashmesh Public School, Faridkot, Punjab</h3>
					<p>Senior Secondary Education (12th)</p>
				</div>


			</div>
		</section>


		<section className="col">
			
			<header className="title">
				<h2>Experience</h2>
			</header>

			<div className="contents">
				
				<div className="box">
					<h4>Jan,2024 - May,2024</h4>
					<h3>Central Scientific Instruments Organisation (CSIO)</h3>
					<p>Internship</p>
					<p>Mastered the intricacies of static object rendering through adept utilization of Open GL and contributed to the design of ARINC-661 algorithm.</p>
				</div>

				{/* <div className="box">
					<h4>April,2023 - May,2023</h4>
					<h3>IEEE</h3>
					<p>Marketing Manager</p>
					<p> Forged a strategic alliance with Newton School, securing them as coding partners for an Institute of Electrical and Electronics Engineers (IEEE) event.</p>
				</div> */}

			</div>
		</section>

	</main>
</div>
    </>
  )
}
