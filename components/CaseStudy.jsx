export function CaseStudy() {
    return (
        <section style={{
            // TRANSITION: Starts white and fades into the dark brown at the very bottom
            background: 'linear-gradient(to bottom, #ffffff 60%, #8B5E02 100%)', 
            paddingTop: '4rem',      
            paddingBottom: '8rem',   
            overflow: 'hidden',
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                padding: '0 2rem' 
            }}>
                <a
                    href="https://github.com/kiobov"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: '#1A8FA0',
                        color: 'white',
                        padding: '0.9rem 2rem',
                        borderRadius: '8px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Case Study Projects
                </a>
                <p style={{
                    color: '#555',
                    fontSize: '0.88rem',
                    lineHeight: '1.7',
                    maxWidth: '480px',
                    margin: 0,
                }}>
                    This is the code base of content containing the documentation
                    and report of findings in the above projects and others.
                </p>
            </div>
        </section>
    );
}