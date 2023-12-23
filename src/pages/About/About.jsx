import Lottie from "lottie-react";
import aboutAnimation from "../../../public/to-do.json";
import useIdentity from "../../Hooks/useIdentity";
import Profile from "../../components/Profile";
const About = () => {
    const identity = useIdentity()
    const pro = identity
    console.log(pro);
    return (
        <div className="py-10 px-3 bg-slate-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-3xl font-titleText">Our Mission</h2>
                        <p>
                            At planPilot, we are on a mission to revolutionize the way you manage tasks and streamline your workflow. We believe that every project, big or small, deserves a robust and intuitive task management solution. Our goal is to empower individuals and teams to soar to new heights of productivity and collaboration.
                        </p>

                        <h2 className="text-3xl font-titleText mt-3 ">Who We Are</h2>
                        <p>
                            We are a passionate team of developers, designers, and productivity enthusiasts dedicated to creating a seamless task management experience. With a shared commitment to innovation and user-centric design, we have crafted planPilot to be the go-to platform for anyone seeking a reliable and efficient solution for task organization and project management.
                        </p>
                    </div>
                    <div className="">
                        <Lottie className="md:w-[80%] mx-auto" animationData={aboutAnimation} loop={true}></Lottie>
                    </div>
                </div>
                <div>
                    <h2  className="text-3xl font-titleText">Our Commitment</h2>
                    <p>
                        We are committed to continuous improvement and ensuring that planPilot evolves with the ever-changing landscape of productivity tools. Your feedback is invaluable, and we encourage you to be part of our journey as we refine and enhance the platform.
                        <br />
                        Join us on this exciting adventure of productivity and organization! Together, let s navigate the skies of success with planPilot.
                    </p>
                </div>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default About;