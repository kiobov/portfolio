export function Testimonials() {
    const testimonials = [
        {
            name: 'Lilian CEO, Edwins Limited',
            text: 'Build website and managed company',
            avatar: '/images/lilianimage.jfif',
            linkedin: 'https://www.linkedin.com/in/lilian-profile'
        },
        {
            name: 'Sarah Head of Data, Kharis',
            text: 'Build website and managed company',
            avatar: '/images/sarah image.jfif',
            linkedin: 'https://www.linkedin.com/in/sarah-profile'
        },
        {
            name: 'Jared QA, Sama',
            text: 'Build website and managed company',
            avatar: '/images/jaredimage.jfif',
            linkedin: 'https://www.linkedin.com/in/jared-profile'
        },
    ];

    return (
        <section style={{
            padding: '3rem 0',
            backgroundColor: 'white',
            overflow: 'hidden',
        }}>
            
            <h2 style={{
                color: '#888',
                fontWeight: '400',
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                paddingLeft: '2rem',
            }}>
                Testimonials
            </h2>

           
            <style>{`
                @keyframes scrollRight {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .testimonials-track {
                    display: flex;
                    width: max-content;
                    animation: scrollRight 20s linear infinite;
                }
                .testimonials-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="testimonials-track">
                
                {[...testimonials, ...testimonials].map((t, i) => (
                    <div key={i} style={{
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '130px',
                        width: '280px',
                        flexShrink: 0,
                        marginRight: '1.5rem',
                    }}>
                       
                        <p style={{
                            color: '#444',
                            fontSize: '0.85rem',
                            lineHeight: '1.6',
                            marginBottom: '1rem',
                        }}>
                            "{t.text}"
                        </p>

                        
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            borderTop: '1px solid #f0f0f0',
                            paddingTop: '0.8rem',
                        }}>
                            <img
                                src={t.avatar}
                                alt={t.name}
                                width={32}
                                height={32}
                                style={{
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    flexShrink: 0,
                                }}
                            />
                            <a
                                href={t.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontSize: '0.75rem',
                                    color: '#A06700',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                }}
                                onMouseOver={e => e.target.style.textDecoration = 'underline'}
                                onMouseOut={e => e.target.style.textDecoration = 'none'}
                            >
                                {t.name}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}