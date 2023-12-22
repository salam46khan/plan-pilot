import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    }
    return (
        <div className="bg-slate-100">
            <div className="mx-auto container py-10 px-3">
                <div className="max-w-xl mx-auto">
                    <form className='card-body bg-gray-300 rounded-lg overflow-hidden' ref={form} onSubmit={sendEmail}>
                        <div className='form-control'>
                            <label>Name</label>
                            <input className="input input-bordered" type="text" name="user_name" placeholder='Name' required />
                        </div>
                        <div className='form-control'>
                            <label>Email</label>
                            <input className="input input-bordered" type="email" name="user_email" placeholder='Email' required />
                        </div>
                        <div className='form-control'>
                            <label>Message</label>
                            <textarea placeholder='Text...' className='textarea textarea-bordered' name="message" />
                        </div>

                        <div className=' flex justify-center mt-2'>
                            <input className='my-btn hover:bg-[#ABFC2F] ' type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;