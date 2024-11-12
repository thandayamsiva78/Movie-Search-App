import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Feedback() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback submitted:", { name, email, message });
        setSubmitted(true);
    };

    const handleClosebtn = () => {
        navigate("/")
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="p-6 bg-custom-gray rounded-lg shadow-md max-w-md w-full mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-center">Feedback!</h2>
                    <div className="hover:bg-black rounded-full p-1 cursor-pointer" onClick={handleClosebtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                {submitted ? (
                    <p className="text-green-600 font-semibold">Thank you for your feedback!</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 bg-black rounded"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 bg-black rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                className="w-full p-2 bg-black rounded"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">
                            Submit Feedback
                        </button>
                    </form>
                )}
            </div>
        </div>

    );
}

export default Feedback;
