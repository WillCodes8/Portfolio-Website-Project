function Exp () {
    return(
        <div className="flex items-start h-screen w-screen">
            
            <div 
            id="left-about" 
            className="w-1/2 flex items-center justify-center h-full">

                <h1 className="font-bold">
                    💼 Experience: 
                    Process For The Future - Junior Analyst (Apr 2024 - Present): 
                    Create and schedule AI-generated social media posts highlighting contract wins, 
                    certifications, and industry updates, refining strategy based on performance metrics; 
                    conduct detailed analysis of government contract opportunities via SAM.gov, GovTribe, 
                    and USAspending.gov; research spending patterns and procurement histories; present 
                    actionable insights to senior leadership.  
                        <br/> <br/>
                    📂 Project Experience  
                    🌦️ Backend Weather Tracker App: Developed Node.js + Express backend with 
                    PostgreSQL integration, EJS-rendered views, and session-based authentication; 
                    integrated Open-Meteo API for real-time weather data; built save, view, and delete 
                    features for favorite locations.  
                        <br/> <br/>
                    📊 Stock & Crypto Dashboard: Built Next.js + React + TypeScript dashboard 
                    with live stock prices from Polygon.io and cryptocurrency rates from CoinAPI; implemented 
                    Chart.js visualizations; designed responsive, SSR-powered UI with Tailwind CSS.  
                        <br/> <br/>
                    🌅 Google Chrome Background Extension: Created lightweight Chrome extension 
                    replacing default new tab with custom design; implemented pixelated sunset background, 
                    and built configurable search logic for alternate 
                    search engines.
                </h1>

            </div>

            <div 
            id="right-about" 
            className="w-1/2 flex flex-col items-center justify-center h-full gap-[20px]">
                
                <div className="bg-[url('/images/Project-Img2.png')] bg-cover bg-center w-64 h-64 ml-[180px]"></div>
                <div className="bg-[url('/images/Project-Img1.png')] bg-cover bg-center w-124 h-84 ml-[30px]"></div>
                <div className="bg-[url('/images/Project-Img3.png')] bg-cover bg-center w-64 h-64 ml-[180px]"></div>
            </div>

        </div>
    )
}

export default Exp