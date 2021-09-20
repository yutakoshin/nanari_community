import Head from 'next/head'

export default function Header(props) {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
            </Head>
            <nav className="nav navbar navbar-expand-sm navbar-light">
                <a className="navbar-brand" href="">nanari</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="">nanariとは</a></li>
                        <li className="nav-item"><a className="nav-link" href="">ブログ</a></li>
                        <li className="nav-item"><a className="nav-link" href="">お問い合わせ</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
