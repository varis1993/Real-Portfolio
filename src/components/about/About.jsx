import "./about.css"
import Award from "../../img/Award.jpg"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://media.istockphoto.com/photos/desktop-source-code-and-wallpaper-by-computer-language-with-coding-picture-id1026458098" alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Thing about me
                </p>
                <p className="a-desc">
                    descripition about me

                </p>
                <div className="a-award">
                    <img src= {Award} alt="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">University of Central Florida </h4>
                        <p className="a-award-desc">
                            This is a certificate award
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About