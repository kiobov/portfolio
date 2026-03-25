import Link from 'next/link'
export function Features(){
    return (
        <section style={{
            padding: '3rem 2rem',
            backgroundColor: 'white',
            borderBottom: '1px solid #f0f0f0',
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '2rem',
            }}>
                <a href="https://www.edwinslimited.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/edwins_limited.svg" alt="Edwins Limited" width={120} height={60} style={{ objectFit: 'contain' }} />
                </a>
                <a href="https://www.kharis.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/kharis_logo.svg" alt="Kharis" width={120} height={60} style={{ objectFit: 'contain' }} />
                </a>
                <a href="https://www.sama.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/sama_logo.svg" alt="Sama" width={120} height={60} style={{ objectFit: 'contain' }} />
                </a>
            </div>
        </section>


    );
}