export default function MainFooter(){
    return(
        <section className="section " id="contact">
            <div className="title">
                <h2>CONTACTO</h2>
            </div>

            <ul className="contact-list">

                {/* Linkedink */}
                <a href="https://www.linkedin.com/in/nahuel-escujuri-148044264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY%2Fy4me1ITZWdPQHk4JuFGw%3D%3D" target="_blank">
                    <i className="fa fa-linkedin-square" style={{fontSize:"36px"}}></i>
                </a>
                
                {/* Email */}
                <a href="mailto:nahuelescujuri@gmail.com" target="_blank">
                    <i className="fa fa-envelope" style={{fontSize:"36px"}}></i>
                </a>

                {/* GitHub */}
                <a href="https://github.com/NahuelEscujuri" target="_blank">
                    <i className="fa fa-github" style={{fontSize:"36px"}}></i>
                </a>
            </ul>
	    </section>
    )
}