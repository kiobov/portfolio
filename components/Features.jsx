import Link from 'next/link'
export function Features() {
    const companies = [
        { src: '/images/edwins_limited.svg', alt: 'Edwins Limited', href: 'https://www.edwinslimited.com' },
        { src: '/images/kharis_logo.svg',    alt: 'Kharis',         href: 'https://www.kharis.com' },
        { src: '/images/sama_logo.svg',      alt: 'Sama',           href: 'https://www.sama.com' },
    ];

    return (
        <section style={{
            padding: '2rem 0',
            backgroundColor: 'white',
            borderBottom: '1px solid #f0f0f0',
            overflow: 'hidden',        
        }}>
            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .logos-track {
                    display: flex;
                    width: max-content;
                    animation: scrollLeft 12s linear infinite;
                }
                .logos-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="logos-track">
                
                {[...companies, ...companies].map((c, i) => (
                    <a
                        key={i}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ margin: '0 3rem', flexShrink: 0 }}
                    >
                        <img
                            src={c.src}
                            alt={c.alt}
                            height={50}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}