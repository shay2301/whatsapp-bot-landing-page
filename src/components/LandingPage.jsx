import React from 'react';
import { useResponsive } from '../hooks/useResponsive';

const LandingPage = () => {
  const { isMobile, isTablet, width } = useResponsive();
  
  // Calculate responsive scale for tablets and medium screens
  const isSmallScreen = width <= 1400 && width > 768;

  const handleStartClick = () => {
    alert('קישור לטופס הרשמה');
  };

  const handleDemoClick = () => {
    window.location.href = 'chat-animation.html';
  };

  return (
    <div style={styles.landingPage}>
      {/* Hero Section */}
      <section style={styles.heroSection(isMobile, isTablet)}>
        <div style={styles.heroContainer(isMobile, isSmallScreen)}>
          
          {/* Navigation */}
          <nav style={styles.nav(isMobile)}>
            <div style={styles.logo}>
              <img 
                src="/assets/logo.svg" 
                alt="Logo"
                style={styles.logoImg}
                onError={(e) => {
                  // Fallback SVG if image not found
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<svg viewBox="0 0 212 32" style="width: 100%; height: 100%;"><rect width="212" height="32" fill="#715DE3" rx="4"/><text x="106" y="20" text-anchor="middle" fill="white" font-size="16" font-weight="600">LOGO</text></svg>';
                }}
              />
            </div>
            {!isMobile && (
              <div style={styles.navMenu}>
                Home            Pages            Pricing            Portfolio            Blog            Contact
              </div>
            )}
          </nav>

          {/* Text Container */}
          <div style={styles.textContainer(isMobile)}>
            <p style={styles.heroTitle1(isMobile)}>העוזר החכם שלך לתביעות </p>
            <p style={styles.heroTitle2(isMobile)}>עובד בשבילך  ,  מדבר כמוך ! </p>
            <p style={styles.heroSubheading(isMobile)}>
              דואג לתביעות שלך דרך הוואטסאפ, 24/7
              {!isMobile && <br />}
              לא מתעייף, לא שוכח, לא צריך קפה והוא זול
            </p>
          </div>

          {/* Yellow underline */}
          {!isMobile && (
            <div style={styles.yellowUnderline}>
              <img 
                src="/yellow mark.png" 
                alt=""
                style={styles.yellowUnderlineImg}
                onError={(e) => {
                  // Fallback SVG yellow underline
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<svg viewBox="0 0 263 55" style="position: absolute; bottom: 0; left: 0; right: -16.95%; top: 0; width: 116.95%; height: 100%;"><path d="M5 45 Q60 30, 120 35 T250 45" stroke="#FFC700" stroke-width="10" fill="none" stroke-linecap="round" opacity="0.8"/></svg>';
                }}
              />
            </div>
          )}

          {/* Person Image */}
          {!isMobile && (
            <div style={styles.personImage(isTablet, width)}>
              <img 
                src="/person image.png" 
                alt="Person"
                style={styles.personImageImg}
                onError={(e) => {
                  // Fallback illustration if image not found
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; border-radius: 50%; background: linear-gradient(135deg, #E8E0FF 0%, #D4C5FF 100%); display: flex; align-items: center; justify-content: center; box-shadow: 0 20px 60px rgba(113, 93, 227, 0.3);"><svg style="width: 60%; height: 60%; opacity: 0.6;" fill="#715DE3" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" /></svg></div>';
                }}
              />
            </div>
          )}

          {/* Shape decoration */}
          {!isMobile && width > 1200 && (
            <div style={styles.shapeDecoration(width)}>
              <svg viewBox="0 0 324 410" style={styles.shapeDecorationImg}>
                <circle cx="162" cy="205" r="150" fill="#715DE3" opacity="0.15" />
                <circle cx="200" cy="150" r="100" fill="#9888F4" opacity="0.2" />
                <circle cx="120" cy="280" r="80" fill="#B8A8FF" opacity="0.15" />
              </svg>
            </div>
          )}

          {/* Buttons Container */}
          <div style={styles.buttonsContainer(isMobile)}>
            <div style={styles.heroButtons(isMobile)}>
              <button 
                style={styles.btnPrimary(isMobile)}
                onClick={handleStartClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(113, 93, 227, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                בואו נצא לדרך
              </button>
              <button 
                style={styles.btnSecondary(isMobile)}
                onClick={handleDemoClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFC700';
                  e.currentTarget.style.color = '#141F39';
                  const playIcon = e.currentTarget.querySelector('.play-icon');
                  if (playIcon) playIcon.style.background = '#141F39';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FFC700';
                  const playIcon = e.currentTarget.querySelector('.play-icon');
                  if (playIcon) playIcon.style.background = '#FFC700';
                }}
              >
                <span className="play-icon" style={styles.playIcon}>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="#141F39" style={{marginRight: '2px'}}>
                    <path d="M0 0 L10 6 L0 12 Z" />
                  </svg>
                </span>
                צפו בדמו
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection(isMobile)}>
        <div style={styles.statsBackground}>
          <img 
            src="/BG2.png" 
            alt=""
            style={styles.statsBackgroundImg(isMobile, isTablet)} 
            onError={(e) => {
              // Fallback gradient background
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #715DE3 0%, #9888F4 50%, #5B8DEF 100%)';
            }}
          />
        </div>
        <div style={styles.statsContent(isMobile, isTablet)}>
          <h2 style={styles.statsHeading(isMobile, isTablet)}>מה זה יעשה לעסק שלכם</h2>
          <p style={styles.statsDescription(isMobile, isTablet)}>
            הלקוחות שלכם מקבלים תשובה מדויקת בכל שעה, בלי לחכות
            <br />
            ולכם מתפנה המשאב היקר מכל - הזמן שלכם לספק שירות איכותי ולהתמקד בצמיחת העסק
          </p>
        </div>
      </section>
    </div>
  );
};

// Styles object - נאמן למקור עם תיקונים
const styles = {
  landingPage: {
    width: '100%',
    minHeight: '100vh',
    background: 'white',
    position: 'relative',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
  
  heroSection: (isMobile, isTablet) => ({
    width: '100%',
    minHeight: isMobile ? 'auto' : '758px',
    background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
    position: 'relative',
    padding: isMobile ? '40px 20px' : isTablet ? '60px 40px' : '82px 113px',
  }),
  
  heroContainer: (isMobile, isSmallScreen) => ({
    position: isMobile ? 'static' : 'relative',
    width: isMobile ? '100%' : '1373px',
    maxWidth: '100%',
    height: isMobile ? 'auto' : '676px',
    margin: '0 auto',
    transform: isSmallScreen ? 'scale(0.85)' : 'none',
    transformOrigin: isSmallScreen ? 'top center' : 'center',
  }),
  
  nav: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    top: 0,
    right: isMobile ? 'auto' : '180.528px',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row-reverse',
    gap: isMobile ? '20px' : '146px',
    alignItems: isMobile ? 'center' : 'flex-start',
  }),
  
  logo: {
    width: '211.549px',
    height: '32.01px',
  },
  
  logoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  
  navMenu: {
    color: '#141F39',
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    lineHeight: '24px',
    width: '560px',
    height: '24.024px',
    whiteSpace: 'pre-wrap',
  },
  
  textContainer: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    top: isMobile ? 'auto' : '157px',
    left: 0,
    width: isMobile ? '100%' : '994.572px',
    height: isMobile ? 'auto' : '334px',
  }),
  
  heroTitle1: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: isMobile ? 'auto' : '252.572px',
    top: 0,
    padding: '10px',
    color: '#141F39',
    fontSize: isMobile ? '40px' : '70px',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    lineHeight: isMobile ? '48px' : '80px',
    letterSpacing: '-5px',
    whiteSpace: isMobile ? 'normal' : 'pre',
    textAlign: 'right',
    marginBottom: isMobile ? '20px' : 0,
  }),
  
  heroTitle2: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: 0,
    top: isMobile ? 'auto' : '96px',
    padding: '10px',
    color: '#141F39',
    fontSize: isMobile ? '40px' : '70px',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    lineHeight: isMobile ? '48px' : '80px',
    letterSpacing: '-5px',
    whiteSpace: isMobile ? 'normal' : 'pre',
    textAlign: 'right',
    marginBottom: isMobile ? '20px' : 0,
  }),
  
  heroSubheading: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: isMobile ? 'auto' : '203.714px',
    top: isMobile ? 'auto' : '250px',
    padding: '10px',
    opacity: 0.70,
    color: '#4F4F4F',
    fontSize: isMobile ? '20px' : '30px',
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 600,
    lineHeight: isMobile ? '28px' : '32px',
    textAlign: 'right',
    whiteSpace: isMobile ? 'normal' : 'pre',
    marginBottom: isMobile ? '40px' : 0,
  }),
  
  yellowUnderline: {
    position: 'absolute',
    left: '19.875px',
    top: '333px',
    width: '262.51px',
    height: '55px',
    pointerEvents: 'none',
  },
  
  yellowUnderlineImg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: '-16.95%',
    top: 0,
    width: '116.95%',
    height: '100%',
    objectFit: 'contain',
  },
  
  personImage: (isTablet, width) => ({
    position: 'absolute',
    right: width <= 1200 ? '20px' : '-50px',
    top: '120px',
    width: width <= 1200 ? '400px' : '600px',
    height: width <= 1200 ? '400px' : '600px',
    zIndex: 10,
  }),
  
  personImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  
  shapeDecoration: (width) => ({
    position: 'absolute',
    left: width < 1600 ? 'auto' : '1049.21px',
    right: width < 1600 ? '-200px' : 'auto',
    top: '266px',
    width: '323.79px',
    height: '410px',
    zIndex: 1,
    opacity: 0.4,
  }),
  
  shapeDecorationImg: {
    width: '100%',
    height: '100%',
  },
  
  buttonsContainer: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: isMobile ? 'auto' : '82px',
    top: isMobile ? 'auto' : '594px',
    padding: '10px',
    width: isMobile ? '100%' : 'auto',
    marginTop: isMobile ? '0' : 0,
  }),
  
  heroButtons: (isMobile) => ({
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    width: isMobile ? '100%' : 'auto',
  }),
  
  btnPrimary: (isMobile) => ({
    width: isMobile ? '100%' : '237px',
    height: '62px',
    background: 'linear-gradient(180deg, #9888F4 0%, #715DE3 100%)',
    borderRadius: '12px',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  }),
  
  btnSecondary: (isMobile) => ({
    width: isMobile ? '100%' : '190px',
    height: '62px',
    borderRadius: '12px',
    border: '1.8px solid #FFC700',
    background: 'transparent',
    color: '#FFC700',
    fontSize: '18px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    position: 'relative',
    transition: 'all 0.3s ease',
  }),
  
  playIcon: {
    width: '28px',
    height: '28px',
    background: '#FFC700',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '15px',
    transition: 'background 0.3s ease',
  },
  
  statsSection: (isMobile) => ({
    position: 'relative',
    width: '100%',
    minHeight: isMobile ? '400px' : '600px',
    marginTop: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  
  statsBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  
  statsBackgroundImg: (isMobile, isTablet) => ({
    position: 'absolute',
    left: '50%',
    top: isMobile ? '-20%' : isTablet ? '-30%' : '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'auto',
    minHeight: '100%',
    objectFit: 'cover',
    display: 'block',
  }),
  
  statsContent: (isMobile, isTablet) => ({
    position: 'relative',
    zIndex: 10,
    padding: isMobile ? '60px 20px' : isTablet ? '60px 60px' : '100px 120px',
    textAlign: 'center',
    color: 'white',
    maxWidth: '1200px',
    transform: isMobile ? 'none' : 'rotate(-2deg)',
    transformOrigin: 'center',
  }),
  
  statsHeading: (isMobile, isTablet) => ({
    color: 'white',
    fontSize: isMobile ? '40px' : isTablet ? '48px' : '64px',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 600,
    lineHeight: 'normal',
    marginBottom: '30px',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
    transform: isMobile ? 'none' : 'rotate(-1deg)',
    transformOrigin: 'center',
  }),
  
  statsDescription: (isMobile, isTablet) => ({
    color: 'white',
    fontSize: isMobile ? '20px' : isTablet ? '22px' : '28px',
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: '1000px',
    margin: '0 auto',
    textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
    transform: isMobile ? 'none' : 'rotate(-1deg)',
    transformOrigin: 'center',
  }),
};

export default LandingPage;