function Nav () {
    return (
        <div className="fixed top-0 flex items-center justify-center w-full h-[60px] bg-highlight">
            
            <div id="left-nav" className="w-1/2 ml-[12px] font-bold">
                <p>William Washington</p>
            </div>

            <div id="right-nav" className="w-1/2 flex items-center justify-end mr-[12px] gap-[36px] font-bold">
                <p>About</p>
                <p>Experience</p>
                <p>Resume</p>
                <p>Contact</p>
            </div>

        </div>
    )
}

export default Nav