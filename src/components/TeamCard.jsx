import React from 'react';
import styled from 'styled-components';
import { Mail } from 'lucide-react';

const TeamCard = ({ name, role, about, image, email, social }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <button className="mail" onClick={() => email && window.open(`mailto:${email}`)}>
          <Mail size={20} />
        </button>
        <div className="profile-pic">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <div className="placeholder-avatar">
              {name?.charAt(0) || 'T'}
            </div>
          )}
        </div>
        <div className="bottom">
          <div className="content">
            <span className="name">{name || 'Team Member'}</span>
            <span className="about-me">{about || role || 'Travel Expert'}</span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              {social?.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              )}
              {social?.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                  </svg>
                </a>
              )}
              {social?.github && (
                <a href={social.github} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
              )}
            </div>
            <button className="button" onClick={() => email && window.open(`mailto:${email}`)}>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 280px;
    background: var(--bg-card, #ffffff);
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: var(--shadow-card, 0 8px 30px rgba(0, 119, 182, 0.15));
    transition: all var(--transition-normal, 0.3s ease);
    border: 1px solid var(--border-color, #e2e8f0);
  }

  .card .mail {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    background: transparent;
    border: none;
    z-index: 4;
    cursor: pointer;
  }

  .card .mail svg {
    stroke: var(--primary-blue, #0077B6);
    stroke-width: 2px;
    transition: all var(--transition-fast, 0.2s ease);
  }

  .card .mail:hover svg {
    stroke: var(--orange, #F5A623);
    transform: scale(1.1);
  }

  .card .profile-pic {
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    top: 3px;
    left: 3px;
    border-radius: 29px;
    z-index: 1;
    border: 0px solid var(--primary-blue, #0077B6);
    overflow: hidden;
    transition: all var(--transition-normal, 0.3s ease) 0.2s, z-index var(--transition-normal, 0.3s ease) 0.2s;
  }

  .card .profile-pic img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: center center;
    transition: all var(--transition-normal, 0.3s ease) 0s;
  }

  .card .placeholder-avatar {
    width: 100%;
    height: 100%;
    background: var(--gradient-primary, linear-gradient(135deg, #0077B6, #1A365D));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    font-weight: 700;
    color: var(--white, #ffffff);
    transition: all var(--transition-normal, 0.3s ease) 0s;
  }

  .card .bottom {
    position: absolute;
    bottom: 3px;
    left: 3px;
    right: 3px;
    background: var(--primary-blue, #0077B6);
    top: 80%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: 0px 5px 5px 0px rgba(0, 119, 182, 0.2) inset;
    overflow: hidden;
    transition: all var(--transition-normal, 0.3s ease) cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 160px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.2rem;
    color: var(--white, #ffffff);
    font-weight: 600;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 1rem;
    line-height: 1.4;
  }

  .card .bottom .bottom-bottom {
    position: absolute;
    bottom: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card .bottom .bottom-bottom .social-links-container {
    display: flex;
    gap: 1rem;
  }

  .card .bottom .bottom-bottom .social-links-container a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all var(--transition-fast, 0.2s ease);
    text-decoration: none;
  }

  .card .bottom .bottom-bottom .social-links-container svg {
    height: 16px;
    width: 16px;
    stroke: var(--white, #ffffff);
    fill: none;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  .card .bottom .bottom-bottom .social-links-container a:hover {
    background: var(--orange, #F5A623);
    transform: scale(1.1);
  }

  .card .bottom .bottom-bottom .button {
    background: var(--white, #ffffff);
    color: var(--primary-blue, #0077B6);
    border: none;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    transition: all var(--transition-fast, 0.2s ease);
    cursor: pointer;
  }

  .card .bottom .bottom-bottom .button:hover {
    background: var(--orange, #F5A623);
    color: var(--white, #ffffff);
    transform: translateY(-2px);
    box-shadow: 0px 4px 12px rgba(245, 166, 35, 0.3);
  }

  .card:hover {
    border-top-left-radius: 55px;
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg, 0 10px 40px rgba(0, 0, 0, 0.2));
  }

  .card:hover .bottom {
    top: 20%;
    border-radius: 80px 29px 29px 29px;
    transition: all var(--transition-normal, 0.3s ease) cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  }

  .card:hover .profile-pic {
    width: 100px;
    height: 100px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 7px solid var(--primary-blue, #0077B6);
    box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.15));
    transition: all var(--transition-normal, 0.3s ease), z-index var(--transition-normal, 0.3s ease) 0.1s;
  }

  .card:hover .profile-pic:hover {
    transform: scale(1.1);
    border-radius: 20px;
  }

  .card:hover .profile-pic img {
    transform: scale(1.2);
    transition: all var(--transition-normal, 0.3s ease) 0.5s;
  }

  .card:hover .placeholder-avatar {
    transform: scale(1.2);
    transition: all var(--transition-normal, 0.3s ease) 0.5s;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .card {
      width: 260px;
      height: 260px;
    }

    .card .bottom .content .name {
      font-size: 1.1rem;
    }

    .card .bottom .content .about-me {
      font-size: 0.85rem;
    }

    .card .bottom .bottom-bottom .button {
      font-size: 0.65rem;
      padding: 0.4rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 240px;
      height: 240px;
    }

    .card .bottom .content .name {
      font-size: 1rem;
    }

    .card .bottom .content .about-me {
      font-size: 0.8rem;
    }
  }
`;

export default TeamCard;