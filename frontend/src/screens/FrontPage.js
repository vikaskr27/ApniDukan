import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useNavigate}  from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
// import NewNavbar from "../components/newNavbar";
// import UserLoginAction from "../store/Actions/UserLoginAction";
import Fade from 'react-reveal/Fade';
import './FrontPage.css'
import { useState } from "react";



const FrontPage = () => {

	const date = new Date();
	const curr_year= date.getFullYear();
	const [year, setYear] = useState(curr_year)
	
	const navigate = useNavigate()
	const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
	// const userInfo = useSelector((state) => state.UserLogin);

	// const { Loading, error, usertoken } = userInfo;


	// useEffect(() => {
	// 	if (!error && userInfo) {
	// 		navigate("/home");
	// 	}
	// });

	return (
		<Container >
			{/* <NewNavbar 
				color="orange"
				second_item="Login" 
				third_item="Signup" 
				second_link="/login" 
				third_link="signup" 
				first_link="/" 
				first_item="Discover" 
				brand_name="Apni Dukan"
			/> */}
			{/* <Row className='mt-4'>
				<Col md='9'>
					<h2 style={{ fontSize: "30px" }}>Apni Dukan</h2>
				</Col>
				<Col md='3'>
					<Link to='/login'>
						<button
							style={{ background: "none", border: "none", padding: "10px" }}
							className='mx-4'>
							Login
						</button>
					</Link>
					<Link to='/signup'>
						<button
							style={{
								background: "none",
								border: "solid 2px",
								padding: "10px",
							}}>
							SignUp
						</button>
					</Link>
				</Col>
			</Row> */}

			<Row style={{ paddingTop: "100px"}}>
				
				<Col md='5' style={{paddingLeft:"50px"}}>
					<Fade bottom>
						<p style={{ color: "black", fontSize: "50px",fontWeight:'bold', lineHeight: "1.3" }}>
							Fulfilling aspirations of India's next billion consumers through kirana aggregation
						</p>
					</Fade>
					<Fade bottom>
						<Row className='mt-5 p-3' style={{fontSize:'18px', lineHeight:'2'}}>
							Building India's first network of small sized modern format grocery stores for India's next billion consumers.
						</Row>
					</Fade>
					<Row className='mt-3'>
					
						<Col md='6 mt-4'>
							<Link to='/signin'>	
							<button
								style={{
									padding: "8px 30px",
									backgroundColor: "#F68410",
									color: "white",
									fontWeight: "500",
									fontSize: "20px",
								}}>
								Partner with us
							</button>
							</Link>
						</Col>
						
						{/* <Col md='6 mt-4'>
							<Link to='/signup'>
								<button
									style={{
										padding: "8px 30px",
										backgroundColor: "white",
										color: "#F68410",
										fontWeight: "500",
										fontSize: "20px",
										border: "solid 1px green",
									}}>
									get Started now
								</button>
							</Link>
						</Col> */}
					</Row>
				</Col>
				<Col md='6'>
					<img
						style={{ width: "120%", height: "110%" }}
						src='https://www.1knetworks.com/assets/images/home/hero.svg'
						alt='feature image'
					/>
				</Col>
				<Container>
					<Row>
						<Col style={{fontWeight:"bold", fontSize:"40px", marginTop:"200px", textAlign:"center"}}>
							What we provide
						</Col>
					</Row>
					<Row   style={{textAlign:"center", marginTop:"25px"}}>
						<Col md='3' />
						<Col md='6' style={{fontSize:"20px", lineHeight:"1.8"}}>
							1K Kirana Bazaar organizes the non-urban retail ecosystem by aggregating kiranas and help them in meeting consumer aspirations.
						</Col>
						<Col md='3' />
					</Row>
				
				
					<Row style={{paddingTop:'100px'}}>
						<Col md='3'/>
						<Col md='4' className="first_block p-3">
							<Fade bottom>
								<img className="first_block_img" src="first_block.svg"/>
							</Fade>
							<img src="01.svg" alt="01" className="first_block_num" />
							<h2 className="block_heading">Engaging and money saving</h2>
							<Fade bottom><p className="block_text">Our goal is to make grocery shopping an engaging and money-saving activity rather than it being a daily household chore.</p></Fade>
						</Col>
						<Col md='4'  className="first_block p-3" style={{margin:"200px 50px 0 50px"}}>
							<Fade bottom>
								<img className="first_block_img" src="second_block.svg"/>
							</Fade>
							<img src="02.svg" alt="01" className="first_block_num" />
							<h2 className="block_heading">Modern shopping experience</h2>
							<Fade bottom><p className="block_text">We bring the modern shopping experience to a non-urban consumer instead of taking the consumer to the modern urban markets.</p></Fade>
						</Col>
						{/* <Col md='1'/> */}
						<Col md='4'  className="first_block p-3" style={{ marginBottom:"100px", marginLeft:"300px"}}>
							<Fade bottom>
								<img className="first_block_img" src="third_block.svg"/>
							</Fade>
							<img src="03.svg" alt="01" className="first_block_num" />
							<h2 className="block_heading">Attractive product selection</h2>
							<Fade bottom><p className="block_text">We offer attractive product selection, lucrative offers, and the convenience of getting groceries at the doorstep.</p></Fade>
						</Col>
					</Row>
					<Row>
						<Col md='12' style={{textAlign:"center", fontSize:"38px", fontWeight:"bold"}}>
							Tech  enabled  Kirana
						</Col>
					</Row>
					<Row style={{marginTop:"50px"}}>
						<Col md='1' />
						<Col md='4' style={{marginTop:"50px", display:"flex", alignItems:"center"}} >
							<Container>
								<Row>
									<Col md='2' style={{display:"flex", alignItems:"center"}}>
										<img src="01.svg" />
									</Col>
									<Col>
										<p className="features_heading">Store upgrades</p>
										<Fade bottom>
											<p  className="features_para pt-2" >Branding, store infrastructure upgrades, merchandising, pricing communication</p>
										</Fade>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col md='2' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
										<img src="bill.svg" />
									</Col>
									<Col>
										<p className="features_heading">In-store POS software</p>
										<Fade bottom>
											<p className="features_para pt-2"  >Billing, real time inventory management, promotions and offers, pricing, business dashboard</p>
										</Fade>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col md='2' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
										<img src="consumer-application.svg" />
									</Col>
									<Col>
										<p className="features_heading">Consumer application</p>
										<Fade bottom>
											<p className="features_para pt-2" >Product Catalogs, Promotions and Offers, Loyalty Program, Ordering, Tracking, Recommendations</p>
										</Fade>
									</Col>
								</Row>
							</Container>
						</Col>
						<Col style={{display:"flex", justifyContent:"right"}}>
							<Fade bottom>
								<img src="kirana_store.svg" alt="kirana Store" className="kirana_store" />
							</Fade>
						</Col>
						<Col md='1' />
					</Row>

					<Row style={{marginTop:"50px"}}>
						<Col md='1' />
						<Col md ='6' style={{display:"flex", justifyContent:"right"}}>
							<Fade bottom>
								<img src="https://www.1knetworks.com/assets/images/home/ai-enabled-platform.svg" alt="kirana Store" className="kirana_store" />
							</Fade>
						</Col>
						<Col md='4' style={{marginTop:"50px", display:"flex", alignItems:"center"}} >
							<Container>
								<Row>
									<Col md='2' style={{display:"flex", alignItems:"center"}}>
										<img src="02.svg" />
									</Col>
									<Col>
										<p className="features_heading">AI/ML enabled platform</p>
										<Fade bottom>
											<p className="features_para pt-2">Decision making driven by historical sales data, consumer preferences and local micro-market level intelligence</p>
										</Fade>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col md='2' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
										<img src="https://www.1knetworks.com/assets/icons/backend.svg" />
									</Col>
									<Col>
										<p className="features_heading">Integrated backend system</p>
										<Fade bottom>
											<p className="features_para pt-2">To manage purchases, inventory, billing and warehousing including offloading, racking, picking, packing, delivering.</p>
										</Fade>
									</Col>
								</Row>
								<Row className="mt-5">
									<Col md='2' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
										<img src="https://www.1knetworks.com/assets/icons/automatic.svg" />
									</Col>
									<Col>
										<p className="features_heading">Automated inventory replenishment</p>
										<Fade bottom>
											<p className="features_para" style={{fontSize:"20px", lineHeight:'1.7'}} className="pt-2">To seamlessly refill in-store inventory based on sales history and real time inventory levels</p>
										</Fade>
									</Col>
								</Row>
							</Container>
						</Col>
						<Col md='1' />
					</Row>

					<Row>
						<Col md='12' className="mt-5 mb-5" style={{textAlign:"center", fontSize:"38px", fontWeight:"600", fontFamily:"Robo"}}>
							Value Propositions
						</Col>
					</Row>
					<Row>
						<Col md='6 ' style={{display:"flex",justifyContent:"right"}} className='p-5'>
							<Fade bottom><img src="https://www.1knetworks.com/assets/images/home/customers.svg" /></Fade>
						</Col>
						<Col>
							<Row>
								<Col>
									<h1 style={{fontSize:"30px", fontWeight:"bold"}} className="py-5">Customers</h1>
									
									<ul className="">
										<Fade bottom>
											<li>
												Lower cost on products
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Large assortment
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Convenience
											</li>
										</Fade>
										<Fade bottom>
											<li>
												No stock out
											</li>
										</Fade>
									</ul>
								</Col>
																
							</Row>
						</Col>
					</Row>

					
					<Row>
						
						<Col>
							<Row>
								<Col md='7' />
								<Col md='5' className="p-5">
									<h1 style={{fontSize:"30px", fontWeight:"bold"}} className="py-5">Retailers</h1>
									
									<ul>
										<Fade bottom>
											<li>
												Low capital deployment										
											</li>
										</Fade>
										<Fade bottom>
											<li>
												More consumer 
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Increase in sales
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Sales analysis
											</li>
										</Fade>
									</ul>
								</Col>							
							</Row>
						</Col>
						<Col md='6 ' style={{display:"flex",justifyContent:"left"}} className='p-5'>
							<Fade bottom><img src="https://www.1knetworks.com/assets/images/home/retailers.svg" /></Fade>
						</Col> 	
					</Row>

					<Row>
						<Col md='6 ' style={{display:"flex",justifyContent:"right"}} className='p-5'>
							<Fade bottom><img src="https://www.1knetworks.com/assets/images/home/brands.svg" /></Fade>
						</Col>
						<Col>
							<Row>
								<Col>
									<h1 style={{fontSize:"30px", fontWeight:"bold"}} className="py-5">Brands</h1>
									
									<ul className="">
										<Fade bottom>
											<li>
												Cost saving
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Orgaised distribution
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Consumer insights
											</li>
										</Fade>
										<Fade bottom>
											<li>
												Better fill rates
											</li>
										</Fade>
									</ul>
								</Col>
																
							</Row>
						</Col>
					</Row>
				</Container>
			</Row>
		<footer style={{textAlign: "center", marginTop:"100px"}}>
			copyright &copy; {year} Odicea Distribution Technologies Pvt. Ltd. | All rights reserved | Illustration by Freepik Stories.
		</footer>
		</Container>
		
	);
};

export default FrontPage;
