import { LoginForm } from "components/LoginForm/LoginForm";
import { Helmet  } from "react-helmet";

export default function Login(){
    return (
        <div>
            <Helmet>
                <title>LogIN</title>
                <link rel="icon" href="/favicon.ico" />
                <meta http-equiv="Content-Security-Policy" content="script-src 'self'"></meta>
            </Helmet>
            <LoginForm/>
        </div>
    )
}