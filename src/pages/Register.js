import { RegisterForm } from "components/RegisterForm/RegisterForm.js";
import { Helmet  } from "react-helmet";

export default function Register(){
    return (
        <div>
            <Helmet>
                <title>Registration</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="Content-Security-Policy" content="script-src 'self'"></meta>
            </Helmet>
            <RegisterForm/>
        </div>
    )
}