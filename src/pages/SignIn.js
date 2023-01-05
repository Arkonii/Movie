import "./SignIn.css"

const SignIn = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="login">Wpisz swój login:</label>
                    <input id="login" placeholder="Login"/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="password">Wpisz swoje hasło:</label>
                    <input id="password" type="password"/>
                </div>

                <button>Zaloguj</button>
            </form>
        </div>
    )
}

export default SignIn;
