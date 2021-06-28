import React from 'react';

function header() {
  return (
    <div>
        <header>
            <div class="container">
                <div class="logo">
                    <svg width="32" height="52" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2938 39.578C13.2341 40.7487 12.266 41.6795 11.0806 41.6795C9.89508 41.6795 8.92701 40.7487 8.86736 39.578H8.86444V29.3635H13.2967V39.4634H13.2967C13.2967 39.4654 13.2967 39.4673 13.2967 39.4693V39.578H13.2938Z" fill="#FEAC7C"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4084 10.1572C21.1201 4.49904 16.4411 0 10.7112 0C4.9814 0 0.302378 4.49904 0.0140878 10.1572H0V29.3635H21.4224L21.4224 10.7112C21.4224 10.7069 21.4224 10.7026 21.4224 10.6983V10.1572H21.4084Z" fill="#FFD965"/>
                        <circle cx="11.0806" cy="7.94112" r="2.21611" fill="white"/>
                    </svg>
                    <h2>Pricely</h2>
                </div>
                <div class="menu">
                    <ul>
                        <li><a class="active">Alerts</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Privacy</a></li>
                        <li><a>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  );
}

export default header;
