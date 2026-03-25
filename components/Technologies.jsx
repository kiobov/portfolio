export function Technologies() {
    const tools = [
        'logo_tableau', 'logo_hadoop', 'logo_pandas', 'logo_python',
        'logo_cpp', 'logo_scikitlearn', 'logo_looker',
        'logo_aws', 'logo_java', 'logo_excel',
    ];

    return (
        <section style={{
            padding: '2rem',
            backgroundColor: 'white',
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.2rem',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                {tools.map((tool) => (
                    <img
                        key={tool}
                        src={`/images/logosportfolio${tool}.svg`}
                        alt={tool}
                        width={52}
                        height={52}
                        style={{ objectFit: 'contain' }}
                        title={tool}
                    />
                ))}
            </div>
        </section>
    );
}