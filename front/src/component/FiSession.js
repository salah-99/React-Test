import React from 'react';
import Img from '../views/1.png'

function FiSession() {
  return (
    <div>
      <h1 class="title">Price Alert</h1>
        <section class="hero">
            <div class="container">
                <div class="hero_content">
                    <div class="hero_content_text">
                        <p class="petit_first_text">Get notified when a coin goes above or below a price target.</p>
                        <div class="email_input">
                            <p>Send me an email</p>
                            <input type="text" name="" id="" placeholder="Email"/>
                            <p>as soon as</p>
                        </div>
                        <div class="crypto_convert">
                            <select name="crypto" id="crypto">
                                <option value="BTC">BTC</option>
                                <option value="ETH">ETH</option>
                                <option value="ADA">ADA</option>
                                <option value="DOGE">DOGE</option>
                                <option value="XRP">XRP</option>
                            </select>
                            <p>goes</p>
                            <select name="above" id="above">
                                <option value="aboove">above</option>
                                <option value="AAA">AAA</option>
                            </select>
                            <p>the price of</p>
                            <input type="text" name="" id="" value="0.00$" />
                        </div>
                        <div class="btn__zone">
                            <button>
                                <svg width="20" height="21" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.84387 5.15013e-06C9.39099 -0.00202859 10.8781 0.598342 11.9902 1.67392C13.1023 2.74949 13.7519 4.21577 13.8015 5.76209L13.8046 5.96078V9.21696L14.9014 11.7253C14.9674 11.8764 14.9947 12.0416 14.9809 12.2059C14.967 12.3703 14.9125 12.5286 14.8222 12.6666C14.7319 12.8046 14.6087 12.9179 14.4637 12.9964C14.3186 13.0749 14.1563 13.116 13.9914 13.1161L10.2282 13.1185C10.229 13.7392 9.98771 14.3358 9.55562 14.7814C9.12352 15.227 8.53468 15.4865 7.91424 15.5049C7.2938 15.5232 6.69067 15.2988 6.23304 14.8795C5.7754 14.4601 5.49935 13.8788 5.46353 13.2592L5.45956 13.1161H1.70427C1.5396 13.1159 1.37756 13.0748 1.2327 12.9965C1.08783 12.9182 0.964684 12.8052 0.874308 12.6675C0.783933 12.5299 0.729161 12.3719 0.714911 12.2079C0.700662 12.0438 0.727381 11.8788 0.792669 11.7276L1.88309 9.21775V5.96078C1.88309 2.65851 4.54716 5.15013e-06 7.84387 5.15013e-06ZM9.03603 13.1169L6.65172 13.1185C6.65166 13.4247 6.76945 13.7192 6.98067 13.9409C7.19188 14.1627 7.48032 14.2946 7.78618 14.3094C8.09205 14.3243 8.39189 14.2208 8.62355 14.0205C8.85521 13.8203 9.00091 13.5385 9.03046 13.2337L9.03523 13.1169H9.03603ZM7.84387 1.19216C5.20523 1.19216 3.07525 3.31738 3.07525 5.96078V9.46572L2.00708 11.9247H13.6878L12.6125 9.46651V5.97111L12.6093 5.79229C12.568 4.55676 12.0476 3.38577 11.1582 2.52719C10.2687 1.66861 9.0801 1.18982 7.84387 1.19216Z" fill="white"/>
                                </svg>
                                Set Alert
                            </button>
                        </div>

                    </div>
                    <div class="hero_content_illustration">
                        <img src={Img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default FiSession;
