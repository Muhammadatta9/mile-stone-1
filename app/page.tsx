import React from 'react';

export default function Home() {
    const userName = "World"; // Replace "World" with your name

    return (
        <div style={styles.container}>
            <div style={styles.message}>
                <h1 style={styles.heading}>Hello, {userName}!</h1>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f8ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
    },
    message: {
        textAlign: 'center',
        padding: '20px',
        border: '2px solid #008080',
        borderRadius: '10px',
        backgroundColor: '#e0ffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    heading: {
        color: '#008080',
        fontSize: '2.5rem',
    },
};
