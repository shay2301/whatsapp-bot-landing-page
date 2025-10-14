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

        {/* Simple Title Section */}
        <section style={styles.simpleTitleSection(isMobile, isTablet)}>
          <h2 style={styles.simpleTitle(isMobile, isTablet)}>
            דאגנו לכם שהכל ישאר פשוט
          </h2>
          <div style={styles.elementUnderline(isMobile, isTablet)}>
            <img
              src="/Element.png"
              alt=""
              style={styles.elementImage(isMobile, isTablet)}
              onError={(e) => {
                // Fallback SVG if image not found
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<svg viewBox="0 0 200 20" style="width: 200px; height: 20px;"><path d="M10 10 Q50 5, 100 10 T190 10" stroke="#141F39" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';
              }}
            />
          </div>
        </section>

        {/* First Step Section */}
        <section style={styles.firstStepSection(isMobile, isTablet)}>
          <div style={styles.firstStepContainer(isMobile, isTablet)}>
            <div style={styles.firstStepImage(isMobile, isTablet)}>
              <img
                src="/firstStep.png"
                alt="First Step"
                style={styles.firstStepImageImg}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div style={styles.firstStepContent(isMobile, isTablet)}>
              <h3 style={styles.firstStepTitle(isMobile, isTablet)}>
                מתאימים את הסוכן לעסק שלך
              </h3>
              <p style={styles.firstStepText(isMobile, isTablet)}>
                אנחנו מחברים את הבוט לעסק שלך, מגדירים את ההודעות, הטון והשלבים כך שיתאים בדיוק לאופן שבו אתה עובד ומדבר עם הלקוחות שלך.
              </p>
            </div>
          </div>
        </section>

        {/* Second Step Section */}
        <section style={styles.secondStepSection(isMobile, isTablet)}>
          <div style={styles.secondStepContainer(isMobile, isTablet)}>
            <div style={styles.secondStepContent(isMobile, isTablet)}>
              <h3 style={styles.secondStepTitle(isMobile, isTablet)}>
                טיפול אוטומטי בפניות
              </h3>
              <p style={styles.secondStepText(isMobile, isTablet)}>
                המערכת מזהה כשמדובר בתביעה ומתחילה תהליך אוטומטי של שאלות ואיסוף נתונים, בלי שתצטרך להתערב.
              </p>
            </div>
            <div style={styles.secondStepImage(isMobile, isTablet)}>
              <img
                src="/step2.png"
                alt="Second Step"
                style={styles.secondStepImageImg}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </section>

        {/* Third Step Section */}
        <section style={styles.thirdStepSection(isMobile, isTablet)}>
          <div style={styles.thirdStepContainer(isMobile, isTablet)}>
            <div style={styles.thirdStepImage(isMobile, isTablet)}>
              <img
                src="/STEP3.png"
                alt="Third Step"
                style={styles.thirdStepImageImg}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div style={styles.thirdStepContent(isMobile, isTablet)}>
              <h3 style={styles.thirdStepTitle(isMobile, isTablet)}>
                אתה מקבל הכול מוכן
              </h3>
              <p style={styles.thirdStepText(isMobile, isTablet)}>
                בסוף כל תהליך מחכה לך תיק תביעה מסודר עם כל הפרטים, המסמכים והנתונים מוכן לשליחה בלחיצה אחת
              </p>
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
    right: width <= 1200 ? '-20px' : '-50px',
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

  // Simple Title Section
  simpleTitleSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 60px',
    backgroundColor: 'white',
    textAlign: 'center',
  }),

  simpleTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    lineHeight: isMobile ? '40px' : isTablet ? '56px' : '72px',
    color: '#141F39',
    margin: '0 0 10px 0',
    textAlign: 'center',
    position: 'relative',
  }),

  elementUnderline: (isMobile, isTablet) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-5px',
    transform: isMobile ? 'translateX(-80px)' : isTablet ? 'translateX(-120px)' : 'translateX(-160px)',
  }),

  elementImage: (isMobile, isTablet) => ({
    width: isMobile ? '200px' : isTablet ? '300px' : '400px',
    height: 'auto',
    objectFit: 'contain',
  }),

  // First Step Section Styles
  firstStepSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '40px 20px' : isTablet ? '50px 40px' : '60px 60px',
    backgroundColor: 'white',
    marginTop: '-40px',
  }),

  firstStepContainer: (isMobile, isTablet) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '40px' : isTablet ? '60px' : '80px',
    maxWidth: '1200px',
    margin: '0 auto',
  }),

  firstStepImage: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: isMobile ? '0' : isTablet ? '20px' : '40px',
  }),

  firstStepImageImg: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'contain',
  },

  firstStepContent: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    textAlign: isMobile ? 'center' : 'right',
  }),

  firstStepTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '40px',
    lineHeight: isMobile ? '32px' : isTablet ? '40px' : '48px',
    color: '#141F39',
    margin: '0 0 15px 0',
    whiteSpace: 'nowrap',
  }),

  firstStepText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#1B2B4D',
    maxWidth: isMobile ? '100%' : '500px',
  }),

  // Second Step Section Styles
  secondStepSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '40px 20px' : isTablet ? '50px 40px' : '60px 60px',
    backgroundColor: 'white',
    marginTop: '-20px',
  }),

  secondStepContainer: (isMobile, isTablet) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '40px' : isTablet ? '60px' : '80px',
    maxWidth: '1200px',
    margin: '0 auto',
  }),

  secondStepImage: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: isMobile ? '0' : isTablet ? '20px' : '40px',
  }),

  secondStepImageImg: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'contain',
  },

  secondStepContent: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    textAlign: isMobile ? 'center' : 'right',
    direction: 'rtl',
  }),

  secondStepTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '40px',
    lineHeight: isMobile ? '32px' : isTablet ? '40px' : '48px',
    color: '#141F39',
    margin: '0 0 15px 0',
    whiteSpace: 'nowrap',
    direction: 'rtl',
    textAlign: 'right',
  }),

  secondStepText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#4F4F4F',
    maxWidth: isMobile ? '100%' : '500px',
    direction: 'rtl',
    textAlign: 'right',
  }),

  // Third Step Section Styles
  thirdStepSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '40px 20px' : isTablet ? '50px 40px' : '60px 60px',
    backgroundColor: 'white',
    marginTop: '-20px',
  }),

  thirdStepContainer: (isMobile, isTablet) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '40px' : isTablet ? '60px' : '80px',
    maxWidth: '1200px',
    margin: '0 auto',
  }),

  thirdStepImage: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: isMobile ? '0' : isTablet ? '20px' : '40px',
  }),

  thirdStepImageImg: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'contain',
  },

  thirdStepContent: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    textAlign: isMobile ? 'center' : 'right',
    direction: 'rtl',
  }),

  thirdStepTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '40px',
    lineHeight: isMobile ? '32px' : isTablet ? '40px' : '48px',
    color: '#141F39',
    margin: '0 0 15px 0',
    whiteSpace: 'nowrap',
    direction: 'rtl',
    textAlign: 'right',
  }),

  thirdStepText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#4F4F4F',
    maxWidth: isMobile ? '100%' : '500px',
    direction: 'rtl',
    textAlign: 'right',
  }),
  
};

export default LandingPage;