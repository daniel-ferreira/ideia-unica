import Link from 'next/link';

function Sobre(params) {
    return (
        <div>
            <h1>Sobre</h1>
            <Link href="/" legacyBehavior>
                <a>Acessar página Home</a>
            </Link>
        </div>
    )
}

export default Sobre