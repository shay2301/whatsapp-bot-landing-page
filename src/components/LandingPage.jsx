import React, { useState } from 'react';
import { useResponsive } from '../hooks/useResponsive';

const LandingPage = () => {
  const { isMobile, isTablet, width } = useResponsive();
  
  // FAQ state management
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // Calculate responsive scale for tablets and medium screens
  const isSmallScreen = width <= 1400 && width > 768;

  const handleStartClick = () => {
    alert('קישור לטופס הרשמה');
  };

  const handleDemoClick = () => {
    window.location.href = 'chat-animation.html';
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
            {isMobile ? (
              <div style={styles.mobileTitleContainer}>
                <h1 style={styles.mobileHeroTitle}>
                  העוזר החכם שלך לתביעות עובד בשבילך , מדבר כמוך !
                </h1>
                {/* Yellow underline after "כמוך" in mobile */}
                <div style={styles.yellowUnderlineAfterTitle}>
                  <img 
                    src="/yellow mark.png" 
                    alt=""
                    style={styles.yellowUnderlineImgMobile}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<svg viewBox="0 0 120 12" style="width: 120px; height: 12px;"><path d="M10 6 Q30 3, 60 6 T110 6" stroke="#FFC700" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/></svg>';
                    }}
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 style={styles.heroTitle1(isMobile)}>העוזר החכם שלך לתביעות </h1>
                <h1 style={styles.heroTitle2(isMobile)}>עובד בשבילך , מדבר כמוך ! </h1>
              </>
            )}
            
            <p style={styles.heroSubheading(isMobile)}>
              דואג לתביעות שלך דרך הוואטסאפ, 24/7
              {!isMobile && <br />}
              לא מתעייף, לא שוכח, לא צריך קפה והוא זול
            </p>
          </div>


          {/* Person Image */}
          <div style={styles.personImage(isMobile, isTablet, width)}>
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

      {/* Business Benefits Section */}
      <section style={styles.businessBenefitsSection(isMobile, isTablet)}>
        <h2 style={styles.businessBenefitsTitle(isMobile, isTablet)}>
          מה זה יעשה לעסק שלכם
        </h2>
        <div style={styles.businessBenefitsContent(isMobile, isTablet)}>
          <p style={styles.businessBenefitsText(isMobile, isTablet)}>
            הלקוחות שלכם מקבלים תשובה מדויקת בכל שעה, בלי לחכות.
          </p>
          <p style={styles.businessBenefitsText(isMobile, isTablet)}>
            ולכם מתפנה המשאב היקר מכל - הזמן שלכם לספק שירות איכותי ולהתמקד בצמיחת העסק
          </p>
        </div>
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
            {isMobile ? (
              <>
                <div style={styles.firstStepImage(isMobile, isTablet)}>
                  <img
                    src="/firstStep.png"
                    alt="מתאימים את הסוכן לעסק שלך - שלב ראשון"
                    style={styles.firstStepImageImg}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div style={styles.firstStepContent(isMobile, isTablet)}>
                  <h2 style={styles.firstStepTitle(isMobile, isTablet)}>
                    מתאימים את הסוכן לעסק שלך
                  </h2>
                  <p style={styles.firstStepText(isMobile, isTablet)}>
                    אנחנו מחברים את הבוט לעסק שלך, מגדירים את ההודעות, הטון והשלבים כך שיתאים בדיוק לאופן שבו אתה עובד ומדבר עם הלקוחות שלך.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div style={styles.firstStepImage(isMobile, isTablet)}>
                  <img
                    src="/firstStep.png"
                    alt="מתאימים את הסוכן לעסק שלך - שלב ראשון"
                    style={styles.firstStepImageImg}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div style={styles.firstStepContent(isMobile, isTablet)}>
                  <h2 style={styles.firstStepTitle(isMobile, isTablet)}>
                    מתאימים את הסוכן לעסק שלך
                  </h2>
                  <p style={styles.firstStepText(isMobile, isTablet)}>
                    אנחנו מחברים את הבוט לעסק שלך, מגדירים את ההודעות, הטון והשלבים כך שיתאים בדיוק לאופן שבו אתה עובד ומדבר עם הלקוחות שלך.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Second Step Section */}
        <section style={styles.secondStepSection(isMobile, isTablet)}>
          <div style={styles.secondStepContainer(isMobile, isTablet)}>
            {isMobile ? (
              <>
                <div style={styles.secondStepImage(isMobile, isTablet)}>
                  <img
                    src="/step2.png"
                    alt="טיפול אוטומטי בפניות - שלב שני"
                    style={styles.secondStepImageImg}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div style={styles.secondStepContent(isMobile, isTablet)}>
                  <h2 style={styles.secondStepTitle(isMobile, isTablet)}>
                    טיפול אוטומטי בפניות
                  </h2>
                  <p style={styles.secondStepText(isMobile, isTablet)}>
                    המערכת מזהה כשמדובר בתביעה ומתחילה תהליך אוטומטי של שאלות ואיסוף נתונים, בלי שתצטרך להתערב.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div style={styles.secondStepContent(isMobile, isTablet)}>
                  <h2 style={styles.secondStepTitle(isMobile, isTablet)}>
                    טיפול אוטומטי בפניות
                  </h2>
                  <p style={styles.secondStepText(isMobile, isTablet)}>
                    המערכת מזהה כשמדובר בתביעה ומתחילה תהליך אוטומטי של שאלות ואיסוף נתונים, בלי שתצטרך להתערב.
                  </p>
                </div>
                <div style={styles.secondStepImage(isMobile, isTablet)}>
                  <img
                    src="/step2.png"
                    alt="טיפול אוטומטי בפניות - שלב שני"
                    style={styles.secondStepImageImg}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </section>

        {/* Third Step Section */}
        <section style={styles.thirdStepSection(isMobile, isTablet)}>
          <div style={styles.thirdStepContainer(isMobile, isTablet)}>
            {isMobile ? (
              <>
                <div style={styles.thirdStepImage(isMobile, isTablet)}>
                  <img
                    src="/STEP3.png"
                    alt="אתה מקבל הכול מוכן - שלב שלישי"
                    style={styles.thirdStepImageImg}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div style={styles.thirdStepContent(isMobile, isTablet)}>
                  <h2 style={styles.thirdStepTitle(isMobile, isTablet)}>
                    אתה מקבל הכול מוכן
                  </h2>
                  <p style={styles.thirdStepText(isMobile, isTablet)}>
                    בסוף כל תהליך מחכה לך תיק תביעה מסודר עם כל הפרטים, המסמכים והנתונים מוכן לשליחה בלחיצה אחת
                  </p>
                </div>
              </>
            ) : (
              <>
                <div style={styles.thirdStepImage(isMobile, isTablet)}>
                  <img
                    src="/STEP3.png"
                    alt="אתה מקבל הכול מוכן - שלב שלישי"
                    style={styles.thirdStepImageImg}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div style={styles.thirdStepContent(isMobile, isTablet)}>
                  <h2 style={styles.thirdStepTitle(isMobile, isTablet)}>
                    אתה מקבל הכול מוכן
                  </h2>
                  <p style={styles.thirdStepText(isMobile, isTablet)}>
                    בסוף כל תהליך מחכה לך תיק תביעה מסודר עם כל הפרטים, המסמכים והנתונים מוכן לשליחה בלחיצה אחת
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Numbers Section */}
        <section style={styles.numbersSection(isMobile, isTablet)}>
          <h2 style={styles.numbersTitle(isMobile, isTablet)}>
            המספרים מדברים בעד עצמם
          </h2>
          <div style={styles.numbersContainer(isMobile, isTablet)}>
            <div style={styles.numberItem(isMobile, isTablet)}>
              <div style={styles.numberMain(isMobile, isTablet)}>מידי</div>
              <h3 style={styles.numberSubtitle(isMobile, isTablet)}>זמן תגובה ללקוח</h3>
              <p style={styles.numberHighlight(isMobile, isTablet)}>מ-3 שעות למענה מידי</p>
              <p style={styles.numberSubtext(isMobile, isTablet)}>+100% שביעות רצון</p>
            </div>
            <div style={styles.numberItem(isMobile, isTablet)}>
              <div style={styles.numberMain(isMobile, isTablet)}>3 דק׳</div>
              <h3 style={styles.numberSubtitle(isMobile, isTablet)}>זמן תפעול ממוצע לתביעה</h3>
              <p style={styles.numberHighlight(isMobile, isTablet)}>מ-30 דקות ל-3 דקות</p>
              <p style={styles.numberSubtext(isMobile, isTablet)}>90% פחות זמן עבודה</p>
            </div>
            <div style={styles.numberItem(isMobile, isTablet)}>
              <div style={styles.numberMain(isMobile, isTablet)}>9 שעות</div>
              <h3 style={styles.numberSubtitle(isMobile, isTablet)}>שעות שנחסכות חודשית</h3>
              <p style={styles.numberHighlight(isMobile, isTablet)}>מ-10 ל-1 שעה בחודש</p>
              <p style={styles.numberSubtext(isMobile, isTablet)}>שבוע עבודה שלם בשנה</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={styles.faqSection(isMobile, isTablet)}>
          <h2 style={styles.faqTitle(isMobile, isTablet)}>
            תשאלו אותנו
          </h2>
          <div style={styles.faqUnderline(isMobile, isTablet)}>
            <img
              src="/Element.png"
              alt=""
              style={styles.faqElementImage(isMobile, isTablet)}
              onError={(e) => {
                // Fallback SVG if image not found
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<svg viewBox="0 0 200 20" style="width: 200px; height: 20px;"><path d="M10 10 Q50 5, 100 10 T190 10" stroke="#FFC700" stroke-width="3" fill="none" stroke-linecap="round"/></svg>';
              }}
            />
          </div>
          
          {/* FAQ Questions */}
          <div style={styles.faqContainer(isMobile, isTablet)}>
            {[
              "איך הבוט עובד?",
              "כמה זמן לוקח להגדיר את הבוט?",
              "האם הבוט יכול לטפל בכל סוגי התביעות?",
              "מה העלות של השירות?"
            ].map((question, index) => (
              <div key={index} style={styles.faqItem(isMobile, isTablet)}>
                <div 
                  style={styles.faqQuestion(isMobile, isTablet)}
                  onClick={() => toggleFAQ(index)}
                >
                  <span style={styles.faqQuestionText(isMobile, isTablet)}>
                    {question}
                  </span>
                  <div style={styles.faqIcon(isMobile, isTablet, openFAQ === index)}>
                    {openFAQ === index ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="#4B4B4B">
                        <path d="M7.5 12.5 L12.5 7.5 L17.5 12.5" stroke="#4B4B4B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="#4B4B4B">
                        <path d="M12.5 7.5 L7.5 12.5 L12.5 17.5" stroke="#4B4B4B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                {openFAQ === index && (
                  <div style={styles.faqAnswer(isMobile, isTablet)}>
                    <p style={styles.faqAnswerText(isMobile, isTablet)}>
                      תוכן התשובה יופיע כאן...
                    </p>
                  </div>
                )}
              </div>
            ))}
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
    padding: isMobile ? '0 20px' : '10px',
    color: '#4B4B4B',
    fontSize: isMobile ? '32px' : '70px',
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    lineHeight: isMobile ? '40px' : '80px',
    letterSpacing: isMobile ? '-1px' : '-2px',
    whiteSpace: isMobile ? 'normal' : 'pre',
    textAlign: isMobile ? 'center' : 'right',
    marginBottom: isMobile ? '20px' : 0,
    direction: 'rtl',
  }),
  
  heroTitle2: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: 0,
    top: isMobile ? 'auto' : '96px',
    padding: isMobile ? '0 20px' : '10px',
    color: '#4B4B4B',
    fontSize: isMobile ? '32px' : '70px',
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    lineHeight: isMobile ? '40px' : '80px',
    letterSpacing: isMobile ? '-1px' : '-2px',
    whiteSpace: isMobile ? 'normal' : 'pre',
    textAlign: isMobile ? 'center' : 'right',
    marginBottom: isMobile ? '20px' : 0,
    direction: 'rtl',
  }),
  
  heroSubheading: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: isMobile ? 'auto' : '203.714px',
    top: isMobile ? 'auto' : '250px',
    padding: isMobile ? '0 20px' : '10px',
    opacity: 0.70,
    color: '#4F4F4F',
    fontSize: isMobile ? '18px' : '30px',
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 600,
    lineHeight: isMobile ? '26px' : '32px',
    textAlign: isMobile ? 'center' : 'right',
    whiteSpace: isMobile ? 'normal' : 'pre',
    marginBottom: isMobile ? '0px' : 0,
    direction: 'rtl',
  }),
  
  yellowUnderline: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    left: isMobile ? 'auto' : '19.875px',
    top: isMobile ? 'auto' : '333px',
    width: isMobile ? '80%' : '262.51px',
    height: isMobile ? '30px' : '55px',
    pointerEvents: 'none',
    margin: isMobile ? '10px auto 0 auto' : '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  
  yellowUnderlineImg: (isMobile) => ({
    position: isMobile ? 'static' : 'absolute',
    bottom: isMobile ? 'auto' : 0,
    left: isMobile ? 'auto' : 0,
    right: isMobile ? 'auto' : '-16.95%',
    top: isMobile ? 'auto' : 0,
    width: isMobile ? '100%' : '116.95%',
    height: isMobile ? '100%' : '100%',
    objectFit: 'contain',
  }),

  // Mobile yellow underline after title
  yellowUnderlineAfterTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2px auto 10px auto',
    width: '120px',
    height: '12px',
  },

  yellowUnderlineImgMobile: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  // Mobile title container
  mobileTitleContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },

  mobileHeroTitle: {
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '36px',
    letterSpacing: '-1px',
    color: '#4B4B4B',
    margin: '0 0 10px 0',
    direction: 'rtl',
    textAlign: 'center',
    padding: '0 20px',
  },
  
  personImage: (isMobile, isTablet, width) => ({
    position: isMobile ? 'static' : 'absolute',
    right: isMobile ? 'auto' : (width <= 1200 ? '-20px' : '-50px'),
    top: isMobile ? 'auto' : '160px',
    width: isMobile ? '100%' : (width <= 1200 ? '400px' : '600px'),
    height: isMobile ? '320px' : (width <= 1200 ? '400px' : '600px'),
    zIndex: 10,
    marginTop: isMobile ? '0px' : '0',
    marginBottom: isMobile ? '0px' : '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  // Business Benefits Section - SEO optimized
  businessBenefitsSection: (isMobile, isTablet) => ({
    width: '100%',
    backgroundColor: '#DFF0F5',
    padding: isMobile ? '50px 20px' : isTablet ? '70px 40px' : '90px 60px',
    marginTop: isMobile ? '30px' : '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
  }),

  businessBenefitsTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    lineHeight: isMobile ? '40px' : isTablet ? '56px' : '72px',
    color: '#1B2B4D',
    margin: '0 0 30px 0',
    textAlign: 'center',
    direction: 'rtl',
  }),

  businessBenefitsContent: (isMobile, isTablet) => ({
    maxWidth: isMobile ? '100%' : '900px',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '15px' : '20px',
  }),

  businessBenefitsText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#1B2B4D',
    margin: 0,
    textAlign: 'center',
    direction: 'rtl',
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
    transform: isMobile ? 'translateX(40px)' : isTablet ? 'translateX(-120px)' : 'translateX(-160px)',
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
    textAlign: 'center',
  }),

  firstStepTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '24px' : isTablet ? '32px' : '40px',
    lineHeight: isMobile ? '32px' : isTablet ? '40px' : '48px',
    color: '#141F39',
    margin: '0 0 15px 0',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  }),

  firstStepText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#1B2B4D',
    maxWidth: isMobile ? '100%' : '500px',
    textAlign: 'center',
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
    textAlign: 'center',
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
    textAlign: 'center',
  }),

  secondStepText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#4F4F4F',
    maxWidth: isMobile ? '100%' : '500px',
    direction: 'rtl',
    textAlign: 'center',
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
    marginLeft: isMobile ? '0' : isTablet ? '150px' : '250px',
  }),

  thirdStepImageImg: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'contain',
  },

  thirdStepContent: (isMobile, isTablet) => ({
    flex: isMobile ? 'none' : '1',
    textAlign: 'center',
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
    textAlign: 'center',
  }),

  thirdStepText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '18px' : isTablet ? '22px' : '26px',
    lineHeight: isMobile ? '28px' : isTablet ? '32px' : '36px',
    color: '#4F4F4F',
    maxWidth: isMobile ? '100%' : '500px',
    direction: 'rtl',
    textAlign: 'center',
  }),

  // Numbers Section Styles
  numbersSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '50px 20px' : isTablet ? '60px 40px' : '80px 60px',
    backgroundColor: '#DFF0F5',
    marginTop: '-20px',
  }),

  numbersTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '28px' : isTablet ? '42px' : '56px',
    lineHeight: isMobile ? '36px' : isTablet ? '50px' : '64px',
    color: '#1B2B4D',
    textAlign: 'center',
    margin: '0 0 40px 0',
    direction: 'rtl',
  }),

  numbersContainer: (isMobile, isTablet) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: isMobile ? '35px' : isTablet ? '50px' : '70px',
    maxWidth: '1200px',
    margin: '0 auto',
  }),

  numberItem: (isMobile, isTablet) => ({
    textAlign: 'center',
    flex: '1',
    direction: 'rtl',
    padding: isMobile ? '20px 15px' : '0',
    backgroundColor: isMobile ? 'rgba(255, 255, 255, 0.6)' : 'transparent',
    borderRadius: isMobile ? '16px' : '0',
    boxShadow: isMobile ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
    minWidth: isMobile ? '280px' : 'auto',
    maxWidth: isMobile ? '320px' : 'none',
  }),

  numberMain: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '36px' : isTablet ? '42px' : '48px',
    lineHeight: '1',
    color: '#1B2B4D',
    margin: '0 0 12px 0',
    direction: 'rtl',
  }),

  numberSubtitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 600,
    fontSize: isMobile ? '18px' : isTablet ? '19px' : '20px',
    lineHeight: '1.3',
    color: '#1B2B4D',
    margin: '0 0 10px 0',
    direction: 'rtl',
  }),

  numberHighlight: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 500,
    fontSize: isMobile ? '15px' : isTablet ? '15px' : '16px',
    lineHeight: '1.4',
    color: '#1B2B4D',
    margin: '0 0 6px 0',
    direction: 'rtl',
    opacity: 0.8,
  }),

  numberSubtext: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '13px' : isTablet ? '13px' : '14px',
    lineHeight: '1.4',
    color: '#1B2B4D',
    margin: '0',
    direction: 'rtl',
    opacity: 0.7,
  }),

  // FAQ Section Styles
  faqSection: (isMobile, isTablet) => ({
    width: '100%',
    padding: isMobile ? '60px 20px' : isTablet ? '80px 40px' : '100px 60px',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: '-20px',
  }),

  faqTitle: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    lineHeight: isMobile ? '40px' : isTablet ? '56px' : '72px',
    color: '#141F39',
    margin: '0 0 10px 0',
    textAlign: 'center',
    position: 'relative',
    direction: 'rtl',
  }),

  faqUnderline: (isMobile, isTablet) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-5px',
    transform: isMobile ? 'translateX(0px)' : isTablet ? 'translateX(0px)' : 'translateX(0px)',
  }),

  faqElementImage: (isMobile, isTablet) => ({
    width: isMobile ? '200px' : isTablet ? '300px' : '400px',
    height: 'auto',
    objectFit: 'contain',
  }),

  // FAQ Container and Items
  faqContainer: (isMobile, isTablet) => ({
    maxWidth: isMobile ? '100%' : '800px',
    margin: '40px auto 0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '15px' : '20px',
    width: isMobile ? '100%' : 'auto',
  }),

  faqItem: (isMobile, isTablet) => ({
    backgroundColor: '#DFF0F5',
    borderRadius: isMobile ? '20px' : '25px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  }),

  faqQuestion: (isMobile, isTablet) => ({
    padding: isMobile ? '20px' : '25px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.3s ease',
    direction: 'rtl',
  }),

  faqQuestionText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 600,
    fontSize: isMobile ? '18px' : isTablet ? '20px' : '22px',
    lineHeight: '1.4',
    color: '#1B2B4D',
    flex: '1',
    textAlign: 'right',
    direction: 'rtl',
  }),

  faqIcon: (isMobile, isTablet, isOpen) => ({
    width: isMobile ? '24px' : '28px',
    height: isMobile ? '24px' : '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    marginLeft: '15px',
  }),

  faqAnswer: (isMobile, isTablet) => ({
    padding: isMobile ? '0 20px 20px 20px' : '0 25px 25px 25px',
    borderTop: '1px solid rgba(27, 43, 77, 0.1)',
    direction: 'rtl',
  }),

  faqAnswerText: (isMobile, isTablet) => ({
    fontFamily: "'Varela Round', sans-serif",
    fontWeight: 400,
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    lineHeight: '1.6',
    color: '#4F4F4F',
    margin: '15px 0 0 0',
    textAlign: 'right',
    direction: 'rtl',
  })
  
};

export default LandingPage;