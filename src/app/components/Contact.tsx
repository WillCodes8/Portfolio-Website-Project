import LinkedInIcon from "../icons/linkedin"
import GithubIcon from "../icons/github"

function Contact () {
    return(
        <div className="flex items-center justify-center">
            <h2 className="text-textdark text-2xl font-bold mr-[30px]">Email: wtcwashington@gmail.com</h2>
            <h2 className="text-textdark text-2xl font-bold mr-[5px]">LinkedIn: </h2> <a href="https://www.linkedin.com/in/william-washington-0b17622a5" target="_blank" className="mr-[30px]"><LinkedInIcon/></a>
            <h2 className="text-textdark text-2xl font-bold mr-[5px]">Github: </h2> <a href="https://github.com/WillCodes8" target="_blank" className=""><GithubIcon/></a>
        </div>
    )
}

export default Contact