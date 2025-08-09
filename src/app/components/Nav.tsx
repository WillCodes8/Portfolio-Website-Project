function Nav () {
    return (
        <div id="Nav" className="fixed top-0 flex items-center justify-center w-full h-[60px] bg-highlight">
            
            <div id="left-nav" className="w-1/2 ml-[12px] font-bold">
                <a href="#Hero">William Washington</a>
            </div>

            <div id="right-nav" className="w-1/2 flex items-center justify-end mr-[12px] gap-[36px] font-bold">
                <a href="#About">About</a>
                <a href="#Exp">Experience</a>
                <a href="#Resume">Resume</a>
                <a href="#Contact">Contact</a>
            </div>

        </div>
    )
}

export default Nav