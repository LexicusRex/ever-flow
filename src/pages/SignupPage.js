import "../assets/styles/SignupPage.css";

function SignupPage() {
    return (
        <div className="container">
            <form action="">
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    className="form-control"
                />
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    className="form-control"
                />

                <input
                    type="email"
                    name="user-email"
                    id="user-email"
                    placeholder="Organisation Email"
                    className="form-control"
                />

                <input
                    type="password"
                    name="user-password"
                    id="user-password"
                    placeholder="Password"
                    className="form-control"
                />

                <button type="submit" className="form-control">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default SignupPage;
