export function Projects() {
    return (
        <section id="projects" style={{
            padding: '3rem 2rem',
            backgroundColor: 'white',
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* Projects label */}
                <div style={{
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    padding: '0.4rem 1.2rem',
                    display: 'inline-block',
                    fontWeight: '700',
                    fontSize: '1rem',
                    marginBottom: '2rem',
                    color: '#222',
                }}>
                    Projects
                </div>

                {/* From Question to Insight + intro text */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                }}>
                    <div style={{
                        backgroundColor: '#A06700',
                        color: 'white',
                        padding: '0.5rem 1.2rem',
                        borderRadius: '4px',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                    }}>
                        From Question to Insight
                    </div>
                    <p style={{
                        color: '#444',
                        fontSize: '0.85rem',
                        lineHeight: '1.7',
                        margin: 0,
                        maxWidth: '560px',
                    }}>
                        Good decisions don't come from gut feeling alone they come from asking the right 
                        questions and having someone who knows how to find the answers. 
                        Whether it's revenue, retention, or growth, every challenge in your business 
                        has a data story behind it. Here's a look at some of those stories.

                    </p>
                </div>

                {/* Project Cards Grid — 2 columns top, 1 bottom left */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.2rem',
                }}>
                    {/* Card 1 - teal, top left */}
                    <div style={{
                        backgroundColor: '#1A8FA0',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '160px',
                        border: '2px dashed #555',
                    }}>
                        <p style={{
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1rem',
                            lineHeight: '1.4',
                            marginBottom: '1rem',
                        }}>
                            Which customer segments are most likely to churn?
                        </p>
                        <a href="#" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            backgroundColor: 'white',
                            color: '#1A8FA0',
                            padding: '0.3rem 0.9rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                            width: 'fit-content',
                        }}>
                            📄 report
                        </a>
                    </div>

                    {/* Card 2 - teal, top right */}
                    <div style={{
                        backgroundColor: '#1A8FA0',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '160px',
                    }}>
                        <p style={{
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1rem',
                            lineHeight: '1.4',
                            marginBottom: '1rem',
                        }}>
                            Which customer segments are most likely to churn?
                        </p>
                        <a href="#" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            backgroundColor: 'white',
                            color: '#1A8FA0',
                            padding: '0.3rem 0.9rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                            width: 'fit-content',
                        }}>
                            📄 report
                        </a>
                    </div>

                    {/* Card 3 - gold, bottom left only */}
                    <div style={{
                        backgroundColor: '#A06700',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '160px',
                        gridColumn: '1',
                    }}>
                        <p style={{
                            color: 'white',
                            fontWeight: '700',
                            fontSize: '1rem',
                            lineHeight: '1.4',
                            marginBottom: '1rem',
                        }}>
                            Which customer segments are most likely to churn?
                        </p>
                        <a href="#" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            backgroundColor: 'white',
                            color: '#A06700',
                            padding: '0.3rem 0.9rem',
                            borderRadius: '20px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textDecoration: 'none',
                            width: 'fit-content',
                        }}>
                            📄 report
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}