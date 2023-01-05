import "./SignUp.css"

const SignUp = () => {
    return (
        <div className="register-container">
            <form className="register-form">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="login">Wpisz swój login:</label>
                    <input id="login" placeholder="Login"/>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="name">Wpisz swoją nazwę:</label>
                    <input id="name"/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="email">Wpisz swój e-mail:</label>
                    <input id="email" type="email"/>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <label htmlFor="password">Wpisz swoje hasło:</label>
                    <input id="password" type="password"/>
                </div>

                <button>Zarejestruj</button>
            </form>
        </div>
    )
}

export default SignUp;
