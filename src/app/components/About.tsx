function About () {
    return(
        <div className="flex items-start h-screen w-screen">
            
            <div 
            id="left-about" 
            className="w-1/2 flex flex-col items-center justify-center h-full">

                <div className="bg-[url('/images/React-Img2.jpg')] bg-cover bg-center w-64 h-64 mr-[150px]"></div>
                <div className="bg-[url('/images/Python-Img.jpg')] bg-cover bg-center w-64 h-64 ml-[150px]"></div>
                <div className="bg-[url('/images/JavaScript-Img.png')] bg-cover bg-center w-64 h-64 mr-[150px]"></div>
            </div>

            <div 
            id="right-about" 
            className="w-1/2 flex items-center justify-center h-full">
                
                <h1 className="font-bold">I'm an Information Science student at the 
                    University of Maryland with a passion for technology, data, and innovative problem-solving. 
                    My academic journey has equipped me with skills in object-oriented programming, database design, 
                    technology infrastructure, statistical analysis, and dynamic web application development.<br/> <br/>

                    Currently, I'm a Junior Analyst at Process For The Future, where I combine 
                    data-driven research and modern digital strategies to support business development in 
                    the government contracting sector. I analyze procurement trends, identify contract 
                    opportunities, and leverage AI to craft targeted content strategies that enhance 
                    visibility and align with organizational goals.<br/> <br/>

                    Outside of work and studies, I continue to sharpen my technical skill set—ranging 
                    from Python, Java, SQL, and JavaScript to frameworks like React, Next.js, and Tailwind 
                    CSS—while exploring ways to bridge technology and practical solutions in real-world applications.<br/> <br/>

                    Fun Facts: My hobbies include video games, playing the guitar, basketball, and of course coding.
                </h1>
            </div>

        </div>
    )
}

export default About