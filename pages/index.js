import Link from 'next/link';

function Home(params) {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/sobre" legacyBehavior>
                <a>Acessar página Sobre</a>
            </Link>
        </div>
    )
}

export default Home