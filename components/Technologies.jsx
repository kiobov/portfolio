export function Technologies() {
    const tools = [
        'logo_tableau', 'logo_hadoop', 'logo_pandas', 'logo_python',
        'logo_cpp', 'logo_scikitlearn', 'logo_looker',
        'logo_aws', 'logo_java', 'logo_excel',
    ];

    return (
        <section style={{
            padding: '2rem 0',
            backgroundColor: 'white',
            overflow: 'hidden',        
        }}>
            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: scrollLeft 18s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;  /* pauses on hover */
                }
            `}</style>

            <div className="marquee-track">
                
                {[...tools, ...tools].map((tool, i) => (
                    <img
                        key={i}
                        src={`/images/logosportfolio/${tool}.svg`}
                        alt={tool}
                        width={52}
                        height={52}
                        title={tool}
                        style={{
                            objectFit: 'contain',
                            margin: '0 1.5rem',
                            flexShrink: 0,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}