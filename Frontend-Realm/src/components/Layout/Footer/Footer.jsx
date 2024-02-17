import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0077b5', color: '#fff', padding: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div>
          <img src="" alt="College Logo" style={{ height: '40px', width: 'auto' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>&copy; All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
