import Link from 'next/link';

export function Footer() {
    return (
        <footer style={{ backgroundColor: '#7A4E00', padding: '2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                
                {/* Social Icons Row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link
                        href="https://public.tableau.com/app/profile/rose.mary3869/vizzes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/tableau logo.png" alt="Tableau" width={28} height={28} />
                    </Link>

                    <Link
                        href="https://github.com/kiobov"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/github-mark-white.svg" alt="GitHub" width={28} height={28} />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/nyakio-rosemary-68995a201"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/images/LI-In-Bug.png" alt="LinkedIn" width={28} height={28} />
                    </Link>
                </div>

                {/* Contact Button */}
                <Link
                    href="/contact"
                    style={{
                        background: 'white',
                        color: '#7A4E00',
                        padding: '0.4rem 1.2rem',
                        borderRadius: '4px',
                        fontWeight: '600',
                        textDecoration: 'none'
                    }}
                >
                    Contact
                </Link>

            </div>
        </footer>
    );
}