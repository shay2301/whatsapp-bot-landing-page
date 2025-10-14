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
            <p style={styles.heroTitle2(isMobile)}>עובד בשבילך , מדבר כמוך ! </p>
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
                src="/HeroPic.png" 
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


          {/* Buttons Container */}
          <div style={styles.buttonsContainer(isMobile)}>
            <div style={styles.heroButtons(isMobile)}>
              <button 
                style={styles.btnPrimary(isMobile)}
                onClick={handleStartClick}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(88, 204, 2, 0.3)';
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
                  e.currentTarget.style.background = '#1CB0F6';
                  e.currentTarget.style.color = 'white';
                  const playIcon = e.currentTarget.querySelector('.play-icon');
                  if (playIcon) playIcon.style.background = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#1CB0F6';
                  const playIcon = e.currentTarget.querySelector('.play-icon');
                  if (playIcon) playIcon.style.background = '#1CB0F6';
                }}
              >
                <span className="play-icon" style={styles.playIcon}>
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="white" style={{marginLeft: '2px'}}>
                    <path d="M10 0 L0 6 L10 12 Z" />
                  </svg>
                </span>
                צפו בדמו
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Rectangle Section */}
      <section style={styles.newRectangleSection(isMobile, isTablet)}>
        <h2 style={styles.newSectionTitle(isMobile, isTablet)}>
          מה זה יעשה לעסק שלכם
        </h2>
        <p style={styles.newSectionText(isMobile, isTablet)}>
          הלקוחות שלכם מקבלים תשובה מדויקת בכל שעה, בלי לחכות.
          <br />
          ולכם מתפנה המשאב היקר מכל - הזמן שלכם לספק שירות איכותי ולהתמקד בצמיחת העסק
        </p>
      </section>

      {/* Statistics Section */}
      <section style={styles.statisticsSection(isMobile, isTablet)}>
        <div style={styles.statisticsContainer(isMobile, isTablet)}>
          <div style={styles.statCard(isMobile, isTablet)}>
            <h3 style={styles.statNumber(isMobile, isTablet)}>2,847</h3>
            <p style={styles.statLabel(isMobile, isTablet)}>תביעות שהוגשו</p>
          </div>
          <div style={styles.statCard(isMobile, isTablet)}>
            <h3 style={styles.statNumber(isMobile, isTablet)}>24/7</h3>
            <p style={styles.statLabel(isMobile, isTablet)}>זמינות מלאה</p>
          </div>
          <div style={styles.statCard(isMobile, isTablet)}>
            <h3 style={styles.statNumber(isMobile, isTablet)}>5 דק'</h3>
            <p style={styles.statLabel(isMobile, isTablet)}>זמן ממוצע להגשה</p>
          </div>
          <div style={styles.statCard(isMobile, isTablet)}>
            <h3 style={styles.statNumber(isMobile, isTablet)}>98%</h3>
            <p style={styles.statLabel(isMobile, isTablet)}>שביעות רצון</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection(isMobile, isTablet)}>
        <div style={styles.featuresContainer(isMobile, isTablet)}>
          <h2 style={styles.featuresTitle(isMobile, isTablet)}>איך זה עובד?</h2>
          <div style={styles.featuresGrid(isMobile, isTablet)}>
            <div style={styles.featureCard(isMobile, isTablet)}>
              <div style={styles.featureIcon(isMobile, isTablet)}>📱</div>
              <h3 style={styles.featureTitle(isMobile, isTablet)}>שלח הודעה</h3>
              <p style={styles.featureText(isMobile, isTablet)}>הלקוח שולח הודעה בוואטסאפ עם פרטי התביעה</p>
            </div>
            <div style={styles.featureCard(isMobile, isTablet)}>
              <div style={styles.featureIcon(isMobile, isTablet)}>🤖</div>
              <h3 style={styles.featureTitle(isMobile, isTablet)}>עיבוד אוטומטי</h3>
              <p style={styles.featureText(isMobile, isTablet)}>הבוט מעבד את המידע ומכין את התביעה</p>
            </div>
            <div style={styles.featureCard(isMobile, isTablet)}>
              <div style={styles.featureIcon(isMobile, isTablet)}>✅</div>
              <h3 style={styles.featureTitle(isMobile, isTablet)}>הגשה מהירה</h3>
              <p style={styles.featureText(isMobile, isTablet)}>התביעה מוגשת אוטומטית לסוכנות הביטוח</p>
            </div>
          </div>
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
    fontFamily: "'Varela Round', sans-serif",
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
    marginBottom: isMobile ? '30px' : '0',
  }),
  
  heroTitle1: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: isMobile ? 'auto' : '252.572px',
    top: 0,
    padding: '10px',
    color: '#4B4B4B',
    fontSize: isMobile ? '40px' : '70px',
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    lineHeight: isMobile ? '48px' : '80px',
    letterSpacing: '-2px',
    whiteSpace: isMobile ? 'normal' : 'pre',
    textAlign: 'right',
    marginBottom: isMobile ? '20px' : 0,
  }),
  
  heroTitle2: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: 0,
    top: isMobile ? 'auto' : '96px',
    padding: '10px',
    color: '#4B4B4B',
    fontSize: isMobile ? '40px' : '70px',
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    lineHeight: isMobile ? '48px' : '80px',
    letterSpacing: '-2px',
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
    fontFamily: "'Varela Round', sans-serif",
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
    right: width <= 1200 ? '100px' : '30px',
    top: '160px',
    width: width <= 1200 ? '400px' : '600px',
    height: width <= 1200 ? '400px' : '600px',
    zIndex: 10,
  }),
  
  personImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
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
    background: '#58CC02',
    borderRadius: '12px',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    fontFamily: "'Varela Round', sans-serif",
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
    border: '1.8px solid #1CB0F6',
    background: 'transparent',
    color: '#1CB0F6',
    fontSize: '18px',
    fontFamily: "'Varela Round', sans-serif",
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
    background: '#1CB0F6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '15px',
    transition: 'background 0.3s ease',
  },

  newRectangleSection: (isMobile, isTablet) => ({
    width: '100%',
    backgroundColor: '#DFF0F5',
    padding: isMobile ? '40px 20px 40px 20px' : isTablet ? '60px 40px 60px 40px' : '80px 60px 80px 60px',
    marginTop: isMobile ? '40px' : '60px',
    minHeight: isMobile ? '200px' : isTablet ? '250px' : '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
  }),

  newSectionTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '40px' : isTablet ? '56px' : '72px',
    lineHeight: isMobile ? '48px' : isTablet ? '64px' : '80px',
    color: '#1B2B4D',
    margin: 0,
    textAlign: 'center',
  }),

  newSectionText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px',
    lineHeight: isMobile ? '32px' : isTablet ? '38px' : '44px',
    color: '#1B2B4D',
    margin: isMobile ? '20px 0 0 0' : '30px 0 0 0',
    textAlign: 'center',
    maxWidth: isMobile ? '100%' : '1000px',
  }),

  // Statistics Section
  statisticsSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 60px',
    backgroundColor: '#f8f9ff',
  }),

  statisticsContainer: (isMobile, isTablet) => ({
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '20px' : '40px',
  }),

  statCard: (isMobile, isTablet) => ({
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: isMobile ? '20px' : '30px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }),

  statNumber: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '28px' : isTablet ? '36px' : '48px',
    color: '#1B2B4D',
    margin: '0 0 10px 0',
  }),

  statLabel: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '14px' : isTablet ? '16px' : '18px',
    color: '#666',
    margin: 0,
  }),

  // Features Section
  featuresSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 60px',
    backgroundColor: 'white',
  }),

  featuresContainer: (isMobile, isTablet) => ({
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  }),

  featuresTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    color: '#1B2B4D',
    margin: '0 0 60px 0',
  }),

  featuresGrid: (isMobile, isTablet) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
    gap: isMobile ? '30px' : '40px',
  }),

  featureCard: (isMobile, isTablet) => ({
    backgroundColor: '#f8f9ff',
    borderRadius: '20px',
    padding: isMobile ? '30px 20px' : '40px 30px',
    textAlign: 'center',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  }),

  featureIcon: (isMobile, isTablet) => ({
    fontSize: isMobile ? '40px' : '48px',
    marginBottom: '20px',
  }),

  featureTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px',
    color: '#1B2B4D',
    margin: '0 0 15px 0',
  }),

  featureText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    color: '#666',
    lineHeight: 1.6,
    margin: 0,
  }),
  
};

export default LandingPage;