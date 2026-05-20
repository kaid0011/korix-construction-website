<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent text-dark transition-header font-jakarta" no-border>
      
      <div class="top-utility-bar bg-dark text-white row items-center justify-between q-px-md q-px-xl-xl">
        <div class="row q-gutter-md items-center text-caption text-weight-medium tracking-wide">
          <div class="row items-center q-gutter-xs">
            <q-icon name="fas fa-mobile-alt q-mr-xs" color="accent" size="xs" />
            <span>{{ contactDetails.phone }}</span>
          </div>
          <div class="row items-center q-gutter-xs">
            <q-icon name="far fa-envelope q-mr-xs" color="accent" size="xs" />
            <span>{{ contactDetails.email }}</span>
          </div>
        </div>
        
        <div class="row items-center">
          <q-btn 
            to="/contact" 
            color="accent" 
            text-color="dark" 
            label="Get A Quote" 
            unelevated 
            size="md"
            dense
            class="header-btn q-px-md text-weight-bold shadow-2" 
          />
        </div>
      </div>

      <div class="main-nav-bar bg-white shadow-1 relative-position">
        <div class="row items-center justify-center header-container q-px-md">
          
          <q-btn 
            v-if="$q.screen.lt.md" 
            flat dense round icon="fas fa-bars" size="lg" color="primary" 
            @click="toggleLeftDrawer"
            class="absolute-left q-ma-sm"
          />

          <div v-if="$q.screen.gt.sm" class="col row justify-end q-gutter-xl text-center items-center q-pr-xl">
            <router-link to="/" class="nav-item-stack">
              <q-icon name="fas fa-home" size="sm" class="nav-icon text-primary" />
              <div class="nav-text text-uppercase text-primary">Home</div>
            </router-link>
            <router-link to="/about" class="nav-item-stack">
              <q-icon name="fas fa-info-circle" size="sm" class="nav-icon text-primary" />
              <div class="nav-text text-uppercase text-primary">About Us</div>
            </router-link>
          </div>

          <div class="col-auto logo-block-wrapper text-center relative-position">
            <div class="logo-circle-badge cursor-pointer bg-white" @click="$router.push('/')">
              <q-img src="../assets/logo.png" class="logo-image" fit="contain" />
            </div>
          </div>

          <div v-if="$q.screen.gt.sm" class="col row justify-start q-gutter-xl text-center items-center q-pl-xl">
            <router-link to="/services" class="nav-item-stack">
              <q-icon name="fas fa-briefcase" size="sm" class="nav-icon text-primary" />
              <div class="nav-text text-uppercase text-primary">Services</div>
            </router-link>
            <router-link to="/contact" class="nav-item-stack">
              <q-icon name="fas fa-envelope" size="sm" class="nav-icon text-primary" />
              <div class="nav-text text-uppercase text-primary">Contact</div>
            </router-link>
          </div>

        </div>
      </div>
    </q-header>
    
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-info" :width="280">
      <div class="q-pa-md flex flex-center bg-white shadow-1">
         <q-img src="../assets/logo.png" width="120px" style="max-height: 40px;" fit="contain" />
      </div>
      <q-list class="q-pt-md font-jakarta">
        <q-item clickable v-ripple to="/" exact class="drawer-item">
          <q-item-section avatar><q-icon name="fas fa-home" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" exact class="drawer-item">
          <q-item-section avatar><q-icon name="fas fa-info-circle" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">About Us</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/services" exact class="drawer-item">
          <q-item-section avatar><q-icon name="fas fa-briefcase" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">Services</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact" exact class="drawer-item">
          <q-item-section avatar><q-icon name="fas fa-envelope" color="primary" size="sm" /></q-item-section>
          <q-item-section class="text-dark text-weight-bold">Contact Us</q-item-section>
        </q-item>
        
        <q-separator class="q-my-lg" />
        
        <q-item>
          <q-btn to="/contact" color="accent" text-color="dark" label="Get A Quote" unelevated class="full-width text-weight-bold shadow-2 q-py-sm" />
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container :class="[$route.meta.ctaBg || 'bg-white', 'relative-position']">
      <router-view class="pages"/>

      <div class="quote-cta-wrapper font-jakarta q-px-md">
        <div class="floating-cta-card bg-white shadow-5 q-pa-lg q-pa-md-xl text-center">
          <q-icon name="fas fa-compass" size="md" color="accent" class="q-mb-xs" />
          <div class="text-subtitle2 text-weight-bolder text-accent text-uppercase tracking-wide q-mb-xs">Ocular Visit & Quotes</div>
          <div class="header-accent-small bg-accent q-mx-auto q-mb-md"></div>
          
          <div class="text-h4 text-weight-bolder text-primary q-mb-sm">Explore The Best Path For Your Project</div>
          <p class="text-body1 text-grey-7 line-height-relaxed q-mb-lg q-mx-auto" style="max-width: 720px;">
            Share your details with us. Our technical fit-out experts will prepare a custom commercial proposal and coordinate on-site ocular assessments. Expect a professional turnaround within 2 business days.
          </p>
          
          <q-btn 
            to="/contact" 
            color="accent" 
            text-color="dark" 
            label="Get My Tailored Quote" 
            unelevated 
            size="lg"
            class="quote-btn q-px-xl q-py-md text-weight-bolder shadow-2" 
          />
        </div>
      </div>

      <footer class="site-footer bg-dark text-white font-jakarta">
        <div class="footer-grid-container q-px-xl q-px-md-xl q-mx-auto q-pb-xl" style="max-width: 1440px;">
          <div class="row q-col-gutter-xl">
            
            <div class="col-12 col-md-5 brand-column text-left text-center-sm-only">
              <div class="logo-container">
                <q-img src="../assets/logo.png" width="150px" style="max-height: 150px; filter: brightness(0) invert(1);" fit="contain" class="brand-logo" />
              </div>
              <p class="text-body2 text-grey-4 line-height-relaxed q-mb-lg text-weight-medium max-width-para">
                Transforming commercial properties into innovative, efficient, and tailored workspaces. Built with quality workmanship and long-term asset value.
              </p>
              
            </div>

            <div class="col-6 col-sm-3 col-md-2 link-column">
              <div class="text-subtitle1 text-weight-bolder text-white q-mb-lg tracking-wide text-uppercase relative-position column-heading">
                Company
                <div class="heading-accent bg-accent"></div>
              </div>
              <div class="footer-custom-links column q-gutter-y-sm">
                <router-link to="/" class="custom-footer-link">Home</router-link>
                <router-link to="/about" class="custom-footer-link">About Us</router-link>
                <router-link to="/services" class="custom-footer-link">Our Services</router-link>
                <router-link to="/contact" class="custom-footer-link">Contact Us</router-link>
              </div>
            </div>

            <div class="col-6 col-sm-3 col-md-2 link-column">
              <div class="text-subtitle1 text-weight-bolder text-white q-mb-lg tracking-wide text-uppercase relative-position column-heading">
                Services
                <div class="heading-accent bg-accent"></div>
              </div>
              <div class="footer-custom-links column q-gutter-y-sm">
                <router-link to="/services" class="custom-footer-link text-weight-medium">Office Fit-Out</router-link>
                <router-link to="/services" class="custom-footer-link text-weight-medium">Office Renovation</router-link>
                <router-link to="/services" class="custom-footer-link text-weight-medium">Interior Design</router-link>
                <router-link to="/services" class="custom-footer-link text-weight-medium">Custom Furniture</router-link>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-3 contact-column text-left text-center-sm-only">
              <div class="text-subtitle1 text-weight-bolder text-white q-mb-lg tracking-wide text-uppercase relative-position column-heading">
                Get In Touch
                <div class="heading-accent bg-accent"></div>
              </div>
              <div class="column q-gutter-y-md">
                <div class="row no-wrap items-start contact-row-fix">
                  <q-icon name="fas fa-map-marker-alt" color="accent" size="xs" class="q-mr-sm q-mt-xs shrink-zero" />
                  <span class="text-body2 text-grey-4 text-weight-medium line-height-base">{{ contactDetails.address }}</span>
                </div>
                <div class="row no-wrap items-center contact-row-fix">
                  <q-icon name="fas fa-phone-alt" color="accent" size="xs" class="q-mr-sm shrink-zero" />
                  <span class="text-body2 text-grey-4 text-weight-medium">{{ contactDetails.phone }}</span>
                </div>
                <div class="row no-wrap items-center contact-row-fix">
                  <q-icon name="fas fa-envelope" color="accent" size="xs" class="q-mr-sm shrink-zero" />
                  <span class="text-body2 text-grey-4 text-weight-medium break-word text-underline-hover cursor-pointer" @click="window.location.href=`mailto:${contactDetails.email}`">{{ contactDetails.email }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div class="footer-copyright bg-black text-grey-6 q-py-md border-top-structural">
          <div class="row justify-between items-center q-px-md q-px-md-xl q-mx-auto" style="max-width: 1440px;">
            <div class="text-body2 text-weight-medium">
              &copy; {{ new Date().getFullYear() }} <span class="text-white font-weight-bold">Korix Construction</span>. All Rights Reserved. 
              <span class="q-mx-xs text-grey-8">|</span> 
              Developed by <a href="https://www.kaidtech.com" target="_blank" class="credit-link text-weight-bold">KAIDTECH</a>
            </div>
            
            <div class="text-caption text-grey-7 text-weight-bold tracking-wide text-uppercase">
              Built Quality. Delivering Trust.
            </div>
            
          </div>
        </div>
      </footer>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.font-jakarta {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* --- TIER 1: TOP UTILITY BAR --- */
.top-utility-bar {
  height: 50px;
  border-bottom: 2px solid var(--q-secondary, #589f2a);
}

/* --- TIER 2: MAIN NAVIGATION HEADER --- */
.main-nav-bar {
  height: 95px;
  border-bottom: 1px solid var(--q-info, #E1E5E0);
}
.header-container {
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
}

/* Navigation items link normalization */
.nav-item-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none; 
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.nav-item-stack:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}
.nav-item-stack:hover .nav-icon,
.nav-item-stack:hover .nav-text {
  color: var(--q-secondary, #589f2a) !important;
}
.nav-icon {
  font-size: 24px;
  margin-bottom: 6px;
  transition: color 0.2s ease;
}
.nav-text {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  transition: color 0.2s ease;
}

/* --- CIRCULAR OVERLAPPING LOGO BADGE --- */
.logo-block-wrapper {
  width: 160px;
  height: 100%;
  z-index: 99;
}
.logo-circle-badge {
  position: absolute;
  top: -20px; 
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 3px solid var(--q-info, #E1E5E0);
  box-shadow: 0 8px 16px rgba(5, 78, 39, 0.1); 
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.logo-circle-badge:hover {
  transform: translateX(-50%) scale(1.04);
  border-color: var(--q-accent, #EFC86F);
}
.logo-image {
  width: 100%;
  height: 100%;
}

/* --- ACTION BUTTON & MOBILE DRAWER --- */
.header-btn { border-radius: 8px; transition: all 0.3s ease; letter-spacing: 0.5px; }
.header-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(239, 200, 111, 0.3) !important; }
.drawer-item { border-radius: 0 24px 24px 0; margin-right: 16px; margin-bottom: 4px; transition: all 0.2s ease; }
.drawer-item:hover { background-color: rgba(9, 98, 49, 0.08); }

/* --- MODERN FLOATING CARD LAYOUT --- */
.quote-cta-wrapper {
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}
.floating-cta-card {
  border-radius: 24px;
  margin-bottom: -60px; 
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.floating-cta-card .text-h4 {
  font-size: 2.1rem;
  line-height: 1.3;
}
.header-accent-small {
  width: 40px;
  height: 2px;
  border-radius: 1px;
}
.quote-btn {
  border-radius: 12px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}
.quote-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(239, 200, 111, 0.4) !important;
}

/* --- SITE FOOTER BALANCING --- */
.site-footer {
  padding-top: 110px; 
}

/* --- STRUCTURAL FIXES --- */
.max-width-para {
  max-width: 340px;
  margin-left: 0;
  margin-right: 0;
}
.shrink-zero {
  flex-shrink: 0;
}
.line-height-base {
  line-height: 1.5;
}
.text-underline-hover:hover {
  text-decoration: underline;
}

/* --- NAVIGATION LINKS --- */
.custom-footer-link {
  color: var(--q-info, #E1E5E0);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  display: block;
}
.custom-footer-link:hover {
  color: var(--q-accent, #EFC86F) !important;
  transform: translateX(4px);
}

/* --- REUSEABLE GENERAL DESIGN ASSIGNMENTS --- */
.credit-link { text-decoration: none; transition: color 0.2s ease; color: rgb(7, 163, 163); }
.credit-link:hover { color: white !important; text-decoration: underline; }
.line-height-relaxed { line-height: 1.7; }
.tracking-wide { letter-spacing: 1.5px; }
.break-word { word-break: break-all; }
.column-heading { font-size: 1.05rem; padding-bottom: 4px; }
.heading-accent { position: absolute; bottom: -6px; left: 0; width: 30px; height: 2px; border-radius: 2px; }

.social-icon { width: 25px; height: 25px; border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
.social-icon:hover { background-color: var(--q-accent) !important; color: var(--q-dark) !important; transform: translateY(-3px); }
.border-top-structural { border-top: 1px solid rgba(255, 255, 255, 0.05); }

/* --- RESPONSIVE BREAKPOINT CLASSES --- */
@media (max-width: 1023px) {
  .main-nav-bar { height: 70px; }
  .logo-circle-badge { width: 100px; height: 100px; top: -10px; padding: 8px; }
  .top-utility-bar { display: none; }
  .floating-cta-card { margin-bottom: 0; border-radius: 16px; padding: 30px 20px; }
  .floating-cta-card .text-h4 { font-size: 1.6rem; }
  .site-footer { padding-top: 40px; }
  
  /* Fallback formatting when layout switches to vertical stacks on mobile sizes */
  .text-center-sm-only { text-align: center !important; }
  .justify-center-sm { justify-content: center !important; }
  .brand-logo { margin: 0 auto; }
  .max-width-para { margin: 0 auto 16px auto; }
  .column-heading { display: inline-block; }
  .heading-accent { left: 50%; transform: translateX(-50%); }
  .link-column { text-align: center; }
  .custom-footer-link:hover { transform: none; }
  .contact-row-fix { justify-content: center; }
}

.pages {
  z-index: 0;
}
</style>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const contactDetails = {
  phone: "09242485491",
  email: "junekorix@gmail.com",
  address: "#78 Susano Rd, San Agustin, Novaliches, Quezon City, 1123"
}
</script>