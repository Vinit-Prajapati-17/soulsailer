import React from 'react';
import styled from 'styled-components';

const TeamCard = ({ name, role, about, image, email, social, whatsapp }) => {
  const handleWhatsApp = () => {
    if (whatsapp) {
      const cleanNumber = whatsapp.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanNumber}`, '_blank');
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
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
              {social?.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              )}
            </div>
            <button className="button" onClick={handleWhatsApp}>
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
    width: 380px;
    height: 380px;
    background: var(--bg-card, #ffffff);
    border-radius: 32px;
    padding: 3px;
    position: relative;
    box-shadow: var(--shadow-card, 0 8px 30px rgba(0, 119, 182, 0.15));
    transition: all 0.5s ease;
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
    transition: all 0.6s ease 0.1s, z-index 0.6s ease 0.1s;
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
    top: 81.5%;
    border-radius: 29px;
    z-index: 2;
    box-shadow: 0px 5px 5px 0px rgba(0, 119, 182, 0.2) inset;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .card .bottom .content {
    position: absolute;
    bottom: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 220px;
  }

  .card .bottom .content .name {
    display: block;
    font-size: 1.4rem;
    color: var(--white, #ffffff);
    font-weight: 600;
    transition: font-size 0.5s ease;
  }

  .card .bottom .content .about-me {
    display: block;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    margin-top: 1rem;
    line-height: 1.4;
    transition: font-size 0.5s ease;
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
    align-items: center;
  }

  .card .bottom .bottom-bottom .social-links-container a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
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
    background: rgba(255, 255, 255, 0.35);
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
    transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
  }

  .card:hover .bottom .content .name {
    font-size: 1.6rem;
  }

  .card:hover .bottom .content .about-me {
    font-size: 1.1rem;
  }

  .card:hover .profile-pic {
    width: 120px;
    height: 120px;
    aspect-ratio: 1;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    z-index: 3;
    border: 4px solid var(--primary-blue, #0077B6);
    box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.15));
    transition: all 0.6s ease, z-index 0.6s ease 0.1s;
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
      width: 340px;
      height: 340px;
    }

    .card .bottom .content .name {
      font-size: 1.2rem;
    }

    .card .bottom .content .about-me {
      font-size: 0.9rem;
    }

    .card .bottom .bottom-bottom .button {
      font-size: 0.7rem;
      padding: 0.4rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 300px;
      height: 300px;
    }

    .card .bottom .content .name {
      font-size: 1.1rem;
    }

    .card .bottom .content .about-me {
      font-size: 0.85rem;
    }
  }
`;

export default TeamCard;