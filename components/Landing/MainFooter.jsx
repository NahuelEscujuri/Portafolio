export default function MainFooter(){
       
    
    return(
        <section className="section relative" id="contact">
            
            <img
            src="/ASCII-background.png"
            className="absolute left-0 top-0 h-full w-full object-cover
            md:object-fill"/>

            <div className="absolute left-0 top-0 h-full w-full backdrop-blur-[3px]"></div>

            
            <div className="title">
                <h2>CONTACTO</h2>
            </div>

            <ul className="contact-list">

                {/* Linkedink */}
                <a
                className="border-2 border-text  mb-5 transition-all bg-dark
                hover:text-main hover:border-main"
                href="https://www.linkedin.com/in/nahuel-escujuri-148044264?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BY%2Fy4me1ITZWdPQHk4JuFGw%3D%3D"
                target="_blank">

                    <div className="flex items-center p-2 text-[32px] border-b-8 border-r-8 text-text border-text">

                        <i className="fa fa-linkedin-square" style={{fontSize:"36px"}}></i>

                        <p className="ml-2">Linkedink</p>

                    </div>


                </a>
                
                {/* Email */}
                <a
                className="border-2 border-text  mb-5 transition-all bg-dark
                hover:text-main hover:border-main"
                href="mailto:nahuelescujuri@gmail.com"
                target="_blank">

                    <div className="flex items-center p-2 text-[32px] border-b-8 border-r-8 text-text border-text">

                        <i className="fa fa-envelope" style={{fontSize:"36px"}}></i>
                        
                        <p className="ml-2">Email</p>

                    </div>

                    
                </a>

                {/* GitHub */}
                <a
                className="border-2 border-text  mb-5 transition-all bg-dark
                hover:text-main hover:border-main"
                href="https://github.com/NahuelEscujuri"
                target="_blank">

                    <div className="flex items-center p-2 text-[32px] border-b-8 border-r-8 text-text border-text">

                        <i className="fa fa-github" style={{fontSize:"36px"}}></i>
                        
                        <p className="ml-2">GitHub</p>

                    </div>

                    
                </a>
            </ul>

	    </section>
    )
}