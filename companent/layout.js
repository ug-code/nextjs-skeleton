import Header from "../shared/header";
import Footer from "../shared/footer";

export default function Layout({children}) {
    return (

        <div className="wrapper">
            <Header/>
            {children}
            <Footer/>
        </div>

    )
}
